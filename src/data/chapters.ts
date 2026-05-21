import { Chapter } from '@/types';

export const chaptersData: Chapter[] = [
  {
    id: 'python-basics',
    title: 'Python基础语法',
    difficulty: 'beginner',
    content: `# Python基础语法

## 什么是Python？

Python是一种简洁、易读、功能强大的高级编程语言。它由Guido van Rossum于1991年首次发布，目前广泛应用于数据分析、人工智能、Web开发等领域。

## 第一个Python程序

让我们从经典的"Hello World"开始：

## Python注释

注释是代码中不会被执行的部分，用于解释代码。

## 输入与输出

使用 print() 函数输出信息，使用 input() 函数获取用户输入。

## 运算符

Python支持多种运算符，包括算术运算符、比较运算符和逻辑运算符。

### 算术运算符

\`+\` 加法、\`-\` 减法、\`*\` 乘法、\`/\` 除法、\`//\` 整除、\`%\` 取余、\`**\` 幂运算

### 比较运算符

\`==\` 等于、\`!=\` 不等于、\`>\` 大于、\`<\` 小于、\`>=\` 大于等于、\`<=\` 小于等于

### 逻辑运算符

\`and\` 与、\`or\` 或、\`not\` 非`,
    codeExamples: [
      {
        id: 'ex-hello',
        code: 'print("Hello, Python!")\nprint("欢迎来到数据分析世界")',
        explanation: '使用print()函数输出字符串，可以用单引号或双引号',
        canRun: true,
      },
      {
        id: 'ex-comment',
        code: '# 这是单行注释\nprint("注释不会被执行")\n\n"""\n这是多行注释\n可以跨越多行\n"""\nprint("多行注释结束")',
        explanation: '单行注释用#，多行注释用三引号"""',
        canRun: true,
      },
      {
        id: 'ex-input',
        code: '# input() 获取输入（在Pyodide中模拟）\nname = "小明"\nprint(f"你好，{name}！")\nprint("欢迎来到Python世界")',
        explanation: 'f-string是格式化字符串的便捷方式，在{}中填入变量',
        canRun: true,
      },
      {
        id: 'ex-operator',
        code: '# 算术运算符\na = 10\nb = 3\nprint(f"{a} + {b} = {a + b}")\nprint(f"{a} - {b} = {a - b}")\nprint(f"{a} * {b} = {a * b}")\nprint(f"{a} / {b} = {a / b:.2f}")\nprint(f"{a} // {b} = {a // b}")\nprint(f"{a} % {b} = {a % b}")\nprint(f"{a} ** {b} = {a ** b}")',
        explanation: '// 是整除（向下取整），% 是取余数，** 是幂运算',
        canRun: true,
      },
      {
        id: 'ex-compare',
        code: '# 比较运算符\nx = 10\ny = 20\nprint(f"x == y: {x == y}")\nprint(f"x != y: {x != y}")\nprint(f"x < y: {x < y}")\nprint(f"x > y: {x > y}")\n\n# 逻辑运算符\nprint(f"x < 15 and y > 15: {x < 15 and y > 15}")\nprint(f"x < 5 or y > 15: {x < 5 or y > 15}")\nprint(f"not(x < 15): {not(x < 15)}")',
        explanation: '比较运算返回True或False，逻辑运算组合多个条件',
        canRun: true,
      },
    ],
    exercises: [
      {
        id: 'ch1-ex1',
        type: 'single-choice',
        question: 'Python中用于输出的函数是？',
        options: ['echo()', 'print()', 'write()', 'output()'],
        correctAnswer: 'print()',
        explanation: 'print()是Python内置的输出函数，用于将信息打印到控制台。',
      },
      {
        id: 'ch1-ex2',
        type: 'single-choice',
        question: '以下哪个是Python中的单行注释符号？',
        options: ['//', '#', '/*', '--'],
        correctAnswer: '#',
        explanation: 'Python使用#作为单行注释符号，//是整除运算符。',
      },
      {
        id: 'ch1-ex3',
        type: 'single-choice',
        question: '10 // 3 的结果是？',
        options: ['3.33', '3', '1', '30'],
        correctAnswer: '3',
        explanation: '// 是整除运算符，10除以3等于3余1，整除结果为3。',
      },
      {
        id: 'ch1-ex4',
        type: 'single-choice',
        question: '以下哪个逻辑运算符表示"或"的关系？',
        options: ['and', 'or', 'not', '||'],
        correctAnswer: 'or',
        explanation: 'or表示逻辑或，只要有一个条件为True结果就为True。',
      },
    ],
  },
  {
    id: 'variables-types',
    title: '变量与数据类型',
    difficulty: 'beginner',
    content: `# 变量与数据类型

## 变量

变量是存储数据的容器。在Python中，变量不需要声明类型，赋值时自动确定。

## 基本数据类型

Python有几种基本数据类型：

### 整数 (int)
表示没有小数部分的数字，如：1、-5、100

### 浮点数 (float)
表示带有小数部分的数字，如：3.14、-0.5、2.0

### 字符串 (str)
表示文本，用单引号或双引号包裹，如："Hello"、'Python'

### 布尔值 (bool)
表示真或假，只有两个值：True 和 False

## 类型转换

可以使用内置函数在不同类型之间转换：
- int() 转为整数
- float() 转为浮点数
- str() 转为字符串
- bool() 转为布尔值

## 查看类型

使用 type() 函数可以查看变量的数据类型。`,
    codeExamples: [
      {
        id: 'ex-var',
        code: '# 变量定义\nname = "Python"\nage = 33\nprice = 99.99\nis_fun = True\n\nprint(f"语言: {name}")\nprint(f"年龄: {age}")\nprint(f"价格: {price}")\nprint(f"有趣: {is_fun}")',
        explanation: 'Python变量不需要声明类型，赋值时自动推断',
        canRun: true,
      },
      {
        id: 'ex-type',
        code: '# 查看类型\nprint(type(42))\nprint(type(3.14))\nprint(type("Hello"))\nprint(type(True))\n\n# 变量类型\nx = 100\nprint(f"x的类型: {type(x)}")\nprint(f"x的值: {x}")',
        explanation: 'type()函数返回对象的数据类型',
        canRun: true,
      },
      {
        id: 'ex-convert',
        code: '# 类型转换\nnum_str = "123"\nnum_int = int(num_str)\nnum_float = float(num_str)\n\nprint(f"字符串: {num_str}, 类型: {type(num_str)}")\nprint(f"整数: {num_int}, 类型: {type(num_int)}")\nprint(f"浮点数: {num_float}, 类型: {type(num_float)}")\n\n# 数字转字符串\nscore = 95\nprint("你的分数是: " + str(score))',
        explanation: 'int()、float()、str()用于类型转换',
        canRun: true,
      },
      {
        id: 'ex-string',
        code: '# 字符串操作\ns = "Python数据分析"\nprint(f"长度: {len(s)}")\nprint(f"大写: {s.upper()}")\nprint(f"小写: {s.lower()}")\nprint(f"切片[0:6]: {s[0:6]}")\nprint(f"替换: {s.replace(\"Python\", \"Pandas\")}")\nprint(f"拆分: {s.split(\"数据\")}")',
        explanation: '字符串是不可变的，操作后返回新字符串',
        canRun: true,
      },
    ],
    exercises: [
      {
        id: 'ch2-ex1',
        type: 'single-choice',
        question: 'Python中，type(3.14) 返回什么？',
        options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'bool'>"],
        correctAnswer: "<class 'float'>",
        explanation: '3.14是浮点数，type()返回<class \'float\'>。',
      },
      {
        id: 'ch2-ex2',
        type: 'single-choice',
        question: '以下哪个函数可以将字符串"123"转换为整数？',
        options: ['float("123")', 'str(123)', 'int("123")', 'bool("123")'],
        correctAnswer: 'int("123")',
        explanation: 'int()函数可以将数字字符串转换为整数。',
      },
      {
        id: 'ch2-ex3',
        type: 'single-choice',
        question: 'Python中布尔值的关键字是？',
        options: ['true/false', 'True/False', 'TRUE/FALSE', 't/f'],
        correctAnswer: 'True/False',
        explanation: 'Python的布尔值首字母必须大写：True和False。',
      },
      {
        id: 'ch2-ex4',
        type: 'single-choice',
        question: 'len("Hello") 的结果是？',
        options: ['4', '5', '6', 'Hello'],
        correctAnswer: '5',
        explanation: 'len()函数返回字符串的长度，"Hello"有5个字符。',
      },
      {
        id: 'ch2-ex5',
        type: 'single-choice',
        question: '以下哪种数据类型是不可变的？',
        options: ['列表(list)', '字典(dict)', '字符串(str)', '集合(set)'],
        correctAnswer: '字符串(str)',
        explanation: '字符串是不可变类型，一旦创建就不能修改其内容。',
      },
    ],
  },
  {
    id: 'list-dict-tuple',
    title: '列表字典元组',
    difficulty: 'beginner',
    content: `# 列表、字典与元组

## 列表 (List)

列表是Python中最常用的数据结构，可以存储任意类型的元素，且是可变的。

### 列表创建与访问

使用方括号[]创建列表，通过索引访问元素（从0开始）。

### 列表常用操作

- append()：末尾添加元素
- insert()：指定位置插入
- remove()：删除指定元素
- pop()：弹出元素
- sort()：排序
- len()：获取长度

## 字典 (Dictionary)

字典是键值对的集合，使用大括号{}创建。

## 元组 (Tuple)

元组与列表类似，但是不可变的，使用圆括号()创建。`,
    codeExamples: [
      {
        id: 'ex-list',
        code: '# 列表操作\nfruits = ["苹果", "香蕉", "橙子"]\nprint(f"列表: {fruits}")\nprint(f"第一个: {fruits[0]}")\nprint(f"最后一个: {fruits[-1]}")\n\n# 添加元素\nfruits.append("葡萄")\nprint(f"添加后: {fruits}")\n\n# 删除元素\nfruits.remove("香蕉")\nprint(f"删除后: {fruits}")\n\n# 列表长度\nprint(f"长度: {len(fruits)}")',
        explanation: '列表索引从0开始，-1表示最后一个元素',
        canRun: true,
      },
      {
        id: 'ex-list-slice',
        code: '# 列表切片\nnumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\nprint(f"前3个: {numbers[:3]}")\nprint(f"后3个: {numbers[-3:]}")\nprint(f"中间: {numbers[3:7]}")\nprint(f"步长2: {numbers[::2]}")\nprint(f"反转: {numbers[::-1]}")',
        explanation: '切片语法：[start:end:step]，不包含end位置',
        canRun: true,
      },
      {
        id: 'ex-dict',
        code: '# 字典操作\nstudent = {\n    "name": "小明",\n    "age": 20,\n    "scores": {"语文": 85, "数学": 92, "英语": 78}\n}\n\nprint(f"姓名: {student[\"name\"]}")\nprint(f"年龄: {student[\"age\"]}")\nprint(f"所有键: {list(student.keys())}")\nprint(f"所有值: {list(student.values())}")\n\n# 添加新键\nstudent["gender"] = "男"\nprint(f"更新后: {student}")',
        explanation: '字典通过键访问值，可以嵌套任意层级',
        canRun: true,
      },
      {
        id: 'ex-tuple',
        code: '# 元组操作\npoint = (3, 4)\nprint(f"坐标: {point}")\nprint(f"x: {point[0]}, y: {point[1]}")\n\n# 元组解包\nx, y = point\nprint(f"解包后: x={x}, y={y}")\n\n# 元组与列表的区别\n# t = (1, 2, 3)\n# t[0] = 10  # 错误！元组不可变\nprint("元组是不可变的，不能修改元素")',
        explanation: '元组一旦创建不能修改，适合存储不应该被改变的数据',
        canRun: true,
      },
    ],
    exercises: [
      {
        id: 'ch3-ex1',
        type: 'single-choice',
        question: '以下哪个方法用于在列表末尾添加元素？',
        options: ['add()', 'append()', 'insert()', 'push()'],
        correctAnswer: 'append()',
        explanation: 'append()方法在列表末尾添加一个元素。',
      },
      {
        id: 'ch3-ex2',
        type: 'single-choice',
        question: '字典通过什么来访问值？',
        options: ['索引', '键(key)', '位置', '序号'],
        correctAnswer: '键(key)',
        explanation: '字典是键值对的集合，通过键来访问对应的值。',
      },
      {
        id: 'ch3-ex3',
        type: 'single-choice',
        question: '元组与列表的主要区别是？',
        options: ['元组更快', '元组不可变', '元组更大', '没有区别'],
        correctAnswer: '元组不可变',
        explanation: '元组创建后不能修改元素，而列表可以。',
      },
      {
        id: 'ch3-ex4',
        type: 'single-choice',
        question: 'numbers[1:4] 切片包含几个元素？',
        options: ['2个', '3个', '4个', '5个'],
        correctAnswer: '3个',
        explanation: '切片[1:4]包含索引1、2、3的元素，不包含索引4，共3个元素。',
      },
      {
        id: 'ch3-ex5',
        type: 'single-choice',
        question: '以下哪个操作会修改原列表？',
        options: ['sorted(list)', 'list.sort()', 'list[::-1]', 'reversed(list)'],
        correctAnswer: 'list.sort()',
        explanation: 'list.sort()会原地修改列表，sorted()返回新列表不修改原列表。',
      },
    ],
  },
  {
    id: 'condition-loop',
    title: '条件判断与循环',
    difficulty: 'beginner',
    content: `# 条件判断与循环

## if 条件判断

使用 if-elif-else 结构进行条件判断。

## for 循环

for循环用于遍历可迭代对象（列表、字符串、range等）。

## while 循环

while循环在条件为True时重复执行。

## 循环控制

- break：跳出循环
- continue：跳过当前迭代
- pass：占位符`,
    codeExamples: [
      {
        id: 'ex-if',
        code: '# 条件判断\nscore = 85\n\nif score >= 90:\n    print("优秀")\nelif score >= 80:\n    print("良好")\nelif score >= 60:\n    print("及格")\nelse:\n    print("不及格")\n\n# 三元表达式\nresult = "通过" if score >= 60 else "未通过"\nprint(f"结果: {result}")',
        explanation: 'if-elif-else结构从上到下依次判断，满足条件后执行对应代码',
        canRun: true,
      },
      {
        id: 'ex-for',
        code: '# for循环\n# 遍历列表\nfruits = ["苹果", "香蕉", "橙子"]\nfor fruit in fruits:\n    print(f"我喜欢{fruit}")\n\nprint("---")\n\n# range循环\nfor i in range(1, 6):\n    print(f"数字: {i}")\n\nprint("---")\n\n# 带索引的循环\nfor idx, fruit in enumerate(fruits):\n    print(f"{idx+1}. {fruit}")',
        explanation: 'range(1,6)生成1到5的数字，不包含6',
        canRun: true,
      },
      {
        id: 'ex-while',
        code: '# while循环\ncount = 0\nwhile count < 5:\n    print(f"计数: {count}")\n    count += 1\n\nprint("循环结束")\n\n# break示例\nfor i in range(10):\n    if i == 5:\n        print(f"在{i}处break")\n        break\n    print(i)',
        explanation: 'while循环注意避免死循环，确保条件最终变为False',
        canRun: true,
      },
      {
        id: 'ex-nested',
        code: '# 嵌套循环：九九乘法表\nfor i in range(1, 10):\n    row = []\n    for j in range(1, i + 1):\n        row.append(f"{j}x{i}={i*j}")\n    print("  ".join(row))',
        explanation: '嵌套循环中，外层循环每次迭代，内层循环完整执行一遍',
        canRun: true,
      },
    ],
    exercises: [
      {
        id: 'ch4-ex1',
        type: 'single-choice',
        question: '以下哪个关键字用于跳出循环？',
        options: ['stop', 'exit', 'break', 'return'],
        correctAnswer: 'break',
        explanation: 'break关键字立即终止当前循环。',
      },
      {
        id: 'ch4-ex2',
        type: 'single-choice',
        question: 'range(3) 生成的序列是？',
        options: ['[1, 2, 3]', '[0, 1, 2]', '[0, 1, 2, 3]', '[3]'],
        correctAnswer: '[0, 1, 2]',
        explanation: 'range(n)生成从0到n-1的整数序列。',
      },
      {
        id: 'ch4-ex3',
        type: 'single-choice',
        question: 'continue关键字的作用是？',
        options: ['终止循环', '跳过当前迭代继续下一次', '暂停循环', '重启循环'],
        correctAnswer: '跳过当前迭代继续下一次',
        explanation: 'continue跳过当前迭代的剩余代码，直接进入下一次迭代。',
      },
      {
        id: 'ch4-ex4',
        type: 'single-choice',
        question: 'for i in range(1, 10, 2) 中i的值依次是？',
        options: ['1,3,5,7,9', '2,4,6,8', '1,2,3,4,5,6,7,8,9', '0,2,4,6,8'],
        correctAnswer: '1,3,5,7,9',
        explanation: 'range(1,10,2)从1开始，步长为2，到9结束（不含10）。',
      },
    ],
  },
  {
    id: 'function-basics',
    title: '函数基础',
    difficulty: 'beginner',
    content: `# 函数基础

## 定义函数

使用 def 关键字定义函数，可以接收参数并返回值。

## 参数类型

- 位置参数：按位置传递
- 关键字参数：按名称传递
- 默认参数：有默认值
- 可变参数：*args 和 **kwargs

## lambda 函数

匿名函数，用于简单的单行操作。`,
    codeExamples: [
      {
        id: 'ex-func',
        code: '# 定义函数\ndef greet(name):\n    return f"你好，{name}！"\n\n# 调用函数\nprint(greet("小明"))\nprint(greet("小红"))\n\n# 带默认参数\ndef introduce(name, age=18):\n    print(f"我叫{name}，今年{age}岁")\n\nintroduce("小明")\nintroduce("小红", 20)',
        explanation: 'def定义函数，return返回值，参数可以有默认值',
        canRun: true,
      },
      {
        id: 'ex-func-return',
        code: '# 多返回值\ndef calc(a, b):\n    return a + b, a - b, a * b\n\nsum_val, diff_val, prod_val = calc(10, 3)\nprint(f"和: {sum_val}")\nprint(f"差: {diff_val}")\nprint(f"积: {prod_val}")\n\n# 计算平均分\ndef average(*scores):\n    return sum(scores) / len(scores)\n\nprint(f"平均分: {average(85, 92, 78, 90):.1f}")',
        explanation: '函数可以返回多个值（实际是返回元组），*args接收可变数量的位置参数',
        canRun: true,
      },
      {
        id: 'ex-lambda',
        code: '# lambda函数\n# 普通函数\ndef square(x):\n    return x ** 2\n\n# lambda等价写法\nsquare2 = lambda x: x ** 2\n\nprint(f"普通: {square(5)}")\nprint(f"lambda: {square2(5)}")\n\n# lambda在排序中的应用\nstudents = [("小明", 85), ("小红", 92), ("小刚", 78)]\nstudents.sort(key=lambda s: s[1], reverse=True)\nprint(f"按成绩排序: {students}")',
        explanation: 'lambda用于简单的单行函数，常作为排序的key参数',
        canRun: true,
      },
      {
        id: 'ex-map-filter',
        code: '# map和filter\nnumbers = [1, 2, 3, 4, 5]\n\n# map: 对每个元素应用函数\ndoubled = list(map(lambda x: x * 2, numbers))\nprint(f"翻倍: {doubled}")\n\n# filter: 过滤元素\nevens = list(filter(lambda x: x % 2 == 0, numbers))\nprint(f"偶数: {evens}")\n\n# 列表推导式（更Pythonic）\nsquares = [x ** 2 for x in numbers]\nprint(f"平方: {squares}")',
        explanation: 'map和filter是函数式编程工具，列表推导式更简洁',
        canRun: true,
      },
    ],
    exercises: [
      {
        id: 'ch5-ex1',
        type: 'single-choice',
        question: 'Python中定义函数使用哪个关键字？',
        options: ['function', 'func', 'def', 'define'],
        correctAnswer: 'def',
        explanation: 'Python使用def关键字定义函数。',
      },
      {
        id: 'ch5-ex2',
        type: 'single-choice',
        question: 'lambda x: x * 2 等价于什么？',
        options: ['def f(x): return x + 2', 'def f(x): return x * 2', 'def f(x): x * 2', 'def f(x*2)'],
        correctAnswer: 'def f(x): return x * 2',
        explanation: 'lambda创建匿名函数，x*2是返回值（不需要return关键字）。',
      },
      {
        id: 'ch5-ex3',
        type: 'single-choice',
        question: '*args 参数接收什么类型的数据？',
        options: ['字典', '元组', '列表', '字符串'],
        correctAnswer: '元组',
        explanation: '*args将可变数量的位置参数打包为元组。',
      },
      {
        id: 'ch5-ex4',
        type: 'single-choice',
        question: '以下哪个是列表推导式的正确写法？',
        options: ['[x*2 for x in range(5)]', '(x*2 for x in range(5))', '{x*2 for x in range(5)}', 'list[x*2 for x in range(5)]'],
        correctAnswer: '[x*2 for x in range(5)]',
        explanation: '列表推导式使用方括号[]，语法为[表达式 for 变量 in 可迭代对象]。',
      },
    ],
  },
  {
    id: 'file-operations',
    title: '文件操作',
    difficulty: 'beginner',
    content: `# 文件操作

## 读写文本文件

使用 open() 函数打开文件，支持多种模式：
- 'r'：读取（默认）
- 'w'：写入（覆盖）
- 'a'：追加
- 'r+'：读写

## with 语句

使用 with 语句可以自动关闭文件，是推荐的做法。

## CSV文件处理

CSV（逗号分隔值）是常见的数据格式。`,
    codeExamples: [
      {
        id: 'ex-write',
        code: '# 模拟写入文件（使用字符串代替）\n# 实际代码：\n# with open("data.txt", "w", encoding="utf-8") as f:\n#     f.write("第一行\\n")\n#     f.write("第二行\\n")\n\n# 模拟演示\ndata = "Hello, File!\\nSecond line\\nThird line"\nprint("写入内容:")\nprint(data)\nprint("---")\nprint("写入成功！")',
        explanation: 'with语句自动管理文件关闭，推荐使用',
        canRun: true,
      },
      {
        id: 'ex-read',
        code: '# 模拟读取文件\ndata = "姓名,年龄,城市\\n小明,20,北京\\n小红,22,上海\\n小刚,21,广州"\n\nprint("文件内容:")\nprint(data)\nprint("---")\n\n# 模拟按行读取\nlines = data.split("\\n")\nfor line in lines:\n    print(f"行: {line}")',
        explanation: 'read()读取全部，readline()读取一行，readlines()读取所有行',
        canRun: true,
      },
      {
        id: 'ex-csv',
        code: '# CSV数据处理（模拟）\ncsv_data = """姓名,语文,数学,英语\n小明,85,92,78\n小红,90,88,95\n小刚,78,95,82"""\n\nprint("CSV数据:")\nprint(csv_data)\nprint("---")\n\n# 模拟解析\nlines = csv_data.split("\\n")\nheader = lines[0].split(",")\nprint(f"表头: {header}")\nfor line in lines[1:]:\n    values = line.split(",")\n    print(f"记录: {values}")',
        explanation: 'CSV是逗号分隔的文本格式，Python有专门的csv模块处理',
        canRun: true,
      },
    ],
    exercises: [
      {
        id: 'ch6-ex1',
        type: 'single-choice',
        question: 'open() 函数中，"w"模式表示？',
        options: ['读取', '写入（覆盖）', '追加', '读写'],
        correctAnswer: '写入（覆盖）',
        explanation: '"w"模式打开文件用于写入，如果文件已存在会清空内容。',
      },
      {
        id: 'ch6-ex2',
        type: 'single-choice',
        question: '使用 with 语句打开文件的好处是？',
        options: ['更快', '自动关闭文件', '可以读取更大文件', '支持更多编码'],
        correctAnswer: '自动关闭文件',
        explanation: 'with语句确保文件使用完毕后自动关闭，即使发生异常也是如此。',
      },
      {
        id: 'ch6-ex3',
        type: 'single-choice',
        question: 'CSV的全称是？',
        options: ['Comma Separated Values', 'Common System Variable', 'Computer Science Version', 'Code Standard View'],
        correctAnswer: 'Comma Separated Values',
        explanation: 'CSV是Comma-Separated Values的缩写，即逗号分隔值。',
      },
    ],
  },
  {
    id: 'numpy-basics',
    title: '数值计算模块',
    difficulty: 'intermediate',
    content: `# 数值计算模块 - NumPy

## 什么是NumPy？

NumPy是Python中用于科学计算的核心库，提供高性能的多维数组对象和工具。

## 创建数组

使用 np.array() 从列表创建数组，或使用特殊函数创建。

## 数组运算

NumPy数组支持逐元素的数学运算，无需循环。

## 统计函数

NumPy提供丰富的统计函数。`,
    codeExamples: [
      {
        id: 'ex-np-create',
        code: 'import numpy as np\n\n# 创建数组\narr = np.array([1, 2, 3, 4, 5])\nprint(f"数组: {arr}")\nprint(f"类型: {type(arr)}")\nprint(f"形状: {arr.shape}")\nprint(f"维度: {arr.ndim}")\nprint(f"数据类型: {arr.dtype}")\n\n# 特殊数组\nzeros = np.zeros((2, 3))\nprint(f"零矩阵:\\n{zeros}")\n\nones = np.ones(5)\nprint(f"全1数组: {ones}")',
        explanation: 'NumPy数组比Python列表更高效，支持向量化运算',
        canRun: true,
      },
      {
        id: 'ex-np-ops',
        code: 'import numpy as np\n\na = np.array([1, 2, 3, 4])\nb = np.array([10, 20, 30, 40])\n\nprint(f"a + b = {a + b}")\nprint(f"a * b = {a * b}")\nprint(f"a * 2 = {a * 2}")\nprint(f"a ** 2 = {a ** 2}")\n\n# 矩阵运算\nm1 = np.array([[1, 2], [3, 4]])\nm2 = np.array([[5, 6], [7, 8]])\nprint(f"矩阵乘法:\\n{m1 @ m2}")',
        explanation: '@运算符用于矩阵乘法，*是逐元素乘法',
        canRun: true,
      },
      {
        id: 'ex-np-stats',
        code: 'import numpy as np\n\ndata = np.array([85, 92, 78, 90, 88, 95, 82, 76, 91, 89])\n\nprint(f"数据: {data}")\nprint(f"平均值: {data.mean():.1f}")\nprint(f"中位数: {np.median(data):.1f}")\nprint(f"标准差: {data.std():.2f}")\nprint(f"最大值: {data.max()}")\nprint(f"最小值: {data.min()}")\nprint(f"总和: {data.sum()}")',
        explanation: 'NumPy统计函数可以直接在数组上调用',
        canRun: true,
      },
      {
        id: 'ex-np-random',
        code: 'import numpy as np\n\nnp.random.seed(42)  # 设置随机种子\n\n# 随机数\nprint(f"0-1随机: {np.random.rand(5)}")\nprint(f"整数随机: {np.random.randint(1, 100, 5)}")\nprint(f"正态分布: {np.random.randn(5).round(2)}")\n\n# 从数组中随机选择\nchoices = np.array(["A", "B", "C", "D"])\nprint(f"随机选择: {np.random.choice(choices, 3)}")',
        explanation: '设置随机种子保证结果可复现',
        canRun: true,
      },
    ],
    exercises: [
      {
        id: 'ch7-ex1',
        type: 'single-choice',
        question: 'NumPy中创建全零数组的函数是？',
        options: ['np.empty()', 'np.zeros()', 'np.zero()', 'np.blank()'],
        correctAnswer: 'np.zeros()',
        explanation: 'np.zeros(shape)创建指定形状的全零数组。',
      },
      {
        id: 'ch7-ex2',
        type: 'single-choice',
        question: 'np.array([1,2,3]) * 2 的结果是？',
        options: ['[1,2,3,1,2,3]', '[2,4,6]', '报错', '2'],
        correctAnswer: '[2,4,6]',
        explanation: 'NumPy数组与标量相乘是逐元素运算。',
      },
      {
        id: 'ch7-ex3',
        type: 'single-choice',
        question: '计算数组标准差使用哪个方法？',
        options: ['arr.variance()', 'arr.std()', 'arr.deviation()', 'arr.sigma()'],
        correctAnswer: 'arr.std()',
        explanation: 'std()计算标准差，var()计算方差。',
      },
      {
        id: 'ch7-ex4',
        type: 'single-choice',
        question: 'np.random.seed(42) 的作用是？',
        options: ['生成42个随机数', '设置随机种子使结果可复现', '限制随机数范围', '加快随机数生成'],
        correctAnswer: '设置随机种子使结果可复现',
        explanation: '设置相同的随机种子，每次运行会得到相同的随机序列。',
      },
      {
        id: 'ch7-ex5',
        type: 'single-choice',
        question: '以下哪个NumPy函数生成正态分布随机数？',
        options: ['np.random.rand()', 'np.random.randn()', 'np.random.randint()', 'np.random.normal_range()'],
        correctAnswer: 'np.random.randn()',
        explanation: 'randn()生成标准正态分布随机数，rand()生成[0,1)均匀分布。',
      },
    ],
  },
  {
    id: 'pandas-intro',
    title: '表格数据处理',
    difficulty: 'intermediate',
    content: `# 表格数据处理 - Pandas入门

## 什么是Pandas？

Pandas是Python中用于数据处理和分析的核心库，提供DataFrame数据结构。

## 创建DataFrame

可以从字典、列表或CSV文件创建DataFrame。

## 查看数据

使用 head()、info()、describe() 等方法快速了解数据。

## 基本操作

选择列、筛选行、添加新列。`,
    codeExamples: [
      {
        id: 'ex-df-create',
        code: 'import pandas as pd\n\n# 从字典创建DataFrame\ndata = {\n    "姓名": ["小明", "小红", "小刚", "小丽"],\n    "年龄": [20, 22, 21, 23],\n    "成绩": [85, 92, 78, 90]\n}\ndf = pd.DataFrame(data)\nprint(df)',
        explanation: 'DataFrame是Pandas的核心数据结构，类似电子表格',
        canRun: true,
      },
      {
        id: 'ex-df-info',
        code: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "姓名": ["小明", "小红", "小刚", "小丽"],\n    "年龄": [20, 22, 21, 23],\n    "成绩": [85, 92, 78, 90]\n})\n\nprint("=== 前几行 ===")\nprint(df.head())\nprint("\\n=== 基本信息 ===")\nprint(df.info())\nprint("\\n=== 统计描述 ===")\nprint(df.describe())',
        explanation: 'info()显示数据类型和非空值数量，describe()显示统计摘要',
        canRun: true,
      },
      {
        id: 'ex-df-select',
        code: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "姓名": ["小明", "小红", "小刚", "小丽"],\n    "年龄": [20, 22, 21, 23],\n    "成绩": [85, 92, 78, 90],\n    "城市": ["北京", "上海", "广州", "深圳"]\n})\n\n# 选择列\nprint("=== 选择单列 ===")\nprint(df["姓名"])\n\nprint("\\n=== 选择多列 ===")\nprint(df[["姓名", "成绩"]])\n\n# 添加新列\ndf["等级"] = df["成绩"].apply(lambda x: "优秀" if x >= 90 else "良好")\nprint("\\n=== 添加等级列 ===")\nprint(df)',
        explanation: 'df["列名"]选择单列，df[["列1","列2"]]选择多列',
        canRun: true,
      },
      {
        id: 'ex-df-filter',
        code: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "姓名": ["小明", "小红", "小刚", "小丽"],\n    "年龄": [20, 22, 21, 23],\n    "成绩": [85, 92, 78, 90]\n})\n\n# 条件筛选\nprint("=== 成绩>=85 ===")\nprint(df[df["成绩"] >= 85])\n\nprint("\\n=== 年龄在20-22之间 ===")\nprint(df[(df["年龄"] >= 20) & (df["年龄"] <= 22)])',
        explanation: '多条件用&（与）和|（或）连接，每个条件用括号包裹',
        canRun: true,
      },
    ],
    exercises: [
      {
        id: 'ch8-ex1',
        type: 'single-choice',
        question: 'Pandas中用于创建表格数据结构的函数是？',
        options: ['pd.Table()', 'pd.DataFrame()', 'pd.Grid()', 'pd.Sheet()'],
        correctAnswer: 'pd.DataFrame()',
        explanation: 'DataFrame是Pandas的二维表格数据结构。',
      },
      {
        id: 'ch8-ex2',
        type: 'single-choice',
        question: 'df.head(3) 返回什么？',
        options: ['最后3行', '前3行', '随机3行', '第3行'],
        correctAnswer: '前3行',
        explanation: 'head(n)返回前n行数据，默认5行。',
      },
      {
        id: 'ch8-ex3',
        type: 'single-choice',
        question: '以下哪个方法显示数据的统计摘要？',
        options: ['df.info()', 'df.summary()', 'df.describe()', 'df.stats()'],
        correctAnswer: 'df.describe()',
        explanation: 'describe()返回数值列的统计摘要（均值、标准差、最小值、四分位数、最大值）。',
      },
      {
        id: 'ch8-ex4',
        type: 'single-choice',
        question: '多条件筛选中，"与"操作用什么符号？',
        options: ['and', '&&', '&', 'AND'],
        correctAnswer: '&',
        explanation: 'Pandas中使用&表示按位与，|表示按位或，每个条件需要用括号包裹。',
      },
      {
        id: 'ch8-ex5',
        type: 'single-choice',
        question: 'df["列名"].apply(func) 的作用是？',
        options: ['删除该列', '对列中每个元素应用函数', '复制该列', '重命名该列'],
        correctAnswer: '对列中每个元素应用函数',
        explanation: 'apply()方法对Series的每个元素应用指定函数。',
      },
    ],
  },
  {
    id: 'pandas-operations',
    title: '数据表格操作',
    difficulty: 'intermediate',
    content: `# 数据表格操作 - Pandas进阶

## loc 和 iloc

- loc：基于标签的索引
- iloc：基于位置的索引

## 排序

使用 sort_values() 对数据进行排序。

## 合并数据

使用 merge() 和 concat() 合并多个DataFrame。`,
    codeExamples: [
      {
        id: 'ex-loc',
        code: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "姓名": ["小明", "小红", "小刚", "小丽"],\n    "年龄": [20, 22, 21, 23],\n    "成绩": [85, 92, 78, 90]\n})\n\nprint("=== iloc 按位置 ===")\nprint(df.iloc[0])      # 第一行\nprint(df.iloc[0, 1])   # 第一行第二列\n\nprint("\\n=== loc 按标签/条件 ===")\nprint(df.loc[df["成绩"] > 80])',
        explanation: 'iloc用整数位置索引，loc用标签或布尔条件索引',
        canRun: true,
      },
      {
        id: 'ex-sort',
        code: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "姓名": ["小明", "小红", "小刚", "小丽"],\n    "成绩": [85, 92, 78, 90]\n})\n\nprint("=== 按成绩升序 ===")\nprint(df.sort_values("成绩"))\n\nprint("\\n=== 按成绩降序 ===")\nprint(df.sort_values("成绩", ascending=False))',
        explanation: 'ascending=False表示降序，默认升序',
        canRun: true,
      },
      {
        id: 'ex-merge',
        code: 'import pandas as pd\n\ndf1 = pd.DataFrame({\n    "学号": [1, 2, 3],\n    "姓名": ["小明", "小红", "小刚"]\n})\n\ndf2 = pd.DataFrame({\n    "学号": [1, 2, 3],\n    "成绩": [85, 92, 78]\n})\n\n# 内连接\nresult = pd.merge(df1, df2, on="学号")\nprint("合并结果:")\nprint(result)',
        explanation: 'merge()默认内连接，how参数可指定left、right、outer',
        canRun: true,
      },
    ],
    exercises: [
      {
        id: 'ch9-ex1',
        type: 'single-choice',
        question: 'iloc[1, 2] 表示什么？',
        options: ['第1行第2列', '第2行第3列', '第1列第2行', '标签1和2'],
        correctAnswer: '第2行第3列',
        explanation: 'iloc使用0-based整数位置索引，[1,2]表示第2行第3列。',
      },
      {
        id: 'ch9-ex2',
        type: 'single-choice',
        question: 'sort_values() 默认是升序还是降序？',
        options: ['升序', '降序', '随机', '不排序'],
        correctAnswer: '升序',
        explanation: 'sort_values()默认ascending=True，即升序排列。',
      },
      {
        id: 'ch9-ex3',
        type: 'single-choice',
        question: 'pd.merge() 默认的合并方式是？',
        options: ['左连接', '右连接', '内连接', '外连接'],
        correctAnswer: '内连接',
        explanation: 'merge()默认how="inner"，只保留两个DataFrame都有的键。',
      },
      {
        id: 'ch9-ex4',
        type: 'single-choice',
        question: '要垂直堆叠两个DataFrame，使用哪个函数？',
        options: ['pd.merge()', 'pd.concat()', 'pd.join()', 'pd.stack()'],
        correctAnswer: 'pd.concat()',
        explanation: 'concat()用于沿轴拼接多个DataFrame，默认垂直堆叠。',
      },
    ],
  },
  {
    id: 'data-cleaning-intro',
    title: '数据清洗入门',
    difficulty: 'intermediate',
    content: `# 数据清洗入门

## 为什么需要数据清洗？

真实世界的数据往往包含缺失值、异常值、重复值等问题，数据清洗是数据分析的关键步骤。

## 数据质量问题

- 缺失值：数据不完整
- 异常值：超出正常范围的数据
- 重复值：重复的记录
- 格式不一致：数据类型或格式不统一

## 数据清洗流程

1. 检查数据质量
2. 处理缺失值
3. 处理异常值
4. 删除重复值
5. 统一数据格式`,
    codeExamples: [
      {
        id: 'ex-check',
        code: 'import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    "A": [1, 2, np.nan, 4, 5],\n    "B": [10, np.nan, np.nan, 40, 50],\n    "C": ["a", "b", "c", "d", "e"]\n})\n\nprint("=== 检查缺失值 ===")\nprint(df.isnull())\nprint("\\n=== 每列缺失值数量 ===")\nprint(df.isnull().sum())\nprint(f"\\n总缺失值: {df.isnull().sum().sum()}")',
        explanation: 'isnull()返回布尔矩阵，sum()统计True的数量',
        canRun: true,
      },
      {
        id: 'ex-outlier',
        code: 'import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({"值": [10, 12, 11, 13, 100, 12, 11, 10]})\n\nQ1 = df["值"].quantile(0.25)\nQ3 = df["值"].quantile(0.75)\nIQR = Q3 - Q1\n\nlower = Q1 - 1.5 * IQR\nupper = Q3 + 1.5 * IQR\n\nprint(f"Q1: {Q1}, Q3: {Q3}, IQR: {IQR}")\nprint(f"异常值范围: [{lower:.1f}, {upper:.1f}]")\n\noutliers = df[(df["值"] < lower) | (df["值"] > upper)]\nprint(f"\\n异常值: {outliers[\"值\"].values}")',
        explanation: 'IQR方法：小于Q1-1.5*IQR或大于Q3+1.5*IQR的为异常值',
        canRun: true,
      },
    ],
    exercises: [
      {
        id: 'ch10-ex1',
        type: 'single-choice',
        question: '检测缺失值使用哪个方法？',
        options: ['df.isnull()', 'df.hasnull()', 'df.missing()', 'df.empty()'],
        correctAnswer: 'df.isnull()',
        explanation: 'isnull()返回布尔矩阵，True表示缺失值。',
      },
      {
        id: 'ch10-ex2',
        type: 'single-choice',
        question: 'IQR方法的IQR代表什么？',
        options: ['平均值', '中位数', '四分位距', '标准差'],
        correctAnswer: '四分位距',
        explanation: 'IQR = Q3 - Q1，即第三四分位数与第一四分位数之差。',
      },
      {
        id: 'ch10-ex3',
        type: 'single-choice',
        question: '以下哪个不是常见的数据质量问题？',
        options: ['缺失值', '异常值', '重复值', '排序值'],
        correctAnswer: '排序值',
        explanation: '排序不是数据质量问题，而是数据处理操作。',
      },
    ],
  },
  {
    id: 'missing-data',
    title: '缺失数据处理',
    difficulty: 'intermediate',
    content: `# 缺失数据处理

## 处理缺失值的方法

1. **删除**：dropna() 删除包含缺失值的行或列
2. **填充**：fillna() 用指定值填充缺失值
3. **插值**：interpolate() 基于已有数据进行插值

## 填充策略

- 用固定值填充（如0、均值、中位数）
- 用前/后值填充（ffill/bfill）
- 用插值填充`,
    codeExamples: [
      {
        id: 'ex-dropna',
        code: 'import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    "A": [1, 2, np.nan, 4, 5],\n    "B": [10, np.nan, 30, np.nan, 50]\n})\n\nprint("原始数据:")\nprint(df)\n\nprint("\\n删除含缺失值的行:")\nprint(df.dropna())\n\nprint("\\n删除全部为缺失值的列:")\nprint(df.dropna(axis=1, how="all"))',
        explanation: 'dropna()默认删除含任何缺失值的行，axis=1操作列',
        canRun: true,
      },
      {
        id: 'ex-fillna',
        code: 'import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    "A": [1, 2, np.nan, 4, 5],\n    "B": [10.0, np.nan, 30.0, np.nan, 50.0]\n})\n\nprint("原始数据:")\nprint(df)\n\nprint("\\n用0填充:")\nprint(df.fillna(0))\n\nprint("\\n用均值填充:")\nprint(df.fillna(df.mean()))\n\nprint("\\n用前向填充:")\nprint(df.fillna(method="ffill"))',
        explanation: 'fillna()可以用固定值、统计值或前后值填充',
        canRun: true,
      },
      {
        id: 'ex-interpolate',
        code: 'import pandas as pd\nimport numpy as np\n\ndf = pd.DataFrame({\n    "值": [10.0, np.nan, np.nan, 40.0, 50.0]\n})\n\nprint("原始数据:")\nprint(df)\n\nprint("\\n线性插值:")\nprint(df.interpolate())\n\nprint("\\n插值后:")\nfilled = df.interpolate()\nprint(filled)',
        explanation: 'interpolate()默认线性插值，会根据前后值计算缺失值',
        canRun: true,
      },
    ],
    exercises: [
      {
        id: 'ch11-ex1',
        type: 'single-choice',
        question: '删除包含缺失值的行使用哪个方法？',
        options: ['df.dropnull()', 'df.dropna()', 'df.remove()', 'df.delete()'],
        correctAnswer: 'df.dropna()',
        explanation: 'dropna()删除包含NaN的行或列。',
      },
      {
        id: 'ch11-ex2',
        type: 'single-choice',
        question: 'df.fillna(df.mean()) 的作用是？',
        options: ['删除缺失值', '用列均值填充缺失值', '用0填充缺失值', '用前值填充缺失值'],
        correctAnswer: '用列均值填充缺失值',
        explanation: 'df.mean()计算每列均值，fillna用对应均值填充该列的缺失值。',
      },
      {
        id: 'ch11-ex3',
        type: 'single-choice',
        question: 'method="ffill" 表示？',
        options: ['后向填充', '前向填充', '均值填充', '零填充'],
        correctAnswer: '前向填充',
        explanation: 'ffill (forward fill) 用前一个非缺失值填充当前缺失值。',
      },
      {
        id: 'ch11-ex4',
        type: 'single-choice',
        question: 'interpolate() 默认使用什么方法填充？',
        options: ['均值', '中位数', '线性插值', '前值'],
        correctAnswer: '线性插值',
        explanation: 'interpolate()默认基于相邻值进行线性插值。',
      },
    ],
  },
  {
    id: 'duplicate-data',
    title: '重复数据清理',
    difficulty: 'intermediate',
    content: `# 重复数据清理

## 检测重复值

使用 duplicated() 检测重复行。

## 删除重复值

使用 drop_duplicates() 删除重复行。

## 保留策略

- keep="first"：保留第一次出现的记录
- keep="last"：保留最后一次出现的记录
- keep=False：删除所有重复记录`,
    codeExamples: [
      {
        id: 'ex-duplicated',
        code: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "姓名": ["小明", "小红", "小明", "小刚", "小红"],\n    "成绩": [85, 92, 85, 78, 92]\n})\n\nprint("原始数据:")\nprint(df)\n\nprint("\\n检测重复行:")\nprint(df.duplicated())\n\nprint(f"\\n重复行数: {df.duplicated().sum()}")',
        explanation: 'duplicated()返回布尔Series，True表示该行是重复的',
        canRun: true,
      },
      {
        id: 'ex-drop-dup',
        code: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "姓名": ["小明", "小红", "小明", "小刚", "小红"],\n    "成绩": [85, 92, 85, 78, 92]\n})\n\nprint("原始数据:")\nprint(df)\n\nprint("\\n删除重复(保留首次):")\nprint(df.drop_duplicates())\n\nprint("\\n仅按姓名去重:")\nprint(df.drop_duplicates(subset=["姓名"]))',
        explanation: 'subset参数指定基于哪些列判断重复',
        canRun: true,
      },
    ],
    exercises: [
      {
        id: 'ch12-ex1',
        type: 'single-choice',
        question: '检测重复行使用哪个方法？',
        options: ['df.is_duplicate()', 'df.duplicated()', 'df.repeat()', 'df.copy()'],
        correctAnswer: 'df.duplicated()',
        explanation: 'duplicated()返回布尔Series标记重复行。',
      },
      {
        id: 'ch12-ex2',
        type: 'single-choice',
        question: 'drop_duplicates(keep="last") 保留什么？',
        options: ['第一次出现的记录', '最后一次出现的记录', '所有记录', '随机一条记录'],
        correctAnswer: '最后一次出现的记录',
        explanation: 'keep="last"保留最后一次出现的重复记录。',
      },
      {
        id: 'ch12-ex3',
        type: 'single-choice',
        question: 'subset参数在drop_duplicates中的作用是？',
        options: ['指定保留的行', '指定去重依据的列', '指定删除的行', '指定排序列'],
        correctAnswer: '指定去重依据的列',
        explanation: 'subset指定基于哪些列判断是否重复。',
      },
    ],
  },
  {
    id: 'filter-sort',
    title: '数据筛选与排序',
    difficulty: 'intermediate',
    content: `# 数据筛选与排序

## query 方法

使用 query() 方法进行简洁的条件筛选。

## 高级筛选

结合 loc、iloc 进行复杂的行列选择。

## 多列排序

sort_values() 支持按多列排序。`,
    codeExamples: [
      {
        id: 'ex-query',
        code: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "姓名": ["小明", "小红", "小刚", "小丽", "小强"],\n    "年龄": [20, 22, 21, 23, 20],\n    "成绩": [85, 92, 78, 90, 88]\n})\n\nprint("=== query筛选 ===")\nprint(df.query("成绩 >= 85"))\n\nprint("\\n=== 复合条件 ===")\nprint(df.query("成绩 >= 85 and 年龄 < 23"))',
        explanation: 'query()使用字符串表达式，语法更简洁',
        canRun: true,
      },
      {
        id: 'ex-multisort',
        code: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "部门": ["销售", "技术", "销售", "技术", "销售"],\n    "姓名": ["A", "B", "C", "D", "E"],\n    "业绩": [80, 90, 85, 95, 75]\n})\n\nprint("=== 按部门升序，业绩降序 ===")\nprint(df.sort_values(["部门", "业绩"], ascending=[True, False]))',
        explanation: 'ascending可以传列表，分别指定每列的排序方式',
        canRun: true,
      },
    ],
    exercises: [
      {
        id: 'ch13-ex1',
        type: 'single-choice',
        question: 'df.query("age > 20") 等价于？',
        options: ['df[df["age"] > 20]', 'df.loc["age > 20"]', 'df.filter("age > 20")', 'df.select("age > 20")'],
        correctAnswer: 'df[df["age"] > 20]',
        explanation: 'query()是条件筛选的便捷写法，等价于布尔索引。',
      },
      {
        id: 'ch13-ex2',
        type: 'single-choice',
        question: 'sort_values(["A", "B"], ascending=[True, False]) 表示？',
        options: ['A降序B升序', 'A升序B降序', '都升序', '都降序'],
        correctAnswer: 'A升序B降序',
        explanation: 'ascending列表与列名一一对应，True升序False降序。',
      },
      {
        id: 'ch13-ex3',
        type: 'single-choice',
        question: 'loc[行条件, 列条件] 中如果只指定行条件返回什么？',
        options: ['只有行', '所有列', '只有匹配列', '报错'],
        correctAnswer: '所有列',
        explanation: 'loc[行条件]返回符合条件的行和所有列。',
      },
    ],
  },
  {
    id: 'group-stats',
    title: '分组统计运算',
    difficulty: 'intermediate',
    content: `# 分组统计运算

## groupby

groupby 是Pandas最强大的功能之一，用于分组聚合。

## 聚合函数

agg() 支持对不同的列使用不同的聚合函数。

## 透视表

pivot_table() 创建多维汇总表格。`,
    codeExamples: [
      {
        id: 'ex-groupby',
        code: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "部门": ["销售", "技术", "销售", "技术", "销售"],\n    "姓名": ["A", "B", "C", "D", "E"],\n    "业绩": [80, 90, 85, 95, 75]\n})\n\nprint("=== 按部门分组求均值 ===")\nprint(df.groupby("部门")["业绩"].mean())\n\nprint("\\n=== 按部门分组统计 ===")\nprint(df.groupby("部门")["业绩"].agg(["count", "mean", "max", "min"]))',
        explanation: 'groupby先分组，再对每组应用聚合函数',
        canRun: true,
      },
      {
        id: 'ex-pivot',
        code: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "日期": ["1月", "1月", "2月", "2月", "3月", "3月"],\n    "部门": ["销售", "技术", "销售", "技术", "销售", "技术"],\n    "业绩": [80, 90, 85, 95, 75, 100]\n})\n\nprint("=== 透视表 ===")\npt = df.pivot_table(\n    values="业绩",\n    index="部门",\n    columns="日期",\n    aggfunc="mean"\n)\nprint(pt)',
        explanation: 'pivot_table类似Excel的数据透视表',
        canRun: true,
      },
      {
        id: 'ex-multi-group',
        code: 'import pandas as pd\n\ndf = pd.DataFrame({\n    "地区": ["华东", "华东", "华北", "华北", "华南"],\n    "部门": ["销售", "技术", "销售", "技术", "销售"],\n    "业绩": [80, 90, 85, 95, 75]\n})\n\nprint("=== 多列分组 ===")\nresult = df.groupby(["地区", "部门"])["业绩"].mean()\nprint(result)',
        explanation: 'groupby可以传入多列进行多层级分组',
        canRun: true,
      },
    ],
    exercises: [
      {
        id: 'ch14-ex1',
        type: 'single-choice',
        question: 'groupby() 之后通常需要配合什么操作？',
        options: ['排序', '聚合函数', '筛选', '合并'],
        correctAnswer: '聚合函数',
        explanation: 'groupby分组后通常使用mean()、sum()、count()等聚合函数汇总数据。',
      },
      {
        id: 'ch14-ex2',
        type: 'single-choice',
        question: 'pivot_table() 中 index 参数指定什么？',
        options: ['列标题', '行分组字段', '汇总值', '聚合函数'],
        correctAnswer: '行分组字段',
        explanation: 'index参数指定作为行标签的字段。',
      },
      {
        id: 'ch14-ex3',
        type: 'single-choice',
        question: 'agg(["count", "mean", "max"]) 的作用是？',
        options: ['只计算均值', '同时计算计数、均值和最大值', '计算总和', '计算中位数'],
        correctAnswer: '同时计算计数、均值和最大值',
        explanation: 'agg()可以传入多个聚合函数名称，同时计算多个统计量。',
      },
      {
        id: 'ch14-ex4',
        type: 'single-choice',
        question: 'df.groupby("部门").size() 返回什么？',
        options: ['各部门业绩总和', '各部门记录数量', '各部门平均值', '各部门最大值'],
        correctAnswer: '各部门记录数量',
        explanation: 'size()返回每个分组的记录数量。',
      },
    ],
  },
  {
    id: 'visualization-basics',
    title: '数据可视化基础',
    difficulty: 'intermediate',
    content: `# 数据可视化基础 - Matplotlib

## 什么是Matplotlib？

Matplotlib是Python最基础的绘图库，可以创建各种静态图表。

## 基本图表类型

- 折线图：展示趋势
- 柱状图：比较大小
- 散点图：观察关系
- 饼图：显示占比

## 图表元素

- 标题：plt.title()
- 轴标签：plt.xlabel() / plt.ylabel()
- 图例：plt.legend()
- 网格：plt.grid()`,
    codeExamples: [
      {
        id: 'ex-line',
        code: 'import matplotlib.pyplot as plt\nimport numpy as np\n\nx = np.arange(1, 8)\ny = [20, 25, 30, 28, 35, 40, 38]\n\nplt.figure(figsize=(8, 4))\nplt.plot(x, y, marker="o", linewidth=2, color="blue")\nplt.title("一周销售额趋势")\nplt.xlabel("星期")\nplt.ylabel("销售额(万)")\nplt.grid(True, alpha=0.3)\nplt.show()\nprint("折线图已生成")',
        explanation: 'plot()绘制折线图，marker设置数据点标记',
        canRun: true,
      },
      {
        id: 'ex-bar',
        code: 'import matplotlib.pyplot as plt\n\ncategories = ["A产品", "B产品", "C产品", "D产品"]\nvalues = [120, 85, 150, 90]\n\nplt.figure(figsize=(8, 4))\nplt.bar(categories, values, color=["#4CAF50", "#2196F3", "#FF9800", "#9C27B0"])\nplt.title("各产品销量对比")\nplt.xlabel("产品")\nplt.ylabel("销量")\n\nfor i, v in enumerate(values):\n    plt.text(i, v + 2, str(v), ha="center")\n\nplt.show()\nprint("柱状图已生成")',
        explanation: 'bar()绘制柱状图，plt.text()添加数据标签',
        canRun: true,
      },
      {
        id: 'ex-scatter',
        code: 'import matplotlib.pyplot as plt\nimport numpy as np\n\nnp.random.seed(42)\nx = np.random.rand(50) * 100\ny = 2 * x + np.random.randn(50) * 10\n\nplt.figure(figsize=(8, 4))\nplt.scatter(x, y, alpha=0.6, c="blue")\nplt.title("广告投入与销售额关系")\nplt.xlabel("广告投入(万)")\nplt.ylabel("销售额(万)")\nplt.grid(True, alpha=0.3)\nplt.show()\nprint("散点图已生成")',
        explanation: 'scatter()绘制散点图，alpha控制透明度',
        canRun: true,
      },
    ],
    exercises: [
      {
        id: 'ch15-ex1',
        type: 'single-choice',
        question: 'plt.plot() 用于绘制什么图表？',
        options: ['柱状图', '折线图', '散点图', '饼图'],
        correctAnswer: '折线图',
        explanation: 'plot()默认绘制折线图，适合展示趋势变化。',
      },
      {
        id: 'ch15-ex2',
        type: 'single-choice',
        question: '设置图表标题使用哪个函数？',
        options: ['plt.label()', 'plt.title()', 'plt.header()', 'plt.name()'],
        correctAnswer: 'plt.title()',
        explanation: 'plt.title()设置图表标题。',
      },
      {
        id: 'ch15-ex3',
        type: 'single-choice',
        question: 'plt.scatter() 的 alpha 参数控制什么？',
        options: ['点的大小', '点的颜色', '点的透明度', '点的形状'],
        correctAnswer: '点的透明度',
        explanation: 'alpha取值0-1，值越小越透明。',
      },
      {
        id: 'ch15-ex4',
        type: 'single-choice',
        question: '显示图表使用哪个函数？',
        options: ['plt.display()', 'plt.render()', 'plt.show()', 'plt.draw()'],
        correctAnswer: 'plt.show()',
        explanation: 'plt.show()显示或保存当前图表。',
      },
    ],
  },
  {
    id: 'chart-advanced',
    title: '图表绘制入门',
    difficulty: 'intermediate',
    content: `# 图表绘制入门 - 进阶技巧

## 子图

使用 subplot 或 subplots 在一个画布上绘制多个图表。

## 图表美化

- 设置颜色方案
- 调整字体大小
- 添加注释
- 设置图例位置

## 保存图表

使用 plt.savefig() 保存为图片文件。`,
    codeExamples: [
      {
        id: 'ex-subplot',
        code: 'import matplotlib.pyplot as plt\nimport numpy as np\n\nx = np.linspace(0, 10, 100)\n\nfig, axes = plt.subplots(2, 2, figsize=(10, 8))\n\naxes[0, 0].plot(x, np.sin(x), color="blue")\naxes[0, 0].set_title("正弦函数")\naxes[0, 0].grid(True)\n\naxes[0, 1].plot(x, np.cos(x), color="red")\naxes[0, 1].set_title("余弦函数")\naxes[0, 1].grid(True)\n\naxes[1, 0].plot(x, np.exp(-x/5), color="green")\naxes[1, 0].set_title("指数衰减")\naxes[1, 0].grid(True)\n\naxes[1, 1].plot(x, np.log(x+1), color="purple")\naxes[1, 1].set_title("对数增长")\naxes[1, 1].grid(True)\n\nplt.tight_layout()\nplt.show()\nprint("子图已生成")',
        explanation: 'subplots(2,2)创建2x2的子图网格，返回fig和axes数组',
        canRun: true,
      },
      {
        id: 'ex-annotate',
        code: 'import matplotlib.pyplot as plt\n\nx = ["Q1", "Q2", "Q3", "Q4"]\ny = [120, 150, 180, 220]\n\nfig, ax = plt.subplots(figsize=(8, 4))\nbars = ax.bar(x, y, color="skyblue")\nax.set_title("季度销售增长")\n\n# 添加注释\nmax_idx = y.index(max(y))\nax.annotate(f"最高: {y[max_idx]}",\n            xy=(max_idx, y[max_idx]),\n            xytext=(0, 10),\n            textcoords="offset points",\n            ha="center",\n            arrowprops=dict(arrowstyle="->"))\n\nfor i, v in enumerate(y):\n    ax.text(i, v + 3, str(v), ha="center")\n\nplt.show()\nprint("带注释的柱状图已生成")',
        explanation: 'annotate()添加带箭头的注释，text()添加文本标签',
        canRun: true,
      },
    ],
    exercises: [
      {
        id: 'ch16-ex1',
        type: 'single-choice',
        question: 'plt.subplots(2, 3) 创建几个子图？',
        options: ['2个', '3个', '5个', '6个'],
        correctAnswer: '6个',
        explanation: 'subplots(2,3)创建2行3列共6个子图。',
      },
      {
        id: 'ch16-ex2',
        type: 'single-choice',
        question: '保存图表为图片使用哪个函数？',
        options: ['plt.save()', 'plt.savefig()', 'plt.export()', 'plt.write()'],
        correctAnswer: 'plt.savefig()',
        explanation: 'savefig()将图表保存为图片文件，支持png、pdf等格式。',
      },
      {
        id: 'ch16-ex3',
        type: 'single-choice',
        question: 'tight_layout() 的作用是？',
        options: ['调整图表大小', '自动调整子图间距', '设置布局风格', '紧凑数据'],
        correctAnswer: '自动调整子图间距',
        explanation: 'tight_layout()自动调整子图参数，使子图之间不会重叠。',
      },
    ],
  },
];
