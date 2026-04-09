
import { Course } from '@/types';

export const coursesData: Course[] = [
  {
    id: 'business-analytics-intro',
    title: '商务数据分析基础',
    description: '从零开始学习商务数据分析的核心概念和方法，掌握数据分析在商业决策中的应用。',
    category: '基础课程',
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
          }
        ]
      }
    ]
  },
  {
    id: 'excel-for-business',
    title: 'Excel 商务数据分析实战',
    description: '掌握 Excel 高级功能在商务数据分析中的应用，包括数据透视表、函数、可视化等。',
    category: '工具应用',
    difficulty: 'intermediate',
    estimatedHours: 16,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: '数据透视表入门',
        content: '# 数据透视表入门\n\n数据透视表是 Excel 中最强大的数据分析工具之一...',
        exercises: [],
        quiz: []
      },
      {
        id: 'chapter-2',
        title: '常用数据分析函数',
        content: '# 常用数据分析函数\n\nVLOOKUP、SUMIF、COUNTIF、INDEX/MATCH...',
        exercises: [],
        quiz: []
      },
      {
        id: 'chapter-3',
        title: '数据可视化技巧',
        content: '# 数据可视化技巧\n\n创建专业的商务图表...',
        exercises: [],
        quiz: []
      }
    ]
  },
  {
    id: 'python-data-analysis',
    title: 'Python 数据分析入门',
    description: '学习使用 Python 进行数据分析，掌握 Pandas、NumPy 等核心库的使用。',
    category: '进阶课程',
    difficulty: 'advanced',
    estimatedHours: 20,
    thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: 'Python 基础回顾',
        content: '# Python 基础回顾\n\n变量、数据类型、控制流、函数...',
        exercises: [],
        quiz: []
      },
      {
        id: 'chapter-2',
        title: 'NumPy 数值计算',
        content: '# NumPy 数值计算\n\n数组操作、数学运算...',
        exercises: [],
        quiz: []
      },
      {
        id: 'chapter-3',
        title: 'Pandas 数据处理',
        content: '# Pandas 数据处理\n\nDataFrame、数据清洗、数据聚合...',
        exercises: [],
        quiz: []
      }
    ]
  },
  {
    id: 'data-visualization',
    title: '数据可视化与商业报告',
    description: '学习如何将分析结果转化为有说服力的可视化报告，提升数据沟通能力。',
    category: '工具应用',
    difficulty: 'intermediate',
    estimatedHours: 10,
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
    chapters: [
      {
        id: 'chapter-1',
        title: '数据可视化原则',
        content: '# 数据可视化原则\n\n简洁、准确、有洞察力...',
        exercises: [],
        quiz: []
      },
      {
        id: 'chapter-2',
        title: '商业报告撰写',
        content: '# 商业报告撰写\n\n结构清晰、重点突出...',
        exercises: [],
        quiz: []
      }
    ]
  }
];
