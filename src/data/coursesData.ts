import { Course } from '@/types';

export const coursesData: Course[] = [
  {
    id: 'data-analysis-overview',
    title: '数据分析全景与学习路径',
    description: '了解数据分析的价值、全景和学习路径，为后续学习建立认知基础。',
    category: '预习阶段',
    difficulty: 'beginner',
    estimatedHours: 4,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: '数据分析的价值与全景',
        content: `# 数据分析的价值与全景

## 数据分析的核心价值

数据分析不仅仅是处理数字，更是"从中提炼出有价值的信息，为决策提供支持"的过程。

## 数据分析的完整流程

1. **数据收集**：从各种来源获取原始数据
2. **数据清洗**：处理缺失值、异常值，确保数据质量
3. **数据分析**：运用统计方法和工具进行分析
4. **数据可视化**：将分析结果转化为直观的图表
5. **报告与决策**：基于分析结果提供决策建议

## 数据分析的应用领域

- 市场营销：客户细分、市场趋势分析
- 金融：风险评估，投资决策
- 运营：流程优化、效率提升
- 人力资源：人才管理、绩效分析`,
        exercises: [
          {
            id: 'ex1-ch1',
            type: 'multiple-choice',
            question: '数据分析的核心价值是什么？',
            options: [
              '收集尽可能多的数据',
              '通过数据分析为决策提供支持',
              '制作漂亮的图表',
              '展示技术能力'
            ],
            correctAnswer: '通过数据分析为决策提供支持',
            explanation: '数据分析的最终目的是为了支持决策，创造价值。'
          },
          {
            id: 'ex2-ch1',
            type: 'coding',
            question: '使用print()函数输出"Hello, Data Analysis!"',
            codeTemplate: `# 在下方编写代码输出字符串
print("Hello, Data Analysis!")
`,
            correctCode: `print("Hello, Data Analysis!")`,
            explanation: '使用print()函数输出字符串。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch1',
            type: 'multiple-choice',
            question: '以下哪项不属于数据分析的完整流程？',
            options: ['数据收集', '数据清洗', '数据存储', '数据可视化'],
            correctAnswer: '数据存储',
            points: 10
          },
          {
            id: 'q2-ch1',
            type: 'multiple-choice',
            question: '数据分析可以应用于哪些领域？',
            options: ['市场营销', '金融', '人力资源', '以上全部'],
            correctAnswer: '以上全部',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-2',
        title: '学习路径与阶段目标',
        content: `# 学习路径与阶段目标

## 阶段一（入门）

**核心技能**：
- Python基础语法
- 数据结构与算法基础

**能力目标**：
- 具备基本的编程能力
- 能够编写简单的数据处理脚本

## 阶段二（数据分析师）

**核心技能**：
- Pandas数据处理
- NumPy数值计算
- Matplotlib可视化

**能力目标**：
- 能够处理和分析数据
- 能够创建数据可视化
- 能够进行探索性数据分析

## 阶段三（进阶）

**核心技能**：
- 机器学习基础
- 统计推断
- 高级可视化

**能力目标**：
- 能够构建预测模型
- 能够进行A/B测试分析
- 能够解决复杂业务问题`,
        exercises: [
          {
            id: 'ex1-ch2',
            type: 'multiple-choice',
            question: 'Pandas是用于什么的Python库？',
            options: ['Web开发', '数据处理和分析', '游戏开发', '网络爬虫'],
            correctAnswer: '数据处理和分析',
            explanation: 'Pandas是Python中最常用的数据处理和分析库。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch2',
            type: 'multiple-choice',
            question: 'Matplotlib主要用于什么？',
            options: ['数据存储', '数据清洗', '数据可视化', '机器学习'],
            correctAnswer: '数据可视化',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'python-basics',
    title: 'Python编程基础',
    description: '学习Python编程语言的基础知识，为数据分析打下坚实基础。',
    category: '学习阶段',
    difficulty: 'beginner',
    estimatedHours: 8,
    thumbnail: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: 'Python基础语法',
        content: `# Python基础语法

## 第一个Python程序

让我们从经典的"Hello World"开始：

\`\`\`python
print("Hello, World!")
\`\`\`

## 变量与数据类型

Python有几种基本数据类型：
- 整数 (int)：1, 2, 100
- 浮点数 (float)：3.14, -0.5
- 字符串 (str)："Hello"
- 布尔值 (bool)：True, False

## 运算符

### 算术运算符
\`+\` 加法、\`-\` 减法、\`*\` 乘法、\`/\` 除法、\`//\` 整除、\`%\` 取余、\`**\` 幂运算

### 比较运算符
\`==\` 等于、\`!=\` 不等于、\`>\` 大于、\`<\` 小于

### 逻辑运算符
\`and\` 与、\`or\` 或、\`not\` 非`,
        exercises: [
          {
            id: 'ex1-ch1',
            type: 'coding',
            question: '输出"Hello, Python!"到屏幕',
            codeTemplate: `# 编写代码输出Hello, Python!
`,
            correctCode: `print("Hello, Python!")`,
            explanation: '使用print()函数输出字符串。'
          },
          {
            id: 'ex2-ch1',
            type: 'coding',
            question: '计算并输出 10 + 20 的结果',
            codeTemplate: `# 计算10 + 20并输出结果
`,
            correctCode: `print(10 + 20)`,
            explanation: '使用print()函数输出算术表达式的结果。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch1',
            type: 'multiple-choice',
            question: 'Python中用于输出的函数是？',
            options: ['echo()', 'print()', 'write()', 'output()'],
            correctAnswer: 'print()',
            points: 10
          },
          {
            id: 'q2-ch1',
            type: 'multiple-choice',
            question: '10 // 3 的结果是？',
            options: ['3.33', '3', '1', '30'],
            correctAnswer: '3',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-2',
        title: '数据结构',
        content: `# 数据结构

## 列表 (List)

列表是Python中最常用的数据结构，可以存储任意类型的元素。

\`\`\`python
fruits = ["苹果", "香蕉", "橙子"]
print(fruits[0])  # 输出: 苹果
\`\`\`

常用操作：
- append()：末尾添加元素
- remove()：删除元素
- sort()：排序

## 字典 (Dictionary)

字典是键值对的集合。

\`\`\`python
student = {"name": "小明", "age": 20}
print(student["name"])  # 输出: 小明
\`\`\`

## 元组 (Tuple)

元组与列表类似，但是不可变的。

\`\`\`python
point = (3, 4)
\`\`\``,
        exercises: [
          {
            id: 'ex1-ch2',
            type: 'coding',
            question: '创建一个列表，包含数字1, 2, 3，并输出列表',
            codeTemplate: `# 创建列表并输出
numbers = 
print(numbers)
`,
            correctCode: `numbers = [1, 2, 3]
print(numbers)`,
            explanation: '使用方括号创建列表。'
          },
          {
            id: 'ex2-ch2',
            type: 'coding',
            question: '创建一个字典，包含name和age两个键值对，并输出name的值',
            codeTemplate: `# 创建字典并输出name
person = {"name": "Alice", "age": 25}

`,
            correctCode: `person = {"name": "Alice", "age": 25}
print(person["name"])`,
            explanation: '使用大括号创建字典，通过键访问值。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch2',
            type: 'multiple-choice',
            question: '以下哪个方法用于在列表末尾添加元素？',
            options: ['add()', 'append()', 'insert()', 'push()'],
            correctAnswer: 'append()',
            points: 10
          },
          {
            id: 'q2-ch2',
            type: 'multiple-choice',
            question: '字典通过什么来访问值？',
            options: ['索引', '键(key)', '位置', '序号'],
            correctAnswer: '键(key)',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-3',
        title: '条件判断与循环',
        content: `# 条件判断与循环

## if 条件判断

\`\`\`python
score = 85
if score >= 90:
    print("优秀")
elif score >= 60:
    print("及格")
else:
    print("不及格")
\`\`\`

## for 循环

\`\`\`python
for i in range(5):
    print(i)  # 输出: 0, 1, 2, 3, 4
\`\`\`

## while 循环

\`\`\`python
count = 0
while count < 3:
    print(count)
    count += 1
\`\`\`

## 循环控制

- break：跳出循环
- continue：跳过当前迭代`,
        exercises: [
          {
            id: 'ex1-ch3',
            type: 'coding',
            question: '使用for循环输出数字1到5',
            codeTemplate: `# 使用for循环输出1到5
`,
            correctCode: `for i in range(1, 6):
    print(i)`,
            explanation: 'range(1, 6)生成1到5的数字。'
          },
          {
            id: 'ex2-ch3',
            type: 'coding',
            question: '使用if判断：如果变量x大于10，输出"大于10"，否则输出"小于等于10"',
            codeTemplate: `x = 15
# 编写判断代码

`,
            correctCode: `x = 15
if x > 10:
    print("大于10")
else:
    print("小于等于10")`,
            explanation: '使用if-else进行条件判断。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch3',
            type: 'multiple-choice',
            question: '以下哪个关键字用于跳出循环？',
            options: ['stop', 'exit', 'break', 'return'],
            correctAnswer: 'break',
            points: 10
          },
          {
            id: 'q2-ch3',
            type: 'multiple-choice',
            question: 'range(3) 生成的序列是？',
            options: ['[1, 2, 3]', '[0, 1, 2]', '[0, 1, 2, 3]', '[3]'],
            correctAnswer: '[0, 1, 2]',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-4',
        title: '函数与模块',
        content: `# 函数与模块

## 定义函数

\`\`\`python
def greet(name):
    return f"你好，{name}！"

print(greet("小明"))
\`\`\`

## Lambda函数

\`\`\`python
square = lambda x: x ** 2
print(square(5))  # 输出: 25
\`\`\`

## 导入模块

\`\`\`python
import math
print(math.pi)
print(math.sqrt(16))  # 输出: 4.0
\`\`\``,
        exercises: [
          {
            id: 'ex1-ch4',
            type: 'coding',
            question: '定义一个函数，计算两个数的和并返回',
            codeTemplate: `def add(a, b):
    # 返回a和b的和
    
# 测试
print(add(3, 5))  # 应输出8
`,
            correctCode: `def add(a, b):
    return a + b

print(add(3, 5))`,
            explanation: '使用return语句返回函数结果。'
          },
          {
            id: 'ex2-ch4',
            type: 'coding',
            question: '使用lambda表达式创建一个计算平方的函数',
            codeTemplate: `# 创建lambda函数计算平方
square = 

print(square(6))
`,
            correctCode: `square = lambda x: x ** 2
print(square(6))`,
            explanation: 'lambda用于创建简单的匿名函数。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch4',
            type: 'multiple-choice',
            question: 'Python中定义函数使用哪个关键字？',
            options: ['function', 'func', 'def', 'define'],
            correctAnswer: 'def',
            points: 10
          },
          {
            id: 'q2-ch4',
            type: 'multiple-choice',
            question: 'lambda x: x * 2 等价于什么？',
            options: ['def f(x): return x + 2', 'def f(x): return x * 2', 'def f(x): x * 2', 'def f(x*2)'],
            correctAnswer: 'def f(x): return x * 2',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'numpy-pandas',
    title: 'NumPy与Pandas数据处理',
    description: '掌握Python数据分析核心库NumPy和Pandas的使用方法。',
    category: '学习阶段',
    difficulty: 'intermediate',
    estimatedHours: 10,
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: 'NumPy数值计算',
        content: `# NumPy数值计算

## 什么是NumPy？

NumPy是Python中用于科学计算的核心库，提供高性能的多维数组对象。

## 创建数组

\`\`\`python
import numpy as np

arr = np.array([1, 2, 3, 4, 5])
print(f"数组: {arr}")
print(f"均值: {arr.mean()}")
print(f"标准差: {arr.std()}")
\`\`\`

## 数组运算

NumPy数组支持逐元素的数学运算：

\`\`\`python
a = np.array([1, 2, 3, 4])
print(a * 2)  # 输出: [2, 4, 6, 8]
print(a + 10)  # 输出: [11, 12, 13, 14]
\`\`\``,
        exercises: [
          {
            id: 'ex1-ch1',
            type: 'coding',
            question: '创建一个NumPy数组[1, 2, 3, 4, 5]，计算并输出其均值',
            codeTemplate: `import numpy as np

# 创建数组
arr = np.array([1, 2, 3, 4, 5])

# 计算均值


`,
            correctCode: `import numpy as np

arr = np.array([1, 2, 3, 4, 5])
print(arr.mean())`,
            explanation: '使用.mean()方法计算数组均值。'
          },
          {
            id: 'ex2-ch1',
            type: 'coding',
            question: '创建两个数组[1,2,3]和[4,5,6]，计算它们对应元素的和',
            codeTemplate: `import numpy as np

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])

# 计算a + b

`,
            correctCode: `import numpy as np

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
print(a + b)`,
            explanation: 'NumPy数组支持逐元素加法运算。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch1',
            type: 'multiple-choice',
            question: 'NumPy中创建全零数组的函数是？',
            options: ['np.empty()', 'np.zeros()', 'np.zero()', 'np.blank()'],
            correctAnswer: 'np.zeros()',
            points: 10
          },
          {
            id: 'q2-ch1',
            type: 'multiple-choice',
            question: 'np.array([1,2,3]) * 2 的结果是？',
            options: ['[1,2,3,1,2,3]', '[2,4,6]', '报错', '2'],
            correctAnswer: '[2,4,6]',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-2',
        title: 'Pandas数据处理',
        content: `# Pandas数据处理

## 什么是Pandas？

Pandas是Python中用于数据处理和分析的强大库，提供DataFrame数据结构。

## 创建DataFrame

\`\`\`python
import pandas as pd

data = {
    "姓名": ["小明", "小红", "小刚"],
    "年龄": [20, 22, 21],
    "成绩": [85, 92, 78]
}
df = pd.DataFrame(data)
print(df)
\`\`\`

## 查看数据

- head()：查看前几行
- describe()：统计摘要
- info()：数据类型信息

## 数据选择

\`\`\`python
print(df["姓名"])  # 选择单列
print(df[df["成绩"] >= 80])  # 条件筛选
\`\`\``,
        exercises: [
          {
            id: 'ex1-ch2',
            type: 'coding',
            question: '创建一个DataFrame，包含姓名和成绩两列，并查看前2行',
            codeTemplate: `import pandas as pd

data = {
    "姓名": ["小明", "小红", "小刚"],
    "成绩": [85, 92, 78]
}
df = pd.DataFrame(data)

# 查看前2行


`,
            correctCode: `import pandas as pd

data = {
    "姓名": ["小明", "小红", "小刚"],
    "成绩": [85, 92, 78]
}
df = pd.DataFrame(data)
print(df.head(2))`,
            explanation: '使用.head()方法查看DataFrame的前几行。'
          },
          {
            id: 'ex2-ch2',
            type: 'coding',
            question: '筛选成绩大于等于85的学生',
            codeTemplate: `import pandas as pd

df = pd.DataFrame({
    "姓名": ["小明", "小红", "小刚"],
    "成绩": [85, 92, 78]
})

# 筛选成绩>=85的学生


`,
            correctCode: `import pandas as pd

df = pd.DataFrame({
    "姓名": ["小明", "小红", "小刚"],
    "成绩": [85, 92, 78]
})

print(df[df["成绩"] >= 85])`,
            explanation: '使用布尔条件筛选DataFrame行。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch2',
            type: 'multiple-choice',
            question: 'Pandas中用于创建表格数据结构的函数是？',
            options: ['pd.Table()', 'pd.DataFrame()', 'pd.Grid()', 'pd.Sheet()'],
            correctAnswer: 'pd.DataFrame()',
            points: 10
          },
          {
            id: 'q2-ch2',
            type: 'multiple-choice',
            question: 'df.head(3) 返回什么？',
            options: ['最后3行', '前3行', '随机3行', '第3行'],
            correctAnswer: '前3行',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-3',
        title: '数据分组与聚合',
        content: `# 数据分组与聚合

## groupby分组

\`\`\`python
import pandas as pd

df = pd.DataFrame({
    "部门": ["销售", "技术", "销售", "技术"],
    "业绩": [80, 90, 85, 95]
})

# 按部门分组计算平均业绩
print(df.groupby("部门")["业绩"].mean())
\`\`\`

## 聚合函数

- count()：计数
- sum()：求和
- mean()：均值
- max()：最大值
- min()：最小值

## 多列分组

\`\`\`python
df.groupby(["列1", "列2"])["值"].agg(["mean", "sum"])
\`\`\``,
        exercises: [
          {
            id: 'ex1-ch3',
            type: 'coding',
            question: '按部门分组，计算每个部门的平均业绩',
            codeTemplate: `import pandas as pd

df = pd.DataFrame({
    "部门": ["销售", "技术", "销售", "技术"],
    "业绩": [80, 90, 85, 95]
})

# 按部门分组计算平均业绩


`,
            correctCode: `import pandas as pd

df = pd.DataFrame({
    "部门": ["销售", "技术", "销售", "技术"],
    "业绩": [80, 90, 85, 95]
})

print(df.groupby("部门")["业绩"].mean())`,
            explanation: '使用groupby()分组，然后使用.mean()计算均值。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch3',
            type: 'multiple-choice',
            question: 'groupby() 之后通常需要配合什么操作？',
            options: ['排序', '聚合函数', '筛选', '合并'],
            correctAnswer: '聚合函数',
            points: 10
          },
          {
            id: 'q2-ch3',
            type: 'multiple-choice',
            question: 'agg(["count", "mean"]) 的作用是？',
            options: ['只计算均值', '同时计算计数和均值', '计算总和', '计算中位数'],
            correctAnswer: '同时计算计数和均值',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'data-visualization',
    title: '数据可视化',
    description: '学习使用Matplotlib和Seaborn创建专业的数据可视化图表。',
    category: '学习阶段',
    difficulty: 'intermediate',
    estimatedHours: 6,
    thumbnail: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: 'Matplotlib基础',
        content: `# Matplotlib基础

## 折线图

\`\`\`python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 4, 6, 8, 10]

plt.plot(x, y)
plt.title("简单折线图")
plt.xlabel("X轴")
plt.ylabel("Y轴")
plt.show()
\`\`\`

## 柱状图

\`\`\`python
categories = ["A", "B", "C", "D"]
values = [10, 20, 15, 25]

plt.bar(categories, values)
plt.title("柱状图示例")
plt.show()
\`\`\``,
        exercises: [
          {
            id: 'ex1-ch1',
            type: 'coding',
            question: '绘制一个简单的折线图，x=[1,2,3,4], y=[1,4,9,16]',
            codeTemplate: `import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
y = [1, 4, 9, 16]

# 绘制折线图
plt.plot(x, y)
plt.title("平方数折线图")
plt.show()
print("图表已生成")
`,
            correctCode: `import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
y = [1, 4, 9, 16]

plt.plot(x, y)
plt.title("平方数折线图")
plt.show()
print("图表已生成")`,
            explanation: '使用plt.plot()绘制折线图。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch1',
            type: 'multiple-choice',
            question: 'plt.plot() 用于绘制什么图表？',
            options: ['柱状图', '折线图', '散点图', '饼图'],
            correctAnswer: '折线图',
            points: 10
          },
          {
            id: 'q2-ch1',
            type: 'multiple-choice',
            question: '设置图表标题使用哪个函数？',
            options: ['plt.label()', 'plt.title()', 'plt.header()', 'plt.name()'],
            correctAnswer: 'plt.title()',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-2',
        title: '常用图表类型',
        content: `# 常用图表类型

## 散点图

\`\`\`python
import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 4, 3, 5, 4]

plt.scatter(x, y)
plt.title("散点图示例")
plt.show()
\`\`\`

## 饼图

\`\`\`python
sizes = [25, 35, 20, 20]
labels = ["A", "B", "C", "D"]

plt.pie(sizes, labels=labels, autopct='%1.1f%%')
plt.title("饼图示例")
plt.show()
\`\`\`

## 子图

\`\`\`python
fig, (ax1, ax2) = plt.subplots(1, 2)
ax1.plot(x, y)
ax2.bar(x, y)
plt.show()
\`\`\``,
        exercises: [
          {
            id: 'ex1-ch2',
            type: 'coding',
            question: '绘制一个饼图，显示A:30%, B:40%, C:30%的比例',
            codeTemplate: `import matplotlib.pyplot as plt

sizes = [30, 40, 30]
labels = ["A", "B", "C"]

# 绘制饼图

plt.show()
print("饼图已生成")
`,
            correctCode: `import matplotlib.pyplot as plt

sizes = [30, 40, 30]
labels = ["A", "B", "C"]

plt.pie(sizes, labels=labels, autopct='%1.1f%%')
plt.show()
print("饼图已生成")`,
            explanation: '使用plt.pie()绘制饼图，autopct显示百分比。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch2',
            type: 'multiple-choice',
            question: 'plt.scatter() 用于绘制什么图表？',
            options: ['柱状图', '折线图', '散点图', '饼图'],
            correctAnswer: '散点图',
            points: 10
          },
          {
            id: 'q2-ch2',
            type: 'multiple-choice',
            question: 'plt.subplots(1, 2) 创建几个子图？',
            options: ['1个', '2个', '3个', '4个'],
            correctAnswer: '2个',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'data-cleaning',
    title: '数据清洗',
    description: '学习处理缺失值、异常值和重复值，确保数据质量。',
    category: '学习阶段',
    difficulty: 'intermediate',
    estimatedHours: 6,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: '缺失值处理',
        content: `# 缺失值处理

## 检测缺失值

\`\`\`python
import pandas as pd
import numpy as np

df = pd.DataFrame({
    "A": [1, 2, np.nan, 4],
    "B": [5, np.nan, 7, 8]
})

print(df.isnull())  # 检测缺失值
print(df.isnull().sum())  # 每列缺失值数量
\`\`\`

## 处理缺失值

- dropna()：删除包含缺失值的行
- fillna()：用指定值填充缺失值

\`\`\`python
df.dropna()  # 删除缺失值行
df.fillna(0)  # 用0填充
df.fillna(df.mean())  # 用均值填充
\`\`\``,
        exercises: [
          {
            id: 'ex1-ch1',
            type: 'coding',
            question: '检测并统计DataFrame中每列的缺失值数量',
            codeTemplate: `import pandas as pd
import numpy as np

df = pd.DataFrame({
    "A": [1, 2, np.nan, 4],
    "B": [5, np.nan, 7, 8]
})

# 检测并统计每列缺失值数量


`,
            correctCode: `import pandas as pd
import numpy as np

df = pd.DataFrame({
    "A": [1, 2, np.nan, 4],
    "B": [5, np.nan, 7, 8]
})

print(df.isnull().sum())`,
            explanation: '使用isnull().sum()统计每列缺失值数量。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch1',
            type: 'multiple-choice',
            question: '检测缺失值使用哪个方法？',
            options: ['df.isnull()', 'df.hasnull()', 'df.missing()', 'df.empty()'],
            correctAnswer: 'df.isnull()',
            points: 10
          },
          {
            id: 'q2-ch1',
            type: 'multiple-choice',
            question: 'df.fillna(df.mean()) 的作用是？',
            options: ['删除缺失值', '用列均值填充', '用0填充', '用前值填充'],
            correctAnswer: '用列均值填充',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-2',
        title: '异常值与重复值',
        content: `# 异常值与重复值

## 检测异常值（IQR方法）

\`\`\`python
Q1 = df["值"].quantile(0.25)
Q3 = df["值"].quantile(0.75)
IQR = Q3 - Q1
lower = Q1 - 1.5 * IQR
upper = Q3 + 1.5 * IQR

outliers = df[(df["值"] < lower) | (df["值"] > upper)]
\`\`\`

## 处理重复值

\`\`\`python
df.duplicated()  # 检测重复行
df.drop_duplicates()  # 删除重复行
\`\`\``,
        exercises: [
          {
            id: 'ex1-ch2',
            type: 'coding',
            question: '检测并删除DataFrame中的重复行',
            codeTemplate: `import pandas as pd

df = pd.DataFrame({
    "A": [1, 2, 1, 3],
    "B": [4, 5, 4, 6]
})

# 检测重复行
print("重复行:")
print(df.duplicated())

# 删除重复行
df_clean = 
print("去重后:")
print(df_clean)
`,
            correctCode: `import pandas as pd

df = pd.DataFrame({
    "A": [1, 2, 1, 3],
    "B": [4, 5, 4, 6]
})

print("重复行:")
print(df.duplicated())

df_clean = df.drop_duplicates()
print("去重后:")
print(df_clean)`,
            explanation: '使用drop_duplicates()删除重复行。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch2',
            type: 'multiple-choice',
            question: '检测重复行使用哪个方法？',
            options: ['df.is_duplicate()', 'df.duplicated()', 'df.repeat()', 'df.copy()'],
            correctAnswer: 'df.duplicated()',
            points: 10
          },
          {
            id: 'q2-ch2',
            type: 'multiple-choice',
            question: 'IQR方法的IQR代表什么？',
            options: ['平均值', '中位数', '四分位距', '标准差'],
            correctAnswer: '四分位距',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'sql-basics',
    title: 'SQL数据查询基础',
    description: '学习SQL语言，掌握数据查询和提取的核心技能。',
    category: '学习阶段',
    difficulty: 'beginner',
    estimatedHours: 6,
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: 'SQL基础查询',
        content: `# SQL基础查询

## SELECT语句

\`\`\`sql
SELECT column1, column2
FROM table_name;
\`\`\`

## WHERE条件筛选

\`\`\`sql
SELECT *
FROM employees
WHERE salary > 5000;
\`\`\`

## ORDER BY排序

\`\`\`sql
SELECT *
FROM employees
ORDER BY salary DESC;
\`\`\`

## LIMIT限制

\`\`\`sql
SELECT *
FROM employees
LIMIT 10;
\`\`\``,
        exercises: [
          {
            id: 'ex1-ch1',
            type: 'multiple-choice',
            question: 'SQL中，用于筛选条件的关键词是？',
            options: ['SELECT', 'WHERE', 'FROM', 'ORDER BY'],
            correctAnswer: 'WHERE',
            explanation: 'WHERE子句用于条件筛选。'
          },
          {
            id: 'ex2-ch1',
            type: 'multiple-choice',
            question: 'ORDER BY salary DESC 表示？',
            options: ['按salary升序', '按salary降序', '按salary筛选', '按salary分组'],
            correctAnswer: '按salary降序',
            explanation: 'DESC表示降序排列。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch1',
            type: 'multiple-choice',
            question: 'SELECT语句用于？',
            options: ['插入数据', '查询数据', '删除数据', '更新数据'],
            correctAnswer: '查询数据',
            points: 10
          },
          {
            id: 'q2-ch1',
            type: 'multiple-choice',
            question: 'LIMIT 5 表示？',
            options: ['跳过5行', '取前5行', '删除5行', '更新5行'],
            correctAnswer: '取前5行',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-2',
        title: 'SQL聚合与分组',
        content: `# SQL聚合与分组

## 聚合函数

- COUNT()：计数
- SUM()：求和
- AVG()：均值
- MAX()：最大值
- MIN()：最小值

## GROUP BY分组

\`\`\`sql
SELECT department, COUNT(*) as num
FROM employees
GROUP BY department;
\`\`\`

## HAVING筛选分组

\`\`\`sql
SELECT department, AVG(salary) as avg_salary
FROM employees
GROUP BY department
HAVING AVG(salary) > 5000;
\`\`\``,
        exercises: [
          {
            id: 'ex1-ch2',
            type: 'multiple-choice',
            question: 'GROUP BY的作用是？',
            options: ['排序数据', '分组数据', '筛选数据', '连接表'],
            correctAnswer: '分组数据',
            explanation: 'GROUP BY用于对数据进行分组。'
          },
          {
            id: 'ex2-ch2',
            type: 'multiple-choice',
            question: 'HAVING和WHERE的区别是？',
            options: ['没有区别', 'HAVING筛选分组，WHERE筛选行', 'WHERE筛选分组，HAVING筛选行', '都是筛选'],
            correctAnswer: 'HAVING筛选分组，WHERE筛选行',
            points: 10
          }
        ],
        quiz: [
          {
            id: 'q1-ch2',
            type: 'multiple-choice',
            question: 'COUNT(*) 用于？',
            options: ['求和', '计数', '求均值', '求最大值'],
            correctAnswer: '计数',
            points: 10
          },
          {
            id: 'q2-ch2',
            type: 'multiple-choice',
            question: '以下哪个是聚合函数？',
            options: ['SELECT', 'WHERE', 'SUM()', 'FROM'],
            correctAnswer: 'SUM()',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'web-scraping',
    title: '数据采集与爬虫基础',
    description: '学习使用Python进行网络数据采集和数据处理。',
    category: '学习阶段',
    difficulty: 'intermediate',
    estimatedHours: 8,
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: 'HTML解析基础',
        content: `# HTML解析基础

## BeautifulSoup简介

BeautifulSoup是Python中用于解析HTML和XML的库。

## 基本使用

\`\`\`python
from bs4 import BeautifulSoup

html = "<html><body><h1>标题</h1><p>段落</p></body></html>"
soup = BeautifulSoup(html, 'html.parser')

title = soup.find('h1').text
print(title)  # 输出: 标题
\`\`\`

## 查找元素

- find()：查找第一个匹配元素
- find_all()：查找所有匹配元素

\`\`\`python
soup.find_all('p')  # 查找所有p标签
soup.find_all(class_='item')  # 按class查找
\`\`\``,
        exercises: [
          {
            id: 'ex1-ch1',
            type: 'coding',
            question: '解析HTML并提取标题内容',
            codeTemplate: `from bs4 import BeautifulSoup

html = "<html><body><h1>数据分析</h1><p>学习Python</p></body></html>"
soup = BeautifulSoup(html, 'html.parser')

# 提取h1标签的文本


`,
            correctCode: `from bs4 import BeautifulSoup

html = "<html><body><h1>数据分析</h1><p>学习Python</p></body></html>"
soup = BeautifulSoup(html, 'html.parser')

print(soup.find('h1').text)`,
            explanation: '使用find()方法查找元素，用.text获取文本内容。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch1',
            type: 'multiple-choice',
            question: 'BeautifulSoup库用于？',
            options: ['Web开发', 'HTML解析', '数据库', '机器学习'],
            correctAnswer: 'HTML解析',
            points: 10
          },
          {
            id: 'q2-ch1',
            type: 'multiple-choice',
            question: 'find()和find_all()的区别是？',
            options: ['没有区别', 'find返回第一个，find_all返回所有', 'find_all返回第一个，find返回所有', '功能相同'],
            correctAnswer: 'find返回第一个，find_all返回所有',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-2',
        title: 'CSS选择器',
        content: `# CSS选择器

## CSS选择器语法

- .class：选择class为class的元素
- #id：选择id为id的元素
- tag：选择所有tag标签

## 使用选择器

\`\`\`python
soup.select('.item')  # class选择器
soup.select('#header')  # id选择器
soup.select('div p')  # 后代选择器
\`\`\`

## 提取数据

\`\`\`python
# 提取所有class为title的元素文本
titles = [t.text for t in soup.select('.title')]

# 提取href属性
links = [a['href'] for a in soup.select('a')]
\`\`\``,
        exercises: [
          {
            id: 'ex1-ch2',
            type: 'coding',
            question: '使用CSS选择器提取class为name的所有元素',
            codeTemplate: `from bs4 import BeautifulSoup

html = "<div class='name'>Alice</div><div class='name'>Bob</div>"
soup = BeautifulSoup(html, 'html.parser')

# 使用CSS选择器提取所有class为name的元素


`,
            correctCode: `from bs4 import BeautifulSoup

html = "<div class='name'>Alice</div><div class='name'>Bob</div>"
soup = BeautifulSoup(html, 'html.parser')

names = [n.text for n in soup.select('.name')]
print(names)`,
            explanation: '使用.select()方法配合CSS选择器语法。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch2',
            type: 'multiple-choice',
            question: 'CSS选择器中，选择class为container的元素使用？',
            options: ['.container', '#container', 'container', 'div.container'],
            correctAnswer: '.container',
            points: 10
          },
          {
            id: 'q2-ch2',
            type: 'multiple-choice',
            question: 'CSS选择器中，选择id为main的元素使用？',
            options: ['.main', '#main', 'main', 'div#main'],
            correctAnswer: '#main',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'business-analysis',
    title: '商务数据分析应用',
    description: '学习如何将数据分析技能应用于实际商业场景。',
    category: '学习阶段',
    difficulty: 'intermediate',
    estimatedHours: 8,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: '描述性统计分析',
        content: `# 描述性统计分析

## 集中趋势度量

- 均值（Mean）：数据的平均值
- 中位数（Median）：排序后位于中间的数
- 众数（Mode）：出现最多的数

## 离散程度度量

- 极差：最大值-最小值
- 方差：数据偏离均值的程度
- 标准差：方差的平方根

\`\`\`python
import numpy as np

data = [10, 15, 20, 25, 30]
print(f"均值: {np.mean(data)}")
print(f"中位数: {np.median(data)}")
print(f"标准差: {np.std(data)}")
\`\`\``,
        exercises: [
          {
            id: 'ex1-ch1',
            type: 'coding',
            question: '计算一组销售数据的均值和中位数',
            codeTemplate: `import numpy as np

sales = [120, 150, 180, 200, 170, 160, 190]

# 计算均值

# 计算中位数

print(f"均值: {mean_value}")
print(f"中位数: {median_value}")
`,
            correctCode: `import numpy as np

sales = [120, 150, 180, 200, 170, 160, 190]

mean_value = np.mean(sales)
median_value = np.median(sales)

print(f"均值: {mean_value}")
print(f"中位数: {median_value}")`,
            explanation: '使用numpy的mean()和median()函数计算。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch1',
            type: 'multiple-choice',
            question: '当数据存在异常值时，哪个指标更能代表集中趋势？',
            options: ['均值', '中位数', '众数', '极差'],
            correctAnswer: '中位数',
            points: 10
          },
          {
            id: 'q2-ch1',
            type: 'multiple-choice',
            question: '标准差用于衡量什么？',
            options: ['平均值', '中位数', '离散程度', '最大值'],
            correctAnswer: '离散程度',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-2',
        title: '业务分析实战',
        content: `# 业务分析实战

## 销售数据分析

\`\`\`python
import pandas as pd

# 按月统计销售额
monthly_sales = df.groupby('month')['sales'].sum()
print(monthly_sales)

# 按产品统计
product_sales = df.groupby('product')['sales'].agg(['sum', 'mean'])
print(product_sales)
\`\`\`

## 客户分析

\`\`\`python
# 客户留存分析
retention = df.groupby('cohort')['customer_id'].nunique()

# 客户价值分析
customer_value = df.groupby('customer_id')['revenue'].sum().sort_values(ascending=False)
\`\`\`

## 数据驱动决策

通过数据分析发现问题、验证假设、指导决策。`,
        exercises: [
          {
            id: 'ex1-ch2',
            type: 'coding',
            question: '按产品类别分组，计算每个类别的总销售额',
            codeTemplate: `import pandas as pd

df = pd.DataFrame({
    "category": ["电子产品", "服装", "电子产品", "食品"],
    "sales": [1000, 500, 800, 300]
})

# 按category分组计算总销售额


`,
            correctCode: `import pandas as pd

df = pd.DataFrame({
    "category": ["电子产品", "服装", "电子产品", "食品"],
    "sales": [1000, 500, 800, 300]
})

print(df.groupby('category')['sales'].sum())`,
            explanation: '使用groupby分组后用sum()聚合。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch2',
            type: 'multiple-choice',
            question: '销售数据分析的主要目的是？',
            options: ['存储数据', '发现问题、优化策略', '删除数据', '格式化数据'],
            correctAnswer: '发现问题、优化策略',
            points: 10
          },
          {
            id: 'q2-ch2',
            type: 'multiple-choice',
            question: '数据驱动决策的核心是？',
            options: ['个人经验', '猜测', '基于数据的证据', '领导意见'],
            correctAnswer: '基于数据的证据',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'machine-learning-intro',
    title: '机器学习入门',
    description: '学习机器学习基础算法，理解AI在数据分析中的应用。',
    category: '学习阶段',
    difficulty: 'advanced',
    estimatedHours: 10,
    thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: '机器学习基础概念',
        content: `# 机器学习基础概念

## 什么是机器学习？

机器学习是让计算机从数据中学习，并做出预测或决策的技术。

## 三种学习类型

1. **监督学习**：有标签数据，如分类、回归
2. **无监督学习**：无标签数据，如聚类、降维
3. **强化学习**：通过奖励机制学习

## 常见算法

- 线性回归：预测连续值
- 逻辑回归：二分类
- 决策树：分类与回归
- K-means：聚类`,
        exercises: [
          {
            id: 'ex1-ch1',
            type: 'multiple-choice',
            question: '以下哪个是有监督学习算法？',
            options: ['K-means聚类', '线性回归', 'PCA降维', '关联规则'],
            correctAnswer: '线性回归',
            explanation: '线性回归需要标签数据进行训练，属于监督学习。'
          },
          {
            id: 'ex2-ch1',
            type: 'multiple-choice',
            question: 'K-means属于哪种学习类型？',
            options: ['监督学习', '无监督学习', '强化学习', '迁移学习'],
            correctAnswer: '无监督学习',
            explanation: 'K-means不需要标签数据，属于无监督学习。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch1',
            type: 'multiple-choice',
            question: '机器学习的主要应用领域包括？',
            options: ['图像识别', '自然语言处理', '推荐系统', '以上全部'],
            correctAnswer: '以上全部',
            points: 10
          },
          {
            id: 'q2-ch1',
            type: 'multiple-choice',
            question: '线性回归用于预测什么类型的数据？',
            options: ['分类', '连续值', '聚类', '降维'],
            correctAnswer: '连续值',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-2',
        title: 'Scikit-learn快速入门',
        content: `# Scikit-learn快速入门

## 机器学习流程

1. 数据准备
2. 特征工程
3. 模型训练
4. 模型评估
5. 预测应用

## 简单示例

\`\`\`python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

# 分割数据
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# 训练模型
model = LinearRegression()
model.fit(X_train, y_train)

# 预测
y_pred = model.predict(X_test)

# 评估
mse = mean_squared_error(y_test, y_pred)
print(f"MSE: {mse}")
\`\`\``,
        exercises: [
          {
            id: 'ex1-ch2',
            type: 'coding',
            question: '使用Scikit-learn构建一个简单的线性回归模型',
            codeTemplate: `from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import numpy as np

X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

# 分割数据
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 训练模型


# 预测


print(f"预测结果: {y_pred}")
`,
            correctCode: `from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import numpy as np

X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LinearRegression()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print(f"预测结果: {y_pred}")`,
            explanation: '使用LinearRegression训练模型，predict()进行预测。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch2',
            type: 'multiple-choice',
            question: 'train_test_split的作用是？',
            options: ['训练模型', '分割数据集', '评估模型', '特征工程'],
            correctAnswer: '分割数据集',
            points: 10
          },
          {
            id: 'q2-ch2',
            type: 'multiple-choice',
            question: 'mean_squared_error用于？',
            options: ['分类评估', '回归评估', '聚类评估', '数据预处理'],
            correctAnswer: '回归评估',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'project-comprehensive',
    title: '综合项目实战',
    description: '通过完整项目，综合运用所学知识解决实际问题。',
    category: '实战阶段',
    difficulty: 'advanced',
    estimatedHours: 12,
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: '销售数据分析项目',
        content: `# 销售数据分析项目

## 项目目标

分析销售数据，识别销售趋势、产品表现和客户行为，为销售策略提供建议。

## 分析流程

1. **数据加载与探索**
   - 加载销售数据
   - 查看数据基本信息
   - 识别数据质量问题

2. **数据清洗**
   - 处理缺失值
   - 处理异常值
   - 数据类型转换

3. **数据分析**
   - 时间趋势分析
   - 产品分析
   - 客户分析
   - 地区分析

4. **数据可视化**
   - 销售趋势图
   - 产品对比图
   - 客户分布图

5. **结论与建议**
   - 总结关键发现
   - 提出改进建议`,
        exercises: [
          {
            id: 'ex1-ch1',
            type: 'coding',
            question: '完成销售数据分析：加载数据、计算月度总销售额',
            codeTemplate: `import pandas as pd
import numpy as np

# 模拟销售数据
data = {
    "month": ["1月", "1月", "2月", "2月", "3月", "3月"],
    "product": ["A", "B", "A", "B", "A", "B"],
    "sales": [100, 150, 120, 180, 140, 200]
}
df = pd.DataFrame(data)

# 按月分组计算总销售额


print(monthly_sales)
`,
            correctCode: `import pandas as pd
import numpy as np

data = {
    "month": ["1月", "1月", "2月", "2月", "3月", "3月"],
    "product": ["A", "B", "A", "B", "A", "B"],
    "sales": [100, 150, 120, 180, 140, 200]
}
df = pd.DataFrame(data)

monthly_sales = df.groupby('month')['sales'].sum()
print(monthly_sales)`,
            explanation: '使用groupby按月分组，计算销售额总和。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch1',
            type: 'multiple-choice',
            question: '数据分析项目的第一步是？',
            options: ['可视化', '清洗数据', '明确问题', '建模'],
            correctAnswer: '明确问题',
            points: 10
          },
          {
            id: 'q2-ch1',
            type: 'multiple-choice',
            question: '销售趋势分析通常使用什么图表？',
            options: ['饼图', '散点图', '折线图', '柱状图'],
            correctAnswer: '折线图',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-2',
        title: '客户画像分析项目',
        content: `# 客户画像分析项目

## 项目目标

通过数据分析构建客户画像，实现精准营销和客户分层。

## 分析维度

1. **基本信息**
   - 年龄分布
   - 性别比例
   - 地域分布

2. **消费行为**
   - 消费频率
   - 平均订单金额
   - 购买品类偏好

3. **价值分层**
   - 高价值客户
   - 中价值客户
   - 低价值客户

## 分析方法

\`\`\`python
# RFM分析
rfm = df.groupby('customer_id').agg({
    'recency': 'min',      # 最近一次购买距今天数
    'frequency': 'count',   # 购买次数
    'monetary': 'sum'       # 总消费金额
})
\`\`\``,
        exercises: [
          {
            id: 'ex1-ch2',
            type: 'coding',
            question: '计算每个客户的总消费金额和购买次数',
            codeTemplate: `import pandas as pd

df = pd.DataFrame({
    "customer_id": [1, 1, 2, 2, 2, 3],
    "amount": [100, 150, 200, 100, 150, 300]
})

# 按客户分组计算总金额和次数


print(customer_stats)
`,
            correctCode: `import pandas as pd

df = pd.DataFrame({
    "customer_id": [1, 1, 2, 2, 2, 3],
    "amount": [100, 150, 200, 100, 150, 300]
})

customer_stats = df.groupby('customer_id').agg({
    'amount': ['sum', 'count']
})
print(customer_stats)`,
            explanation: '使用agg对多个指标同时进行聚合计算。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch2',
            type: 'multiple-choice',
            question: 'RFM分析中的R代表？',
            options: ['消费金额', '购买频率', '最近购买时间', '客户等级'],
            correctAnswer: '最近购买时间',
            points: 10
          },
          {
            id: 'q2-ch2',
            type: 'multiple-choice',
            question: '客户画像分析的主要目的是？',
            options: ['增加数据', '精准营销', '删除客户', '格式化数据'],
            correctAnswer: '精准营销',
            points: 10
          }
        ]
      }
    ]
  }
];
