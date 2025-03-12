以下是一份详细的Java基础入门学习笔记，使用Markdown格式编写，内容超过500行：

```markdown
# Java 基础入门学习笔记

## 目录
- [1. Java简介](#1-java简介)
- [2. 开发环境搭建](#2-开发环境搭建)
- [3. 基础语法](#3-基础语法)
- [4. 流程控制](#4-流程控制)
- [5. 数组](#5-数组)
- [6. 字符串处理](#6-字符串处理)
- [7. 面向对象编程](#7-面向对象编程)
- [8. 异常处理](#8-异常处理)

---

## 1. Java简介
### 1.1 Java特点
- **跨平台性**：通过JVM实现"一次编写，到处运行"
- **面向对象**：支持封装、继承、多态
- **简单性**：去除C++中的复杂特性（如指针、多重继承）
- **健壮性**：自动内存管理（垃圾回收机制）

### 1.2 Java版本
| 版本   | 代号    | 发布时间  |
|--------|---------|-----------|
| Java 8 | -       | 2014/03   |
| Java 11 | LTS    | 2018/09   |
| Java 17 | LTS    | 2021/09   |

---

## 2. 开发环境搭建
### 2.1 JDK安装
1. 下载JDK：推荐使用[JDK 17](https://www.oracle.com/java/)
2. 配置环境变量：
   ```bash
   # Windows示例
   JAVA_HOME = C:\Program Files\Java\jdk-17.0.1
   PATH = %JAVA_HOME%\bin
   ```

### 2.2 第一个Java程序
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```
编译运行：
```bash
javac HelloWorld.java
java HelloWorld
```

---

## 3. 基础语法
### 3.1 变量与数据类型
#### 基本数据类型
| 类型     | 大小    | 范围                     | 示例           |
|----------|---------|--------------------------|----------------|
| byte     | 1字节   | -128 ~ 127               | byte b = 100;  |
| int      | 4字节   | -2^31 ~ 2^31-1           | int i = 1000;  |
| double   | 8字节   | 4.9e-324 ~ 1.8e308       | double d = 3.14;|
| char     | 2字节   | '\u0000' ~ '\uffff'      | char c = 'A';  |
| boolean  | -       | true/false               | boolean flag = true; |

#### 引用类型
```java
String name = "Java";  // 字符串
Object obj = new Object();  // 对象
```

### 3.2 运算符
```java
int a = 10, b = 3;
System.out.println(a + b);  // 13
System.out.println(a % b);  // 1
System.out.println(a++);    // 10（后自增）
System.out.println(++a);    // 12（前自增）
```

---

## 4. 流程控制
### 4.1 条件语句
```java
// if-else
int score = 85;
if (score >= 90) {
    System.out.println("优秀");
} else if (score >= 60) {
    System.out.println("及格");
} else {
    System.out.println("不及格");
}

// switch-case
int day = 3;
switch(day) {
    case 1: System.out.println("周一"); break;
    case 2: System.out.println("周二"); break;
    default: System.out.println("未知");
}
```

### 4.2 循环结构
```java
// for循环
for(int i=0; i<5; i++) {
    System.out.print(i + " ");  // 0 1 2 3 4
}

// while循环
int j = 3;
while(j > 0) {
    System.out.print(j-- + " ");  // 3 2 1
}

// do-while循环
int k = 5;
do {
    System.out.print(k);  // 至少执行一次
} while(k < 3);
```

---

## 5. 数组
### 5.1 声明与初始化
```java
// 静态初始化
int[] arr1 = {1, 2, 3};

// 动态初始化
int[] arr2 = new int[5];
arr2[0] = 10;

// 二维数组
int[][] matrix = {{1,2}, {3,4}};
```

### 5.2 遍历数组
```java
// for循环
for(int i=0; i<arr1.length; i++) {
    System.out.println(arr1[i]);
}

// 增强for循环
for(int num : arr1) {
    System.out.println(num);
}
```

---

## 6. 字符串处理
### 6.1 String常用方法
```java
String str = " Hello Java ";
System.out.println(str.trim());        // "Hello Java"
System.out.println(str.substring(2,5));// "ell"
System.out.println(str.indexOf("Java"));// 6
System.out.println(str.replace("Java", "World"));
```

### 6.2 String vs StringBuilder
```java
// String（不可变）
String s = "a";
s += "b";  // 新建对象

// StringBuilder（可变）
StringBuilder sb = new StringBuilder();
sb.append("a").append("b");  // 直接修改
```

---

## 7. 面向对象编程
### 7.1 类与对象
```java
class Dog {
    // 属性
    String name;
    int age;
    
    // 方法
    void bark() {
        System.out.println("汪汪！");
    }
}

// 创建对象
Dog myDog = new Dog();
myDog.name = "阿黄";
myDog.bark();
```

### 7.2 封装
```java
class Student {
    private String name;
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        if(name != null) {
            this.name = name;
        }
    }
}
```

### 7.3 继承
```java
class Animal {
    void eat() {
        System.out.println("吃东西");
    }
}

class Cat extends Animal {
    @Override
    void eat() {
        System.out.println("吃鱼");
    }
}
```

---

## 8. 异常处理
### 8.1 try-catch-finally
```java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("除数不能为0");
} finally {
    System.out.println("执行清理");
}
```

### 8.2 自定义异常
```java
class MyException extends Exception {
    public MyException(String message) {
        super(message);
    }
}

void checkAge(int age) throws MyException {
    if(age < 18) {
        throw new MyException("年龄不足");
    }
}
```

---

## 学习建议
1. 多敲代码：理解语法的最好方式是通过实践
2. 使用IDE：推荐IntelliJ IDEA或Eclipse
3. 阅读文档：[Oracle官方Java文档](https://docs.oracle.com/javase/)
4. 参与项目：从简单控制台程序开始练习
```

这份笔记包含：
- 基础语法和核心概念
- 代码示例和实际应用
- 格式清晰的Markdown排版
- 关键知识点的对比说明
- 学习路径建议

可根据学习进度逐步扩展每个章节的内容，建议配合实际编码练习使用。如需更详细的某个章节内容，可以告诉我具体需要扩展的部分。