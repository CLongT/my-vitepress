import {createAutoSidebarGenerator} from './utils/auto_sidebar.mjs'

const SRC_DIR = 'docs'
export default {
    '/front-end/html-css/': createAutoSidebarGenerator(SRC_DIR)('/front-end/html-css'),
    '/front-end/javascript/': createAutoSidebarGenerator(SRC_DIR)('/front-end/javascript'),
    '/front-end/vue/': createAutoSidebarGenerator(SRC_DIR)('/front-end/vue'),
    '/front-end/react/': createAutoSidebarGenerator(SRC_DIR)('/front-end/react'),
    '/front-end/angular/': createAutoSidebarGenerator(SRC_DIR)('/front-end/angular'),
    '/front-end/uniapp-xtx/': createAutoSidebarGenerator(SRC_DIR)('/front-end/uniapp-xtx'),
    '/backend/java/': createAutoSidebarGenerator(SRC_DIR)('/backend/java'),
    '/backend/python/': createAutoSidebarGenerator(SRC_DIR)('/backend/python'),
    '/other/git/': createAutoSidebarGenerator(SRC_DIR)('/other/git'),
    '/other/测试/': createAutoSidebarGenerator(SRC_DIR)('/other/测试'),

}
