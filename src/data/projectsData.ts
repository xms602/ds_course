// 项目类型定义
export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedHours: number;
  thumbnail: string;
  dataset: {
    name: string;
    description: string;
    generateCode: string; // 生成数据集的Python代码
  };
  tasks: Task[];
  aiPrompt: string; // AI提示词
}

export interface Task {
  id: string;
  title: string;
  description: string;
  hints: string[]; // 提示
  expectedOutput: string; // 期望输出
  solutionHint: string; // 解决方案提示
}

// 10个梯度项目数据
export const projectsData: Project[] = [
  // 项目1：销售数据分析（初级）
  {
    id: 'sales-analysis',
    title: '销售数据分析',
    description: '分析销售数据，识别销售趋势、产品表现和客户行为，为销售策略提供建议。',
    difficulty: 'beginner',
    estimatedHours: 2,
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    dataset: {
      name: '销售数据集',
      description: '包含日期、产品、客户、金额、地区等字段的销售数据。',
      generateCode: `import pandas as pd
import numpy as np
import random
from datetime import datetime, timedelta

# 生成销售数据
def generate_sales_data():
    # 产品列表
    products = ['产品A', '产品B', '产品C', '产品D', '产品E']
    # 地区列表
    regions = ['北京', '上海', '广州', '深圳', '杭州']
    # 客户类型
    customer_types = ['个人', '企业', '政府']
    
    # 生成日期范围
    start_date = datetime(2023, 1, 1)
    end_date = datetime(2023, 12, 31)
    date_range = pd.date_range(start=start_date, end=end_date, freq='D')
    
    # 生成数据
    data = []
    for date in date_range:
        # 每天生成10-20条记录
        records_per_day = random.randint(10, 20)
        for _ in range(records_per_day):
            product = random.choice(products)
            region = random.choice(regions)
            customer_type = random.choice(customer_types)
            # 金额在100-10000之间
            amount = round(random.uniform(100, 10000), 2)
            # 数量在1-10之间
            quantity = random.randint(1, 10)
            
            data.append({
                'date': date.strftime('%Y-%m-%d'),
                'product': product,
                'region': region,
                'customer_type': customer_type,
                'amount': amount,
                'quantity': quantity
            })
    
    # 创建DataFrame
    df = pd.DataFrame(data)
    return df

# 生成数据
sales_data = generate_sales_data()
print('数据集生成完成，共', len(sales_data), '条记录')
print('前5行数据:')
print(sales_data.head())

# 保存数据（在浏览器中，我们直接返回数据）
sales_data`
    },
    tasks: [
      {
        id: 'task-1',
        title: '数据概览',
        description: '查看数据集的基本信息，包括数据类型、缺失值、基本统计信息等。',
        hints: [
          '使用df.info()查看数据信息',
          '使用df.describe()查看数值列的统计信息',
          '使用df.isnull().sum()检查缺失值'
        ],
        expectedOutput: '数据集的基本信息，包括行数、列数、数据类型、缺失值情况和基本统计信息。',
        solutionHint: '使用pandas的基本方法查看数据信息。'
      },
      {
        id: 'task-2',
        title: '销售趋势分析',
        description: '分析月度销售趋势，找出销售高峰期和低谷期。',
        hints: [
          '将日期列转换为日期类型',
          '按月份分组计算销售额',
          '使用matplotlib绘制趋势图'
        ],
        expectedOutput: '月度销售趋势图，显示每个月的销售额变化。',
        solutionHint: '使用groupby和resample方法按月份分组，然后绘制折线图。'
      },
      {
        id: 'task-3',
        title: '产品表现分析',
        description: '分析不同产品的销售表现，找出最畅销的产品。',
        hints: [
          '按产品分组计算销售额',
          '对结果进行排序',
          '使用柱状图展示产品销售情况'
        ],
        expectedOutput: '产品销售排行榜，显示每个产品的销售额和占比。',
        solutionHint: '使用groupby按产品分组，计算销售额，然后排序并可视化。'
      }
    ],
    aiPrompt: '你是一个Python数据分析教练，帮助用户分析销售数据。请提供思路指导，不要直接给出完整代码。'
  },
  
  // 项目2：客户流失预测（中级）
  {
    id: 'customer-churn',
    title: '客户流失预测',
    description: '分析客户数据，建立流失预测模型，识别可能流失的客户。',
    difficulty: 'intermediate',
    estimatedHours: 3,
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    dataset: {
      name: '客户数据集',
      description: '包含客户基本信息、消费行为、服务使用情况等字段的客户数据。',
      generateCode: `import pandas as pd
import numpy as np
import random

# 生成客户数据
def generate_customer_data():
    # 生成客户ID
    customer_ids = [f'C{str(i).zfill(4)}' for i in range(1, 1001)]
    
    # 生成数据
    data = []
    for customer_id in customer_ids:
        # 年龄 18-70岁
        age = random.randint(18, 70)
        # 性别
        gender = random.choice(['男', '女'])
        # 月收入 3000-20000
        monthly_income = random.randint(3000, 20000)
        # 会员时长（月）
        membership_months = random.randint(1, 60)
        # 月消费次数
        monthly_purchases = random.randint(1, 20)
        # 月消费金额
        monthly_spending = random.uniform(100, 5000)
        # 客服接触次数
        support_calls = random.randint(0, 10)
        # 流失标签（1=流失，0=未流失）
        # 会员时长越短、客服接触越多，流失概率越高
        churn_prob = 0.1 + (10 - membership_months/6) * 0.02 + support_calls * 0.05
        churn_prob = min(churn_prob, 0.8)
        churn = 1 if random.random() < churn_prob else 0
        
        data.append({
            'customer_id': customer_id,
            'age': age,
            'gender': gender,
            'monthly_income': monthly_income,
            'membership_months': membership_months,
            'monthly_purchases': monthly_purchases,
            'monthly_spending': round(monthly_spending, 2),
            'support_calls': support_calls,
            'churn': churn
        })
    
    # 创建DataFrame
    df = pd.DataFrame(data)
    return df

# 生成数据
customer_data = generate_customer_data()
print('数据集生成完成，共', len(customer_data), '条记录')
print('前5行数据:')
print(customer_data.head())

# 保存数据
customer_data`
    },
    tasks: [
      {
        id: 'task-1',
        title: '数据探索',
        description: '探索客户数据，分析流失客户和非流失客户的特征差异。',
        hints: [
          '分析流失率',
          '对比流失客户和非流失客户的特征',
          '使用箱线图展示不同特征的分布'
        ],
        expectedOutput: '流失率分析和客户特征对比结果。',
        solutionHint: '使用value_counts分析流失率，使用groupby对比不同客户群体的特征。'
      },
      {
        id: 'task-2',
        title: '特征工程',
        description: '对数据进行预处理，包括特征编码、特征选择等。',
        hints: [
          '对性别等 categorical 特征进行编码',
          '处理缺失值',
          '选择重要特征'
        ],
        expectedOutput: '处理后的特征数据。',
        solutionHint: '使用pd.get_dummies进行特征编码，使用corr()分析特征相关性。'
      },
      {
        id: 'task-3',
        title: '模型构建',
        description: '构建客户流失预测模型，评估模型性能。',
        hints: [
          '使用逻辑回归或随机森林',
          '划分训练集和测试集',
          '评估模型准确率、召回率等指标'
        ],
        expectedOutput: '模型性能评估结果，包括准确率、召回率、F1分数等。',
        solutionHint: '使用sklearn库构建模型，使用train_test_split划分数据集，使用classification_report评估模型。'
      }
    ],
    aiPrompt: '你是一个Python数据分析教练，帮助用户构建客户流失预测模型。请提供思路指导，不要直接给出完整代码。'
  },
  
  // 项目3：市场趋势分析（高级）
  {
    id: 'market-trends',
    title: '市场趋势分析',
    description: '分析市场数据，识别行业趋势和竞争格局，为市场策略提供依据。',
    difficulty: 'advanced',
    estimatedHours: 4,
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop',
    dataset: {
      name: '市场数据集',
      description: '包含行业趋势、竞争对手数据、市场份额等信息的市场数据。',
      generateCode: `import pandas as pd
import numpy as np
import random
from datetime import datetime, timedelta

# 生成市场数据
def generate_market_data():
    # 竞争对手
    competitors = ['公司A', '公司B', '公司C', '公司D', '公司E']
    # 产品类别
    product_categories = ['产品1', '产品2', '产品3', '产品4', '产品5']
    
    # 生成日期范围
    start_date = datetime(2023, 1, 1)
    end_date = datetime(2023, 12, 31)
    date_range = pd.date_range(start=start_date, end=end_date, freq='M')
    
    # 生成数据
    data = []
    for date in date_range:
        for competitor in competitors:
            for category in product_categories:
                # 市场份额 0-100
                market_share = random.uniform(5, 40)
                # 销售额
                sales = random.uniform(100000, 1000000)
                # 增长率
                growth_rate = random.uniform(-0.1, 0.3)
                # 营销费用
                marketing_expense = random.uniform(10000, 100000)
                
                data.append({
                    'date': date.strftime('%Y-%m'),
                    'competitor': competitor,
                    'category': category,
                    'market_share': round(market_share, 2),
                    'sales': round(sales, 2),
                    'growth_rate': round(growth_rate, 3),
                    'marketing_expense': round(marketing_expense, 2)
                })
    
    # 创建DataFrame
    df = pd.DataFrame(data)
    return df

# 生成数据
market_data = generate_market_data()
print('数据集生成完成，共', len(market_data), '条记录')
print('前5行数据:')
print(market_data.head())

# 保存数据
market_data`
    },
    tasks: [
      {
        id: 'task-1',
        title: '市场份额分析',
        description: '分析各竞争对手的市场份额变化趋势。',
        hints: [
          '按竞争对手和时间分组',
          '计算市场份额变化',
          '使用折线图展示趋势'
        ],
        expectedOutput: '各竞争对手市场份额的时间趋势图。',
        solutionHint: '使用pivot_table重塑数据，然后绘制多系列折线图。'
      },
      {
        id: 'task-2',
        title: '产品类别分析',
        description: '分析不同产品类别的销售表现。',
        hints: [
          '按产品类别分组计算销售额',
          '分析产品类别的增长率',
          '使用柱状图和热力图展示'
        ],
        expectedOutput: '产品类别销售分析结果和可视化图表。',
        solutionHint: '使用groupby按产品类别分析，使用seaborn绘制热力图。'
      },
      {
        id: 'task-3',
        title: '营销策略分析',
        description: '分析营销费用与销售额的关系。',
        hints: [
          '计算营销费用与销售额的相关性',
          '分析投资回报率',
          '使用散点图展示关系'
        ],
        expectedOutput: '营销费用与销售额关系分析结果和可视化图表。',
        solutionHint: '使用corr()计算相关性，使用scatterplot绘制散点图。'
      }
    ],
    aiPrompt: '你是一个Python数据分析教练，帮助用户分析市场趋势。请提供思路指导，不要直接给出完整代码。'
  },
  
  // 项目4：网站用户行为分析（初级）
  {
    id: 'user-behavior',
    title: '网站用户行为分析',
    description: '分析网站用户的访问行为，优化网站设计和用户体验。',
    difficulty: 'beginner',
    estimatedHours: 2,
    thumbnail: 'https://images.unsplash.com/photo-1516110833967-8c7907ed586f?w=600&h=400&fit=crop',
    dataset: {
      name: '用户行为数据集',
      description: '包含用户访问记录、停留时间、页面浏览等信息的用户行为数据。',
      generateCode: `import pandas as pd
import numpy as np
import random
from datetime import datetime, timedelta

# 生成用户行为数据
def generate_user_behavior_data():
    # 页面列表
    pages = ['首页', '产品页', '详情页', '购物车', '结账页', '订单完成页']
    # 设备类型
    devices = ['PC', '移动设备', '平板']
    # 来源渠道
    sources = ['直接访问', '搜索引擎', '社交媒体', '外部链接']
    
    # 生成用户ID
    user_ids = [f'U{str(i).zfill(5)}' for i in range(1, 1001)]
    
    # 生成数据
    data = []
    for user_id in user_ids:
        # 每个用户生成1-5次会话
        sessions = random.randint(1, 5)
        for _ in range(sessions):
            # 会话开始时间
            session_start = datetime(2023, random.randint(1, 12), random.randint(1, 28), 
                                  random.randint(0, 23), random.randint(0, 59))
            # 会话时长（秒）
            session_duration = random.randint(10, 3600)
            # 页面浏览数
            page_views = random.randint(1, 20)
            # 跳出率（0-1）
            bounce_rate = random.random()
            # 设备类型
            device = random.choice(devices)
            # 来源渠道
            source = random.choice(sources)
            # 是否转化
            conversion = 1 if random.random() < 0.1 else 0
            
            data.append({
                'user_id': user_id,
                'session_start': session_start.strftime('%Y-%m-%d %H:%M:%S'),
                'session_duration': session_duration,
                'page_views': page_views,
                'bounce_rate': round(bounce_rate, 3),
                'device': device,
                'source': source,
                'conversion': conversion
            })
    
    # 创建DataFrame
    df = pd.DataFrame(data)
    return df

# 生成数据
user_behavior_data = generate_user_behavior_data()
print('数据集生成完成，共', len(user_behavior_data), '条记录')
print('前5行数据:')
print(user_behavior_data.head())

# 保存数据
user_behavior_data`
    },
    tasks: [
      {
        id: 'task-1',
        title: '用户行为概览',
        description: '分析用户行为的基本统计信息，包括会话时长、页面浏览数等。',
        hints: [
          '计算平均会话时长',
          '分析页面浏览数分布',
          '计算转化率'
        ],
        expectedOutput: '用户行为基本统计信息。',
        solutionHint: '使用describe()和value_counts()分析数据。'
      },
      {
        id: 'task-2',
        title: '设备和来源分析',
        description: '分析不同设备类型和来源渠道的用户行为差异。',
        hints: [
          '按设备类型分组分析',
          '按来源渠道分组分析',
          '使用柱状图展示差异'
        ],
        expectedOutput: '不同设备和来源渠道的用户行为分析结果。',
        solutionHint: '使用groupby按设备和来源分组，计算统计指标。'
      },
      {
        id: 'task-3',
        title: '转化分析',
        description: '分析影响用户转化的因素。',
        hints: [
          '对比转化用户和非转化用户的行为差异',
          '分析会话时长与转化率的关系',
          '使用箱线图展示差异'
        ],
        expectedOutput: '转化用户和非转化用户的行为对比分析。',
        solutionHint: '使用groupby按转化状态分组，对比不同用户群体的行为特征。'
      }
    ],
    aiPrompt: '你是一个Python数据分析教练，帮助用户分析网站用户行为。请提供思路指导，不要直接给出完整代码。'
  },
  
  // 项目5：股票市场分析（中级）
  {
    id: 'stock-analysis',
    title: '股票市场分析',
    description: '分析股票市场数据，识别趋势和模式，为投资决策提供参考。',
    difficulty: 'intermediate',
    estimatedHours: 3,
    thumbnail: 'https://images.unsplash.com/photo-1512149673953-1e2532cbf8cd?w=600&h=400&fit=crop',
    dataset: {
      name: '股票数据集',
      description: '包含股票价格、交易量、涨跌幅等信息的股票市场数据。',
      generateCode: `import pandas as pd
import numpy as np
from datetime import datetime, timedelta

# 生成股票数据
def generate_stock_data():
    # 股票代码
    stocks = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'META']
    # 生成日期范围
    start_date = datetime(2023, 1, 1)
    end_date = datetime(2023, 12, 31)
    date_range = pd.date_range(start=start_date, end=end_date, freq='B')  # B=工作日
    
    # 生成数据
    data = []
    for stock in stocks:
        # 初始价格
        price = random.uniform(100, 1000)
        for date in date_range:
            # 每日涨跌幅（-5%到5%）
            change = random.uniform(-0.05, 0.05)
            # 新价格
            new_price = price * (1 + change)
            # 交易量
            volume = random.randint(1000000, 10000000)
            
            data.append({
                'date': date.strftime('%Y-%m-%d'),
                'stock': stock,
                'open': round(price, 2),
                'high': round(max(price, new_price) * (1 + random.uniform(0, 0.02)), 2),
                'low': round(min(price, new_price) * (1 - random.uniform(0, 0.02)), 2),
                'close': round(new_price, 2),
                'volume': volume,
                'change': round(change * 100, 2)
            })
            
            # 更新价格
            price = new_price
    
    # 创建DataFrame
    df = pd.DataFrame(data)
    return df

# 生成数据
stock_data = generate_stock_data()
print('数据集生成完成，共', len(stock_data), '条记录')
print('前5行数据:')
print(stock_data.head())

# 保存数据
stock_data`
    },
    tasks: [
      {
        id: 'task-1',
        title: '股票价格趋势分析',
        description: '分析各股票的价格走势和波动性。',
        hints: [
          '绘制股票价格折线图',
          '计算每日涨跌幅',
          '分析波动性'
        ],
        expectedOutput: '各股票价格趋势图和波动性分析。',
        solutionHint: '使用pivot_table重塑数据，绘制多系列折线图，计算标准差分析波动性。'
      },
      {
        id: 'task-2',
        title: '相关性分析',
        description: '分析不同股票之间的价格相关性。',
        hints: [
          '计算股票之间的相关系数',
          '绘制相关性热力图',
          '分析相关性强度'
        ],
        expectedOutput: '股票相关性热力图和分析结果。',
        solutionHint: '使用pivot_table重塑数据，计算corr()矩阵，使用seaborn绘制热力图。'
      },
      {
        id: 'task-3',
        title: '技术指标分析',
        description: '计算移动平均线等技术指标，分析股票趋势。',
        hints: [
          '计算5日和20日移动平均线',
          '分析金叉和死叉信号',
          '绘制移动平均线与价格对比图'
        ],
        expectedOutput: '移动平均线分析结果和可视化图表。',
        solutionHint: '使用rolling()计算移动平均线，绘制多系列折线图。'
      }
    ],
    aiPrompt: '你是一个Python数据分析教练，帮助用户分析股票市场数据。请提供思路指导，不要直接给出完整代码。'
  },
  
  // 项目6：电商推荐系统（高级）
  {
    id: 'recommendation-system',
    title: '电商推荐系统',
    description: '基于用户购买历史，构建简单的商品推荐系统。',
    difficulty: 'advanced',
    estimatedHours: 4,
    thumbnail: 'https://images.unsplash.com/photo-1607083206968-31777cdc7085?w=600&h=400&fit=crop',
    dataset: {
      name: '电商数据集',
      description: '包含用户购买历史、商品信息、用户评分等信息的电商数据。',
      generateCode: `import pandas as pd
import numpy as np
import random

# 生成电商数据
def generate_ecommerce_data():
    # 商品ID
    products = [f'P{str(i).zfill(4)}' for i in range(1, 101)]
    # 商品类别
    categories = ['电子产品', '服装', '家居', '食品', '图书']
    # 用户ID
    users = [f'U{str(i).zfill(5)}' for i in range(1, 1001)]
    
    # 生成商品信息
    product_info = []
    for product in products:
        category = random.choice(categories)
        price = random.uniform(10, 1000)
        product_info.append({
            'product_id': product,
            'category': category,
            'price': round(price, 2)
        })
    
    # 生成用户购买历史
    purchase_history = []
    for user in users:
        # 每个用户购买3-10个商品
        num_purchases = random.randint(3, 10)
        purchased_products = random.sample(products, num_purchases)
        for product in purchased_products:
            # 购买数量
            quantity = random.randint(1, 5)
            # 评分 1-5
            rating = random.randint(1, 5)
            # 购买日期
            date = f'2023-{random.randint(1, 12):02d}-{random.randint(1, 28):02d}'
            
            purchase_history.append({
                'user_id': user,
                'product_id': product,
                'quantity': quantity,
                'rating': rating,
                'purchase_date': date
            })
    
    # 创建DataFrame
    products_df = pd.DataFrame(product_info)
    purchases_df = pd.DataFrame(purchase_history)
    
    # 合并数据
    df = purchases_df.merge(products_df, on='product_id', how='left')
    return df

# 生成数据
ecommerce_data = generate_ecommerce_data()
print('数据集生成完成，共', len(ecommerce_data), '条记录')
print('前5行数据:')
print(ecommerce_data.head())

# 保存数据
ecommerce_data`
    },
    tasks: [
      {
        id: 'task-1',
        title: '数据探索',
        description: '分析商品类别分布、用户购买行为等基本信息。',
        hints: [
          '分析商品类别分布',
          '计算用户平均购买数量和评分',
          '分析最受欢迎的商品'
        ],
        expectedOutput: '数据探索结果，包括商品类别分布、用户购买行为分析等。',
        solutionHint: '使用value_counts()分析分布，使用groupby计算统计指标。'
      },
      {
        id: 'task-2',
        title: '协同过滤推荐',
        description: '基于用户购买历史，构建协同过滤推荐系统。',
        hints: [
          '构建用户-商品矩阵',
          '计算用户相似度',
          '生成推荐列表'
        ],
        expectedOutput: '基于协同过滤的商品推荐结果。',
        solutionHint: '使用pivot_table构建用户-商品矩阵，计算余弦相似度，生成推荐。'
      },
      {
        id: 'task-3',
        title: '内容过滤推荐',
        description: '基于商品类别，构建内容过滤推荐系统。',
        hints: [
          '分析用户的类别偏好',
          '基于类别相似性推荐商品',
          '评估推荐效果'
        ],
        expectedOutput: '基于内容过滤的商品推荐结果。',
        solutionHint: '分析用户的类别偏好，基于类别相似性生成推荐。'
      }
    ],
    aiPrompt: '你是一个Python数据分析教练，帮助用户构建电商推荐系统。请提供思路指导，不要直接给出完整代码。'
  },
  
  // 项目7：医疗数据分析（初级）
  {
    id: 'healthcare-analysis',
    title: '医疗数据分析',
    description: '分析医疗数据，了解患者特征和治疗效果，为医疗决策提供参考。',
    difficulty: 'beginner',
    estimatedHours: 2,
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop',
    dataset: {
      name: '医疗数据集',
      description: '包含患者基本信息、诊断结果、治疗方案等信息的医疗数据。',
      generateCode: `import pandas as pd
import numpy as np
import random

# 生成医疗数据
def generate_healthcare_data():
    # 生成患者ID
    patient_ids = [f'P{str(i).zfill(5)}' for i in range(1, 501)]
    # 疾病类型
    diseases = ['高血压', '糖尿病', '心脏病', '肺炎', '流感']
    # 治疗方案
    treatments = ['药物治疗', '手术治疗', '物理治疗', '综合治疗']
    
    # 生成数据
    data = []
    for patient_id in patient_ids:
        # 年龄 18-80岁
        age = random.randint(18, 80)
        # 性别
        gender = random.choice(['男', '女'])
        # 体重
        weight = random.uniform(40, 100)
        # 身高
        height = random.uniform(1.4, 2.0)
        # BMI
        bmi = weight / (height ** 2)
        # 疾病
        disease = random.choice(diseases)
        # 治疗方案
        treatment = random.choice(treatments)
        # 治疗效果 1-5
        effect = random.randint(1, 5)
        # 住院天数
        hospital_days = random.randint(1, 30)
        # 医疗费用
        cost = random.uniform(1000, 50000)
        
        data.append({
            'patient_id': patient_id,
            'age': age,
            'gender': gender,
            'weight': round(weight, 1),
            'height': round(height, 2),
            'bmi': round(bmi, 2),
            'disease': disease,
            'treatment': treatment,
            'effect': effect,
            'hospital_days': hospital_days,
            'cost': round(cost, 2)
        })
    
    # 创建DataFrame
    df = pd.DataFrame(data)
    return df

# 生成数据
healthcare_data = generate_healthcare_data()
print('数据集生成完成，共', len(healthcare_data), '条记录')
print('前5行数据:')
print(healthcare_data.head())

# 保存数据
healthcare_data`
    },
    tasks: [
      {
        id: 'task-1',
        title: '患者特征分析',
        description: '分析患者的年龄、性别、BMI等特征分布。',
        hints: [
          '分析年龄分布',
          '分析性别比例',
          '分析BMI分布'
        ],
        expectedOutput: '患者特征分析结果和可视化图表。',
        solutionHint: '使用histogram和pie chart分析分布情况。'
      },
      {
        id: 'task-2',
        title: '疾病和治疗分析',
        description: '分析不同疾病的分布和治疗效果。',
        hints: [
          '分析疾病分布',
          '分析不同治疗方案的效果',
          '分析治疗效果与住院天数的关系'
        ],
        expectedOutput: '疾病分布和治疗效果分析结果。',
        solutionHint: '使用value_counts分析疾病分布，使用groupby分析治疗效果。'
      },
      {
        id: 'task-3',
        title: '医疗费用分析',
        description: '分析医疗费用的影响因素。',
        hints: [
          '分析不同疾病的平均费用',
          '分析费用与住院天数的关系',
          '分析费用与治疗效果的关系'
        ],
        expectedOutput: '医疗费用分析结果和可视化图表。',
        solutionHint: '使用groupby分析不同疾病的费用，使用scatterplot分析费用与其他因素的关系。'
      }
    ],
    aiPrompt: '你是一个Python数据分析教练，帮助用户分析医疗数据。请提供思路指导，不要直接给出完整代码。'
  },
  
  // 项目8：交通流量分析（中级）
  {
    id: 'traffic-analysis',
    title: '交通流量分析',
    description: '分析交通流量数据，识别交通模式和拥堵情况，为交通规划提供参考。',
    difficulty: 'intermediate',
    estimatedHours: 3,
    thumbnail: 'https://images.unsplash.com/photo-1508433232550-9303baea8ebd?w=600&h=400&fit=crop',
    dataset: {
      name: '交通流量数据集',
      description: '包含交通流量、时间、天气、事故等信息的交通数据。',
      generateCode: `import pandas as pd
import numpy as np
import random
from datetime import datetime, timedelta

# 生成交通流量数据
def generate_traffic_data():
    # 路段
    roads = ['路段A', '路段B', '路段C', '路段D', '路段E']
    # 天气状况
    weather = ['晴天', '阴天', '雨天', '雪天']
    
    # 生成日期范围
    start_date = datetime(2023, 1, 1)
    end_date = datetime(2023, 1, 31)
    date_range = pd.date_range(start=start_date, end=end_date, freq='H')
    
    # 生成数据
    data = []
    for date in date_range:
        for road in roads:
            # 基础流量
            base_flow = 1000
            # 时间因素（早高峰7-9点，晚高峰17-19点）
            hour = date.hour
            if 7 <= hour <= 9 or 17 <= hour <= 19:
                time_factor = 2.0
            elif 0 <= hour <= 6:
                time_factor = 0.5
            else:
                time_factor = 1.0
            # 天气因素
            weather_condition = random.choice(weather)
            if weather_condition == '晴天':
                weather_factor = 1.0
            elif weather_condition == '阴天':
                weather_factor = 0.9
            elif weather_condition == '雨天':
                weather_factor = 0.7
            else:  # 雪天
                weather_factor = 0.5
            # 随机因素
            random_factor = random.uniform(0.8, 1.2)
            # 计算流量
            flow = int(base_flow * time_factor * weather_factor * random_factor)
            # 是否有事故
            accident = 1 if random.random() < 0.05 else 0
            # 平均速度
            speed = random.uniform(20, 80) if accident == 0 else random.uniform(5, 20)
            
            data.append({
                'datetime': date.strftime('%Y-%m-%d %H:%M:%S'),
                'road': road,
                'flow': flow,
                'weather': weather_condition,
                'accident': accident,
                'average_speed': round(speed, 1)
            })
    
    # 创建DataFrame
    df = pd.DataFrame(data)
    return df

# 生成数据
traffic_data = generate_traffic_data()
print('数据集生成完成，共', len(traffic_data), '条记录')
print('前5行数据:')
print(traffic_data.head())

# 保存数据
traffic_data`
    },
    tasks: [
      {
        id: 'task-1',
        title: '交通流量时间模式',
        description: '分析交通流量的时间模式，识别高峰时段。',
        hints: [
          '按小时和日期分析流量',
          '识别早高峰和晚高峰',
          '绘制流量时间模式图'
        ],
        expectedOutput: '交通流量时间模式分析结果和可视化图表。',
        solutionHint: '将datetime列转换为时间类型，按小时分组分析流量。'
      },
      {
        id: 'task-2',
        title: '天气影响分析',
        description: '分析天气对交通流量和速度的影响。',
        hints: [
          '分析不同天气条件下的流量',
          '分析不同天气条件下的平均速度',
          '使用箱线图展示差异'
        ],
        expectedOutput: '天气对交通影响的分析结果。',
        solutionHint: '使用groupby按天气分组，分析流量和速度的差异。'
      },
      {
        id: 'task-3',
        title: '事故影响分析',
        description: '分析交通事故对交通流量和速度的影响。',
        hints: [
          '对比有事故和无事故时的交通状况',
          '分析事故发生的时间模式',
          '评估事故的影响程度'
        ],
        expectedOutput: '交通事故影响分析结果。',
        solutionHint: '使用groupby按事故状态分组，对比交通状况的差异。'
      }
    ],
    aiPrompt: '你是一个Python数据分析教练，帮助用户分析交通流量数据。请提供思路指导，不要直接给出完整代码。'
  },
  
  // 项目9：社交媒体分析（高级）
  {
    id: 'social-media-analysis',
    title: '社交媒体分析',
    description: '分析社交媒体数据，了解用户行为和内容趋势，为营销策略提供参考。',
    difficulty: 'advanced',
    estimatedHours: 4,
    thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=400&fit=crop',
    dataset: {
      name: '社交媒体数据集',
      description: '包含帖子内容、点赞数、评论数、分享数等信息的社交媒体数据。',
      generateCode: `import pandas as pd
import numpy as np
import random
from datetime import datetime, timedelta

# 生成社交媒体数据
def generate_social_media_data():
    # 内容类型
    content_types = ['文本', '图片', '视频', '链接']
    # 主题
    topics = ['科技', '娱乐', '体育', '美食', '旅行', '教育', '健康', '时尚']
    # 用户ID
    users = [f'U{str(i).zfill(5)}' for i in range(1, 501)]
    
    # 生成日期范围
    start_date = datetime(2023, 1, 1)
    end_date = datetime(2023, 12, 31)
    date_range = pd.date_range(start=start_date, end=end_date, freq='D')
    
    # 生成数据
    data = []
    for date in date_range:
        # 每天生成10-30条帖子
        posts_per_day = random.randint(10, 30)
        for _ in range(posts_per_day):
            user = random.choice(users)
            content_type = random.choice(content_types)
            topic = random.choice(topics)
            # 点赞数
            likes = random.randint(0, 1000)
            # 评论数
            comments = random.randint(0, 200)
            # 分享数
            shares = random.randint(0, 100)
            # 内容长度
            content_length = random.randint(10, 500)
            # 情感倾向（-1负面，0中性，1正面）
            sentiment = random.choice([-1, 0, 1])
            
            data.append({
                'date': date.strftime('%Y-%m-%d'),
                'user_id': user,
                'content_type': content_type,
                'topic': topic,
                'likes': likes,
                'comments': comments,
                'shares': shares,
                'content_length': content_length,
                'sentiment': sentiment
            })
    
    # 创建DataFrame
    df = pd.DataFrame(data)
    return df

# 生成数据
social_media_data = generate_social_media_data()
print('数据集生成完成，共', len(social_media_data), '条记录')
print('前5行数据:')
print(social_media_data.head())

# 保存数据
social_media_data`
    },
    tasks: [
      {
        id: 'task-1',
        title: '内容表现分析',
        description: '分析不同类型内容的表现，包括点赞、评论和分享。',
        hints: [
          '分析不同内容类型的平均互动量',
          '分析不同主题的表现',
          '使用柱状图展示差异'
        ],
        expectedOutput: '内容表现分析结果和可视化图表。',
        solutionHint: '使用groupby按内容类型和主题分组，计算平均互动量。'
      },
      {
        id: 'task-2',
        title: '时间趋势分析',
        description: '分析社交媒体活动的时间趋势。',
        hints: [
          '按月份分析发帖量',
          '分析互动量的时间趋势',
          '识别热门时期'
        ],
        expectedOutput: '社交媒体活动时间趋势分析结果。',
        solutionHint: '将日期列转换为时间类型，按月份分组分析发帖量和互动量。'
      },
      {
        id: 'task-3',
        title: '情感分析',
        description: '分析不同主题的情感倾向和互动关系。',
        hints: [
          '分析不同主题的情感分布',
          '分析情感倾向与互动量的关系',
          '使用热力图展示情感与主题的关系'
        ],
        expectedOutput: '情感分析结果和可视化图表。',
        solutionHint: '使用groupby按主题分组分析情感分布，分析情感与互动量的相关性。'
      }
    ],
    aiPrompt: '你是一个Python数据分析教练，帮助用户分析社交媒体数据。请提供思路指导，不要直接给出完整代码。'
  },
  
  // 项目10：能源消耗分析（初级）
  {
    id: 'energy-analysis',
    title: '能源消耗分析',
    description: '分析能源消耗数据，识别消耗模式和节能机会。',
    difficulty: 'beginner',
    estimatedHours: 2,
    thumbnail: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop',
    dataset: {
      name: '能源消耗数据集',
      description: '包含能源消耗、时间、天气、设备使用等信息的能源数据。',
      generateCode: `import pandas as pd
import numpy as np
import random
from datetime import datetime, timedelta

# 生成能源消耗数据
def generate_energy_data():
    # 设备类型
    devices = ['空调', '照明', '电脑', '冰箱', '洗衣机']
    # 季节
    seasons = ['春季', '夏季', '秋季', '冬季']
    
    # 生成日期范围
    start_date = datetime(2023, 1, 1)
    end_date = datetime(2023, 12, 31)
    date_range = pd.date_range(start=start_date, end=end_date, freq='D')
    
    # 生成数据
    data = []
    for date in date_range:
        # 季节
        month = date.month
        if 3 <= month <= 5:
            season = '春季'
        elif 6 <= month <= 8:
            season = '夏季'
        elif 9 <= month <= 11:
            season = '秋季'
        else:
            season = '冬季'
        # 温度
        if season == '春季':
            temperature = random.uniform(10, 20)
        elif season == '夏季':
            temperature = random.uniform(25, 35)
        elif season == '秋季':
            temperature = random.uniform(10, 20)
        else:  # 冬季
            temperature = random.uniform(-5, 10)
        # 每天生成多条记录
        for device in devices:
            # 基础消耗
            base_consumption = 1
            # 设备因素
            if device == '空调':
                device_factor = 3.0 if (season == '夏季' or season == '冬季') else 1.0
            elif device == '照明':
                # 冬季照明时间长
                device_factor = 2.0 if season == '冬季' else 1.0
            else:
                device_factor = 1.0
            # 随机因素
            random_factor = random.uniform(0.8, 1.2)
            # 计算消耗
            consumption = base_consumption * device_factor * random_factor
            # 使用时间（小时）
            usage_hours = random.uniform(1, 10)
            
            data.append({
                'date': date.strftime('%Y-%m-%d'),
                'device': device,
                'season': season,
                'temperature': round(temperature, 1),
                'consumption': round(consumption, 2),
                'usage_hours': round(usage_hours, 1)
            })
    
    # 创建DataFrame
    df = pd.DataFrame(data)
    return df

# 生成数据
energy_data = generate_energy_data()
print('数据集生成完成，共', len(energy_data), '条记录')
print('前5行数据:')
print(energy_data.head())

# 保存数据
energy_data`
    },
    tasks: [
      {
        id: 'task-1',
        title: '能源消耗概览',
        description: '分析不同设备的能源消耗情况。',
        hints: [
          '分析不同设备的平均消耗',
          '计算总能源消耗',
          '使用饼图展示设备消耗占比'
        ],
        expectedOutput: '能源消耗概览分析结果和可视化图表。',
        solutionHint: '使用groupby按设备分组，计算平均消耗，使用pie chart展示占比。'
      },
      {
        id: 'task-2',
        title: '季节影响分析',
        description: '分析季节对能源消耗的影响。',
        hints: [
          '分析不同季节的能源消耗',
          '分析温度与消耗的关系',
          '使用柱状图展示季节差异'
        ],
        expectedOutput: '季节对能源消耗影响的分析结果。',
        solutionHint: '使用groupby按季节分组，分析能源消耗，使用scatterplot分析温度与消耗的关系。'
      },
      {
        id: 'task-3',
        title: '节能机会分析',
        description: '识别能源消耗的高峰时段和节能机会。',
        hints: [
          '分析设备使用时间与消耗的关系',
          '识别高消耗设备',
          '提出节能建议'
        ],
        expectedOutput: '节能机会分析结果和建议。',
        solutionHint: '分析设备使用时间与消耗的关系，识别高消耗设备，提出节能建议。'
      }
    ],
    aiPrompt: '你是一个Python数据分析教练，帮助用户分析能源消耗数据。请提供思路指导，不要直接给出完整代码。'
  }
];
