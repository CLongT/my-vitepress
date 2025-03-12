import fs from 'node:fs'
import path from 'node:path'

export function createAutoSidebarGenerator(srcDir = '.') {
  // 解析绝对路径
  const BASE_DIR = path.resolve(srcDir)

  // 路径转换器：将物理路径转为路由路径
  const toRoutePath = (absolutePath) => {
    return path
      .relative(BASE_DIR, absolutePath)
      .replace(/\\/g, '/') // Windows路径转换
      .replace(/\.md$/, '')
  }

  // 递归生成侧边栏项
  function generateItems(currentDir, parentRoute = '') {
    return fs
      .readdirSync(currentDir)
      .filter((item) => !['.vitepress', 'node_modules', 'assets'].includes(item))
      .sort((a, b) => {
        // 目录优先排序
        const aIsDir = fs.statSync(path.join(currentDir, a)).isDirectory()
        const bIsDir = fs.statSync(path.join(currentDir, b)).isDirectory()
        return bIsDir - aIsDir || a.localeCompare(b)
      })
      .map((item) => {
        const itemPath = path.join(currentDir, item)
        const routePath = path.posix.join(parentRoute, item)

        if (fs.statSync(itemPath).isDirectory()) {
          const children = generateItems(itemPath, routePath)
          return children.length > 0
            ? {
                text: formatTitle(item),
                collapsible: true,
                items: children,
              }
            : null
        } else if (path.extname(item) === '.md') {
          return {
            text: formatTitle(item.replace(/\.md$/, '')),
            link: toRoutePath(itemPath),
          }
        }
        return null
      })
      .filter(Boolean)
  }

  // 标题格式化
  const formatTitle = (str) => {
    return (
      str
        // 同时处理两种前缀格式：day开头和纯数字开头
        .replace(/^(?:day)?\d+[-_. ]*/i, '') // 合并处理 day 和纯数字前缀
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase())
    )
  }

  return (routePath) => {
    const absolutePath = path.join(BASE_DIR, routePath)
    return fs.existsSync(absolutePath) ? generateItems(absolutePath) : []
  }
}
