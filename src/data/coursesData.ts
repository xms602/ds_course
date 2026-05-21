
import { Course } from '@/types';

export const coursesData: Course[] = [
  {
    id: 'data-cleaning-project',
    title: '数据清洗实战',
    description: '掌握Pandas数据清洗的核心技能，包括处理缺失值、重复值、异常值等关键步骤。',
    category: 'Python数据分析实战',
    difficulty: 'beginner',
    estimatedHours: 0.5,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: '数据清洗实战',
        content: `# 数据清洗实战

## 项目概述
掌握Pandas数据清洗的核心技能，包括处理缺失值、重复值、异常值等关键步骤。

## 学习目标
- 学会处理缺失值
- 学会处理重复值
- 学会处理异常值
- 掌握数据类型转换

## 数据集说明
本项目使用 retail_orders.csv 数据集，包含零售订单信息。

## 核心技能
1. 缺失值检测与处理
2. 重复值检测与删除
3. 异常值识别与处理
4. 数据类型转换与标准化`,
        exercises: [
          {
            id: 'ex1-ch1-pandas',
            type: 'coding',
            question: '加载零售订单数据集并查看前5行数据',
            codeTemplate: `import pandas as pd

# 加载数据集
# 你的代码在这里

# 查看前5行数据
# 你的代码在这里
`,
            correctCode: `import pandas as pd

# 加载数据集
df = pd.read_csv('retail_orders.csv')

# 查看前5行数据
print(df.head())
`,
            explanation: '使用 pd.read_csv() 加载 CSV 文件，使用 head() 方法查看前几行数据。'
          },
          {
            id: 'ex2-ch1-pandas',
            type: 'coding',
            question: '检测并处理缺失值',
            codeTemplate: `import pandas as pd

df = pd.read_csv('retail_orders.csv')

# 检测缺失值
# 你的代码在这里

# 统计每列的缺失值数量
# 你的代码在这里

# 删除包含缺失值的行
# 你的代码在这里
`,
            correctCode: `import pandas as pd

df = pd.read_csv('retail_orders.csv')

# 检测缺失值
print(df.isnull())

# 统计每列的缺失值数量
print(df.isnull().sum())

# 删除包含缺失值的行
df_cleaned = df.dropna()
print(f"原始数据行数: {len(df)}")
print(f"清理后数据行数: {len(df_cleaned)}")
`,
            explanation: '使用 isnull() 检测缺失值，sum() 统计缺失值数量，dropna() 删除包含缺失值的行。'
          },
          {
            id: 'ex3-ch1-pandas',
            type: 'coding',
            question: '检测并删除重复值',
            codeTemplate: `import pandas as pd

df = pd.read_csv('retail_orders.csv')

# 检测重复值
# 你的代码在这里

# 统计重复值数量
# 你的代码在这里

# 删除重复值
# 你的代码在这里
`,
            correctCode: `import pandas as pd

df = pd.read_csv('retail_orders.csv')

# 检测重复值
print(df.duplicated())

# 统计重复值数量
print(f"重复值数量: {df.duplicated().sum()}")

# 删除重复值
df_unique = df.drop_duplicates()
print(f"原始数据行数: {len(df)}")
print(f"去重后数据行数: {len(df_unique)}")
`,
            explanation: '使用 duplicated() 检测重复值，sum() 统计重复值数量，drop_duplicates() 删除重复值。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch1-pandas',
            type: 'multiple-choice',
            question: '以下哪个方法用于检测缺失值？',
            options: ['isnull()', 'ismissing()', 'isna()', 'isempty()'],
            correctAnswer: 'isnull()',
            points: 10
          },
          {
            id: 'q2-ch1-pandas',
            type: 'multiple-choice',
            question: '删除包含缺失值的行使用哪个方法？',
            options: ['dropna()', 'fillna()', 'removena()', 'deletena()'],
            correctAnswer: 'dropna()',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'groupby-analysis-project',
    title: '分组聚合分析',
    description: '学习使用Pandas进行数据分组和聚合操作，从多个维度分析数据。',
    category: 'Python数据分析实战',
    difficulty: 'beginner',
    estimatedHours: 0.5,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: '分组聚合分析',
        content: `# 分组聚合分析

## 项目概述
学习使用Pandas进行数据分组和聚合操作，从多个维度分析数据。

## 学习目标
- 掌握 groupby 操作
- 学会使用聚合函数
- 理解多级分组
- 掌握数据透视表

## 数据集说明
本项目使用 retail_orders.csv 数据集，包含零售订单信息。

## 核心技能
1. 单列分组与聚合
2. 多列分组与聚合
3. 自定义聚合函数
4. 数据透视表应用`,
        exercises: [
          {
            id: 'ex1-ch2-pandas',
            type: 'coding',
            question: '按产品类别分组并计算总销售额',
            codeTemplate: `import pandas as pd

df = pd.read_csv('retail_orders.csv')

# 按产品类别分组并计算总销售额
# 你的代码在这里
`,
            correctCode: `import pandas as pd

df = pd.read_csv('retail_orders.csv')

# 按产品类别分组并计算总销售额
category_sales = df.groupby('category')['sales'].sum()
print(category_sales)
`,
            explanation: '使用 groupby() 对数据进行分组，然后使用 sum() 聚合函数计算总和。'
          },
          {
            id: 'ex2-ch2-pandas',
            type: 'coding',
            question: '按地区和产品类别分组，计算平均销售额',
            codeTemplate: `import pandas as pd

df = pd.read_csv('retail_orders.csv')

# 按地区和产品类别分组，计算平均销售额
# 你的代码在这里
`,
            correctCode: `import pandas as pd

df = pd.read_csv('retail_orders.csv')

# 按地区和产品类别分组，计算平均销售额
region_category_avg = df.groupby(['region', 'category'])['sales'].mean()
print(region_category_avg)
`,
            explanation: '使用 groupby() 对多列进行分组，然后使用 mean() 计算平均值。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch2-pandas',
            type: 'multiple-choice',
            question: 'groupby() 方法的作用是什么？',
            options: ['排序数据', '分组数据', '过滤数据', '合并数据'],
            correctAnswer: '分组数据',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'market-basket-project',
    title: '购物篮分析',
    description: '通过分析顾客的购买行为，发现商品之间的关联关系。',
    category: 'Python数据分析实战',
    difficulty: 'intermediate',
    estimatedHours: 0.75,
    thumbnail: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: '购物篮分析',
        content: `# 购物篮分析

## 项目概述
通过分析顾客的购买行为，发现商品之间的关联关系。

## 学习目标
- 理解购物篮分析原理
- 学会使用关联规则
- 掌握支持度、置信度计算
- 发现商品关联模式

## 数据集说明
本项目使用 market_basket.csv 数据集，包含顾客购买记录。

## 核心技能
1. 数据预处理
2. 关联规则挖掘
3. 支持度计算
4. 置信度计算`,
        exercises: [
          {
            id: 'ex1-ch3-pandas',
            type: 'coding',
            question: '加载购物篮数据并查看数据结构',
            codeTemplate: `import pandas as pd

# 加载购物篮数据
# 你的代码在这里

# 查看数据结构
# 你的代码在这里
`,
            correctCode: `import pandas as pd

# 加载购物篮数据
df = pd.read_csv('market_basket.csv')

# 查看数据结构
print(df.head())
print(df.info())
`,
            explanation: '加载购物篮数据并查看数据的基本信息。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch3-pandas',
            type: 'multiple-choice',
            question: '购物篮分析的主要目的是什么？',
            options: ['预测销售额', '发现商品关联关系', '分类客户', '检测异常值'],
            correctAnswer: '发现商品关联关系',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'customer-clustering-project',
    title: '客户聚类分析',
    description: '使用聚类分析将客户分成不同的群体，制定差异化营销策略。',
    category: 'Python数据分析实战',
    difficulty: 'intermediate',
    estimatedHours: 0.75,
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: '客户聚类分析',
        content: `# 客户聚类分析

## 项目概述
使用聚类分析将客户分成不同的群体，制定差异化营销策略。

## 学习目标
- 理解聚类分析原理
- 学会使用 K-Means 算法
- 掌握特征标准化
- 评估聚类效果

## 数据集说明
本项目使用 customer_features.csv 数据集，包含客户特征信息。

## 核心技能
1. 特征选择与标准化
2. K-Means 聚类
3. 聚类结果可视化
4. 客户分群解读`,
        exercises: [
          {
            id: 'ex1-ch4-pandas',
            type: 'coding',
            question: '加载客户特征数据并进行标准化',
            codeTemplate: `import pandas as pd
from sklearn.preprocessing import StandardScaler

# 加载客户特征数据
# 你的代码在这里

# 选择数值特征
# 你的代码在这里

# 标准化特征
# 你的代码在这里
`,
            correctCode: `import pandas as pd
from sklearn.preprocessing import StandardScaler

# 加载客户特征数据
df = pd.read_csv('customer_features.csv')

# 选择数值特征
features = df.select_dtypes(include=['float64', 'int64'])

# 标准化特征
scaler = StandardScaler()
features_scaled = scaler.fit_transform(features)
print("标准化后的特征形状:", features_scaled.shape)
`,
            explanation: '使用 StandardScaler 对特征进行标准化处理。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch4-pandas',
            type: 'multiple-choice',
            question: 'K-Means 聚类需要预先指定什么？',
            options: ['数据大小', '聚类数量K', '特征数量', '迭代次数'],
            correctAnswer: '聚类数量K',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'data-visualization-project',
    title: '数据可视化',
    description: '学习使用Matplotlib进行数据可视化。',
    category: 'Python数据分析实战',
    difficulty: 'intermediate',
    estimatedHours: 0.75,
    thumbnail: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: '数据可视化',
        content: `# 数据可视化

## 项目概述
学习使用Matplotlib进行数据可视化。

## 学习目标
- 掌握 Matplotlib 基础
- 学会绘制常见图表
- 理解数据可视化原则
- 制作专业图表

## 数据集说明
本项目使用 retail_orders.csv 数据集，包含零售订单信息。

## 核心技能
1. 折线图绘制
2. 柱状图绘制
3. 散点图绘制
4. 图表美化`,
        exercises: [
          {
            id: 'ex1-ch5-pandas',
            type: 'coding',
            question: '绘制销售额趋势折线图',
            codeTemplate: `import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('retail_orders.csv')

# 按日期分组计算销售额
# 你的代码在这里

# 绘制折线图
# 你的代码在这里
`,
            correctCode: `import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('retail_orders.csv')

# 按日期分组计算销售额
daily_sales = df.groupby('date')['sales'].sum()

# 绘制折线图
plt.figure(figsize=(12, 6))
plt.plot(daily_sales.index, daily_sales.values)
plt.title('每日销售额趋势')
plt.xlabel('日期')
plt.ylabel('销售额')
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()
`,
            explanation: '使用 matplotlib 绘制折线图展示销售额趋势。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch5-pandas',
            type: 'multiple-choice',
            question: 'Matplotlib 中用于显示图表的方法是？',
            options: ['show()', 'display()', 'render()', 'draw()'],
            correctAnswer: 'show()',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'ab-testing-project',
    title: 'A/B测试分析',
    description: '学习如何进行A/B测试分析，评估不同方案的效果差异。',
    category: 'Python数据分析实战',
    difficulty: 'intermediate',
    estimatedHours: 0.75,
    thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: 'A/B测试分析',
        content: `# A/B测试分析

## 项目概述
学习如何进行A/B测试分析，评估不同方案的效果差异。

## 学习目标
- 理解 A/B 测试原理
- 学会假设检验
- 掌握统计显著性判断
- 做出数据驱动决策

## 数据集说明
本项目使用 ab_test.csv 数据集，包含A/B测试结果。

## 核心技能
1. 数据分组统计
2. 假设检验
3. P值计算
4. 结果解读`,
        exercises: [
          {
            id: 'ex1-ch6-pandas',
            type: 'coding',
            question: '加载A/B测试数据并计算各组转化率',
            codeTemplate: `import pandas as pd

# 加载A/B测试数据
# 你的代码在这里

# 计算各组转化率
# 你的代码在这里
`,
            correctCode: `import pandas as pd

# 加载A/B测试数据
df = pd.read_csv('ab_test.csv')

# 计算各组转化率
conversion_rate = df.groupby('group')['converted'].mean()
print("各组转化率:")
print(conversion_rate)
`,
            explanation: '计算A/B测试中各组的转化率。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch6-pandas',
            type: 'multiple-choice',
            question: 'A/B测试的主要目的是什么？',
            options: ['比较两个版本的效果', '预测未来趋势', '分类数据', '检测异常值'],
            correctAnswer: '比较两个版本的效果',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'time-series-project',
    title: '时间序列分析',
    description: '学习时间序列分析的基本方法，发现数据的趋势和季节性模式。',
    category: 'Python数据分析实战',
    difficulty: 'intermediate',
    estimatedHours: 0.75,
    thumbnail: 'https://images.unsplash.com/photo-1495020685579-74a89269550?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: '时间序列分析',
        content: `# 时间序列分析

## 项目概述
学习时间序列分析的基本方法，发现数据的趋势和季节性模式。

## 学习目标
- 理解时间序列数据
- 学会趋势分析
- 掌握季节性分解
- 进行时间序列预测

## 数据集说明
本项目使用 time_series_sales.csv 数据集，包含时间序列销售数据。

## 核心技能
1. 时间序列数据处理
2. 趋势分析
3. 季节性分解
4. 简单预测`,
        exercises: [
          {
            id: 'ex1-ch7-pandas',
            type: 'coding',
            question: '加载时间序列数据并设置时间索引',
            codeTemplate: `import pandas as pd

# 加载时间序列数据
# 你的代码在这里

# 设置时间索引
# 你的代码在这里

# 查看数据
# 你的代码在这里
`,
            correctCode: `import pandas as pd

# 加载时间序列数据
df = pd.read_csv('time_series_sales.csv')

# 设置时间索引
df['date'] = pd.to_datetime(df['date'])
df.set_index('date', inplace=True)

# 查看数据
print(df.head())
print(f"数据时间范围: {df.index.min()} 到 {df.index.max()}")
`,
            explanation: '将日期列转换为时间索引，便于时间序列分析。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch7-pandas',
            type: 'multiple-choice',
            question: '时间序列数据的特点是什么？',
            options: ['数据之间相互独立', '数据按时间顺序排列', '数据没有规律', '数据随机分布'],
            correctAnswer: '数据按时间顺序排列',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'feature-engineering-project',
    title: '特征工程',
    description: '学习特征工程的核心技术，提高机器学习模型的性能。',
    category: 'Python数据分析实战',
    difficulty: 'advanced',
    estimatedHours: 1,
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: '特征工程',
        content: `# 特征工程

## 项目概述
学习特征工程的核心技术，提高机器学习模型的性能。

## 学习目标
- 理解特征工程重要性
- 学会特征选择
- 掌握特征构造
- 进行特征转换

## 数据集说明
本项目使用 customer_features.csv 数据集，包含客户特征信息。

## 核心技能
1. 特征选择方法
2. 特征构造技巧
3. 特征转换
4. 特征重要性评估`,
        exercises: [
          {
            id: 'ex1-ch8-pandas',
            type: 'coding',
            question: '计算特征之间的相关性',
            codeTemplate: `import pandas as pd

# 加载客户特征数据
# 你的代码在这里

# 计算相关性矩阵
# 你的代码在这里

# 查看与目标变量的相关性
# 你的代码在这里
`,
            correctCode: `import pandas as pd

# 加载客户特征数据
df = pd.read_csv('customer_features.csv')

# 计算相关性矩阵
correlation_matrix = df.corr()

# 查看与目标变量的相关性
print("相关性矩阵:")
print(correlation_matrix)
`,
            explanation: '使用 corr() 方法计算特征之间的相关性。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch8-pandas',
            type: 'multiple-choice',
            question: '特征工程的主要目的是什么？',
            options: ['增加数据量', '提高模型性能', '减少数据量', '简化数据'],
            correctAnswer: '提高模型性能',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'outlier-detection-project',
    title: '异常值检测',
    description: '学习异常值检测的方法，保证数据质量。',
    category: 'Python数据分析实战',
    difficulty: 'advanced',
    estimatedHours: 0.75,
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: '异常值检测',
        content: `# 异常值检测

## 项目概述
学习异常值检测的方法，保证数据质量。

## 学习目标
- 理解异常值概念
- 学会统计方法检测
- 掌握可视化检测
- 处理异常值

## 数据集说明
本项目使用 customer_features.csv 数据集，包含客户特征信息。

## 核心技能
1. 统计方法检测异常值
2. IQR 方法
3. Z-score 方法
4. 异常值处理策略`,
        exercises: [
          {
            id: 'ex1-ch9-pandas',
            type: 'coding',
            question: '使用 IQR 方法检测异常值',
            codeTemplate: `import pandas as pd

# 加载数据
# 你的代码在这里

# 计算 IQR
# 你的代码在这里

# 检测异常值
# 你的代码在这里
`,
            correctCode: `import pandas as pd

# 加载数据
df = pd.read_csv('customer_features.csv')

# 选择数值列
numeric_cols = df.select_dtypes(include=['float64', 'int64']).columns

# 计算 IQR
for col in numeric_cols:
    Q1 = df[col].quantile(0.25)
    Q3 = df[col].quantile(0.75)
    IQR = Q3 - Q1
    
    # 检测异常值
    outliers = df[(df[col] < Q1 - 1.5 * IQR) | (df[col] > Q3 + 1.5 * IQR)]
    print(f"{col} 列的异常值数量: {len(outliers)}")
`,
            explanation: '使用 IQR（四分位距）方法检测异常值。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch9-pandas',
            type: 'multiple-choice',
            question: 'IQR 表示什么？',
            options: ['平均数', '中位数', '四分位距', '标准差'],
            correctAnswer: '四分位距',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'data-merging-project',
    title: '多数据集合并',
    description: '学习如何合并多个数据集，整合不同来源的信息。',
    category: 'Python数据分析实战',
    difficulty: 'intermediate',
    estimatedHours: 0.75,
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: '多数据集合并',
        content: `# 多数据集合并

## 项目概述
学习如何合并多个数据集，整合不同来源的信息。

## 学习目标
- 理解数据合并类型
- 学会使用 merge
- 掌握 concat 操作
- 处理合并冲突

## 数据集说明
本项目使用 retail_orders.csv 数据集，包含零售订单信息。

## 核心技能
1. 内连接、外连接
2. 左连接、右连接
3. 数据拼接
4. 合并后数据处理`,
        exercises: [
          {
            id: 'ex1-ch10-pandas',
            type: 'coding',
            question: '合并两个数据集',
            codeTemplate: `import pandas as pd

# 创建两个示例数据集
df1 = pd.DataFrame({
    'customer_id': [1, 2, 3],
    'name': ['Alice', 'Bob', 'Charlie']
})

df2 = pd.DataFrame({
    'customer_id': [1, 2, 4],
    'order_amount': [100, 200, 300]
})

# 内连接合并
# 你的代码在这里

# 左连接合并
# 你的代码在这里
`,
            correctCode: `import pandas as pd

# 创建两个示例数据集
df1 = pd.DataFrame({
    'customer_id': [1, 2, 3],
    'name': ['Alice', 'Bob', 'Charlie']
})

df2 = pd.DataFrame({
    'customer_id': [1, 2, 4],
    'order_amount': [100, 200, 300]
})

# 内连接合并
inner_merge = pd.merge(df1, df2, on='customer_id', how='inner')
print("内连接结果:")
print(inner_merge)

# 左连接合并
left_merge = pd.merge(df1, df2, on='customer_id', how='left')
print("\\n左连接结果:")
print(left_merge)
`,
            explanation: '使用 merge() 方法合并两个数据集，支持不同的连接方式。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch10-pandas',
            type: 'multiple-choice',
            question: '内连接会保留哪些数据？',
            options: ['所有数据', '只保留左表数据', '只保留右表数据', '只保留两表都有的数据'],
            correctAnswer: '只保留两表都有的数据',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'data-analysis-overview',
    title: '数据分析全景与学习路径',
    description: '了解数据分析的价值、全景和学习路径，为后续学习建立认知基础。',
    category: '预习阶段',
    difficulty: 'beginner',
    estimatedHours: 6,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: '数据分析的价值与全景',
        content: `
# 数据分析的价值与全景

## 数据分析的核心价值

数据分析不仅仅是处理数字，更是"从中提炼出有价值的信息，为决策提供支持"的过程。它是一门集理论与实践于一体的学科，能够帮助你在数据驱动的世界中脱颖而出。

## 数据分析的完整流程

1. **数据收集**：从各种来源获取原始数据
2. **数据清洗**：处理缺失值、异常值，确保数据质量
3. **数据分析**：运用统计方法和工具进行分析
4. **数据可视化**：将分析结果转化为直观的图表
5. **报告与决策**：基于分析结果提供决策建议

## 数据分析的应用领域

- 市场营销：客户细分、市场趋势分析
- 金融：风险评估、投资决策
- 运营：流程优化、效率提升
- 人力资源：人才管理、绩效分析
        `,
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
          }
        ]
      },
      {
        id: 'chapter-2',
        title: '学习路径与阶段目标',
        content: `
# 学习路径与阶段目标

## 阶段一（入门/数据专员）

**核心技能**：
- Excel：透视表、公式、VBA
- PPT：数据展示与汇报

**能力目标**：
- 具备基本的数据处理能力
- 能够制作基础的数据可视化图表
- 能够进行简单的数据分析并撰写报告

## 阶段二（数据分析师）

**核心技能**：
- SQL：数据查询与提取
- 统计学基础：描述性统计、假设检验、回归分析
- 业务逻辑：深入理解业务流程

**能力目标**：
- 能够从数据库中提取和处理数据
- 能够运用统计方法进行分析
- 能够结合业务场景提供有价值的洞察

## 阶段三（进阶/数据科学家方向）

**核心技能**：
- 编程语言：Python 或 R
- 机器学习：常用算法、模型调参
- 高级数据处理与可视化

**能力目标**：
- 能够处理复杂的数据分析任务
- 能够构建和应用机器学习模型
- 能够解决更具挑战性的业务问题

## 阶段四（专家/细分领域）

**核心技能**：
- 大数据技术：Hadoop、Spark
- 深度学习：神经网络、NLP
- 专业领域知识

**能力目标**：
- 能够处理大规模数据
- 能够开发复杂的预测模型
- 成为特定领域的数据分析专家
        `,
        exercises: [
          {
            id: 'ex1-ch2',
            type: 'multiple-choice',
            question: '数据分析师阶段的核心技能不包括以下哪项？',
            options: ['SQL', '统计学基础', 'Python 深度学习', '业务逻辑'],
            correctAnswer: 'Python 深度学习',
            explanation: 'Python 深度学习属于进阶阶段的技能。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch2',
            type: 'multiple-choice',
            question: '入门阶段的核心工具是什么？',
            options: ['Python', 'SQL', 'Excel', 'Tableau'],
            correctAnswer: 'Excel',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-3',
        title: '选择合适的入门工具与资源',
        content: `
# 选择合适的入门工具与资源

## 推荐入门工具

### Excel
- **优势**：界面友好、功能强大、广泛应用
- **适用场景**：数据清洗、基础分析、简单可视化
- **学习重点**：数据透视表、常用函数、条件格式

### SQL
- **优势**：强大的数据查询能力、标准化语言
- **适用场景**：从数据库中提取和处理数据
- **学习重点**：SELECT 语句、JOIN 操作、聚合函数

### Python
- **优势**：库丰富、灵活性高、适合复杂分析
- **适用场景**：数据处理、机器学习、高级可视化
- **学习重点**：Pandas、NumPy、Matplotlib

## 推荐学习资源

### 在线课程
- Coursera：数据科学专项课程
- edX：数据分析基础
- B站：中文数据分析教程

### 实践平台
- Kaggle：数据集和竞赛
- GitHub：开源项目和代码
- 公开数据集：政府、学术机构提供的数据集

### 社区与论坛
- Stack Overflow：技术问题解答
- 知乎：数据分析相关讨论
- 专业论坛：数据分析社区
        `,
        exercises: [
          {
            id: 'ex1-ch3',
            type: 'multiple-choice',
            question: '对于初学者，推荐的最佳入门工具是什么？',
            options: ['Python', 'SQL', 'Excel', 'Tableau'],
            correctAnswer: 'Excel',
            explanation: 'Excel 界面友好，适合建立数据体感，是初学者的最佳选择。'
          },
          {
            id: 'ex2-ch3',
            type: 'coding',
            question: '编写一个简单的Python程序，打印"Hello, Data Analysis!"',
            codeTemplate: `# 你的代码在这里\n\nprint('Hello, Data Analysis!')`,
            correctCode: `print("Hello, Data Analysis!")`,

            explanation: '使用Python的print()函数输出字符串。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch3',
            type: 'multiple-choice',
            question: '以下哪个平台适合实践数据分析技能？',
            options: ['Coursera', 'Kaggle', 'Stack Overflow', '知乎'],
            correctAnswer: 'Kaggle',
            points: 10
          },
          {
            id: 'q2-ch3',
            type: 'multiple-choice',
            question: 'Python中用于数据处理的主要库是？',
            options: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
            correctAnswer: 'Pandas',
            points: 10
          },
          {
            id: 'q3-ch3',
            type: 'true-false',
            question: 'SQL是一种用于数据查询和处理的标准化语言。',
            correctAnswer: 'true',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'business-analytics-intro',
    title: '商务数据分析基础',
    description: '从零开始学习商务数据分析的核心概念和方法，掌握数据分析在商业决策中的应用。',
    category: '学习阶段',
    difficulty: 'beginner',
    estimatedHours: 12,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: '商务数据分析概述',
        content: `
# 商务数据分析概述

## 什么是商务数据分析？

商务数据分析是指通过收集、整理、分析和解释企业经营数据，以发现有价值的信息，帮助企业做出更明智的商业决策。

## 数据分析的核心价值

1. **数据驱动决策**：减少主观判断，提高决策准确性
2. **发现商机**：通过数据洞察市场趋势和客户需求
3. **优化运营**：识别流程瓶颈，提高效率
4. **风险管控**：提前预警潜在风险

## 数据分析的基本流程

1. 问题定义
2. 数据收集
3. 数据清洗
4. 数据分析
5. 数据可视化
6. 决策建议
        `,
        exercises: [
          {
            id: 'ex1-ch1',
            type: 'multiple-choice',
            question: '商务数据分析的核心目的是什么？',
            options: [
              '收集尽可能多的数据',
              '通过数据分析帮助企业做出更好的决策',
              '制作漂亮的图表',
              '展示技术能力'
            ],
            correctAnswer: '通过数据分析帮助企业做出更好的决策',
            explanation: '商务数据分析的最终目的是为了支持商业决策，创造商业价值。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch1',
            type: 'multiple-choice',
            question: '以下哪项不是数据分析的核心价值？',
            options: ['数据驱动决策', '发现商机', '增加数据存储', '风险管控'],
            correctAnswer: '增加数据存储',
            points: 10
          },
          {
            id: 'q2-ch1',
            type: 'true-false',
            question: '数据分析只需要技术人员参与，不需要业务人员。',
            correctAnswer: 'false',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-2',
        title: '数据收集与整理',
        content: `
# 数据收集与整理

## 数据来源

- 内部数据：销售记录、客户信息、运营数据
- 外部数据：市场调研、行业报告、公开数据

## 数据质量标准

- 准确性
- 完整性
- 一致性
- 时效性

## Excel 数据整理技巧

1. 数据筛选
2. 数据排序
3. 删除重复值
4. 缺失值处理
        `,
        exercises: [
          {
            id: 'ex1-ch2',
            type: 'multiple-choice',
            question: '以下哪项不属于数据质量标准？',
            options: ['准确性', '美观性', '完整性', '时效性'],
            correctAnswer: '美观性',
            explanation: '数据质量关注的是数据本身的可信度和可用性，而不是外观。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch2',
            type: 'multiple-choice',
            question: '销售记录属于什么类型的数据？',
            options: ['外部数据', '内部数据', '公开数据', '第三方数据'],
            correctAnswer: '内部数据',
            points: 10
          },
          {
            id: 'q2-ch2',
            type: 'true-false',
            question: '缺失值应该直接删除，不需要处理。',
            correctAnswer: 'false',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-3',
        title: '描述性统计分析',
        content: `
# 描述性统计分析

## 集中趋势度量

- 均值（Mean）
- 中位数（Median）
- 众数（Mode）

## 离散程度度量

- 极差
- 方差
- 标准差

## 常用统计图表

- 柱状图
- 折线图
- 饼图
- 散点图
        `,
        exercises: [
          {
            id: 'ex1-ch3',
            type: 'multiple-choice',
            question: '当数据存在异常值时，哪个指标更能代表数据的集中趋势？',
            options: ['均值', '中位数', '众数', '极差'],
            correctAnswer: '中位数',
            explanation: '中位数不受极端值影响，更稳健。'
          },
          {
            id: 'ex2-ch3',
            type: 'coding',
            question: '使用Python计算一组数据的均值、中位数和标准差',
            codeTemplate: `import numpy as np\n\ndata = [10, 15, 20, 25, 30, 35, 40]\n\n# 计算均值\n# 你的代码在这里\n\n# 计算中位数\n# 你的代码在这里\n\n# 计算标准差\n# 你的代码在这里\n\nprint("均值:", mean_value)\nprint("中位数:", median_value)\nprint("标准差:", std_value)`,
            correctCode: `import numpy as np\n\ndata = [10, 15, 20, 25, 30, 35, 40]\n\n# 计算均值\nmean_value = np.mean(data)\n\n# 计算中位数\nmedian_value = np.median(data)\n\n# 计算标准差\nstd_value = np.std(data)\n\nprint("均值:", mean_value)\nprint("中位数:", median_value)\nprint("标准差:", std_value)`,

            explanation: '使用NumPy库的mean()、median()和std()函数计算统计量。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch3',
            type: 'multiple-choice',
            question: '以下哪个指标用于衡量数据的离散程度？',
            options: ['均值', '中位数', '标准差', '众数'],
            correctAnswer: '标准差',
            points: 10
          },
          {
            id: 'q2-ch3',
            type: 'true-false',
            question: '饼图适合展示各部分占总体的比例。',
            correctAnswer: 'true',
            points: 10
          },
          {
            id: 'q3-ch3',
            type: 'multiple-choice',
            question: 'Python中，哪个库提供了丰富的统计函数？',
            options: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
            correctAnswer: 'NumPy',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'excel-for-business',
    title: 'Excel 商务数据分析实战',
    description: '掌握 Excel 高级功能在商务数据分析中的应用，包括数据透视表、函数、可视化等。',
    category: '学习阶段',
    difficulty: 'intermediate',
    estimatedHours: 16,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: '数据透视表入门',
        content: '# 数据透视表入门\n\n数据透视表是 Excel 中最强大的数据分析工具之一，它可以帮助你快速汇总、分析和可视化数据。通过数据透视表，你可以轻松地对大量数据进行分组、计算和比较，发现数据中的 patterns 和 trends。\n\n## 数据透视表的基本操作\n\n1. 选择数据范围\n2. 插入数据透视表\n3. 拖动字段到行、列、值区域\n4. 调整计算方式和格式\n\n## 数据透视表的高级功能\n\n- 切片器：快速筛选数据\n- 时间分组：按时间周期汇总数据\n- 计算字段：创建自定义计算\n- 条件格式：突出显示重要数据',
        exercises: [],
        quiz: []
      },
      {
        id: 'chapter-2',
        title: '常用数据分析函数',
        content: '# 常用数据分析函数\n\nExcel 提供了丰富的函数库，用于数据处理和分析。以下是一些常用的数据分析函数：\n\n## 查找与引用函数\n\n- VLOOKUP：垂直查找数据\n- HLOOKUP：水平查找数据\n- INDEX/MATCH：更灵活的查找方法\n\n## 统计函数\n\n- SUM：求和\n- AVERAGE：求平均值\n- COUNT：计数\n- SUMIF/COUNTIF：条件求和/计数\n- MAX/MIN：最大值/最小值\n\n## 逻辑函数\n\n- IF：条件判断\n- AND/OR：逻辑与/或\n- IFERROR：错误处理',
        exercises: [],
        quiz: []
      },
      {
        id: 'chapter-3',
        title: '数据可视化技巧',
        content: '# 数据可视化技巧\n\n创建专业的商务图表是数据分析的重要环节，它可以帮助你更有效地传达数据洞察。\n\n## 图表类型选择\n\n- 柱状图：比较不同类别的数据\n- 折线图：展示数据随时间的变化\n- 饼图：显示各部分占总体的比例\n- 散点图：分析两个变量之间的关系\n- 雷达图：多维度数据比较\n\n## 图表设计原则\n\n- 简洁明了：避免过多装饰\n- 重点突出：强调关键数据\n- 色彩协调：使用统一的色彩方案\n- 标题清晰：准确描述图表内容\n- 标签完整：确保数据可理解',
        exercises: [],
        quiz: []
      }
    ]
  },
  {
    id: 'sql-fundamentals',
    title: 'SQL 数据分析基础',
    description: '学习 SQL 语言，掌握数据查询、提取和处理的核心技能。',
    category: '学习阶段',
    difficulty: 'intermediate',
    estimatedHours: 14,
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: 'SQL 基础语法',
        content: '# SQL 基础语法\n\nSQL（Structured Query Language）是用于管理关系型数据库的标准语言。\n\n## SELECT 语句\n\n```sql\nSELECT column1, column2 FROM table_name;\n```\n\n## WHERE 子句\n\n```sql\nSELECT * FROM table_name WHERE condition;\n```\n\n## ORDER BY 子句\n\n```sql\nSELECT * FROM table_name ORDER BY column1 ASC/DESC;\n```\n\n## LIMIT 子句\n\n```sql\nSELECT * FROM table_name LIMIT 10;\n```',
        exercises: [],
        quiz: []
      },
      {
        id: 'chapter-2',
        title: 'SQL 高级查询',
        content: '# SQL 高级查询\n\n## JOIN 操作\n\n- INNER JOIN：返回两个表中匹配的记录\n- LEFT JOIN：返回左表所有记录和右表匹配的记录\n- RIGHT JOIN：返回右表所有记录和左表匹配的记录\n- FULL JOIN：返回两个表中所有记录\n\n## 聚合函数\n\n- SUM()：求和\n- AVG()：求平均值\n- COUNT()：计数\n- MAX()：最大值\n- MIN()：最小值\n\n## GROUP BY 子句\n\n```sql\nSELECT column1, SUM(column2) FROM table_name GROUP BY column1;\n```',
        exercises: [],
        quiz: []
      },
      {
        id: 'chapter-3',
        title: 'SQL 实战应用',
        content: '# SQL 实战应用\n\n## 数据清洗\n\n- 处理 NULL 值\n- 去除重复数据\n- 数据类型转换\n\n## 复杂查询\n\n- 子查询\n- 窗口函数\n- Common Table Expressions (CTEs)\n\n## 性能优化\n\n- 索引使用\n- 查询计划分析\n- 避免全表扫描',
        exercises: [],
        quiz: []
      }
    ]
  },
  {
    id: 'python-basics',
    title: 'Python 编程基础',
    description: '学习 Python 编程语言的基础知识，为数据分析打下基础。',
    category: '学习阶段',
    difficulty: 'beginner',
    estimatedHours: 12,
    thumbnail: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: 'Python 环境搭建',
        content: '# Python 环境搭建\n\n## 安装 Python\n- 从官网下载并安装 Python 3.8+\n- 配置环境变量\n- 验证安装\n\n## 开发工具选择\n- Jupyter Notebook：交互式数据分析环境\n- VS Code：代码编辑器\n- PyCharm：专业 Python IDE\n\n## 包管理\n- pip：Python 包安装工具\n- conda：环境管理工具\n- 虚拟环境创建与使用',
        exercises: [],
        quiz: []
      },
      {
        id: 'chapter-2',
        title: 'Python 基础语法',
        content: '# Python 基础语法\n\n## 基本数据类型\n- 整数 (int)\n- 浮点数 (float)\n- 字符串 (str)\n- 布尔值 (bool)\n\n## 数据结构\n- 列表 (list)\n- 元组 (tuple)\n- 字典 (dict)\n- 集合 (set)\n\n## 控制流\n- if-elif-else 语句\n- for 循环\n- while 循环\n- 异常处理\n\n## 函数定义\n- 基本函数\n-  lambda 函数\n- 函数参数\n- 函数返回值',
        exercises: [
          {
            id: 'ex1-ch2',
            type: 'coding',
            question: '编写一个函数，计算列表中所有元素的和',
            codeTemplate: `def calculate_sum(numbers):\n    # 你的代码在这里\n    pass\n\n# 测试\nprint(calculate_sum([1, 2, 3, 4, 5]))  # 应输出 15`,
            correctCode: `def calculate_sum(numbers):\n    total = 0\n    for num in numbers:\n        total += num\n    return total\n\n# 测试\nprint(calculate_sum([1, 2, 3, 4, 5]))  # 应输出 15`,

            explanation: '使用for循环遍历列表中的每个元素，将它们累加到total变量中，最后返回total值。'
          },
          {
            id: 'ex2-ch2',
            type: 'multiple-choice',
            question: '以下哪个不是Python的内置数据类型？',
            options: ['list', 'tuple', 'dict', 'array'],
            correctAnswer: 'array',
            explanation: 'array不是Python的内置数据类型，需要通过导入array模块使用。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch2',
            type: 'multiple-choice',
            question: 'Python中，如何定义一个空列表？',
            options: ['list = []', 'list = list()', 'both A and B', 'none of the above'],
            correctAnswer: 'both A and B',
            points: 10
          },
          {
            id: 'q2-ch2',
            type: 'true-false',
            question: 'Python中的字符串是不可变的。',
            correctAnswer: 'true',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-3',
        title: 'Python 面向对象编程',
        content: '# Python 面向对象编程\n\n## 类与对象\n- 类的定义\n- 对象的创建与使用\n- 构造函数\n\n## 继承与多态\n- 继承的实现\n- 方法重写\n- 多态\n\n## 常用内置类\n- 字符串操作\n- 列表操作\n- 字典操作',
        exercises: [
          {
            id: 'ex1-ch3',
            type: 'coding',
            question: '创建一个Person类，包含姓名和年龄属性，以及一个greet方法',
            codeTemplate: `class Person:\n    def __init__(self, name, age):\n        # 你的代码在这里\n        pass\n    \n    def greet(self):\n        # 你的代码在这里\n        pass\n\n# 测试\nperson = Person("Alice", 30)\nprint(person.greet())`,
            correctCode: `class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def greet(self):\n        return f"Hello, my name is {self.name} and I am {self.age} years old."\n\n# 测试\nperson = Person("Alice", 30)\nprint(person.greet())`,

            explanation: '创建Person类，在构造函数中初始化name和age属性，在greet方法中返回问候语。'
          },
          {
            id: 'ex2-ch3',
            type: 'coding',
            question: '创建一个Student类继承自Person类，添加student_id属性和study方法',
            codeTemplate: `class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def greet(self):\n        return f"Hello, my name is {self.name} and I am {self.age} years old."\n\nclass Student(Person):\n    def __init__(self, name, age, student_id):\n        # 你的代码在这里\n        pass\n    \n    def study(self, subject):\n        # 你的代码在这里\n        pass\n\n# 测试\nstudent = Student("Bob", 20, "S12345")\nprint(student.greet())\nprint(student.study("Math"))`,
            correctCode: `class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def greet(self):\n        return f"Hello, my name is {self.name} and I am {self.age} years old."\n\nclass Student(Person):\n    def __init__(self, name, age, student_id):\n        super().__init__(name, age)\n        self.student_id = student_id\n    \n    def study(self, subject):\n        return f"Student {self.student_id} {self.name} is studying {subject}."\n\n# 测试\nstudent = Student("Bob", 20, "S12345")\nprint(student.greet())\nprint(student.study("Math"))`,

            explanation: '创建Student类继承自Person类，使用super()调用父类构造函数，添加student_id属性和study方法。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch3',
            type: 'multiple-choice',
            question: 'Python中，类的构造函数名称是什么？',
            options: ['__init__', 'constructor', 'init', 'new'],
            correctAnswer: '__init__',
            points: 10
          },
          {
            id: 'q2-ch3',
            type: 'true-false',
            question: 'Python支持多重继承。',
            correctAnswer: 'true',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'python-data-analysis',
    title: 'Python 数据分析核心库',
    description: '学习 NumPy、Pandas 等 Python 数据分析核心库的使用。',
    category: '学习阶段',
    difficulty: 'intermediate',
    estimatedHours: 16,
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: 'NumPy 数值计算',
        content: '# NumPy 数值计算\n\nNumPy 是 Python 中用于科学计算的核心库，提供了高效的数组操作和数学函数。\n\n## 数组创建\n```python\nimport numpy as np\n\n# 创建数组\na = np.array([1, 2, 3])\nb = np.zeros((3, 3))\nc = np.ones((2, 2))\nd = np.arange(0, 10, 2)\ne = np.linspace(0, 1, 10)\n```\n\n## 数组操作\n- 索引和切片\n- 形状操作 (reshape, transpose)\n- 数学运算 (加减乘除)\n- 统计函数 (mean, std, max, min)\n- 广播机制',
        exercises: [
          {
            id: 'ex1-ch1',
            type: 'coding',
            question: '使用NumPy创建一个3x3的单位矩阵，并计算其行列式',
            codeTemplate: `import numpy as np\n\n# 创建3x3单位矩阵\n# 你的代码在这里\n\n# 计算行列式\n# 你的代码在这里\n\nprint("单位矩阵:")\nprint(matrix)\nprint("行列式:", determinant)`,
            correctCode: `import numpy as np\n\n# 创建3x3单位矩阵\nmatrix = np.eye(3)\n\n# 计算行列式\ndeterminant = np.linalg.det(matrix)\n\nprint("单位矩阵:")\nprint(matrix)\nprint("行列式:", determinant)`,

            explanation: '使用NumPy的eye()函数创建单位矩阵，使用linalg.det()函数计算行列式。'
          },
          {
            id: 'ex2-ch1',
            type: 'coding',
            question: '使用NumPy生成10个0到1之间的随机数，并计算它们的平均值和标准差',
            codeTemplate: `import numpy as np\n\n# 生成10个0到1之间的随机数\n# 你的代码在这里\n\n# 计算平均值和标准差\n# 你的代码在这里\n\nprint("随机数:", random_numbers)\nprint("平均值:", mean_value)\nprint("标准差:", std_value)`,
            correctCode: `import numpy as np\n\n# 生成10个0到1之间的随机数\nrandom_numbers = np.random.rand(10)\n\n# 计算平均值和标准差\nmean_value = np.mean(random_numbers)\nstd_value = np.std(random_numbers)\n\nprint("随机数:", random_numbers)\nprint("平均值:", mean_value)\nprint("标准差:", std_value)`,

            explanation: '使用NumPy的random.rand()函数生成随机数，使用mean()和std()函数计算统计量。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch1',
            type: 'multiple-choice',
            question: 'NumPy中，创建全零数组的函数是？',
            options: ['np.zeros()', 'np.empty()', 'np.zeros_like()', 'np.zero()'],
            correctAnswer: 'np.zeros()',
            points: 10
          },
          {
            id: 'q2-ch1',
            type: 'true-false',
            question: 'NumPy数组的形状可以通过reshape()方法修改。',
            correctAnswer: 'true',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-2',
        title: 'Pandas 数据处理',
        content: '# Pandas 数据处理\n\nPandas 是 Python 中用于数据处理和分析的强大库，提供了 DataFrame 数据结构。\n\n## DataFrame 创建\n```python\nimport pandas as pd\n\n# 从字典创建\ndata = {\n    "name": ["Alice", "Bob", "Charlie"],\n    "age": [25, 30, 35],\n    "city": ["New York", "London", "Paris"]\n}\ndf = pd.DataFrame(data)\n\n# 从 CSV 文件读取\ndf = pd.read_csv("data.csv")\n\n# 从 Excel 文件读取\ndf = pd.read_excel("data.xlsx")\n```\n\n## 数据操作\n- 数据清洗 (处理缺失值、重复值)\n- 数据筛选 (条件查询)\n- 数据分组和聚合 (groupby)\n- 数据合并 (merge, join, concat)\n- 数据排序和排名',
        exercises: [
          {
            id: 'ex1-ch2',
            type: 'coding',
            question: '使用Pandas创建一个DataFrame，并计算年龄的平均值',
            codeTemplate: `import pandas as pd\n\n# 创建DataFrame\ndata = {\n    "name": ["Alice", "Bob", "Charlie", "David"],\n    "age": [25, 30, 35, 40],\n    "city": ["New York", "London", "Paris", "Tokyo"]\n}\ndf = pd.DataFrame(data)\n\n# 计算年龄的平均值\n# 你的代码在这里\n\nprint("平均年龄:", average_age)`,
            correctCode: `import pandas as pd\n\n# 创建DataFrame\ndata = {\n    "name": ["Alice", "Bob", "Charlie", "David"],\n    "age": [25, 30, 35, 40],\n    "city": ["New York", "London", "Paris", "Tokyo"]\n}\ndf = pd.DataFrame(data)\n\n# 计算年龄的平均值\naverage_age = df["age"].mean()\n\nprint("平均年龄:", average_age)`,

            explanation: '使用Pandas的mean()方法计算age列的平均值。'
          },
          {
            id: 'ex2-ch2',
            type: 'multiple-choice',
            question: 'Pandas中，以下哪个方法用于处理缺失值？',
            options: ['dropna()', 'fillna()', 'both A and B', 'none of the above'],
            correctAnswer: 'both A and B',
            explanation: 'dropna()用于删除包含缺失值的行或列，fillna()用于填充缺失值。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch2',
            type: 'multiple-choice',
            question: 'Pandas中，如何选择DataFrame的某一列？',
            options: ['df["column_name"]', 'df.column_name', 'both A and B', 'none of the above'],
            correctAnswer: 'both A and B',
            points: 10
          },
          {
            id: 'q2-ch2',
            type: 'true-false',
            question: 'Pandas的DataFrame是不可变的。',
            correctAnswer: 'false',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-3',
        title: '数据可视化',
        content: '# 数据可视化\n\n学习使用 Matplotlib 和 Seaborn 进行数据可视化。\n\n## Matplotlib 基础\n```python\nimport matplotlib.pyplot as plt\n\n# 折线图\nplt.plot(x, y)\nplt.title("标题")\nplt.xlabel("X轴")\nplt.ylabel("Y轴")\nplt.show()\n\n# 柱状图\nplt.bar(x, y)\n\n# 散点图\nplt.scatter(x, y)\n```\n\n## Seaborn 高级可视化\n```python\nimport seaborn as sns\n\n# 热力图\nsns.heatmap(df.corr())\n\n# 箱线图\nsns.boxplot(x="category", y="value", data=df)\n\n# 分布图\nsns.distplot(df["value"])\n```\n\n## 交互式可视化\n- Plotly\n- Bokeh',
        exercises: [
          {
            id: 'ex1-ch3',
            type: 'coding',
            question: '使用Matplotlib绘制一个简单的折线图',
            codeTemplate: `import matplotlib.pyplot as plt\nimport numpy as np\n\n# 生成数据\nx = np.arange(0, 10, 0.1)\ny = np.sin(x)\n\n# 绘制折线图\n# 你的代码在这里\n\nplt.show()`,
            correctCode: `import matplotlib.pyplot as plt\nimport numpy as np\n\n# 生成数据\nx = np.arange(0, 10, 0.1)\ny = np.sin(x)\n\n# 绘制折线图\nplt.plot(x, y)\nplt.title("正弦函数")\nplt.xlabel("X轴")\nplt.ylabel("Y轴")\n\nplt.show()`,

            explanation: '使用Matplotlib的plot()函数绘制折线图，设置标题和坐标轴标签。'
          },
          {
            id: 'ex2-ch3',
            type: 'multiple-choice',
            question: '以下哪个库提供了更高级的统计可视化功能？',
            options: ['Matplotlib', 'Seaborn', 'Plotly', 'Bokeh'],
            correctAnswer: 'Seaborn',
            explanation: 'Seaborn是基于Matplotlib的高级统计可视化库，提供了更多统计图表类型。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch3',
            type: 'multiple-choice',
            question: 'Matplotlib中，哪个函数用于绘制柱状图？',
            options: ['plt.plot()', 'plt.bar()', 'plt.scatter()', 'plt.hist()'],
            correctAnswer: 'plt.bar()',
            points: 10
          },
          {
            id: 'q2-ch3',
            type: 'true-false',
            question: 'Seaborn是一个独立的可视化库，不依赖Matplotlib。',
            correctAnswer: 'false',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'python-machine-learning',
    title: 'Python 机器学习入门',
    description: '学习使用 Python 进行机器学习，掌握常用算法和模型。',
    category: '学习阶段',
    difficulty: 'advanced',
    estimatedHours: 20,
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: '机器学习基础',
        content: '# 机器学习基础\n\n## 机器学习概述\n- 监督学习 vs 无监督学习\n- 训练集、验证集、测试集\n- 过拟合与欠拟合\n- 模型评估指标\n\n## 数据预处理\n- 特征缩放\n- 特征编码\n- 特征选择\n- 数据平衡',
        exercises: [],
        quiz: []
      },
      {
        id: 'chapter-2',
        title: '常用机器学习算法',
        content: '# 常用机器学习算法\n\n## 线性模型\n- 线性回归\n- 逻辑回归\n\n## 树模型\n- 决策树\n- 随机森林\n- 梯度提升树\n\n## 聚类算法\n- K-means\n- 层次聚类\n- DBSCAN\n\n## 降维算法\n- PCA\n- t-SNE',
        exercises: [
          {
            id: 'ex1-ch2',
            type: 'multiple-choice',
            question: '以下哪种算法属于监督学习？',
            options: ['K-means聚类', '线性回归', 'PCA降维', 'DBSCAN聚类'],
            correctAnswer: '线性回归',
            explanation: '线性回归是一种监督学习算法，需要标签数据进行训练。'
          },
          {
            id: 'ex2-ch2',
            type: 'multiple-choice',
            question: '随机森林算法的主要优势是什么？',
            options: ['计算速度快', '不易过拟合', '对异常值敏感', '不需要参数调优'],
            correctAnswer: '不易过拟合',
            explanation: '随机森林通过集成多个决策树，降低了过拟合的风险。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch2',
            type: 'multiple-choice',
            question: '以下哪种算法用于分类问题？',
            options: ['线性回归', '逻辑回归', 'K-means', 'PCA'],
            correctAnswer: '逻辑回归',
            points: 10
          },
          {
            id: 'q2-ch2',
            type: 'true-false',
            question: '决策树算法容易过拟合。',
            correctAnswer: 'true',
            points: 10
          },
          {
            id: 'q3-ch2',
            type: 'multiple-choice',
            question: 'K-means算法的K值表示什么？',
            options: ['迭代次数', '聚类数量', '学习率', '特征维度'],
            correctAnswer: '聚类数量',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-3',
        title: 'Scikit-learn 实战',
        content: '# Scikit-learn 实战\n\n## Scikit-learn 基础\n```python\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_squared_error\n\n# 数据分割\nx_train, x_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\n\n# 模型训练\nmodel = LinearRegression()\nmodel.fit(x_train, y_train)\n\n# 模型预测\ny_pred = model.predict(x_test)\n\n# 模型评估\nmse = mean_squared_error(y_test, y_pred)\n```\n\n## 模型调优\n- 网格搜索\n- 交叉验证\n- 正则化\n\n## 模型部署\n- 模型保存与加载\n- 简单 API 构建',
        exercises: [
          {
            id: 'ex1-ch3',
            type: 'coding',
            question: '使用Scikit-learn构建一个简单的线性回归模型',
            codeTemplate: `from sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_squared_error\nimport numpy as np\n\n# 生成示例数据\nX = np.array([[1], [2], [3], [4], [5]])\ny = np.array([2, 4, 6, 8, 10])\n\n# 数据分割\n# 你的代码在这里\n\n# 模型训练\n# 你的代码在这里\n\n# 模型预测\n# 你的代码在这里\n\n# 模型评估\n# 你的代码在这里\n\nprint("均方误差:", mse)`,
            correctCode: `from sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.metrics import mean_squared_error\nimport numpy as np\n\n# 生成示例数据\nX = np.array([[1], [2], [3], [4], [5]])\ny = np.array([2, 4, 6, 8, 10])\n\n# 数据分割\nx_train, x_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n\n# 模型训练\nmodel = LinearRegression()\nmodel.fit(x_train, y_train)\n\n# 模型预测\ny_pred = model.predict(x_test)\n\n# 模型评估\nmse = mean_squared_error(y_test, y_pred)\n\nprint("均方误差:", mse)`,

            explanation: '使用Scikit-learn的train_test_split分割数据，LinearRegression训练模型，mean_squared_error评估模型性能。'
          },
          {
            id: 'ex2-ch3',
            type: 'multiple-choice',
            question: 'Scikit-learn中，哪个函数用于数据分割？',
            options: ['train_test_split', 'split_data', 'data_split', 'split_train_test'],
            correctAnswer: 'train_test_split',
            explanation: 'train_test_split是Scikit-learn中用于将数据集分割为训练集和测试集的函数。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch3',
            type: 'multiple-choice',
            question: '以下哪个不是Scikit-learn中的模型评估指标？',
            options: ['accuracy_score', 'mean_squared_error', 'r2_score', 'model_score'],
            correctAnswer: 'model_score',
            points: 10
          },
          {
            id: 'q2-ch3',
            type: 'true-false',
            question: '交叉验证可以减少模型过拟合的风险。',
            correctAnswer: 'true',
            points: 10
          },
          {
            id: 'q3-ch3',
            type: 'multiple-choice',
            question: 'Scikit-learn中，哪个模块用于模型选择？',
            options: ['sklearn.model_selection', 'sklearn.model_choice', 'sklearn.selection', 'sklearn.choice'],
            correctAnswer: 'sklearn.model_selection',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'data-collection-processing',
    title: '数据采集与处理',
    description: '学习 Python 爬虫技术和数据处理方法，掌握从网络获取和处理数据的能力。',
    category: '学习阶段',
    difficulty: 'intermediate',
    estimatedHours: 20,
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: '爬虫基础与 HTML 解析',
        content: `# 爬虫基础与 HTML 解析

## HTML 文档结构与文档树
HTML 文档是由标签组成的树状结构，了解其结构对于爬虫开发至关重要。

## BeautifulSoup 查找与遍历文档元素
BeautifulSoup 是 Python 中用于解析 HTML 和 XML 的库，提供了便捷的文档遍历和查找方法。

## CSS 语法查找元素实用指南
CSS 选择器是定位 HTML 元素的强大工具，掌握 CSS 选择器语法可以更高效地提取数据。

## Python 爬虫：HTML 文件解析与元素定位实战
通过实际案例学习如何使用 BeautifulSoup 和 CSS 选择器提取网页数据。`,
        exercises: [
          {
            id: 'ex1-ch1',
            type: 'coding',
            question: '使用 BeautifulSoup 解析 HTML 文档并提取指定元素',
            codeTemplate: `from bs4 import BeautifulSoup

# 示例 HTML
html = """
<html>
  <body>
    <div class="container">
      <h1>标题</h1>
      <p>段落1</p>
      <p>段落2</p>
      <ul>
        <li>项目1</li>
        <li>项目2</li>
      </ul>
    </div>
  </body>
</html>
"""

# 解析 HTML
soup = BeautifulSoup(html, 'html.parser')

# 提取标题
# 你的代码在这里

# 提取所有段落
# 你的代码在这里

# 提取所有列表项
# 你的代码在这里

print("标题:", title)
print("段落:", paragraphs)
print("列表项:", list_items) `,
            correctCode: `from bs4 import BeautifulSoup

# 示例 HTML
html = """
<html>
  <body>
    <div class="container">
      <h1>标题</h1>
      <p>段落1</p>
      <p>段落2</p>
      <ul>
        <li>项目1</li>
        <li>项目2</li>
      </ul>
    </div>
  </body>
</html>
"""

# 解析 HTML
soup = BeautifulSoup(html, 'html.parser')

# 提取标题
title = soup.find('h1').text

# 提取所有段落
paragraphs = [p.text for p in soup.find_all('p')]

# 提取所有列表项
list_items = [li.text for li in soup.find_all('li')]

print("标题:", title)
print("段落:", paragraphs)
print("列表项:", list_items) `,
            explanation: '使用 BeautifulSoup 解析 HTML 文档，find() 方法查找单个元素，find_all() 方法查找多个元素。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch1',
            type: 'multiple-choice',
            question: '以下哪个库用于解析 HTML 文档？',
            options: ['BeautifulSoup', 'Requests', 'Scrapy', 'Pandas'],
            correctAnswer: 'BeautifulSoup',
            points: 10
          },
          {
            id: 'q2-ch1',
            type: 'multiple-choice',
            question: 'CSS 选择器中，选择 class 为 container 的元素使用什么语法？',
            options: ['.container', '#container', 'container', 'div.container'],
            correctAnswer: '.container',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-2',
        title: 'Scrapy 框架基础',
        content: `# Scrapy 框架基础

## Scrapy 框架：你的高效网络数据采集引擎
Scrapy 是一个强大的 Python 爬虫框架，提供了完整的爬虫开发环境。

## Scrapy 框架架构图与工作流程图解
了解 Scrapy 的架构和工作流程，包括引擎、调度器、下载器、爬虫、管道等组件。

## Python Scrapy 爬虫框架系统讲义
系统学习 Scrapy 框架的使用方法，包括项目创建、爬虫编写、数据提取等。`,
        exercises: [
          {
            id: 'ex1-ch2',
            type: 'coding',
            question: '创建一个简单的 Scrapy 爬虫项目结构',
            codeTemplate: `# 请描述如何创建一个 Scrapy 爬虫项目并编写简单的爬虫

# 步骤1: 创建 Scrapy 项目
# scrapy startproject tutorial

# 步骤2: 创建爬虫
# cd tutorial
# scrapy genspider example example.com

# 步骤3: 编辑爬虫代码

# 请写出爬虫代码的基本结构 `,
            correctCode: `import scrapy

class ExampleSpider(scrapy.Spider):
    name = "example"
    allowed_domains = ["example.com"]
    start_urls = ["http://example.com/"]

    def parse(self, response):
        # 提取数据
        title = response.css("h1::text").get()
        yield {
            "title": title
        }

        # 跟进链接
        next_page = response.css("a::attr(href)").get()
        if next_page:
            yield response.follow(next_page, self.parse) `,
            explanation: 'Scrapy 爬虫的基本结构包括 name、allowed_domains、start_urls 和 parse 方法。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch2',
            type: 'multiple-choice',
            question: 'Scrapy 框架中，负责处理下载请求的组件是？',
            options: ['引擎', '调度器', '下载器', '爬虫'],
            correctAnswer: '下载器',
            points: 10
          },
          {
            id: 'q2-ch2',
            type: 'true-false',
            question: 'Scrapy 是一个基于 Twisted 的异步爬虫框架。',
            correctAnswer: 'true',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-3',
        title: 'Scrapy 实战项目',
        content: `# Scrapy 实战项目

## 项目 2 爬取天气预报数据 - 完整讲义
学习如何使用 Scrapy 爬取天气预报数据，包括数据提取、存储等。

## 项目 3 爬取旅游网站数据 - 完整讲义
通过爬取旅游网站数据，学习如何处理更复杂的网站结构。

## Scrapy 实战：爬取站酷网推荐作品
学习如何爬取动态网站和处理反爬虫机制。

## Scrapy 爬虫实训课：爬取广东科学技术职业学院新闻网站
通过实际案例学习如何爬取学校新闻网站的数据。`,
        exercises: [
          {
            id: 'ex1-ch3',
            type: 'coding',
            question: '编写一个 Scrapy 爬虫，爬取天气预报数据',
            codeTemplate: `import scrapy

class WeatherSpider(scrapy.Spider):
    name = "weather"
    allowed_domains = ["weather.com"]
    start_urls = ["https://weather.com/zh-CN/weather/today/l/city"]

    def parse(self, response):
        # 提取当前温度
        # 提取天气状况
        # 提取未来几天的天气预报
        # 你的代码在这里
        pass `,
            correctCode: `import scrapy

class WeatherSpider(scrapy.Spider):
    name = "weather"
    allowed_domains = ["weather.com"]
    start_urls = ["https://weather.com/zh-CN/weather/today/l/city"]

    def parse(self, response):
        # 提取当前温度
        current_temp = response.css(".CurrentConditions--tempValue--3KcTQ::text").get()
        # 提取天气状况
        weather_condition = response.css(".CurrentConditions--phraseValue--2xXSr::text").get()
        # 提取未来几天的天气预报
        forecasts = []
        for day in response.css(".DailyWeatherCard--DailyWeatherCard--2V1J6"):
            day_name = day.css(".DailyWeatherCard--daypartName--3VGlI::text").get()
            day_temp = day.css(".DailyWeatherCard--temp--1s3a7::text").get()
            forecasts.append({"day": day_name, "temp": day_temp})
        
        yield {
            "current_temp": current_temp,
            "weather_condition": weather_condition,
            "forecasts": forecasts
        } `,
            explanation: '使用 Scrapy 的 CSS 选择器提取天气预报数据，包括当前温度、天气状况和未来几天的预报。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch3',
            type: 'multiple-choice',
            question: 'Scrapy 中，用于存储爬取数据的组件是？',
            options: ['引擎', '调度器', '下载器', '管道'],
            correctAnswer: '管道',
            points: 10
          },
          {
            id: 'q2-ch3',
            type: 'multiple-choice',
            question: '以下哪种方法用于跟进链接？',
            options: ['follow()', 'click()', 'visit()', 'goto()'],
            correctAnswer: 'follow()',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-4',
        title: '高级爬虫技术',
        content: `# 高级爬虫技术

## Python 多线程编程与复杂网站数据爬取
学习使用多线程技术提高爬虫效率，处理复杂网站的数据采集。

## 网站树的爬取路径：深度优先与广度优先策略
了解不同的爬取策略，包括深度优先和广度优先算法。

## 网站图的爬取路径：复杂网站结构与算法优化，循环路径处理
学习如何处理复杂的网站结构，避免循环爬取和优化爬取路径。

## Selenium 自动化测试与爬虫实战讲义
学习使用 Selenium 处理动态网站和 JavaScript 渲染的页面。`,
        exercises: [
          {
            id: 'ex1-ch4',
            type: 'coding',
            question: '使用多线程爬取多个网页',
            codeTemplate: `import threading
import requests
from bs4 import BeautifulSoup

urls = [
    "https://example.com/page1",
    "https://example.com/page2",
    "https://example.com/page3"
]

results = []

def crawl(url):
    # 你的代码在这里
    pass

# 创建线程
threads = []
for url in urls:
    t = threading.Thread(target=crawl, args=(url,))
    threads.append(t)
    t.start()

# 等待所有线程完成
for t in threads:
    t.join()

print(results) `,
            correctCode: `import threading
import requests
from bs4 import BeautifulSoup

urls = [
    "https://example.com/page1",
    "https://example.com/page2",
    "https://example.com/page3"
]

results = []

def crawl(url):
    try:
        response = requests.get(url)
        soup = BeautifulSoup(response.text, "html.parser")
        title = soup.find("h1").text if soup.find("h1") else "No title"
        results.append({"url": url, "title": title})
    except Exception as e:
        results.append({"url": url, "error": str(e)})

# 创建线程
threads = []
for url in urls:
    t = threading.Thread(target=crawl, args=(url,))
    threads.append(t)
    t.start()

# 等待所有线程完成
for t in threads:
    t.join()

print(results) `,
            explanation: '使用多线程技术同时爬取多个网页，提高爬取效率。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch4',
            type: 'multiple-choice',
            question: '以下哪种爬取策略会先深入探索网站结构？',
            options: ['深度优先', '广度优先', '随机优先', '线性优先'],
            correctAnswer: '深度优先',
            points: 10
          },
          {
            id: 'q2-ch4',
            type: 'multiple-choice',
            question: 'Selenium 主要用于处理什么类型的网站？',
            options: ['静态网站', '动态网站', 'API接口', '所有网站'],
            correctAnswer: '动态网站',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-5',
        title: '数据处理与存储',
        content: `# 数据处理与存储

## Python CSV 文件操作详解：从入门到精通
学习如何使用 Python 读写和处理 CSV 文件，包括数据清洗和转换。

## 爬取数据的存储策略
了解不同的数据存储方式，包括 CSV、JSON、数据库等。

## 数据清洗与预处理
学习如何处理爬取的数据，包括去重、格式化、验证等。`,
        exercises: [
          {
            id: 'ex1-ch5',
            type: 'coding',
            question: '使用 Python 读写 CSV 文件',
            codeTemplate: `import csv

# 写入 CSV 文件
# 你的代码在这里

# 读取 CSV 文件
# 你的代码在这里 `,
            correctCode: `import csv

# 写入 CSV 文件
with open("data.csv", "w", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerow(["姓名", "年龄", "城市"])
    writer.writerow(["Alice", 25, "New York"])
    writer.writerow(["Bob", 30, "London"])
    writer.writerow(["Charlie", 35, "Paris"])

# 读取 CSV 文件
print("读取 CSV 文件:")
with open("data.csv", "r", encoding="utf-8") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row) `,
            explanation: '使用 csv 模块读写 CSV 文件，writerow() 写入行，reader 对象读取行。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch5',
            type: 'multiple-choice',
            question: 'Python 中，用于读写 CSV 文件的模块是？',
            options: ['csv', 'pandas', 'file', 'io'],
            correctAnswer: 'csv',
            points: 10
          },
          {
            id: 'q2-ch5',
            type: 'true-false',
            question: 'CSV 文件只能存储文本数据，不能存储数字。',
            correctAnswer: 'false',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'python-practical-series',
    title: 'Python 小白实战系列',
    description: '通过实际项目练习，掌握 Python 编程技巧和应用。',
    category: '学习阶段',
    difficulty: 'beginner',
    estimatedHours: 16,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: 'Python 常用函数大全',
        content: '# Python 常用函数大全\n\n## 内置函数\n- print()：打印输出\n- len()：获取长度\n- range()：生成序列\n- input()：接收输入\n- type()：获取类型\n- str()、int()、float()：类型转换\n- max()、min()：最大值、最小值\n- sum()：求和\n- sorted()：排序\n- enumerate()：枚举\n- zip()：组合\n\n## 字符串函数\n- upper()、lower()：大小写转换\n- strip()、lstrip()、rstrip()：去除空白\n- split()：分割字符串\n- join()：连接字符串\n- replace()：替换字符串\n- find()、index()：查找子串\n- startswith()、endswith()：判断前缀后缀\n\n## 列表函数\n- append()：添加元素\n- extend()：扩展列表\n- insert()：插入元素\n- remove()：移除元素\n- pop()：弹出元素\n- sort()：排序\n- reverse()：反转\n- index()：查找索引\n- count()：计数\n\n## 字典函数\n- keys()：获取键\n- values()：获取值\n- items()：获取键值对\n- get()：获取值\n- pop()：弹出键值对\n- update()：更新字典',
        exercises: [
          {
            id: 'ex1-ch1',
            type: 'coding',
            question: '使用Python内置函数计算列表的长度、最大值和平均值',
            codeTemplate: `numbers = [10, 20, 30, 40, 50]\n\n# 计算列表长度\n# 你的代码在这里\n\n# 计算最大值\n# 你的代码在这里\n\n# 计算平均值\n# 你的代码在这里\n\nprint("列表长度:", length)\nprint("最大值:", max_value)\nprint("平均值:", average) `,
            correctCode: `numbers = [10, 20, 30, 40, 50]\n\n# 计算列表长度\nlength = len(numbers)\n\n# 计算最大值\nmax_value = max(numbers)\n\n# 计算平均值\naverage = sum(numbers) / len(numbers)\n\nprint("列表长度:", length)\nprint("最大值:", max_value)\nprint("平均值:", average) `,
            explanation: '使用len()函数获取列表长度，max()函数获取最大值，sum()函数计算总和后除以长度得到平均值。'
          },
          {
            id: 'ex2-ch1',
            type: 'coding',
            question: '编写程序，对字符串进行大小写转换和处理',
            codeTemplate: 'text = "  Hello, Python Programming!  "\n\n# 去除首尾空格\n# 你的代码在这里\n\n# 转换为大写\n# 你的代码在这里\n\n# 转换为小写\n# 你的代码在这里\n\nprint("原字符串:", text)\nprint("去除空格后:", trimmed)\nprint("大写:", upper_text)\nprint("小写:", lower_text)',
            correctCode: 'text = "  Hello, Python Programming!  "\n\n# 去除首尾空格\ntrimmed = text.strip()\n\n# 转换为大写\nupper_text = trimmed.upper()\n\n# 转换为小写\nlower_text = trimmed.lower()\n\nprint("原字符串:", text)\nprint("去除空格后:", trimmed)\nprint("大写:", upper_text)\nprint("小写:", lower_text)',
            explanation: '使用strip()去除首尾空格，upper()转换为大写，lower()转换为小写。'
          },
          {
            id: 'ex3-ch1',
            type: 'coding',
            question: '操作列表：添加、删除、查找元素',
            codeTemplate: 'fruits = ["apple", "banana", "cherry"]\n\n# 添加orange到列表末尾\n# 你的代码在这里\n\n# 在索引1位置插入grape\n# 你的代码在这里\n\n# 删除cherry\n# 你的代码在这里\n\n# 查找banana的索引\n# 你的代码在这里\n\nprint("最终列表:", fruits)\nprint("banana的索引:", banana_index)',
            correctCode: 'fruits = ["apple", "banana", "cherry"]\n\n# 添加orange到列表末尾\nfruits.append("orange")\n\n# 在索引1位置插入grape\nfruits.insert(1, "grape")\n\n# 删除cherry\nfruits.remove("cherry")\n\n# 查找banana的索引\nbanana_index = fruits.index("banana")\n\nprint("最终列表:", fruits)\nprint("banana的索引:", banana_index)',
            explanation: '使用append()添加元素，insert()插入元素，remove()删除元素，index()查找元素索引。'
          },
          {
            id: 'ex4-ch1',
            type: 'coding',
            question: '操作字典：添加、删除、访问键值对',
            codeTemplate: 'student = {"name": "Alice", "age": 20}\n\n# 添加major键，值为Computer Science\n# 你的代码在这里\n\n# 删除age键\n# 你的代码在这里\n\n# 访问name键的值\n# 你的代码在这里\n\n# 使用get方法访问city键，如果不存在返回"Unknown"\n# 你的代码在这里\n\nprint("学生信息:", student)\nprint("姓名:", name_value)\nprint("城市:", city_value)',
            correctCode: 'student = {"name": "Alice", "age": 20}\n\n# 添加major键，值为Computer Science\nstudent["major"] = "Computer Science"\n\n# 删除age键\ndel student["age"]\n\n# 访问name键的值\nname_value = student["name"]\n\n# 使用get方法访问city键，如果不存在返回"Unknown"\ncity_value = student.get("city", "Unknown")\n\nprint("学生信息:", student)\nprint("姓名:", name_value)\nprint("城市:", city_value)',
            explanation: '使用键值对方式添加元素，del删除键值对，[]访问值，get()安全访问键值。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch1',
            type: 'multiple-choice',
            question: 'Python中，用于获取字符串长度的函数是？',
            options: ['length()', 'len()', 'size()', 'count()'],
            correctAnswer: 'len()',
            points: 10
          },
          {
            id: 'q2-ch1',
            type: 'multiple-choice',
            question: 'Python中，用于将字符串转换为小写的方法是？',
            options: ['lower()', 'casefold()', 'to_lower()', 'lowercase()'],
            correctAnswer: 'lower()',
            points: 10
          },
          {
            id: 'q3-ch1',
            type: 'multiple-choice',
            question: 'Python中，以下哪个方法用于在列表末尾添加元素？',
            options: ['add()', 'append()', 'insert()', 'extend()'],
            correctAnswer: 'append()',
            points: 10
          },
          {
            id: 'q4-ch1',
            type: 'multiple-choice',
            question: 'Python中，用于获取字典所有键的方法是？',
            options: ['keys()', 'values()', 'items()', 'get()'],
            correctAnswer: 'keys()',
            points: 10
          },
          {
            id: 'q5-ch1',
            type: 'true-false',
            question: 'Python中，字符串是可变对象，可以直接修改。',
            correctAnswer: 'false',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-2',
        title: 'Python 数据可视化',
        content: '# Python 数据可视化\n\n## 线性关系可视化\n使用 matplotlib 和 seaborn 库可视化线性关系，了解变量之间的相关性。\n\n```python\nimport matplotlib.pyplot as plt\nimport seaborn as sns\nimport numpy as np\n\n# 生成数据\nx = np.linspace(0, 10, 100)\ny = 2 * x + 1 + np.random.normal(0, 1, 100)\n\n# 绘制散点图\nsns.scatterplot(x=x, y=y)\nplt.title("线性关系可视化")\nplt.xlabel("X")\nplt.ylabel("Y")\nplt.show()\n\n# 绘制回归线\nsns.regplot(x=x, y=y)\nplt.title("线性回归")\nplt.xlabel("X")\nplt.ylabel("Y")\nplt.show()\n```',
        exercises: [
          {
            id: 'ex1-ch2',
            type: 'coding',
            question: '使用matplotlib绘制正弦函数曲线',
            codeTemplate: 'import matplotlib.pyplot as plt\nimport numpy as np\n\n# 生成数据\nx = np.linspace(0, 2*np.pi, 100)\ny = np.sin(x)\n\n# 绘制曲线\n# 你的代码在这里\n\nplt.show()',
            correctCode: 'import matplotlib.pyplot as plt\nimport numpy as np\n\n# 生成数据\nx = np.linspace(0, 2*np.pi, 100)\ny = np.sin(x)\n\n# 绘制曲线\nplt.plot(x, y)\nplt.title("正弦函数")\nplt.xlabel("X")\nplt.ylabel("sin(X)")\nplt.grid(True)\n\nplt.show()',
            explanation: '使用matplotlib的plot()函数绘制正弦函数曲线，设置标题、坐标轴标签和网格。'
          },
          {
            id: 'ex2-ch2',
            type: 'coding',
            question: '绘制柱状图显示不同商品的销量',
            codeTemplate: 'import matplotlib.pyplot as plt\n\n# 数据\nproducts = ["A", "B", "C", "D", "E"]\nsales = [120, 85, 150, 90, 110]\n\n# 绘制柱状图\n# 你的代码在这里\n\nplt.show()',
            correctCode: 'import matplotlib.pyplot as plt\n\n# 数据\nproducts = ["A", "B", "C", "D", "E"]\nsales = [120, 85, 150, 90, 110]\n\n# 绘制柱状图\nplt.bar(products, sales, color="skyblue")\nplt.title("商品销量统计")\nplt.xlabel("商品")\nplt.ylabel("销量")\nplt.xticks(rotation=45)\nplt.tight_layout()\n\nplt.show()',
            explanation: '使用plt.bar()绘制柱状图，设置颜色、标题、坐标轴标签，旋转x轴标签避免重叠。'
          },
          {
            id: 'ex3-ch2',
            type: 'coding',
            question: '绘制饼图展示数据占比',
            codeTemplate: 'import matplotlib.pyplot as plt\n\n# 数据\ncategories = ["食品", "住房", "交通", "娱乐", "其他"]\nexpenses = [35, 25, 15, 15, 10]\n\n# 绘制饼图\n# 你的代码在这里\n\nplt.show()',
            correctCode: 'import matplotlib.pyplot as plt\n\n# 数据\ncategories = ["食品", "住房", "交通", "娱乐", "其他"]\nexpenses = [35, 25, 15, 15, 10]\ncolors = ["#ff9999", "#66b3ff", "#99ff99", "#ffcc99", "#c2c2f0"]\n\n# 绘制饼图\nplt.pie(expenses, labels=categories, colors=colors, autopct="%1.1f%%", startangle=90)\nplt.title("月度支出分布")\nplt.axis("equal")  # 保证饼图为圆形\n\nplt.show()',
            explanation: '使用plt.pie()绘制饼图，设置标签、颜色、百分比显示，使用axis("equal")保证饼图为圆形。'
          },
          {
            id: 'ex4-ch2',
            type: 'coding',
            question: '绘制多个图表在同一画布上',
            codeTemplate: 'import matplotlib.pyplot as plt\nimport numpy as np\n\n# 生成数据\nx = np.linspace(0, 2*np.pi, 100)\ny1 = np.sin(x)\ny2 = np.cos(x)\n\n# 绘制子图\n# 你的代码在这里\n\nplt.tight_layout()\nplt.show()',
            correctCode: 'import matplotlib.pyplot as plt\nimport numpy as np\n\n# 生成数据\nx = np.linspace(0, 2*np.pi, 100)\ny1 = np.sin(x)\ny2 = np.cos(x)\n\n# 绘制子图\nfig, (ax1, ax2) = plt.subplots(2, 1, figsize=(8, 6))\n\nax1.plot(x, y1, color="blue")\nax1.set_title("正弦函数")\nax1.grid(True)\n\nax2.plot(x, y2, color="red")\nax2.set_title("余弦函数")\nax2.grid(True)\n\nplt.tight_layout()\nplt.show()',
            explanation: '使用plt.subplots()创建子图，在不同坐标轴上绘制不同函数，设置标题和网格。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch2',
            type: 'multiple-choice',
            question: 'Python中，用于绘制散点图的函数是？',
            options: ['plt.plot()', 'plt.scatter()', 'plt.bar()', 'plt.hist()'],
            correctAnswer: 'plt.scatter()',
            points: 10
          },
          {
            id: 'q2-ch2',
            type: 'multiple-choice',
            question: 'Matplotlib中，用于设置图表标题的方法是？',
            options: ['plt.title()', 'plt.label()', 'plt.caption()', 'plt.header()'],
            correctAnswer: 'plt.title()',
            points: 10
          },
          {
            id: 'q3-ch2',
            type: 'multiple-choice',
            question: '以下哪个库提供了更高级的统计可视化功能？',
            options: ['Matplotlib', 'Seaborn', 'Plotly', 'Bokeh'],
            correctAnswer: 'Seaborn',
            points: 10
          },
          {
            id: 'q4-ch2',
            type: 'true-false',
            question: 'plt.hist()用于绘制直方图。',
            correctAnswer: 'true',
            points: 10
          },
          {
            id: 'q5-ch2',
            type: 'multiple-choice',
            question: 'Matplotlib中，用于显示图表的函数是？',
            options: ['plt.display()', 'plt.show()', 'plt.render()', 'plt.draw()'],
            correctAnswer: 'plt.show()',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-3',
        title: 'Python 实用工具开发',
        content: `# Python 实用工具开发

## JSON数据调试工具
创建一个简单的JSON数据调试工具，用于格式化和验证JSON数据。

\`\`\`python
import json

def format_json(json_str):
    try:
        data = json.loads(json_str)
        return json.dumps(data, indent=2, ensure_ascii=False)
    except json.JSONDecodeError as e:
        return f'JSON格式错误: {e}'

def validate_json(json_str):
    try:
        json.loads(json_str)
        return 'JSON格式正确'
    except json.JSONDecodeError as e:
        return f'JSON格式错误: {e}'

# 测试
test_json = '{"name": "Alice", "age": 30, "city": "New York"}'
print('格式化结果:')
print(format_json(test_json))
print('\n验证结果:')
print(validate_json(test_json))
\`\`\`

## 电脑关机功能
使用Python实现电脑关机功能。

\`\`\`python
import os
import time

def shutdown_computer(delay=0):
    """
    关闭电脑
    delay: 延迟时间（秒）
    """
    if delay > 0:
        print(f'{delay}秒后关闭电脑...')
        time.sleep(delay)
    
    if os.name == 'nt':  # Windows
        os.system('shutdown /s /t 0')
    elif os.name == 'posix':  # Linux/macOS
        os.system('sudo shutdown -h now')

# 测试
# shutdown_computer(60)  # 60秒后关机
\`\`\`

## 互联网网速测试
使用Python测试互联网网速。

\`\`\`python
import speedtest

def test_internet_speed():
    st = speedtest.Speedtest()
    print('正在测试下载速度...')
    download_speed = st.download() / 1024 / 1024  # 转换为MB/s
    print('正在测试上传速度...')
    upload_speed = st.upload() / 1024 / 1024  # 转换为MB/s
    print('正在测试延迟...')
    ping = st.results.ping
    
    print(f'下载速度: {download_speed:.2f} MB/s')
    print(f'上传速度: {upload_speed:.2f} MB/s')
    print(f'延迟: {ping:.2f} ms')

# 测试
# test_internet_speed()
\`\`\`

## 打印日历
使用Python打印指定月份的日历。

\`\`\`python
import calendar

def print_calendar(year, month):
    """
    打印指定年份和月份的日历
    """
    cal = calendar.month(year, month)
    print(f'{year}年{month}月日历:')
    print(cal)

# 测试
print_calendar(2024, 5)  # 打印2024年5月日历
\`\`\``,
        exercises: [
          {
            id: 'ex1-ch3',
            type: 'coding',
            question: '创建一个函数，用于格式化JSON字符串',
            codeTemplate: "import json\n\ndef format_json(json_str):\n    \"\"\"\n    格式化JSON字符串\n    \"\"\"\n    # 你的代码在这里\n    pass\n\n# 测试\ntest_json = '{\"name\": \"Bob\", \"age\": 25, \"city\": \"London\"}'\nprint(format_json(test_json))",
            correctCode: "import json\n\ndef format_json(json_str):\n    \"\"\"\n    格式化JSON字符串\n    \"\"\"\n    try:\n        data = json.loads(json_str)\n        return json.dumps(data, indent=2, ensure_ascii=False)\n    except json.JSONDecodeError as e:\n        return f'JSON格式错误: {e}'\n\n# 测试\ntest_json = '{\"name\": \"Bob\", \"age\": 25, \"city\": \"London\"}'\nprint(format_json(test_json))",
            explanation: '使用json.loads()解析JSON字符串，然后使用json.dumps()重新格式化，添加缩进。'
          },
          {
            id: 'ex2-ch3',
            type: 'coding',
            question: '创建一个函数，打印指定年份和月份的日历',
            codeTemplate: "import calendar\n\ndef print_calendar(year, month):\n    \"\"\"\n    打印指定年份和月份的日历\n    \"\"\"\n    # 你的代码在这里\n    pass\n\n# 测试\nprint_calendar(2024, 6)",
            correctCode: "import calendar\n\ndef print_calendar(year, month):\n    \"\"\"\n    打印指定年份和月份的日历\n    \"\"\"\n    cal = calendar.month(year, month)\n    print(f'{year}年{month}月日历:')\n    print(cal)\n\n# 测试\nprint_calendar(2024, 6)",
            explanation: '使用calendar模块的month()函数生成日历字符串并打印。'
          },
          {
            id: 'ex3-ch3',
            type: 'coding',
            question: '创建一个简单的密码生成器',
            codeTemplate: "import random\nimport string\n\ndef generate_password(length=12):\n    \"\"\"\n    生成指定长度的随机密码\n    \"\"\"\n    # 你的代码在这里\n    pass\n\n# 测试\npassword = generate_password(12)\nprint(f'生成的密码: {password}')",
            correctCode: "import random\nimport string\n\ndef generate_password(length=12):\n    \"\"\"\n    生成指定长度的随机密码\n    \"\"\"\n    characters = string.ascii_letters + string.digits + string.punctuation\n    password = ''.join(random.choice(characters) for _ in range(length))\n    return password\n\n# 测试\npassword = generate_password(12)\nprint(f'生成的密码: {password}')",
            explanation: '使用random.choice()随机选择字符，结合string模块的字母、数字和标点符号生成密码。'
          },
          {
            id: 'ex4-ch3',
            type: 'coding',
            question: '创建一个温度转换工具',
            codeTemplate: "def celsius_to_fahrenheit(celsius):\n    \"\"\"\n    摄氏度转华氏度\n    \"\"\"\n    # 你的代码在这里\n    pass\n\ndef fahrenheit_to_celsius(fahrenheit):\n    \"\"\"\n    华氏度转摄氏度\n    \"\"\"\n    # 你的代码在这里\n    pass\n\n# 测试\nprint(f'0°C = {celsius_to_fahrenheit(0)}°F')\nprint(f'32°F = {fahrenheit_to_celsius(32)}°C')",
            correctCode: "def celsius_to_fahrenheit(celsius):\n    \"\"\"\n    摄氏度转华氏度\n    \"\"\"\n    return (celsius * 9/5) + 32\n\ndef fahrenheit_to_celsius(fahrenheit):\n    \"\"\"\n    华氏度转摄氏度\n    \"\"\"\n    return (fahrenheit - 32) * 5/9\n\n# 测试\nprint(f'0°C = {celsius_to_fahrenheit(0)}°F')\nprint(f'32°F = {fahrenheit_to_celsius(32)}°C')",
            explanation: '使用温度转换公式：F = (C × 9/5) + 32，C = (F - 32) × 5/9。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch3',
            type: 'multiple-choice',
            question: 'Python中，用于解析JSON字符串的函数是？',
            options: ['json.parse()', 'json.loads()', 'json.decode()', 'json.read()'],
            correctAnswer: 'json.loads()',
            points: 10
          },
          {
            id: 'q2-ch3',
            type: 'multiple-choice',
            question: 'Python中，calendar模块的哪个函数用于生成月份日历？',
            options: ['calendar()', 'month()', 'print_calendar()', 'get_calendar()'],
            correctAnswer: 'month()',
            points: 10
          },
          {
            id: 'q3-ch3',
            type: 'multiple-choice',
            question: 'Python中，用于生成随机数的模块是？',
            options: ['random', 'math', 'statistics', 'numpy'],
            correctAnswer: 'random',
            points: 10
          },
          {
            id: 'q4-ch3',
            type: 'true-false',
            question: 'json.dumps()用于将Python对象转换为JSON字符串。',
            correctAnswer: 'true',
            points: 10
          },
          {
            id: 'q5-ch3',
            type: 'multiple-choice',
            question: 'Python中，string模块的哪个常量包含所有字母？',
            options: ['string.letters', 'string.ascii_letters', 'string.alpha', 'string.chars'],
            correctAnswer: 'string.ascii_letters',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-4',
        title: 'Python 爬虫与数据处理',
        content: `# Python 爬虫与数据处理

## 构建自己的数据集
使用Python爬虫从网页获取数据，构建自己的数据集。

\`\`\`python
import requests
from bs4 import BeautifulSoup
import pandas as pd

def scrape_website(url):
    """
    爬取网页数据
    """
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # 根据网页结构提取数据
    # 这里以示例形式展示
    data = []
    for item in soup.select('.item'):
        title = item.select_one('.title').text.strip()
        price = item.select_one('.price').text.strip()
        data.append({'title': title, 'price': price})
    
    return data

# 测试
# url = 'https://example.com'
# data = scrape_website(url)
# df = pd.DataFrame(data)
# df.to_csv('data.csv', index=False)
# print('数据已保存到data.csv')
\`\`\`

## IP地址脱敏
使用Python对IP地址进行脱敏处理。

\`\`\`python
def mask_ip(ip):
    """
    对IP地址进行脱敏处理
    """
    parts = ip.split('.')
    if len(parts) == 4:
        return f'{parts[0]}.{parts[1]}.***.***'
    return ip

# 测试
test_ips = ['192.168.1.1', '10.0.0.1', '172.16.0.1']
for ip in test_ips:
    print(f'原始IP: {ip} -> 脱敏后: {mask_ip(ip)}')
\`\`\``,
        exercises: [
          {
            id: 'ex1-ch4',
            type: 'coding',
            question: '创建一个函数，对IP地址进行脱敏处理',
            codeTemplate: "def mask_ip(ip):\n    \"\"\"\n    对IP地址进行脱敏处理\n    \"\"\"\n    # 你的代码在这里\n    pass\n\n# 测试\ntest_ips = ['192.168.1.100', '10.0.0.50', '172.16.0.25']\nfor ip in test_ips:\n    print(f'原始IP: {ip} -> 脱敏后: {mask_ip(ip)}')",
            correctCode: "def mask_ip(ip):\n    \"\"\"\n    对IP地址进行脱敏处理\n    \"\"\"\n    parts = ip.split('.')\n    if len(parts) == 4:\n        return f'{parts[0]}.{parts[1]}.***.***'\n    return ip\n\n# 测试\ntest_ips = ['192.168.1.100', '10.0.0.50', '172.16.0.25']\nfor ip in test_ips:\n    print(f'原始IP: {ip} -> 脱敏后: {mask_ip(ip)}')",
            explanation: '将IP地址按点分割，保留前两部分，后两部分用***替换。'
          },
          {
            id: 'ex2-ch4',
            type: 'coding',
            question: '创建一个函数，验证邮箱格式',
            codeTemplate: "import re\n\ndef validate_email(email):\n    \"\"\"\n    验证邮箱格式是否正确\n    \"\"\"\n    # 你的代码在这里\n    pass\n\n# 测试\ntest_emails = ['test@example.com', 'invalid-email', 'user.name@domain.co.uk']\nfor email in test_emails:\n    result = '✓ 有效' if validate_email(email) else '✗ 无效'\n    print(f'{email}: {result}')",
            correctCode: "import re\n\ndef validate_email(email):\n    \"\"\"\n    验证邮箱格式是否正确\n    \"\"\"\n    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'\n    return re.match(pattern, email) is not None\n\n# 测试\ntest_emails = ['test@example.com', 'invalid-email', 'user.name@domain.co.uk']\nfor email in test_emails:\n    result = '✓ 有效' if validate_email(email) else '✗ 无效'\n    print(f'{email}: {result}')",
            explanation: '使用正则表达式re.match()验证邮箱格式是否符合标准。'
          },
          {
            id: 'ex3-ch4',
            type: 'coding',
            question: '创建一个函数，统计文本中单词出现频率',
            codeTemplate: "def count_word_frequency(text):\n    \"\"\"\n    统计文本中单词出现频率\n    \"\"\"\n    # 你的代码在这里\n    pass\n\n# 测试\nsample_text = 'Hello world! Hello Python. Python is great!'\nword_counts = count_word_frequency(sample_text)\nprint('单词频率统计:')\nfor word, count in word_counts.items():\n    print(f'{word}: {count}')",
            correctCode: "import re\nfrom collections import Counter\n\ndef count_word_frequency(text):\n    \"\"\"\n    统计文本中单词出现频率\n    \"\"\"\n    # 提取单词（转换为小写，去除标点）\n    words = re.findall(r'\\b\\w+\\b', text.lower())\n    # 统计频率\n    word_counts = Counter(words)\n    return dict(word_counts)\n\n# 测试\nsample_text = 'Hello world! Hello Python. Python is great!'\nword_counts = count_word_frequency(sample_text)\nprint('单词频率统计:')\nfor word, count in word_counts.items():\n    print(f'{word}: {count}')",
            explanation: '使用re.findall()提取单词，collections.Counter统计频率。'
          },
          {
            id: 'ex4-ch4',
            type: 'coding',
            question: '创建一个函数，对列表数据进行去重',
            codeTemplate: "def remove_duplicates(lst):\n    \"\"\"\n    去除列表中的重复元素，保持原有顺序\n    \"\"\"\n    # 你的代码在这里\n    pass\n\n# 测试\noriginal_list = [1, 2, 3, 2, 1, 4, 5, 4]\nunique_list = remove_duplicates(original_list)\nprint(f'原列表: {original_list}')\nprint(f'去重后: {unique_list}')",
            correctCode: "def remove_duplicates(lst):\n    \"\"\"\n    去除列表中的重复元素，保持原有顺序\n    \"\"\"\n    seen = set()\n    result = []\n    for item in lst:\n        if item not in seen:\n            seen.add(item)\n            result.append(item)\n    return result\n\n# 测试\noriginal_list = [1, 2, 3, 2, 1, 4, 5, 4]\nunique_list = remove_duplicates(original_list)\nprint(f'原列表: {original_list}')\nprint(f'去重后: {unique_list}')",
            explanation: '使用集合记录已出现的元素，遍历原列表，只添加首次出现的元素。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch4',
            type: 'multiple-choice',
            question: 'Python中，用于发送HTTP请求的库是？',
            options: ['urllib', 'requests', 'http', 'httplib'],
            correctAnswer: 'requests',
            points: 10
          },
          {
            id: 'q2-ch4',
            type: 'multiple-choice',
            question: 'BeautifulSoup库用于什么？',
            options: ['数据可视化', '网页解析', '网络请求', '数据存储'],
            correctAnswer: '网页解析',
            points: 10
          },
          {
            id: 'q3-ch4',
            type: 'multiple-choice',
            question: 'Python中，用于正则表达式的模块是？',
            options: ['regex', 're', 'pattern', 'match'],
            correctAnswer: 're',
            points: 10
          },
          {
            id: 'q4-ch4',
            type: 'true-false',
            question: 'requests.get()用于发送HTTP GET请求。',
            correctAnswer: 'true',
            points: 10
          },
          {
            id: 'q5-ch4',
            type: 'multiple-choice',
            question: 'collections模块中，哪个类用于统计元素频率？',
            options: ['defaultdict', 'Counter', 'OrderedDict', 'namedtuple'],
            correctAnswer: 'Counter',
            points: 10
          }
        ]
      }
    ]
  },
  {
    id: 'data-visualization',
    title: '数据可视化与商业报告',
    description: '学习如何将分析结果转化为有说服力的可视化报告，提升数据沟通能力。',
    category: '学习阶段',
    difficulty: 'intermediate',
    estimatedHours: 10,
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: '数据可视化原则',
        content: '# 数据可视化原则\n\n## 核心原则\n- 简洁：去除不必要的装饰\n- 准确：正确表达数据含义\n- 有洞察力：突出重要信息\n- 美观：使用合适的色彩和布局\n\n## 常见错误\n- 歪曲数据：使用不当的图表类型\n- 信息过载：包含过多数据\n- 缺乏上下文：没有足够的说明\n- 色彩滥用：使用过多或不当的色彩',
        exercises: [],
        quiz: []
      },
      {
        id: 'chapter-2',
        title: '商业报告撰写',
        content: '# 商业报告撰写\n\n## 报告结构\n1. **执行摘要**：简要总结关键发现和建议\n2. **问题定义**：明确分析的背景和目标\n3. **数据说明**：描述数据来源和处理方法\n4. **分析过程**：详细介绍分析方法和步骤\n5. **结果展示**：通过图表展示分析结果\n6. **结论与建议**：基于分析结果提供行动建议\n7. **附录**：包含详细数据和技术细节\n\n## 报告技巧\n- 面向受众：根据读者背景调整内容深度\n- 重点突出：强调关键发现和建议\n- 逻辑清晰：确保报告结构合理，论证充分\n- 语言简洁：使用专业但易懂的语言',
        exercises: [],
        quiz: []
      }
    ]
  },
  {
    id: 'project-practice',
    title: '数据分析项目实战',
    description: '通过真实项目实践，巩固所学知识，提升实战能力。',
    category: '复习与提升阶段',
    difficulty: 'advanced',
    estimatedHours: 24,
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: '项目实战：销售数据分析',
        content: '# 项目实战：销售数据分析\n\n## 项目目标\n分析销售数据，识别销售趋势、产品表现和客户行为，为销售策略提供建议。\n\n## 数据准备\n- 数据来源：销售记录数据库\n- 数据字段：日期、产品、客户、金额、地区等\n- 数据清洗：处理缺失值、异常值\n\n## 分析维度\n- 时间趋势：月度/季度销售变化\n- 产品分析：各产品销售表现\n- 客户分析：客户购买行为\n- 地区分析：不同地区销售情况\n\n## 分析方法\n- 描述性统计\n- 趋势分析\n- 相关性分析\n- 聚类分析\n\n## 结果可视化\n- 销售趋势图\n- 产品销售对比图\n- 客户细分图\n- 地区销售热力图\n\n## 结论与建议\n基于分析结果，提出优化销售策略的具体建议。',
        exercises: [
          {
            id: 'ex1-ch1',
            type: 'coding',
            question: '使用Pandas分析销售数据，计算每月销售总额',
            codeTemplate: 'import pandas as pd\nimport numpy as np\nfrom datetime import datetime\n\n# 生成示例销售数据\ndates = pd.date_range(start="2023-01-01", end="2023-12-31", freq="D")\ndata = {\n    "date": dates,\n    "sales": np.random.randint(1000, 10000, size=len(dates))\n}\ndf = pd.DataFrame(data)\n\n# 将日期转换为月份\n# 你的代码在这里\n\n# 计算每月销售总额\n# 你的代码在这里\n\nprint(monthly_sales)',
            correctCode: 'import pandas as pd\nimport numpy as np\nfrom datetime import datetime\n\n# 生成示例销售数据\ndates = pd.date_range(start="2023-01-01", end="2023-12-31", freq="D")\ndata = {\n    "date": dates,\n    "sales": np.random.randint(1000, 10000, size=len(dates))\n}\ndf = pd.DataFrame(data)\n\n# 将日期转换为月份\ndf["month"] = df["date"].dt.to_period("M")\n\n# 计算每月销售总额\nmonthly_sales = df.groupby("month")["sales"].sum()\n\nprint(monthly_sales)',
            explanation: '使用Pandas的dt.to_period()方法将日期转换为月份，然后使用groupby()和sum()计算每月销售总额。'
          }
        ],
        quiz: [
          {
            id: 'q1-ch1',
            type: 'multiple-choice',
            question: 'Pandas中，如何将日期列转换为月份？',
            options: ['df["date"].dt.month', 'df["date"].dt.to_period("M")', 'df["date"].month', 'df["date"].to_month()'],
            correctAnswer: 'df["date"].dt.to_period("M")',
            points: 10
          },
          {
            id: 'q2-ch1',
            type: 'multiple-choice',
            question: 'Pandas中，groupby()之后通常需要使用什么方法进行聚合？',
            options: ['sum()', 'count()', 'mean()', 'all of the above'],
            correctAnswer: 'all of the above',
            points: 10
          }
        ]
      },
      {
        id: 'chapter-2',
        title: '项目实战：客户流失预测',
        content: '# 项目实战：客户流失预测\n\n## 项目目标\n建立客户流失预测模型，识别可能流失的客户，制定 retention 策略。\n\n## 数据准备\n- 数据来源：客户数据库\n- 数据字段：客户基本信息、消费行为、服务使用情况等\n- 数据预处理：特征工程、数据标准化\n\n## 分析方法\n- 探索性数据分析\n- 特征选择\n- 机器学习模型：逻辑回归、决策树、随机森林\n- 模型评估：准确率、召回率、F1 分数\n\n## 结果应用\n- 客户流失风险评分\n- 针对性 retention 策略\n- 模型部署与监控',
        exercises: [],
        quiz: []
      },
      {
        id: 'chapter-3',
        title: '项目实战：市场趋势分析',
        content: '# 项目实战：市场趋势分析\n\n## 项目目标\n分析市场数据，识别行业趋势和竞争格局，为市场策略提供依据。\n\n## 数据来源\n- 行业报告\n- 市场调研数据\n- 社交媒体数据\n- 竞争对手数据\n\n## 分析方法\n- 文本分析：挖掘市场热点\n- 时间序列分析：预测市场趋势\n- 竞争分析：对比竞争对手表现\n- 机会识别：发现市场空白\n\n## 结果输出\n- 市场趋势报告\n- 竞争分析矩阵\n- 机会与威胁分析\n- 战略建议',
        exercises: [],
        quiz: []
      }
    ]
  },
  {
    id: 'continuous-learning',
    title: '持续学习与职业发展',
    description: '学习如何构建个人知识体系，持续提升数据分析能力，规划职业发展。',
    category: '复习与提升阶段',
    difficulty: 'intermediate',
    estimatedHours: 8,
    thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: '构建个人知识体系',
        content: '# 构建个人知识体系\n\n## 知识整理方法\n- 笔记系统：使用 Markdown 或专业笔记工具\n- 思维导图：梳理知识结构和关联\n- 知识卡片：记录关键概念和公式\n- 学习日志：跟踪学习进度和收获\n\n## 知识输出\n- 技术博客：分享学习心得和实践经验\n- 开源项目：贡献代码和解决方案\n- 演讲分享：在社区或公司内分享知识\n- 教学相长：辅导他人学习，巩固自己的知识\n\n## 知识管理工具\n- Notion：综合知识管理\n- Obsidian：连接知识点\n- GitHub：代码和项目管理\n- Medium：发布技术文章',
        exercises: [],
        quiz: []
      },
      {
        id: 'chapter-2',
        title: '专业认证与备考指南',
        content: '# 专业认证与备考指南\n\n## 常见数据分析认证\n- CDA（Certified Data Analyst）\n- Google Data Analytics Professional Certificate\n- Microsoft Certified: Data Analyst Associate\n- SAS Certified Data Scientist\n\n## 备考策略\n1. **了解考纲**：仔细研究最新考试大纲，明确重点和范围\n2. **制定计划**：分阶段制定详细的备考时间表\n3. **系统学习**：按照考纲要求系统学习相关知识\n4. **模拟练习**：通过大量模拟题和历年真题熟悉题型\n5. **查漏补缺**：针对薄弱环节进行专项练习\n6. **考前冲刺**：复习重点内容，调整心态\n\n## 认证的价值\n- 提升专业认可度\n- 增加就业竞争力\n- 验证知识水平\n- 拓展职业网络',
        exercises: [],
        quiz: []
      },
      {
        id: 'chapter-3',
        title: '职业发展规划',
        content: '# 职业发展规划\n\n## 数据分析职业路径\n- 数据专员 → 数据分析师 → 高级数据分析师 → 数据分析经理\n- 数据分析师 → 数据科学家 → 高级数据科学家\n- 数据分析师 → 业务分析师 → 业务分析经理\n- 数据分析师 → 数据工程师 → 大数据架构师\n\n## 技能提升重点\n- 技术技能：编程、数据库、机器学习\n- 业务技能：行业知识、业务理解、沟通能力\n- 软技能：批判性思维、问题解决、团队协作\n\n## 职业发展建议\n- 持续学习：关注行业趋势和新技术\n- 项目积累：参与实际项目，积累经验\n- 网络建设：加入专业社区，拓展人脉\n- 个人品牌：建立专业形象，提升影响力\n- 目标设定：制定明确的职业目标和发展计划',
        exercises: [],
        quiz: []
      }
    ]
  }
];

