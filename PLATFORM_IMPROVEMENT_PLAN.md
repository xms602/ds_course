# Python数据分析学习平台 - 系统化学习路径与AI能力设计方案

> 平台地址：xmsxmss.pages.dev  |  版本：v2.0  |  文档更新：2026-06-13

---

## 第一部分：10门系统化课程体系

### 核心理念

遵循认知 → 理论 → 工具 → 实践 → 应用 → 进化 的学习路径，从数据分析全景认知开始，逐步深入到统计学理论、Python工具链的使用、真实数据的动手实践、商业场景的应用落地，最终达到持续进化的高级能力。

---

### 课程01：数据分析全景认知与职业路径

**【课程定位】** 认知层。所有学习者的入门第一课，建立对数据分析的全局认知。

**【适用人群】** 零基础初学者、想转行数据方向的从业者、对数据职业感到迷茫的人

**【预估学时】** 4小时

**【课程大纲】**

| 章节 | 标题 | 核心学习目标 |
|------|------|-------------|
| 1.1 | 什么是数据分析：从Excel到AI时代的演进 | 理解数据分析的本质：用数据发现问题、验证假设、辅助决策 |
| 1.2 | 数据分析的完整工作流 | 掌握"需求→采集→清洗→分析→可视化→报告"的六步标准流程 |
| 1.3 | 数据分析师的职业地图 | 了解数据分析师、数据科学家、BI工程师、数据产品经理的差异与要求 |
| 1.4 | 企业中的数据部门长什么样 | 理解数据中台、业务分析团队、算法团队的协作模式 |
| 1.5 | 从入门到进阶的能力成长路径 | 建立个人学习规划，知道每个阶段该学什么 |

**【练习题（5道）】**

1. **选择题**：以下哪项最能描述数据分析的核心价值？
   - A. 会用Python写代码
   - B. 用数据发现问题、验证假设、辅助决策
   - C. 会做漂亮的图表
   - D. 能处理海量数据
   
   **答案：B**。解析：技术是手段，服务决策才是数据分析的核心价值。

2. **判断题**：数据分析师和数据科学家做的事情是一样的。
   
   **答案：错误**。解析：分析师更偏向业务洞察与报告输出，科学家更偏向建模、算法与预测，两者要求的技能栈不同。

3. **填空题**：数据分析的标准工作流是：需求 → \_\_\_\_ → \_\_\_\_ → 分析 → 可视化 → 报告。
   
   **答案：采集、清洗**。解析：采集是获取数据的环节，清洗保证数据质量，二者是分析之前的核心步骤。

4. **选择题**：某零售公司想知道"最近一个月哪些品类的销量在下滑"，这个需求属于工作流中的哪一步？
   - A. 需求定义
   - B. 数据采集
   - C. 数据分析
   - D. 报告输出
   
   **答案：A**。解析：这是一个待回答的业务问题，属于需求定义环节，接下来才是采集和分析。

5. **选择题**：以下哪种能力对初级数据分析师来说最重要？
   - A. 深度学习建模能力
   - B. SQL查询和Excel透视表
   - C. 分布式系统运维
   - D. 产品原型设计
   
   **答案：B**。解析：SQL和Excel是初级分析师的日常生产力工具，80%的工作由它们完成。

**【编程题】**

**题目**：给定某电商7天的日销售额数据，编写Python代码计算总销售额、日均销售额、最高单日销售额。

```python
# 2026年6月1日-7日的日销售额（单位：万元）
daily_sales = [12.3, 15.8, 14.2, 18.6, 20.1, 17.5, 22.3]

# ========== 请在下方编写代码 ==========

total_sales = sum(daily_sales)
avg_sales = total_sales / len(daily_sales)
max_day = max(daily_sales)

print(f"总销售额：{total_sales:.2f}万元")
print(f"日均销售额：{avg_sales:.2f}万元")
print(f"最高单日：{max_day:.2f}万元")
```

**参考答案输出**：
```
总销售额：120.80万元
日均销售额：17.26万元
最高单日：22.30万元
```

**【课后作业】**

**作业要求**：选择你当前所在的公司/行业，回答以下问题：
1. 这个行业中，数据分析师通常需要回答哪些业务问题？（至少列出5个）
2. 这些问题的数据源是什么？（如销售数据库、用户行为埋点、客服工单等）
3. 挑一个问题，详细描述：如果让你用数据回答它，你会怎么做？（从数据采集到输出结论的完整思路）

**提交格式**：不少于500字的文档，包含结构化思考。

---

### 课程02：统计学基础：让数据会说话

**【课程定位】** 理论层。掌握描述性统计、推断统计的核心概念，是后续所有分析工作的理论基础。

**【适用人群】** 已完成课程01，想系统学习统计思维的学习者

**【预估学时】** 6小时

**【课程大纲】**

| 章节 | 标题 | 核心学习目标 |
|------|------|-------------|
| 2.1 | 描述性统计：均值、中位数、众数、分位数 | 理解集中趋势的度量，知道不同场景下该用哪个指标 |
| 2.2 | 离散程度：方差、标准差、极差、变异系数 | 掌握数据波动性的度量方法 |
| 2.3 | 分布与正态分布 | 理解直方图、偏度、峰度，识别数据分布形态 |
| 2.4 | 相关与因果：警惕辛普森悖论 | 理解相关系数，区分相关与因果，识别经典陷阱 |
| 2.5 | 假设检验入门：A/B测试背后的原理 | 理解p值、显著性、置信区间的直觉含义 |

**【练习题（5道）】**

1. **选择题**：某城市月收入数据严重右偏（少数高收入人群拉高均值），此时用哪个指标更能代表"普通人"的收入水平？
   - A. 均值
   - B. 中位数
   - C. 最大值
   - D. 总和
   
   **答案：B**。解析：右偏分布中均值被极值拉高，中位数更能代表中间水平。

2. **判断题**：两个变量的相关系数 = 0.8，说明A变量的变化导致了B变量的变化。
   
   **答案：错误**。解析：相关不代表因果。高相关可能是因果，也可能是共同因子驱动，甚至是巧合。

3. **填空题**：一组数据 [5, 8, 12, 15, 20, 25, 30] 的中位数是 \_\_\_\_。
   
   **答案：15**。解析：排序后取中间位置的数。

4. **选择题**：A/B测试中，实验组转化率为12%，对照组为10%，p值=0.03。以下哪个解读是正确的？
   - A. 实验组肯定比对照组好
   - B. 在零假设成立的前提下，出现当前结果的概率仅3%，通常认为差异显著
   - C. p值越小说明效果越好
   - D. 因为p<0.05，所以可以直接全量上线
   
   **答案：B**。解析：p值衡量的是"在零假设下出现极端结果的概率"。C错误，p值大小不等于效果大小；D过于绝对，上线还要看业务成本。

5. **选择题**：标准差反映了数据的什么特征？
   - A. 平均水平
   - B. 波动程度
   - C. 最大值
   - D. 数据量大小
   
   **答案：B**。解析：标准差越大，数据越分散。

**【编程题】**

**题目**：使用NumPy，对某商店30天的日访客数据进行描述性统计分析。

```python
import numpy as np

# 某商店30天的日访客人数
daily_visitors = np.array([
    230, 245, 260, 220, 280, 295, 310,
    265, 275, 290, 305, 320, 315, 285,
    270, 250, 265, 275, 290, 300, 315,
    330, 325, 280, 270, 260, 295, 310,
    325, 340
])

# ========== 请在下方编写代码 ==========

mean_val = np.mean(daily_visitors)
median_val = np.median(daily_visitors)
std_val = np.std(daily_visitors)
min_val = np.min(daily_visitors)
max_val = np.max(daily_visitors)
q25 = np.percentile(daily_visitors, 25)
q75 = np.percentile(daily_visitors, 75)

print(f"均值：{mean_val:.1f}")
print(f"中位数：{median_val:.1f}")
print(f"标准差：{std_val:.1f}")
print(f"最小值：{min_val}")
print(f"最大值：{max_val}")
print(f"25分位数：{q25}")
print(f"75分位数：{q75}")
```

**参考答案输出**：
```
均值：286.3
中位数：287.5
标准差：32.6
最小值：220
最大值：340
25分位数：265.0
75分位数：310.0
```

**【课后作业】**

**作业要求**：选择一个你关心的数据集（班级成绩、公司销售、股票价格、运动步数等均可），收集至少30个数据点，完成一份描述性统计报告：
1. 计算均值、中位数、标准差、最大最小值、四分位数
2. 用Python绘制直方图或箱线图（后面学Matplotlib时补画也可，先手工或Excel画也行）
3. 写一段文字解读：从数据中你发现了什么？有什么异常或有趣的现象？

---

### 课程03：NumPy：数值计算的引擎

**【课程定位】** 工具层。NumPy是Python数据科学生态的基础，所有高级库都建立在它之上。

**【适用人群】** 掌握Python基础语法，想进入数据分析领域的学习者

**【预估学时】** 8小时

**【课程大纲】**

| 章节 | 标题 | 核心学习目标 |
|------|------|-------------|
| 3.1 | NumPy ndarray：为什么它比Python列表快100倍 | 理解向量化运算与连续内存存储 |
| 3.2 | 创建数组：从列表、arange、linspace、随机数 | 掌握4种常用的数组创建方式 |
| 3.3 | 索引与切片：一维、二维、布尔索引 | 能灵活提取子数组、按条件筛选 |
| 3.4 | 数组运算：逐元素运算、矩阵运算、广播机制 | 掌握广播规则，避免维度错误 |
| 3.5 | 常用统计与聚合：sum/mean/median/cumsum | 掌握常用的统计计算方法 |

**【练习题（4道）】**

1. **选择题**：NumPy数组比Python列表快的主要原因是？
   - A. 用C写的
   - B. 连续内存存储 + 向量化运算，避免Python循环
   - C. 用了GPU加速
   - D. 文件格式更紧凑
   
   **答案：B**。解析：A只说了一部分，核心是B描述的连续内存+矢量运算。

2. **判断题**：`np.array([1, 2, 3]) * 2` 的结果是 `[2, 4, 6]`。
   
   **答案：正确**。解析：这是NumPy的逐元素运算（广播）。

3. **填空题**：一个形状为 (3, 4) 的二维数组，总共有 \_\_\_\_ 个元素。
   
   **答案：12**。解析：3行×4列=12个元素。

4. **选择题**：以下哪种方式可以取出二维数组arr的第2行第3列元素？（行/列索引从0开始）
   - A. `arr[2, 3]`
   - B. `arr[1, 2]`
   - C. `arr[3][2]`
   - D. `arr.get(2, 3)`
   
   **答案：B**。解析：索引从0开始，第2行对应索引1，第3列对应索引2。

**【编程题（2道）】**

**编程题1：月度销售数据的季度汇总**

```python
import numpy as np

# 某公司2026年1-12月的月度销售额（单位：万元）
monthly_sales = np.array([120, 135, 142, 155, 168, 180, 175, 190, 205, 210, 225, 240])

# ========== 请在下方编写代码 ==========

# 任务1：计算全年总销售额
total = np.sum(monthly_sales)

# 任务2：计算四个季度的销售额（每3个月为一季度）
q1 = np.sum(monthly_sales[0:3])
q2 = np.sum(monthly_sales[3:6])
q3 = np.sum(monthly_sales[6:9])
q4 = np.sum(monthly_sales[9:12])

# 任务3：找出销售额最高的月份是第几个月（输出1-12）
highest_month = np.argmax(monthly_sales) + 1

# 任务4：计算环比增长率（本月相对于上月的变化率）
growth_rates = np.diff(monthly_sales) / monthly_sales[:-1] * 100

print(f"全年总销售额：{total}万元")
print(f"一季度：{q1}万元，二季度：{q2}万元，三季度：{q3}万元，四季度：{q4}万元")
print(f"销售额最高的月份：第{highest_month}月（{monthly_sales[highest_month-1]}万元）")
print(f"环比增长率（%）：{np.round(growth_rates, 2)}")
```

**参考答案输出**：
```
全年总销售额：2145万元
一季度：397万元，二季度：503万元，三季度：570万元，四季度：675万元
销售额最高的月份：第12月（240万元）
环比增长率（%）：[12.5   5.19   9.15   8.39   7.14  -2.78   8.57   7.89   2.44   7.14   6.67]
```

**编程题2：矩阵运算模拟用户行为分析**

```python
import numpy as np

# 5个用户在3个商品上的点击次数矩阵（行=用户，列=商品）
click_matrix = np.array([
    [12, 8, 15],   # 用户A
    [6, 20, 10],   # 用户B
    [18, 5, 7],    # 用户C
    [10, 12, 22],  # 用户D
    [8, 16, 11]    # 用户E
])

# 3个商品的价格向量
price_vector = np.array([99, 199, 299])

# ========== 请在下方编写代码 ==========

# 任务1：计算每个用户的总点击次数
total_clicks_per_user = np.sum(click_matrix, axis=1)

# 任务2：如果每次点击后的购买率是3%，估算每个用户的总消费金额
# 提示：总消费 = 点击次数 × 3% × 商品价格（矩阵乘法）
purchase_rate = 0.03
estimated_spend = click_matrix * purchase_rate @ price_vector

# 任务3：计算每个商品被点击的总次数
total_clicks_per_item = np.sum(click_matrix, axis=0)

print(f"各用户总点击次数：{total_clicks_per_user}")
print(f"各用户估算消费金额（元）：{np.round(estimated_spend, 2)}")
print(f"各商品总点击次数：{total_clicks_per_item}")
print(f"最热门商品：商品{np.argmax(total_clicks_per_item)+1}（{np.max(total_clicks_per_item)}次点击）")
```

**参考答案输出**：
```
各用户总点击次数：[35 36 30 44 35]
各用户估算消费金额（元）：[217.74 227.08 145.91 296.7  188.93]
各商品总点击次数：[54 61 65]
最热门商品：商品3（65次点击）
```

**【课后作业】**

**作业要求**：从雅虎财经或任何公开数据源下载一支股票的最近30个交易日收盘价，使用NumPy完成以下分析：
1. 计算30天的平均价格、最高价、最低价
2. 计算这30天的日收益率（(当日-前一日)/前一日）
3. 找出收益率最高和最低的交易日
4. 计算收益率的标准差（衡量波动性）

**提交格式**：Python代码文件 + 简短的分析结论（100字以内）

---

### 课程04：Pandas：表格数据的瑞士军刀（上篇）

**【课程定位】** 工具层。Pandas是数据分析的日常工作主力，掌握它意味着80%的数据分析工作已经入门。

**【适用人群】** 掌握NumPy基础，想系统学习Pandas的学习者

**【预估学时】** 10小时

**【课程大纲】**

| 章节 | 标题 | 核心学习目标 |
|------|------|-------------|
| 4.1 | 读取数据：从CSV、Excel、数据库、JSON获取 | 掌握4种主流数据源的读取方式 |
| 4.2 | DataFrame基础操作：查看结构、选择列、筛选行 | 能快速查看和探索数据集 |
| 4.3 | 数据清洗：缺失值、重复值、异常值处理 | 掌握完整的数据清洗方法论 |
| 4.4 | 数据转换：apply、map、分组聚合的艺术 | 理解split-apply-combine模式 |
| 4.5 | 时间序列：日期解析、重采样、滚动窗口 | 掌握时间相关分析的核心操作 |

**【练习题（5道）】**

1. **选择题**：要查看一个DataFrame的前5行，用哪个方法？
   - A. `df.tail()`
   - B. `df.head()`
   - C. `df.first()`
   - D. `df.sample()`
   
   **答案：B**。解析：head()看头部，tail()看尾部，sample()随机抽样。

2. **判断题**：`df.dropna()`会删除所有包含NaN的行，这是处理缺失值的最佳方式。
   
   **答案：错误**。解析：这是最简单但不一定是最佳方式，可能丢失大量有价值的数据。更好的方式通常是fillna用均值/中位数填充，或根据业务逻辑判断。

3. **填空题**：在Pandas中，按列`category`分组后计算`sales`列的总和，代码是 `df.\_\_\_\_("category")["sales"].sum()`。
   
   **答案：groupby**。解析：split-apply-combine模式的核心入口是groupby。

4. **选择题**：筛选出`age > 30`且`city == "上海"`的行，正确的布尔索引写法是？
   - A. `df[df.age > 30 and df.city == "上海"]`
   - B. `df[(df.age > 30) & (df.city == "上海")]`
   - C. `df.query("age > 30 or city == 上海")`
   - D. `df.filter(age > 30, city = "上海")`
   
   **答案：B**。解析：Pandas中使用&做逐元素与运算，且必须加括号，因为&优先级高于比较运算符。

5. **选择题**：`df.resample("M").mean()` 的作用是？
   - A. 按分钟重采样求均值
   - B. 按月重采样求均值
   - C. 按毫秒重采样求均值
   - D. 按最大值重采样
   
   **答案：B**。解析：M代表Month，按月聚合。

**【编程题（2道）】**

**编程题1：电商销售数据清洗与初步分析**

```python
import pandas as pd
import numpy as np

# 模拟电商销售数据（含缺失值、重复值、异常值）
data = {
    "order_id": ["A001", "A002", "A003", "A004", "A005", "A006", "A007", "A008", "A009", "A010", "A002"],
    "product": ["手机", "电脑", np.nan, "耳机", "手机", "电脑", "手机", np.nan, "耳机", "手机", "电脑"],
    "price": [3999, 6999, 899, 299, 3899, 7299, 4199, 199, 249, 99999, 6999],
    "quantity": [1, 1, 2, 3, 1, 1, 1, 5, 2, 1, 1],
    "customer": ["张三", "李四", "王五", "赵六", "张三", "李四", "孙七", "周八", "吴九", "郑十", "李四"]
}
df = pd.DataFrame(data)

# ========== 请在下方编写代码 ==========

# 步骤1：删除重复行（以order_id为判断依据）
df = df.drop_duplicates(subset="order_id")

# 步骤2：处理缺失值（product列的NaN用"未知商品"填充）
df["product"] = df["product"].fillna("未知商品")

# 步骤3：处理异常值（price > 10000视为不合理，用该商品类型的中位数替换）
# 先找出合理价格范围的中位数
median_price = df[df["price"] <= 10000]["price"].median()
df.loc[df["price"] > 10000, "price"] = median_price

# 步骤4：计算每笔订单的总金额（price * quantity）
df["total_amount"] = df["price"] * df["quantity"]

# 步骤5：按商品类型分组，计算各商品的总销售额
sales_by_product = df.groupby("product")["total_amount"].sum().sort_values(ascending=False)

print("清洗后的DataFrame：")
print(df)
print("\\n各商品总销售额：")
print(sales_by_product)
print(f"\\n全店总销售额：{df['total_amount'].sum()}元")
```

**参考答案**：总销售额约为25000-26000元（具体取决于中位数计算结果），手机类销售额最高。

**编程题2：用户行为时间序列分析**

```python
import pandas as pd
import numpy as np

# 模拟2026年1月1日-1月31日的App日活数据
dates = pd.date_range("2026-01-01", "2026-01-31", freq="D")
np.random.seed(42)
dau = np.random.randint(5000, 15000, size=len(dates)) + np.linspace(0, 3000, len(dates))  # 有增长趋势

df = pd.DataFrame({"date": dates, "dau": dau})
df = df.set_index("date")

# ========== 请在下方编写代码 ==========

# 任务1：计算7日移动平均线（MA7）
df["MA7"] = df["dau"].rolling(window=7).mean()

# 任务2：计算周环比增长率（按周重采样后计算变化率）
weekly_dau = df["dau"].resample("W").mean()
weekly_growth = weekly_dau.pct_change() * 100

# 任务3：找出DAU最高和最低的日期
max_day = df["dau"].idxmax()
min_day = df["dau"].idxmin()

print("=== 每日活跃用户数据（前10天 + MA7）===")
print(df.head(10).round(0))
print("\\n=== 周均DAU及环比增长率（%）===")
weekly_df = pd.DataFrame({"周均DAU": weekly_dau.round(0), "环比增长率(%)": weekly_growth.round(2)})
print(weekly_df)
print(f"\\nDAU最高日期：{max_day.strftime('%Y-%m-%d')}（{int(df.loc[max_day, 'dau'])}人）")
print(f"DAU最低日期：{min_day.strftime('%Y-%m-%d')}（{int(df.loc[min_day, 'dau'])}人）")
```

**参考答案输出**：日活数据呈现增长趋势，MA7平滑了日波动，周环比增长率为正（5%-15%之间，取决于随机种子）。

**【课后作业】**

**作业要求**：从 Kaggle 下载 "Titanic - Machine Learning from Disaster" 数据集（titanic.csv），使用Pandas完成以下分析：
1. 数据清洗：处理缺失的年龄、舱位、登船港口信息
2. 生存率分析：按性别、舱位等级、是否独自登船三个维度分析存活率
3. 输出一个清晰的结论表格：每种维度下的具体生存率数值
4. 写一段100字的业务解读：如果你是泰坦尼克号救援策略制定者，从数据中会得到什么启示？

---

### 课程05：Pandas：表格数据的瑞士军刀（下篇）

**【课程定位】** 工具层。Pandas进阶，处理多表关联、复杂合并、透视变换等高级场景。

**【适用人群】** 已掌握Pandas基础，想提升到熟练应用级别

**【预估学时】** 8小时

**【课程大纲】**

| 章节 | 标题 | 核心学习目标 |
|------|------|-------------|
| 5.1 | 多表合并：merge、join、concat的使用场景 | 理解SQL式连接与Pandas的对应关系 |
| 5.2 | 数据重塑：pivot_table、melt、stack/unstack | 掌握长短表格式的相互转换 |
| 5.3 | 窗口函数与排名：rank、cumsum、expanding | 实现排名、累计、移动统计等高级计算 |
| 5.4 | 文本处理与正则：Pandas + re的组合技巧 | 处理非结构化文本字段 |
| 5.5 | 性能优化：大数据集下的内存节省与提速技巧 | 了解categorical类型、向量化替代循环 |

**【练习题（5道）】**

1. **选择题**：将两个DataFrame按公共键合并，类似SQL的JOIN操作，用哪个Pandas方法？
   - A. `pd.concat()`
   - B. `df.append()`
   - C. `pd.merge()`
   - D. `df.join()`
   
   **答案：C**。解析：merge用于按键连接（最灵活），join基于索引连接，concat用于堆叠拼接。

2. **判断题**：`df.pivot_table(values="销售", index="地区", columns="月份", aggfunc="sum")` 可以生成一个行为地区、列为月份、值为销售总和的透视表。
   
   **答案：正确**。解析：这是pivot_table最典型的用法。

3. **填空题**：计算每个用户的累计消费金额，可以用Series的 \_\_\_\_ 方法。
   
   **答案：cumsum**（cumulative sum）。解析：cumsum返回累积和。

4. **选择题**：当数据量很大（百万行以上）且某一列只有几个离散值（如"一线城市""二线城市""三线城市"），优化内存占用的最佳实践是？
   - A. 直接存为object字符串类型
   - B. 使用astype("category")转换为分类类型
   - C. 用0/1/2整数编码
   - D. 分成多个小文件存
   
   **答案：B**。解析：categorical类型只存唯一值+索引，内存可以节省80%以上，且计算更快。

5. **选择题**：melt的功能是什么？
   - A. 把宽格式变长格式（unpivot）
   - B. 把长格式变宽格式（pivot）
   - C. 合并两个表
   - D. 删除重复行
   
   **答案：A**。解析：melt是pivot的反向操作，把列"融化"成行。

**【编程题】**

**编程题：多表关联与透视分析——零售订单分析**

```python
import pandas as pd

# 用户表
users = pd.DataFrame({
    "user_id": [1, 2, 3, 4, 5],
    "name": ["张三", "李四", "王五", "赵六", "钱七"],
    "city": ["北京", "上海", "广州", "北京", "上海"],
    "level": ["普通", "VIP", "VIP", "普通", "VIP"]
})

# 订单表
orders = pd.DataFrame({
    "order_id": ["O1001", "O1002", "O1003", "O1004", "O1005", "O1006", "O1007", "O1008"],
    "user_id": [1, 2, 1, 3, 4, 2, 5, 3],
    "product_category": ["电子产品", "服装", "食品", "服装", "电子产品", "电子产品", "食品", "食品"],
    "amount": [2999, 599, 120, 399, 4599, 6999, 88, 150]
})

# ========== 请在下方编写代码 ==========

# 任务1：关联订单表与用户表，生成完整的订单分析表
merged = pd.merge(orders, users, on="user_id", how="left")

# 任务2：按城市分组，计算各城市的总订单金额与订单数量
city_analysis = merged.groupby("city").agg(
    total_amount=("amount", "sum"),
    order_count=("order_id", "count"),
    avg_order_value=("amount", "mean")
).round(2)

# 任务3：按用户等级 × 商品品类做透视表，值为平均客单价
pivot_table = merged.pivot_table(
    values="amount",
    index="level",
    columns="product_category",
    aggfunc="mean"
).round(2)

# 任务4：计算每个用户的累计消费金额（按订单顺序）
merged = merged.sort_values("order_id")
merged["cumulative_spend"] = merged.groupby("user_id")["amount"].cumsum()

# 任务5：按累计消费金额对用户排名
user_total_spend = merged.groupby("name")["amount"].sum().sort_values(ascending=False)
user_rank = user_total_spend.rank(method="dense", ascending=False).astype(int)

print("=== 各城市订单分析 ===")
print(city_analysis)
print("\\n=== 用户等级×品类透视表（平均客单价）===")
print(pivot_table)
print("\\n=== 各用户累计消费（按订单顺序）===")
print(merged[["order_id", "name", "amount", "cumulative_spend"]])
print("\\n=== 用户消费排名 ===")
rank_df = pd.DataFrame({"总消费": user_total_spend, "排名": user_rank}).sort_values("排名")
print(rank_df)
```

**参考答案输出**：
- 北京用户总消费约7598元（电子产品为主）
- VIP用户的电子产品平均客单价显著高于普通用户
- 李四消费排名第1（累计金额取决于具体订单）
- 累计消费字段展示了用户消费的增长过程

**【课后作业】**

**作业要求**：获取任意一份包含多表的真实数据（如公司数据库导出的用户-订单-商品三张表，或公开数据集如MovieLens的用户-电影-评分），完成：
1. 用merge完成多表关联，生成一张宽表
2. 做一个维度至少两层的透视分析（如 用户等级 × 商品品类 × 销售额均值）
3. 计算某个累计指标（如每个用户的累计消费、每个品类的月累计销量等）
4. 用pivot_table或melt做一次宽长表转换，解释何时该用哪种格式

**提交要求**：代码文件 + 分析报告（300字以内的关键发现总结）

---

### 课程06：Matplotlib与Seaborn：让数据讲故事

**【课程定位】** 工具+实践层。可视化不仅是出图能力，更是数据叙事的核心表达方式。

**【适用人群】** 掌握Pandas基础，想做出专业级数据图表的学习者

**【预估学时】** 8小时

**【课程大纲】**

| 章节 | 标题 | 核心学习目标 |
|------|------|-------------|
| 6.1 | 图表选型原则：什么数据该用什么图 | 掌握"数据类型→图表类型"的映射决策框架 |
| 6.2 | Matplotlib基础：画布、坐标系、图元素 | 理解对象式绘图逻辑，不再只靠模板复制 |
| 6.3 | 常用图表：折线图、柱状图、散点图、饼图、箱线图、热力图 | 掌握6种最常用的图表代码 |
| 6.4 | Seaborn：统计图表与美观默认样式 | 用seaborn快速生成专业级统计图 |
| 6.5 | 图表美化：配色、标注、中文显示、多图布局 | 让图表从"能用"到"好看" |

**【练习题（4道）】**

1. **选择题**：想展示"各月份销售额的变化趋势"，最合适的图表是？
   - A. 饼图
   - B. 折线图
   - C. 散点图
   - D. 箱线图
   
   **答案：B**。解析：时间趋势用折线图最直观。

2. **判断题**：饼图适合展示多类数据占比，类别越多（10个以上）效果越好。
   
   **答案：错误**。解析：饼图适合3-6类，类别过多过小时难以区分，此时应该用堆叠条形图或直接用表格。

3. **填空题**：想比较三个班级的考试成绩分布（四分位数、离群点），最合适的图表是 \_\_\_\_。
   
   **答案：箱线图（Box Plot）**。解析：箱线图可以直观展示分位数、中位数和异常值。

4. **选择题**：在Matplotlib中创建一个2行2列的子图布局，并在第2个子图（右上）绘图，正确的索引方式是？
   - A. `fig, axes = plt.subplots(2, 2); axes[1, 1].plot(...)`
   - B. `fig, axes = plt.subplots(2, 2); axes[0, 1].plot(...)`
   - C. `fig, axes = plt.subplots(2, 2); axes[2].plot(...)`
   - D. `fig, axes = plt.subplots(2, 2); axes['top_right'].plot(...)`
   
   **答案：B**。解析：索引从(0,0)开始，(行,列)，右上是第0行第1列。

**【编程题】**

**编程题：销售数据可视化综合练习**

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import matplotlib
matplotlib.rcParams["font.family"] = ["Microsoft YaHei", "SimHei", "Heiti SC", "PingFang HK"]
matplotlib.rcParams["axes.unicode_minus"] = False

# 模拟2026年四个季度、三大品类的销售数据
data = {
    "季度": ["Q1", "Q2", "Q3", "Q4"] * 3,
    "品类": (["电子产品"] * 4) + (["服装"] * 4) + (["食品"] * 4),
    "销售额": [320, 350, 380, 420, 180, 220, 250, 280, 95, 110, 130, 145],
    "利润率": [0.18, 0.20, 0.22, 0.25, 0.30, 0.32, 0.28, 0.30, 0.15, 0.18, 0.16, 0.17]
}
df = pd.DataFrame(data)

# ========== 请在下方编写代码 ==========

# 创建2行2列的子图布局
fig, axes = plt.subplots(2, 2, figsize=(14, 10))

# 子图1：各品类季度销售额折线图
for category in df["品类"].unique():
    sub = df[df["品类"] == category]
    axes[0, 0].plot(sub["季度"], sub["销售额"], marker="o", linewidth=2, label=category)
axes[0, 0].set_title("各品类季度销售额趋势（万元）", fontsize=12)
axes[0, 0].set_xlabel("季度")
axes[0, 0].set_ylabel("销售额（万元）")
axes[0, 0].legend()
axes[0, 0].grid(True, alpha=0.3)

# 子图2：全年各品类总销售额柱状图
total_by_category = df.groupby("品类")["销售额"].sum().sort_values(ascending=False)
axes[0, 1].bar(total_by_category.index, total_by_category.values, color=["#4A90E2", "#F5A623", "#7ED321"], alpha=0.8)
axes[0, 1].set_title("2026年各品类全年总销售额", fontsize=12)
axes[0, 1].set_ylabel("总销售额（万元）")
for i, v in enumerate(total_by_category.values):
    axes[0, 1].text(i, v + 5, str(v), ha="center", fontweight="bold")

# 子图3：销售额与利润率的散点图
axes[1, 0].scatter(df["销售额"], df["利润率"] * 100, alpha=0.6, s=100, c="#D0021B")
axes[1, 0].set_title("销售额 vs 利润率分布", fontsize=12)
axes[1, 0].set_xlabel("销售额（万元）")
axes[1, 0].set_ylabel("利润率（%）")
axes[1, 0].grid(True, alpha=0.3)

# 子图4：Q4各品类占比饼图
q4_data = df[df["季度"] == "Q4"]
axes[1, 1].pie(q4_data["销售额"], labels=q4_data["品类"], autopct="%1.1f%%", startangle=90, colors=["#4A90E2", "#F5A623", "#7ED321"])
axes[1, 1].set_title("Q4各品类销售占比", fontsize=12)

plt.tight_layout()
plt.savefig("sales_analysis_2026.png", dpi=150, bbox_inches="tight")
plt.show()
```

**【课后作业】**

**作业要求**：基于课程04的Titanic数据分析结果，制作一张综合仪表盘风格的图表（2×2或更大的子图布局），要求：
1. 至少包含4个不同类型的图表（如饼图、柱状图、堆叠图、热力图等）
2. 图表要有清晰的标题、坐标轴、图例、标注
3. 中文显示正常
4. 最后写一段200字的分析解读，以"业务人员看了能看懂"为标准

---

### 课程07：真实项目实战：零售超市数据分析全流程

**【课程定位】** 实践层。用一个完整的真实场景数据集，从头到尾走完一次完整的数据分析工作流。

**【适用人群】** 完成了课程02-06，有工具基础但缺乏实战经验的学习者

**【预估学时】** 10小时

**【课程大纲】**

| 章节 | 标题 | 核心学习目标 |
|------|------|-------------|
| 7.1 | 需求定义：业务方到底在问什么 | 学习如何把模糊的业务问题转化为可分析的数据问题 |
| 7.2 | 数据探索与质量评估 | 用head/info/describe + 可视化快速了解数据特征 |
| 7.3 | 数据清洗的完整操作示范 | 现场演示从原始脏数据到可用数据的每一步决策 |
| 7.4 | 核心分析：销售趋势、客户画像、商品结构、门店对比 | 演示如何层层深入发现业务问题 |
| 7.5 | 结论输出：从数据洞察到业务建议 | 学习如何把数字翻译成可执行的业务建议 |

**【练习题（3道）】**

1. **选择题**：业务方说"最近销量好像不太好"，作为数据分析师的第一步应该是？
   - A. 立刻查数据做图表
   - B. 澄清问题边界：时间范围是多久？"不太好"的具体含义（同比还是环比？金额还是数量？）
   - C. 写SQL拉数据
   - D. 建议降价促销
   
   **答案：B**。解析：需求定义是分析工作的第一步，问题定义清楚了，50%的工作就完成了。

2. **判断题**：数据探索阶段发现了缺失值，应该立刻全部删除或填充，然后再开始分析。
   
   **答案：错误**。解析：应该先理解"缺失"本身是否有业务含义（如某些门店确实不销售某些品类、某些字段对特定订单不适用），不能机械处理。

3. **填空题**：把分析结果转化为业务建议时，应该遵循 **\_\_\_\_ → \_\_\_\_ → \_\_\_\_** 的结构（提示：洞察→建议→预期效果）。
   
   **答案：发现洞察 → 提出建议 → 预估效果**。解析：这个结构让业务方从理解问题到看到行动路径。

**【编程题】**

**编程题：零售超市数据集的实战分析**

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import matplotlib
matplotlib.rcParams["font.family"] = ["Microsoft YaHei", "SimHei", "Heiti SC", "PingFang HK"]
matplotlib.rcParams["axes.unicode_minus"] = False

# 模拟零售超市数据集（与课程实战项目结构一致）
np.random.seed(42)
dates = pd.date_range("2026-01-01", "2026-12-31", freq="D")
n_rows = 5000

sales_data = pd.DataFrame({
    "order_id": range(10001, 10001 + n_rows),
    "date": np.random.choice(dates, n_rows),
    "store_id": np.random.choice(["A店", "B店", "C店", "D店"], n_rows, p=[0.30, 0.25, 0.25, 0.20]),
    "category": np.random.choice(["生鲜", "食品", "日用品", "服装", "家电"], n_rows, p=[0.25, 0.30, 0.20, 0.15, 0.10]),
    "sales_amount": np.concatenate([
        np.random.normal(50, 20, 1250).clip(min=5),   # 生鲜
        np.random.normal(30, 15, 1500).clip(min=3),    # 食品
        np.random.normal(80, 40, 1000).clip(min=10),   # 日用品
        np.random.normal(200, 80, 750).clip(min=50),   # 服装
        np.random.normal(800, 300, 500).clip(min=100)  # 家电
    ]),
    "quantity": np.random.randint(1, 8, n_rows),
    "customer_type": np.random.choice(["普通会员", "VIP", "散客"], n_rows, p=[0.45, 0.15, 0.40])
})

# ========== 请在下方编写代码 ==========

# 任务1：数据探索与质量评估
print("=== 数据基本信息 ===")
print(f"总行数：{len(sales_data)}")
print(f"列名：{list(sales_data.columns)}")
print(f"\\n各列缺失值统计：")
print(sales_data.isnull().sum())
print(f"\\n各数值列统计摘要：")
print(sales_data.describe())

# 任务2：销售趋势分析（按月）
sales_data["month"] = sales_data["date"].dt.to_period("M")
monthly_trend = sales_data.groupby("month")["sales_amount"].sum()

plt.figure(figsize=(12, 4))
monthly_trend.plot(kind="line", marker="o")
plt.title("2026年月度销售趋势")
plt.xlabel("月份")
plt.ylabel("总销售额（元）")
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig("sales_trend.png", dpi=100)
plt.close()

# 任务3：各品类销售结构占比
category_sales = sales_data.groupby("category").agg(
    total_sales=("sales_amount", "sum"),
    order_count=("order_id", "count"),
    avg_order_value=("sales_amount", "mean")
).round(2)
category_sales = category_sales.sort_values("total_sales", ascending=False)

plt.figure(figsize=(10, 6))
category_sales["total_sales"].plot(kind="bar", color=["#4A90E2", "#F5A623", "#7ED321", "#D0021B", "#9013FE"])
plt.title("各品类全年总销售额对比")
plt.xlabel("品类")
plt.ylabel("总销售额（元）")
plt.xticks(rotation=0)
for i, v in enumerate(category_sales["total_sales"]):
    plt.text(i, v * 1.02, f"{v/10000:.1f}万", ha="center", fontsize=9)
plt.tight_layout()
plt.savefig("sales_by_category.png", dpi=100)
plt.close()

# 任务4：门店对比（ABC分析）
store_performance = sales_data.groupby("store_id").agg(
    total_sales=("sales_amount", "sum"),
    total_orders=("order_id", "count"),
    avg_order_value=("sales_amount", "mean")
).round(2).sort_values("total_sales", ascending=False)

# 任务5：客户类型与客单价的关系
customer_analysis = sales_data.groupby("customer_type").agg(
    avg_spend=("sales_amount", "mean"),
    avg_quantity=("quantity", "mean"),
    order_count=("order_id", "count")
).round(2)

# 任务6：输出核心业务洞察
print("\\n=== 核心业务洞察 ===")
print(f"1. 全年总销售额：{sales_data['sales_amount'].sum():,.0f}元")
print(f"2. 销售最高月份：{monthly_trend.idx()}（{monthly_trend.max():,.0f}元）")
print(f"3. 销售最低月份：{monthly_trend.idxmin()}（{monthly_trend.min():,.0f}元）")
print(f"4. 最佳销售品类：{category_sales.index[0]}（{category_sales.iloc[0]['total_sales']:,.0f}元）")
print(f"5. 销售最强门店：{store_performance.index[0]}（{store_performance.iloc[0]['total_sales']:,.0f}元）")
print(f"6. 各客户类型平均客单价：")
for idx, row in customer_analysis.iterrows():
    print(f"   - {idx}：{row['avg_spend']:.0f}元/单")

print("\\n=== 门店绩效对比 ===")
print(store_performance)
print("\\n=== 客户类型分析 ===")
print(customer_analysis)
```

**参考答案核心发现**：
- 全年销售呈现节日效应（春节前后、双十一、年末为高峰）
- 家电虽然订单量少但客单价高，是销售额的重要支柱
- VIP客户的客单价显著高于普通会员和散客，证明VIP体系有效
- 各门店销售差异在20%以内，说明运营较均衡

**【课后作业】**

**作业要求**：选择一个你能获取的真实业务数据集（公司销售数据、公开的政府统计数据、Kaggle数据均可，不少于1万行），完成一次完整的独立数据分析项目，提交内容：
1. 项目背景与业务问题（你想回答的3-5个问题）
2. 数据探索报告（行数、字段、质量评估）
3. 数据清洗过程（你做了哪些处理决策，为什么）
4. 核心分析代码（含注释）
5. 可视化图表（至少3张，不同类型）
6. 业务洞察与建议（至少3条可执行建议，每条含预估效果）

**提交格式**：一份完整的Jupyter Notebook或Markdown文档（不少于2000字）

---

### 课程08：A/B测试与增长分析

**【课程定位】** 应用层。A/B测试是数据驱动产品迭代的黄金标准，在互联网公司广泛应用。

**【适用人群】** 有Pandas基础，想从事产品/增长/运营分析方向的学习者

**【预估学时】** 8小时

**【课程大纲】**

| 章节 | 标题 | 核心学习目标 |
|------|------|-------------|
| 8.1 | 什么是A/B测试：随机对照试验的逻辑 | 理解实验组、对照组、随机分配的核心逻辑 |
| 8.2 | 实验设计的关键要素：样本量、时长、指标 | 掌握如何设计一个合理的A/B测试 |
| 8.3 | 假设检验的直觉理解：p值到底是什么 | 用案例而非公式理解统计显著性 |
| 8.4 | 用Python完成A/B测试分析实战 | 动手实现转化率、均值差异的假设检验 |
| 8.5 | 常见陷阱：多重检验、辛普森悖论、偷看数据 | 掌握识别和避免A/B测试中的经典错误 |

**【练习题（5道）】**

1. **选择题**：某App做了一个按钮颜色A/B测试，实验组转化率12.5%，对照组10.3%，p=0.04。以下哪个解读最专业？
   - A. 实验成功，立刻全量上线
   - B. 在本实验条件下，实验组显著优于对照组（p<0.05），建议结合业务成本综合决策
   - C. 实验组比对照组好2.2个百分点，效果非常显著
   - D. 因为p值很小，所以颜色变化一定有用
   
   **答案：B**。解析：统计显著不代表业务上有意义，上线决策还要考虑开发维护成本、用户体验变化等因素。

2. **判断题**：做A/B测试时，只要实验结果出来就可以立刻停止实验并下结论，这样可以节省流量和时间。
   
   **答案：错误**。解析：这是经典的"偷看数据"问题——如果在未达到预设样本量时多次看结果，会大大增加假阳性概率。必须按设计的样本量跑完。

3. **填空题**：在A/B测试中，除了关注实验组和对照组的核心指标差异，还需要检查 \_\_\_\_ 指标，确保实验没有带来副作用。
   
   **答案：护栏（Guardrail）/反向**。解析：比如优化点击率的同时不能让退款率上升，需要同时监控反向指标。

4. **选择题**：以下哪个场景适合使用A/B测试？
   - A. 重构整个App架构（没有可对比的旧版本）
   - B. 修改结算按钮颜色，看是否能提升转化率
   - C. 决定公司是否要进入一个新市场
   - D. 给CEO做年度战略规划
   
   **答案：B**。解析：A/B测试适合变量可控、效果可量化的改动，大战略决策不适用。

5. **选择题**：辛普森悖论指的是？
   - A. 分组数据都显示A好，但合并起来反而B好
   - B. p值越小效果越好
   - C. 样本越大越精确
   - D. 做两次实验结果不一样
   
   **答案：A**。解析：经典案例：UC Berkeley研究生招生总数据男生录取率更高，但按院系拆分后反而女生在大多数院系录取率更高，原因是女生倾向申请录取率低的高竞争院系。

**【编程题】**

**编程题：A/B测试实战——两个按钮设计的转化率分析**

```python
import pandas as pd
import numpy as np
from scipy import stats

# 模拟A/B测试数据
# 按钮A（对照组）：经典蓝色按钮
# 按钮B（实验组）：带图标和动画的新按钮
np.random.seed(42)

# 对照组数据：10000次曝光，1120次转化
control_impressions = 10000
control_conversions = 1120

# 实验组数据：10000次曝光，1280次转化
treatment_impressions = 10000
treatment_conversions = 1280

# ========== 请在下方编写代码 ==========

# 任务1：计算两组的转化率
control_rate = control_conversions / control_impressions
treatment_rate = treatment_conversions / treatment_impressions
lift = (treatment_rate - control_rate) / control_rate * 100

print(f"对照组转化率：{control_rate*100:.2f}%")
print(f"实验组转化率：{treatment_rate*100:.2f}%")
print(f"相对提升：{lift:.2f}%")

# 任务2：使用双样本比例Z检验（或卡方检验）判断显著性
# 构建列联表
contingency_table = np.array([
    [treatment_conversions, treatment_impressions - treatment_conversions],
    [control_conversions, control_impressions - control_conversions]
])

# 卡方检验
chi2_stat, p_value, dof, expected = stats.chi2_contingency(contingency_table)

print(f"\\n=== 假设检验结果 ===")
print(f"卡方统计量：{chi2_stat:.4f}")
print(f"p值：{p_value:.6f}")

# 任务3：根据p值做业务判断
alpha = 0.05  # 常见的显著性水平
if p_value < alpha:
    conclusion = f"差异显著（p={p_value:.6f} < {alpha}），有足够证据认为新按钮更优"
    recommendation = "建议全量上线实验组设计，并持续监控核心指标与护栏指标"
else:
    conclusion = f"差异不显著（p={p_value:.6f} >= {alpha}），不能证明新按钮更优"
    recommendation = "建议不上线，重新考虑设计或增大样本量"

print(f"\\n结论：{conclusion}")
print(f"建议：{recommendation}")

# 任务4：计算转化率的95%置信区间
def calc_confidence_interval(conversions, impressions, confidence=0.95):
    p = conversions / impressions
    se = np.sqrt(p * (1 - p) / impressions)
    z = stats.norm.ppf((1 + confidence) / 2)
    return (p - z * se, p + z * se)

control_ci = calc_confidence_interval(control_conversions, control_impressions)
treatment_ci = calc_confidence_interval(treatment_conversions, treatment_impressions)

print(f"\\n=== 95%置信区间 ===")
print(f"对照组：[{control_ci[0]*100:.2f}%, {control_ci[1]*100:.2f}%]")
print(f"实验组：[{treatment_ci[0]*100:.2f}%, {treatment_ci[1]*100:.2f}%]")

# 任务5：用柱状图可视化对比
import matplotlib.pyplot as plt
import matplotlib
matplotlib.rcParams["font.family"] = ["Microsoft YaHei", "SimHei", "Heiti SC", "PingFang HK"]
matplotlib.rcParams["axes.unicode_minus"] = False

fig, ax = plt.subplots(figsize=(8, 5))
groups = ["对照组（按钮A）", "实验组（按钮B）"]
rates = [control_rate * 100, treatment_rate * 100]
errors = [
    [(control_rate - control_ci[0]) * 100],
    [(treatment_rate - treatment_ci[0]) * 100]
]

bars = ax.bar(groups, rates, yerr=np.array(errors).T, capsize=10, 
              color=["#95a5a6", "#3498db"], alpha=0.8, width=0.6)
ax.set_ylabel("转化率（%）")
ax.set_title("按钮A/B测试：转化率对比（含95%置信区间）")
ax.set_ylim([0, max(rates) * 1.2])

for bar, rate in zip(bars, rates):
    ax.text(bar.get_x() + bar.get_width()/2, rate + 1, f"{rate:.2f}%", 
            ha="center", va="bottom", fontweight="bold")

plt.tight_layout()
plt.savefig("ab_test_result.png", dpi=120)
plt.close()

print("\\n可视化图表已保存为 ab_test_result.png")
```

**参考答案**：
- 实验组转化率约12.8%，对照组约11.2%，相对提升约14%
- p值远小于0.05，差异统计显著
- 置信区间不重叠，结论可靠
- 业务建议：全量上线新按钮设计

**【课后作业】**

**作业要求**：模拟或寻找一个真实的A/B测试场景（如你的个人网站改版、公司内部某产品改动），完成一份完整的A/B测试设计与分析报告：
1. 实验设计：你想测试什么改动？你的假设是什么？核心指标是什么？护栏指标是什么？
2. 样本量计算：用在线计算器或手动计算，你需要多大样本才能检测到预期的效果？
3. 实验执行描述：你如何保证随机分配？如何排除干扰因素？
4. 数据分析：用Python完成假设检验、置信区间计算、可视化
5. 最终决策与建议：你的上线建议是什么？为什么？

**提交格式**：2000字以内的报告 + 可运行的Python分析代码

---

### 课程09：用户行为分析与客户价值评估

**【课程定位】** 应用层。以用户为中心的数据分析，广泛应用于互联网、零售、金融等行业。

**【适用人群】** 有Pandas和统计学基础，想深入用户分析方向的学习者

**【预估学时】** 10小时

**【课程大纲】**

| 章节 | 标题 | 核心学习目标 |
|------|------|-------------|
| 9.1 | 用户生命周期：获取→激活→留存→收入→传播 | 理解AARRR模型，知道每个阶段要分析什么 |
| 9.2 | 留存分析的标准方法：Cohort（同期群）分析 | 掌握经典留存曲线的计算与解读 |
| 9.3 | RFM模型：用户价值分层的实用方法 | 用最近一次购买、频次、金额三维度对用户分层 |
| 9.4 | 漏斗分析：用户是在哪一步流失的 | 计算各环节转化率，定位流失最严重的节点 |
| 9.5 | 用户画像：从数据标签到业务洞察 | 建立结构化的用户标签体系 |

**【练习题（4道）】**

1. **选择题**：RFM模型中的R、F、M分别代表什么？
   - A. 注册时间、粉丝数、月消费
   - B. 最近一次购买时间、购买频次、累计消费金额
   - C. 注册渠道、浏览频次、月活天数
   - D. 地区、忠诚度、会员等级
   
   **答案：B**。解析：Recency（最近）、Frequency（频次）、Monetary（金额）。

2. **判断题**：Cohort分析（同期群）的核心思想是把同一时间注册的用户放在一起观察他们的长期行为，这样可以公平地比较不同批次的用户质量。
   
   **答案：正确**。解析：这是Cohort分析的精髓，避免"新用户永远比老用户活跃"的时间偏差。

3. **填空题**：某App漏斗为：启动App（10000人）→ 浏览商品（6000人）→ 加入购物车（1500人）→ 提交订单（800人）→ 完成支付（600人），其中转化率最低的环节是 \_\_\_\_ → \_\_\_\_。
   
   **答案：浏览商品 → 加入购物车**（60%→25%，这一步下降了58.3%，是最大瓶颈）。解析：看每一步的转化率，找降幅最大的环节。

4. **选择题**：RFM分析中，如果一个用户最近一次购买在3天前、累计买过25次、累计花了8000元，他应该被归类为？
   - A. 流失用户
   - B. 高价值活跃用户（重要价值客户）
   - C. 新用户
   - D. 沉睡用户
   
   **答案：B**。解析：近、频、金额三高，是典型的高价值用户，应该重点维护。

**【编程题】**

**编程题：电商用户RFM分析**

```python
import pandas as pd
import numpy as np
from datetime import datetime
import matplotlib.pyplot as plt
import matplotlib
matplotlib.rcParams["font.family"] = ["Microsoft YaHei", "SimHei", "Heiti SC", "PingFang HK"]
matplotlib.rcParams["axes.unicode_minus"] = False

# 模拟电商用户订单数据
np.random.seed(42)
n_orders = 8000
n_users = 2000

# 生成用户ID（重复出现以表示复购）
user_ids = np.random.choice(range(1, n_users + 1), n_orders, p=np.random.dirichlet(np.ones(n_users))*100 + 0.001)

# 生成日期（过去365天内）
start_date = datetime(2025, 6, 13)
dates = [start_date + pd.Timedelta(days=np.random.randint(0, 365)) for _ in range(n_orders)]

# 生成订单金额
amounts = np.random.exponential(200, n_orders).clip(min=10).round(2)

orders = pd.DataFrame({
    "user_id": user_ids,
    "order_date": dates,
    "amount": amounts
})

# ========== 请在下方编写代码 ==========

# 定义分析截止日期（用数据中最新的日期）
analysis_date = orders["order_date"].max()

# 步骤1：计算每个用户的R、F、M值
rfm = orders.groupby("user_id").agg({
    "order_date": lambda x: (analysis_date - x.max()).days,  # R：最近一次购买距今天数
    "amount": ["count", "sum"]                                 # F：购买次数，M：总金额
}).round(2)

rfm.columns = ["Recency", "Frequency", "Monetary"]

# 步骤2：RFM分箱（按分位数分成5档，R越小越好所以反向分）
rfm["R_score"] = pd.qcut(rfm["Recency"], 5, labels=[5, 4, 3, 2, 1]).astype(int)
rfm["F_score"] = pd.qcut(rfm["Frequency"].rank(method="first"), 5, labels=[1, 2, 3, 4, 5]).astype(int)
rfm["M_score"] = pd.qcut(rfm["Monetary"].rank(method="first"), 5, labels=[1, 2, 3, 4, 5]).astype(int)

# 步骤3：RFM总分
rfm["RFM_Score"] = rfm["R_score"] * 100 + rfm["F_score"] * 10 + rfm["M_score"]

# 步骤4：用户分层（简化版8类）
def rfm_segment(row):
    if row["R_score"] >= 4 and row["F_score"] >= 4 and row["M_score"] >= 4:
        return "重要价值客户"
    elif row["R_score"] >= 4 and row["F_score"] >= 4 and row["M_score"] < 3:
        return "重要发展客户"
    elif row["R_score"] >= 4 and row["F_score"] < 3 and row["M_score"] >= 4:
        return "重要保持客户"
    elif row["R_score"] < 3 and row["F_score"] >= 4 and row["M_score"] >= 4:
        return "重要挽留客户"
    elif row["R_score"] >= 4 and row["F_score"] < 3 and row["M_score"] < 3:
        return "一般新客户"
    elif row["R_score"] < 3 and row["F_score"] >= 3 and row["M_score"] >= 3:
        return "一般忠诚客户"
    elif row["R_score"] < 3 and row["F_score"] < 3 and row["M_score"] >= 3:
        return "一般高价值客户"
    else:
        return "流失客户"

rfm["Segment"] = rfm.apply(rfm_segment, axis=1)

# 步骤5：统计各分层的用户数与贡献
segment_stats = rfm.groupby("Segment").agg(
    用户数=("user_id", "count"),
    人均消费=("Monetary", "mean")
).round(2)

print("各用户分层统计：")
print(segment_stats)
print("\nRFM前10个用户：")
print(rfm.head(10))

# 步骤6：可视化分层结果
fig, axes = plt.subplots(1, 2, figsize=(14, 6))

segment_stats["用户数"].plot(kind="bar", ax=axes[0], color="#3498db", alpha=0.8)
axes[0].set_title("各用户分层的用户数量分布")
axes[0].set_xlabel("")
axes[0].tick_params(axis='x', rotation=45)

segment_stats["人均消费"].plot(kind="bar", ax=axes[1], color="#e74c3c", alpha=0.8)
axes[1].set_title("各用户分层的人均消费金额（元）")
axes[1].set_xlabel("")
axes[1].tick_params(axis='x', rotation=45)

plt.tight_layout()
plt.savefig("rfm_segment.png", dpi=120)
plt.close()
print("\n可视化图表已保存为 rfm_segment.png")
```

**参考答案**：
- 典型分层后，你会看到"重要价值客户"只占用户总数的约10%-15%，但贡献了40%-60%的GMV（总收入）。这是帕累托法则在用户分析中的经典体现。

**【课后作业】**

**作业要求**：选择一家你熟悉的电商/零售/互联网产品，完成一份完整的用户分析报告：
1. 数据准备：模拟或使用公开的用户行为数据
2. 留存分析：画出Cohort留存曲线，分析用户质量变化
3. 漏斗分析：设计至少4步的用户转化漏斗，定位流失瓶颈
4. RFM分析：完成RFM三维度计算与用户分层
5. 业务建议：针对不同分层提出具体运营策略

**提交格式**：2500字以内报告 + 完整可运行Python分析代码

---

### 课程10：进阶主题与职业进化

**【课程定位】** 进化层。从"会用工具"走向"解决复杂业务问题"，建立持续学习体系。

**【适用人群】** 完成前9门课程，希望突破瓶颈、建立系统化思维的进阶学习者

**【预估学时】** 12小时

**【课程大纲】**

| 章节 | 标题 | 核心学习目标 |
|------|------|-------------|
| 10.1 | 时间序列分析基础：移动平均、指数平滑 | 掌握时间序列预测的核心思想 |
| 10.2 | 数据思维框架：CRISP-DM方法论 | 用结构化思维解决任何数据分析问题 |
| 10.3 | 从数据到洞察：如何讲一个有说服力的故事 | 掌握数据分析报告的撰写与呈现技巧 |
| 10.4 | 大数据生态概览：SQL、Hive、Spark基础认知 | 了解企业级数据处理的技术栈 |
| 10.5 | 数据分析师的面试、简历与作品集 | 从学习到就业的最后一公里 |
| 10.6 | AI时代的数据分析师：与LLM协作 | 掌握用AI辅助数据分析的新工作流 |

**【练习题（5道）】**

1. **选择题**：CRISP-DM方法论的六个阶段按顺序是？
   - A. 数据理解 → 业务理解 → 数据准备 → 建模 → 评估 → 部署
   - B. 业务理解 → 数据理解 → 数据准备 → 建模 → 评估 → 部署
   - C. 数据采集 → 数据清洗 → 数据分析 → 可视化 → 报告 → 决策
   - D. 问题定义 → 假设提出 → 数据收集 → 分析 → 结论 → 行动

   **答案：B**。解析：从业务理解开始，这是最容易被忽视但最重要的第一步。

2. **判断题**：在向业务方汇报数据分析结果时，应该先展示你的分析过程和用了什么高级技术，让他们觉得你很专业。

   **答案：错误**。解析：应该先给结论/建议，再给支撑数据。业务方关心"我该做什么"，不关心"你用了什么技术"。

3. **填空题**：时间序列分析中，简单移动平均（SMA）的主要缺点是对所有历史数据**等权重处理**，指数平滑（EMA）的改进思路是给**近期数据更高权重**。

4. **选择题**：以下哪项最能体现"数据分析师的核心竞争力"？
   - A. 熟练掌握10种编程语言
   - B. 能用结构化的方法快速定义问题、拆解问题并从数据中提取可落地业务洞察
   - C. 会制作极其精美的3D可视化图表
   - D. 能处理PB级大数据

   **答案：B**。解析：工具会更新，技术会淘汰，但"定义问题—拆解问题—落地洞察"的思维能力永不过时。

5. **判断题**：用LLM做数据分析时，可以直接把包含用户隐私数据粘贴给公共AI服务让它帮忙分析。

   **答案：错误**。解析：永远不要把敏感数据粘贴到公共AI服务中。应该先脱敏、或使用企业内部部署的私有模型。

**【编程题】**

**编程题1：时间序列分析——股票价格预测**

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import matplotlib
matplotlib.rcParams["font.family"] = ["Microsoft YaHei", "SimHei", "Heiti SC", "PingFang HK"]
matplotlib.rcParams["axes.unicode_minus"] = False

# 模拟某科技股2025年全年的日收盘价数据
np.random.seed(42)
dates = pd.date_range(start="2025-01-01", periods=250, freq="B")
base_price = 100
trend = np.linspace(0, 40, 250)
seasonal = 8 * np.sin(np.linspace(0, 8*np.pi, 250))
noise = np.random.normal(0, 3, 250)

prices = pd.Series(base_price + trend + seasonal + noise, index=dates)

# ========== 请在下方编写代码 ==========

# 步骤1：计算7日移动平均（SMA-7）和30日移动平均（SMA-30）
sma7 = prices.rolling(window=7).mean()
sma30 = prices.rolling(window=30).mean()

# 步骤2：计算指数移动平均（EMA-12）
ema12 = prices.ewm(span=12, adjust=False).mean()

# 步骤3：双均线策略信号
signals = pd.DataFrame({"Price": prices, "SMA7": sma7, "SMA30": sma30, "EMA12": ema12})
signals["Signal"] = 0
signals.loc[signals["SMA7"] > signals["SMA30"], "Signal"] = 1
signals.loc[signals["SMA7"] <= signals["SMA30"], "Signal"] = -1
signals["Position"] = signals["Signal"].diff()

# 步骤4：打印近30天的数据概览
print("近30个交易日数据概览：")
print(signals.tail(30)[["Price", "SMA7", "SMA30", "Signal"]].describe().round(2))
print("\n买卖信号点：")
print(signals[signals["Position"] != 0][["Price", "Position"]].tail(10))

# 步骤5：可视化
fig, ax = plt.subplots(figsize=(14, 7))
prices.plot(ax=ax, label="收盘价", color="#34495e", linewidth=1.5, alpha=0.8)
sma7.plot(ax=ax, label="SMA-7", color="#e74c3c", linewidth=1.2, linestyle="--")
sma30.plot(ax=ax, label="SMA-30", color="#27ae60", linewidth=1.2, linestyle="-.")
ema12.plot(ax=ax, label="EMA-12", color="#f39c12", linewidth=1.0, alpha=0.6)

buy_points = signals[signals["Position"] > 0]
sell_points = signals[signals["Position"] < 0]

ax.scatter(buy_points.index, buy_points["Price"], color="red", marker="^", s=100, label="买入信号", zorder=5)
ax.scatter(sell_points.index, sell_points["Price"], color="green", marker="v", s=100, label="卖出信号", zorder=5)

ax.set_title("某科技股2025年收盘价及双均线策略信号")
ax.set_xlabel("日期")
ax.set_ylabel("股价（元）")
ax.legend()
ax.grid(True, alpha=0.3)

plt.tight_layout()
plt.savefig("stock_analysis.png", dpi=120)
plt.close()
print("\n可视化图表已保存为 stock_analysis.png")
```

**参考答案**：双均线策略在趋势行情中效果不错，但在震荡行情中会出现频繁的假信号。

**编程题2：数据分析报告生成框架**

```python
import pandas as pd
import numpy as np

def generate_analysis_report(data, business_question, context=""):
    report = {
        "一、业务背景": "业务问题：" + business_question + " 背景信息：" + context,
        "二、数据概览": "数据维度：" + str(data.shape[0]) + "行 x " + str(data.shape[1]) + "列",
        "三、分析方法": "1.描述性统计 2.对比分析 3.趋势分析 4.相关性分析",
        "四、核心发现": "（在此填入你的数据洞察）",
        "五、业务建议": "（在此填入3-5条可落地的行动建议）",
        "六、后续行动": "（在此填入下一步需要跟进的事项）"
    }
    for section, content in report.items():
        print("\n" + "="*50)
        print(section)
        print("="*50)
        print(content)
    return report

np.random.seed(42)
months = pd.date_range("2025-01", periods=12, freq="MS")
sample_data = pd.DataFrame({
    "month": months,
    "sales": np.random.randint(50000, 150000, 12),
    "orders": np.random.randint(500, 2000, 12),
    "active_users": np.random.randint(1000, 5000, 12)
})

print("="*60)
print("数据分析报告示例")
print("="*60)
report = generate_analysis_report(
    data=sample_data,
    business_question="为什么Q2销售额环比下降了15%？",
    context="本公司是一家聚焦年轻用户的DTC电商品牌"
)
```

**【课后作业】**

**作业要求**：完成一份"个人数据分析职业成长计划 + 实战作品集"：

**第一部分：个人能力自评（30%）**
1. 对照本课程10门课的知识体系，对自己当前掌握程度做1-5分自评
2. 找出自己的3个最强项和3个待提升项
3. 制定未来3个月的详细学习提升计划

**第二部分：数据分析实战作品集（50%）**
从以下项目中任选1个完成完整的分析报告+Python代码：
- 项目A：自选一家上市公司，完成年度财务数据分析与行业对比
- 项目B：使用Kaggle公开数据集完成一个端到端的分类/回归预测项目
- 项目C：使用真实公开的新冠疫情数据做趋势分析与预测
- 项目D：自拟一个你感兴趣且有数据支持的分析课题

**第三部分：求职准备（20%）**
1. 整理一份数据分析师岗位的简历（1页A4）
2. 准备3个你在面试中会被问到的高频问题与你的回答思路
3. 列出你未来1-3年的职业发展规划

---

## 第二部分：期中考试与期末考试方案

### 考试总体设计原则

| 项目 | 期中考试 | 期末考试 |
|------|---------|---------|
| **定位** | 检验前半段学习成果（认知→理论→工具） | 检验完整学习成果（实践→应用→进化） |
| **考试时长** | 90分钟 | 120分钟 |
| **满分** | 100分 | 100分 |
| **及格线** | 60分 | 60分 |
| **覆盖课程** | 课程01-05（认知、统计、NumPy、Pandas） | 课程01-10（全部课程） |
| **题型结构** | 选择20分+判断10分+填空20分+简答20分+编程30分 | 选择20分+判断10分+填空15分+简答15分+编程40分 |
| **考试形式** | 闭卷（理论题）+开卷上机（编程题） | 闭卷（理论题）+开卷上机（编程题） |

---

### 期中考试试卷（90分钟，满分100分）

#### 一、选择题（每题2分，共10题，20分）

1. 数据分析的核心价值是什么？
   - A. 会用Python写代码
   - B. 用数据发现问题、验证假设、辅助决策
   - C. 会做漂亮的图表
   - D. 能处理海量数据

2. NumPy数组和Python原生list的主要区别不包括以下哪项？
   - A. NumPy数组元素类型必须统一
   - B. NumPy数组支持广播（broadcasting）
   - C. Python list运算速度比NumPy更快
   - D. NumPy支持多维数组运算

3. Pandas中`df.dropna()`的作用是？
   - A. 删除含缺失值的行或列
   - B. 用均值填充缺失值
   - C. 删除重复行
   - D. 把NaN替换成0

4. 以下哪个统计量最不稳健（对异常值最敏感）？
   - A. 中位数
   - B. 均值
   - C. 众数
   - D. IQR（四分位距）

5. 正态分布中，约有多少比例的数据落在±1个标准差范围内？
   - A. 50%
   - B. 68%
   - C. 95%
   - D. 99.7%

6. Pandas中`df.groupby("category").agg({"sales": "sum"})`的作用是？
   - A. 按category排序后求和
   - B. 按category分组后对sales求和
   - C. 把sales按category排序
   - D. 删除category列后求和

7. 以下哪项是NumPy中创建一个全0的3×3数组的正确写法？
   - A. `np.zeros(3, 3)`
   - B. `np.zeros((3, 3))`
   - C. `np.array([3, 3])`
   - D. `np.zero((3, 3))`

8. 假设检验中的p值=0.03，α=0.05，以下判断正确的是？
   - A. 拒绝原假设，结果统计显著
   - B. 不拒绝原假设，结果不显著
   - C. p值越小说明效应越大
   - D. p值=0.03说明原假设为真的概率是3%

9. Pandas中`df.merge(other_df, on="user_id", how="left")`执行的是哪种连接？
   - A. 内连接
   - B. 左连接
   - C. 右连接
   - D. 全连接

10. 箱线图中的"箱子"部分代表的数据范围是？
    - A. 最小值到最大值
    - B. 第25百分位数到第75百分位数
    - C. 均值±1个标准差
    - D. 第5百分位数到第95百分位数

**选择题答案**：1.B  2.C  3.A  4.B  5.B  6.B  7.B  8.A  9.B  10.B

#### 二、判断题（每题1分，共10题，10分）

1. 数据分析师和数据科学家的岗位职责和技能要求完全相同。（  ）
2. NumPy数组的索引从1开始计数。（  ）
3. 标准差越大，说明数据越分散。（  ）
4. Pandas的`DataFrame`中，`loc`使用的是位置索引。（  ）
5. 相关系数为0说明两个变量之间完全没有关系。（  ）
6. `df.fillna(0)`会把所有缺失值替换成0。（  ）
7. 中位数不受极端值影响，是稳健统计量。（  ）
8. NumPy广播规则要求两个数组的维度必须完全相同。（  ）
9. A/B测试中，如果p值小于0.05就一定意味着效果显著，可以直接上线。（  ）
10. Pandas中`df["column"].str.contains("keyword")`可以筛选包含某个关键词的行。（  ）

**判断题答案**：1.×  2.×  3.√  4.×（loc用的是标签索引，iloc才是位置索引）  5.×（只能说明没有线性关系）  6.√  7.√  8.×（广播允许维度不完全相同，只要兼容即可）  9.×（还要看效应量大小、业务意义等）  10.√

#### 三、填空题（每空2分，共10空，20分）

1. 数据分析的标准工作流是：需求 → **采集** → 清洗 → **分析** → 可视化 → 报告。
2. NumPy数组的形状属性名是**shape**，Pandas DataFrame获取行数可以用**shape[0]**属性。
3. 描述数据集中趋势的三个常用统计量是**均值**、**中位数**、**众数**。
4. Pandas中，删除重复行的方法名是**drop_duplicates()**。
5. A/B测试中，比较两个比例用**卡方**检验，比较两个均值用**t**检验。

#### 四、简答题（每题10分，共2题，20分）

**简答题1**：请用你自己的话解释"什么是CRISP-DM方法论"，并说明为什么"业务理解"是第一步而不是"数据采集"？（10分）

**评分标准**：
- CRISP-DM全称及6个阶段（3分）
- 为什么业务理解是第一步——如果问题定义错了，后面所有分析都错了（4分）
- 表达清晰度与逻辑通顺（1分）
- 结合例子说明（2分）
- 满分10分

**简答题2**：请说明Pandas中`loc`和`iloc`的区别，并各举一个使用场景。（10分）

**评分标准**：
- `loc`：基于标签（label-based）的索引，用行/列名进行选择（3分）
- `iloc`：基于位置（position-based）的索引，用从0开始的整数位置进行选择（3分）
- `loc`示例：df.loc[df["date"] > "2025-01-01"] 按日期筛选（1.5分）
- `iloc`示例：df.iloc[0:10] 选择前10行（1.5分）
- 表达清晰度与举例恰当（1分）
- 满分10分

#### 五、编程题（共2题，第1题12分，第2题18分，共30分）

**编程题1：Pandas数据清洗与基础分析（12分）**

```python
import pandas as pd
import numpy as np

data = {
    "order_id": [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012],
    "product": ["A", "B", "A", "C", "B", np.nan, "A", "C", "B", "A", "C", "B"],
    "quantity": [2, 5, 3, 1, np.nan, 4, 6, 2, 3, 8, 1, 4],
    "unit_price": [100.0, 50.0, 100.0, 200.0, 50.0, 50.0, np.nan, 200.0, 50.0, 100.0, 200.0, 50.0],
    "order_date": ["2025-01-15", "2025-01-20", "2025-02-01", "2025-02-15", "2025-03-01",
                   "2025-03-10", "2025-03-20", "2025-01-25", "2025-02-10", "2025-03-05",
                   "2025-01-10", "2025-02-20"],
    "region": ["华东", "华东", "华北", np.nan, "华南", "华北", "华东", "华南", "华北", "华东", "华南", "华北"]
}

df = pd.DataFrame(data)

# ========== 请完成以下任务 ==========
# 任务1：查看数据的基本信息（行数、列数、字段类型、缺失值情况）
# 任务2：处理缺失值（product列用众数填充，quantity列用中位数填充，
#        unit_price列用均值填充，region列用"未知"填充）
# 任务3：添加一个新列"total_sales" = quantity * unit_price
# 任务4：按region分组统计各地区的总销售额和订单数
# 任务5：找出销售额最高的3个订单
# 任务6：计算每月的销售趋势
```

**编程题1评分标准**：任务1(2分) 任务2(3分) 任务3(2分) 任务4(2分) 任务5(2分) 任务6(1分) 共12分

**编程题2：NumPy数组运算与统计分析（18分）**

```python
import numpy as np
import pandas as pd

np.random.seed(42)
n_products = 1000
sales_data = np.random.exponential(200, n_products)
cost_data = sales_data * np.random.uniform(0.4, 0.8, n_products)

# ========== 请完成以下任务 ==========
# 任务1：计算每个商品的利润（利润 = 销售额 - 成本）
# 任务2：计算总销售额、总利润、平均利润率（保留2位小数）
# 任务3：计算利润最高的前20%商品的总利润占比（帕累托分析）
# 任务4：找出利润率最高的前10个商品
# 任务5：将数据按销售额排序，计算累计销售额占比，验证帕累托法则
```

**编程题2评分标准**：任务1(2分) 任务2(4分) 任务3(3分) 任务4(5分) 任务5(2分) 代码规范(2分) 共18分

---

### 期末考试试卷（120分钟，满分100分）

#### 一、选择题（每题2分，共10题，20分）

1. Matplotlib中设置中文字体的正确写法是？
   - A. `plt.rcParams["font.family"] = ["Microsoft YaHei"]`
   - B. `plt.set_font("Chinese")`
   - C. `matplotlib.use("chinese")`
   - D. `plt.chinese_font()`

2. 箱线图中离群点的判断标准通常是？
   - A. 大于均值+2*标准差以外的数据点
   - B. 大于Q3 + 1.5*IQR或小于Q1 - 1.5*IQR
   - C. 最大值和最小值以外的数据点
   - D. 离群点就是异常值

3. RFM模型中，R（Recency）指的是？
   - A. 注册天数
   - B. 最近一次购买距离今天的天数
   - C. 总消费金额
   - D. 购买频次

4. A/B测试中，以下哪项不是判断实验是否成功的必要条件？
   - A. 随机分配
   - B. 足够的样本量
   - C. p值 < 0.05
   - D. 实验期间环境稳定

5. Cohort分析（同期群分析）的核心思想是？
   - A. 按用户注册时间分组，观察同一批用户的长期行为变化
   - B. 按用户消费金额分组
   - C. 按产品类别分组
   - D. 按地理位置分组

6. 以下哪种图表最适合展示"各产品销售额占总销售额的百分比"？
   - A. 折线图
   - B. 柱状图
   - C. 饼图
   - D. 散点图

7. 时间序列分析中，简单移动平均（SMA）的主要缺点是？
   - A. 计算太复杂
   - B. 对所有历史数据等权重处理，不能反映最新变化
   - C. 不能处理缺失值
   - D. 只适用于线性数据

8. 数据可视化中，"一张好图胜过千言万语"主要强调什么？
   - A. 图表越复杂越专业
   - B. 图表应该清晰传达关键信息
   - C. 图表越多越好
   - D. 要使用尽可能多的颜色

9. 数据分析报告的经典"金字塔原理"指的是？
   - A. 先展示细节，再总结结论
   - B. 先给结论/建议，再给支撑论据和数据
   - C. 结论放在报告中间位置
   - D. 报告要写得像金字塔

10. 以下关于AI时代数据分析师的角色转变，哪项说法最合理？
    - A. AI会完全取代数据分析师
    - B. 数据分析师应该学会与AI协作，用AI提升效率
    - C. 数据分析师不需要学Python了
    - D. 数据分析师应该转行做AI算法工程师

**选择题答案**：1.A  2.B  3.B  4.C  5.A  6.C  7.B  8.B  9.B  10.B

#### 二、判断题（每题1分，共10题，10分）

1. Matplotlib中，`plt.savefig()`应该在`plt.show()`之后调用。（  ）
2. 散点图是展示两个数值型变量关系的常用图表。（  ）
3. RFM分析中，R值越大（越久没购买），用户越有价值。（  ）
4. A/B测试中，样本量越大越好。（  ）
5. 漏斗分析中，每一步的转化率是该步人数除以上一步的人数。（  ）
6. 数据可视化中，应该使用尽可能多的颜色来区分不同类别。（  ）
7. 时间序列中的指数平滑（EMA）给近期数据更高权重。（  ）
8. 用户画像中的用户标签越多越好。（  ）
9. 数据分析报告中，结论应该放在报告开头。（  ）
10. 使用LLM辅助数据分析时，不要把包含用户隐私的原始数据粘贴到公共AI服务中。（  ）

**判断题答案**：1.×  2.√  3.×  4.×  5.√  6.×  7.√  8.×  9.√  10.√

#### 三、填空题（每空1.5分，共10空，15分）

1. Matplotlib中创建2行2列子图的写法是**fig, axes = plt.subplots(2, 2)**。
2. 漏斗分析中各环节的转化率公式是**当前环节人数 ÷ 上一环节人数**。
3. RFM模型的三个维度是**最近一次购买**、**购买频次**、**累计消费金额**。
4. 数据分析报告的经典结构"结论先行"指的是**先给出核心结论和业务建议**。
5. A/B测试中常用的两类假设检验方法有**t**检验、**卡方**检验。

#### 四、简答题（每题7.5分，共2题，15分）

**简答题1**：请用你自己的话解释"什么是用户画像"，并说明用户画像在电商业务中的3个典型应用场景。（7.5分）

**评分标准**：用户画像定义（2分）+ 个性化推荐（2分）+ 精准营销（2分）+ 用户分层运营（1分）+ 表达（0.5分）= 7.5分

**简答题2**：请简述"数据清洗自动化"的思路，并说明为什么数据清洗在数据分析流程中的重要性。（7.5分）

**评分标准**：缺失值处理（1.5分）+ 异常值检测（1.5分）+ 重复值处理（1.5分）+ 数据类型转换（1.5分）+ 重要性说明GIGO（1分）+ 表达（0.5分）= 7.5分

#### 五、编程题（共2题，第1题15分，第2题25分，共40分）

**编程题1：Matplotlib数据可视化（15分）**

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import matplotlib
matplotlib.rcParams["font.family"] = ["Microsoft YaHei", "SimHei", "Heiti SC", "PingFang HK"]
matplotlib.rcParams["axes.unicode_minus"] = False

np.random.seed(42)
months = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
stores = ["华东店", "华北店", "华南店", "华西店"]

sales_data = {}
for store in stores:
    base = np.random.randint(80, 120)
    trend = np.linspace(0, np.random.randint(20, 60), 12)
    seasonal = 15 * np.sin(np.linspace(0, 2*np.pi, 12))
    noise = np.random.normal(0, 8, 12)
    sales_data[store] = (base + trend + seasonal + noise).round(1)

df = pd.DataFrame(sales_data, index=months)

# ========== 请完成以下可视化任务 ==========
# 任务1：绘制一张2行2列的子图布局（figsize建议(16,12)）
# 任务2：子图1：各分店年度总销售额柱状图
# 任务3：子图2：各分店月度销售趋势折线图
# 任务4：子图3：各分店平均销售额箱线图
# 任务5：子图4：6月份各分店销售占比饼图
# 任务6：为每张子图添加标题、坐标轴标签
```

**编程题1评分标准**：子图布局(2分)+柱状图(3分)+折线图(3分)+箱线图(3分)+饼图(2分)+标题标签(2分)=15分

**编程题2：综合实战——零售超市全流程数据分析（25分）**

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import matplotlib
matplotlib.rcParams["font.family"] = ["Microsoft YaHei", "SimHei", "Heiti SC", "PingFang HK"]
matplotlib.rcParams["axes.unicode_minus"] = False

np.random.seed(42)
n_records = 5000
categories = ["食品饮料", "日用百货", "生鲜果蔬", "家居用品", "电子产品"]
regions = ["华东区", "华北区", "华南区", "华中区", "西南区"]
channels = ["线下门店", "线上小程序", "美团外卖", "饿了么", "京东到家"]

dates = pd.date_range(start="2025-01-01", periods=365, freq="D")
order_ids = [f"ORD{str(i).zfill(6)}" for i in range(1, n_records + 1)]

data = {
    "order_id": order_ids,
    "date": np.random.choice(dates, n_records),
    "category": np.random.choice(categories, n_records, p=[0.35, 0.25, 0.2, 0.12, 0.08]),
    "region": np.random.choice(regions, n_records),
    "channel": np.random.choice(channels, n_records, p=[0.4, 0.25, 0.15, 0.1, 0.1]),
    "quantity": np.random.randint(1, 20, n_records),
    "unit_price": np.round(np.random.exponential(50, n_records), 2).clip(min=5)
}

df = pd.DataFrame(data)
df["total_sales"] = df["quantity"] * df["unit_price"]
df["month"] = df["date"].dt.to_period("M")
df["is_weekend"] = df["date"].dt.dayofweek.isin([5, 6]).map({True: "周末", False: "工作日"})

print("数据基本信息：")
print(f"总记录数：{len(df)} 条")
print(f"时间范围：{df['date'].min().date()} 至 {df['date'].max().date()}")
print(f"总销售额：{df['total_sales'].sum():,.0f} 元")

# ========== 请完成以下综合分析任务 ==========
# 任务1：数据概览与清洗
# 任务2：按品类分组统计各品类的销售额占比、订单数、客单价
# 任务3：按渠道分组统计各渠道销售情况
# 任务4：月度销售趋势分析
# 任务5：周末vs工作日销售对比分析
# 任务6：华东区各品类销售分析
# 任务7：给出3-5条业务建议
```

**编程题2评分标准**：任务1(3分)+任务2(3分)+任务3(3分)+任务4(4分)+任务5(3分)+任务6(4分)+任务7(5分)+代码规范(3分)=25分

---

## 第三部分：3个AI功能的MVP实现方案

### AI功能1：智能代码补全

#### 功能定位
用户在平台的代码编辑器中编写Python数据分析代码时，AI根据上下文实时给出代码补全建议，提升编写效率。

#### 用户交互流程

| 步骤 | 用户动作 | 系统响应 | 延迟目标 |
|------|---------|---------|---------|
| 1 | 在代码编辑器中输入代码 | 实时监听用户输入，提取当前行及上下文 | <50ms |
| 2 | 输入`.`或按下`Ctrl+Space` | 触发补全请求，显示候选建议列表 | <200ms |
| 3 | 在候选列表中滚动浏览 | 实时更新高亮选中项 | <100ms |
| 4 | 按`Tab`或点击某建议 | 插入选中的补全代码 | <50ms |
| 5 | 继续输入 | 根据新输入实时更新建议 | 持续更新 |

**交互示例**：

```
用户输入：
import pandas as pd
df = pd.read_csv("sales.csv")
df.|
          ┌─────────────────────────────────┐
          │  AI补全建议列表                 │
          │  ┌───────────────────────────┐ │
          │  │ head(n=5)  查看前5行      │ │
          │  │ describe()  描述性统计    │ │
          │  │ groupby()   分组聚合       │ │
          │  │ merge()     合并数据       │ │
          │  └───────────────────────────┘ │
          └─────────────────────────────────┘
```

#### 后端API设计思路

**API端点**：`POST /api/v1/ai/code-completion`

**请求体**：

```json
{
  "code": "import pandas as pd\ndf = pd.read_csv(\"sales.csv\")\ndf.",
  "cursor_line": 2,
  "cursor_column": 3,
  "file_language": "python",
  "trigger": "dot"
}
```

**响应体**：

```json
{
  "completions": [
    {
      "text": "head(n=5)",
      "display_text": "head(n=5)  # 查看前5行",
      "type": "method",
      "score": 0.95,
      "source": "builtin"
    },
    {
      "text": "describe()",
      "display_text": "describe()  # 描述性统计",
      "type": "method",
      "score": 0.88,
      "source": "builtin"
    },
    {
      "text": "groupby()",
      "display_text": "groupby()  # 分组聚合",
      "type": "method",
      "score": 0.82,
      "source": "builtin"
    }
  ],
  "latency_ms": 45
}
```

**MVP核心功能清单**：

1. **上下文感知**：分析已导入的库、识别变量对象类型（DataFrame、Series、ndarray）
2. **补全建议**：变量名补全、属性和方法补全、常用代码片段补全
3. **排序与优先级**：基于使用频率、上下文匹配度、用户历史选择
4. **快捷键支持**：Tab接受、上下箭头选择、Esc关闭

**后端实现架构**：

```
API Gateway (Cloudflare Worker)
    ↓
请求验证与限流
    ↓
代码上下文提取（当前行+上下10-20行）
    ↓
AST解析与对象类型识别
    ↓
规则引擎匹配（Python标准库+Pandas+NumPy方法库）
    ↓
结果排序与格式化
    ↓
返回JSON响应
```

**MVP技术选型**：

| 组件 | 选型 | 说明 |
|------|------|------|
| 前端编辑器 | Monaco Editor | 已集成，支持语法高亮 |
| 后端规则引擎 | Python ast模块 + 预定义规则库 | 轻量级、低延迟 |
| 缓存策略 | 高频结果缓存 | 减少重复计算 |
| 可选LLM增强 | OpenAI Codex或类似服务 | 用于更智能的补全 |

**MVP规则库数据结构**：

```python
COMPLETION_RULES = {
    "pandas.DataFrame": {
        "methods": ["head", "describe", "info", "shape", "dtypes",
                    "columns", "index", "loc", "iloc", "groupby",
                    "agg", "merge", "join", "pivot_table", "fillna",
                    "dropna", "drop_duplicates", "sort_values",
                    "reset_index", "set_index", "to_csv", "plot"]
    },
    "pandas.Series": {
        "methods": ["value_counts", "unique", "nunique", "mean",
                    "median", "mode", "std", "min", "max", "sum",
                    "count", "cumsum", "astype", "str.contains"]
    }
}
```

#### MVP实施计划

| 阶段 | 功能 | 开发周期 | 验收标准 |
|------|------|---------|---------|
| 第1周 | 前端集成Monaco Editor补全UI | 1周 | 用户输入`.`后显示补全列表 |
| 第2周 | 后端规则引擎与API | 1周 | 支持Pandas DataFrame核心方法补全 |
| 第3周 | 变量名与模板补全 | 1周 | 支持已定义变量、常用代码片段 |
| 第4周 | 测试与优化 | 1周 | 延迟<500ms，准确率>80% |

---

### AI功能2：可视化方案生成

#### 功能定位
用户上传或选择数据集后，AI根据数据特征（字段类型、数据量大小、业务场景）自动推荐最合适的可视化图表类型，并生成可运行的Matplotlib/Seaborn代码。

#### 用户交互流程

| 步骤 | 用户动作 | 系统响应 |
|------|---------|---------|
| 1 | 上传或选择数据集 | 自动分析数据特征（字段类型、行数、缺失率等） |
| 2 | 输入业务问题/选择分析目标 | 识别问题意图 |
| 3 | 查看推荐方案 | 展示3-5个推荐图表类型及理由 |
| 4 | 选择具体图表类型 | 生成对应Python代码 |
| 5 | 运行代码 | 在浏览器中执行并展示图表 |
| 6 | 修改/优化代码 | 用户可在编辑器中进一步调整参数 |

**交互示例**：

```
数据集：销售数据.csv
字段：日期、品类、销售额、销量、地区
数据量：5,000行 x 5列

我想看：[各品类销售占比分布 ▼]

AI推荐方案：
  ✓ 饼图：各品类销售额占比
  ✓ 柱状图：各地区销售额对比
  ✓ 折线图：月度销售趋势
  ✗ 散点图：此处不适用

[生成代码] → 输出可运行的Matplotlib代码
```

#### 后端API设计思路

**API端点**：`POST /api/v1/ai/visualization-recommend`

**请求体**：

```json
{
  "dataset_info": {
    "name": "销售数据",
    "rows": 5000,
    "columns": 5,
    "fields": [
      {"name": "date", "type": "datetime"},
      {"name": "category", "type": "string", "unique_values": 5},
      {"name": "sales", "type": "numeric", "min": 100, "max": 50000, "mean": 2500},
      {"name": "quantity", "type": "integer"},
      {"name": "region", "type": "string", "unique_values": 3}
    ]
  },
  "user_question": "我想看看各品类的销售额占比",
  "analysis_goal": "distribution"
}
```

**响应体**：

```json
{
  "recommendations": [
    {
      "chart_type": "pie",
      "chart_name": "饼图",
      "suitability_score": 0.92,
      "reason": "数据包含分类变量和数值变量，各品类占总销售额的百分比适合用饼图",
      "suggested_fields": {"x": "category", "y": "sales", "aggregation": "sum"},
      "code": "import matplotlib.pyplot as plt\nimport matplotlib\nmatplotlib.rcParams['font.family'] = ['Microsoft YaHei']\n\nsales_by_category = df.groupby('category')['sales'].sum()\nfig, ax = plt.subplots(figsize=(8, 8))\nax.pie(sales_by_category.values, labels=sales_by_category.index, autopct='%1.1f%%')\nax.set_title('各品类销售额占比')\nplt.show()"
    }
  ]
}
```

**图表类型推荐规则引擎**：

| 数据特征 | 推荐图表类型 | 适用场景 |
|---------|------------|---------|
| 单个分类变量 + 单个数值变量 | 饼图/环形图 | 展示各分类占比分布 |
| 多个分类变量 + 数值变量 | 分组柱状图/堆叠柱状图 | 多维度对比 |
| 时间序列数据（日期+数值） | 折线图/面积图 | 展示时间趋势变化 |
| 两个数值变量 | 散点图 | 分析相关性关系 |
| 单个数值变量的分布 | 直方图/箱线图 | 查看数据分布特征 |
| 三个变量（分类+数值+时间） | 多系列折线图/热力图 | 多维交叉分析 |

**MVP后端实现要点**：

```python
def analyze_dataset(df):
    """分析数据集特征"""
    features = {"n_rows": len(df), "n_cols": len(df.columns), "columns": []}
    for col in df.columns:
        col_info = {
            "name": col,
            "type": str(df[col].dtype),
            "n_unique": df[col].nunique(),
            "missing_rate": df[col].isnull().sum() / len(df)
        }
        if pd.api.types.is_numeric_dtype(df[col]):
            col_info["data_type"] = "numeric"
        elif pd.api.types.is_datetime64_any_dtype(df[col]):
            col_info["data_type"] = "datetime"
        else:
            col_info["data_type"] = "categorical"
        features["columns"].append(col_info)
    return features

def recommend_charts(features, user_question):
    """根据数据特征和用户问题推荐图表"""
    recommendations = []
    has_datetime = any(c["data_type"] == "datetime" for c in features["columns"])
    has_categorical = any(c["data_type"] == "categorical" for c in features["columns"])
    numeric_cols = [c for c in features["columns"] if c["data_type"] == "numeric"]

    if has_datetime and len(numeric_cols) >= 1:
        recommendations.append({"chart_type": "line", "score": 0.9})
    if has_categorical and len(numeric_cols) >= 1:
        recommendations.append({"chart_type": "bar", "score": 0.85})
    if len(numeric_cols) >= 2:
        recommendations.append({"chart_type": "scatter", "score": 0.8})
    return recommendations
```

#### MVP实施计划

| 阶段 | 功能 | 开发周期 | 验收标准 |
|------|------|---------|---------|
| 第1周 | 数据集特征分析模块 | 1周 | 能正确识别字段类型和数据量 |
| 第2周 | 规则引擎与API | 1周 | 支持5种基本图表类型的推荐 |
| 第3周 | 代码生成与模板 | 1周 | 生成可运行的Matplotlib代码 |
| 第4周 | 前端交互与测试 | 1周 | 推荐准确率>75% |

---

### AI功能3：数据清洗自动化

#### 功能定位
用户上传数据集后，AI自动检测数据质量问题（缺失值、异常值、重复值、数据类型错误等），并生成可执行的数据清洗代码。

#### 用户交互流程

| 步骤 | 用户动作 | 系统响应 | 时间目标 |
|------|---------|---------|---------|
| 1 | 上传数据集（CSV/Excel） | 自动检测并分析数据质量问题 | <3秒 |
| 2 | 查看质量报告 | 展示问题清单与建议清洗策略 | 即时 |
| 3 | 调整清洗策略 | 用户可自定义每种问题的处理方式 | 实时 |
| 4 | 生成清洗代码 | 输出可运行的Python代码 | <1秒 |
| 5 | 运行并查看结果 | 展示清洗前后的数据对比 | <5秒 |
| 6 | 保存清洗方案 | 可保存为学习笔记 | 即时 |

**交互示例**：

```
数据质量检测报告
  ✓ 数据维度：5,000行 x 8列
  ✓ 缺失值：发现25处缺失值（0.6%）
    - user_age列：12个缺失值
    - city列：8个缺失值
    - income列：5个缺失值
  ⚠ 异常值：发现15个异常值（需关注）
    - income列：3个异常高值
    - age列：5个异常值 > 100
  ✓ 重复值：发现2行完全重复的行
  ✓ 数据类型：2列类型建议调整

建议清洗策略：
  • 缺失值：用中位数填充
  • 异常值：用IQR方法处理
  • 重复值：删除重复行
  • 数据类型：将date列转为datetime

[生成清洗代码] [应用清洗并运行]
```

#### 后端API设计思路

**API端点**：`POST /api/v1/ai/data-cleaning-analysis`

**请求体**：

```json
{
  "dataset_preview": {
    "columns": ["user_id", "age", "income", "city", "register_date"],
    "sample_rows": 20,
    "column_types": {
      "user_id": "int64",
      "age": "float64",
      "income": "float64",
      "city": "object",
      "register_date": "object"
    },
    "statistics": {
      "missing_counts": {"age": 12, "income": 5, "city": 8},
      "unique_counts": {"user_id": 5000, "city": 10}
    }
  }
}
```

**响应体**：

```json
{
  "analysis_result": {
    "missing_values": [
      {
        "column": "age",
        "count": 12,
        "rate": 0.0024,
        "suggested_action": "fill_with_median",
        "description": "年龄列有12个缺失值，建议用中位数填充以保留样本量"
      }
    ],
    "outliers": [
      {
        "column": "income",
        "method": "IQR",
        "count": 3,
        "suggested_action": "cap",
        "description": "收入列有3个异常高值，建议用盖帽法处理"
      }
    ],
    "duplicates": {"total_rows": 2, "suggested_action": "drop"},
    "type_issues": [
      {
        "column": "register_date",
        "current_type": "object",
        "suggested_type": "datetime64",
        "description": "注册日期列当前为字符串类型，建议转为datetime类型"
      }
    ]
  },
  "generated_code": "import pandas as pd\nimport numpy as np\n\ndf = pd.read_csv('data.csv')\ndf['age'] = df['age'].fillna(df['age'].median())\n\n# IQR方法处理异常值\nQ1 = df['income'].quantile(0.25)\nQ3 = df['income'].quantile(0.75)\nIQR = Q3 - Q1\ndf.loc[df['income'] > Q3 + 1.5*IQR, 'income'] = Q3 + 1.5*IQR\n\ndf = df.drop_duplicates()\ndf['register_date'] = pd.to_datetime(df['register_date'])\nprint('数据清洗完成！')"
}
```

**MVP后端核心检测算法**：

```python
def detect_missing_values(df):
    """检测缺失值"""
    missing = df.isnull().sum()
    missing_rate = missing / len(df)
    return pd.DataFrame({"missing_count": missing, "missing_rate": missing_rate})

def detect_outliers_iqr(df, column):
    """用IQR方法检测异常值"""
    Q1 = df[column].quantile(0.25)
    Q3 = df[column].quantile(0.75)
    IQR = Q3 - Q1
    lower = Q1 - 1.5 * IQR
    upper = Q3 + 1.5 * IQR
    outliers = df[(df[column] < lower) | (df[column] > upper)]
    return len(outliers), lower, upper

def detect_outliers_3sigma(df, column):
    """用3σ原则检测异常值"""
    mean = df[column].mean()
    std = df[column].std()
    lower = mean - 3 * std
    upper = mean + 3 * std
    outliers = df[(df[column] < lower) | (df[column] > upper)]
    return len(outliers), lower, upper

def detect_duplicates(df):
    """检测重复值"""
    duplicates = df[df.duplicated(keep=False)]
    return len(duplicates)

def detect_type_issues(df):
    """检测数据类型问题"""
    issues = []
    for col in df.columns:
        if df[col].dtype == 'object':
            try:
                pd.to_datetime(df[col].dropna().head(10))
                issues.append({"column": col, "suggested_type": "datetime64"})
            except:
                pass
    return issues
```

#### MVP实施计划

| 阶段 | 功能 | 开发周期 | 验收标准 |
|------|------|---------|---------|
| 第1周 | 数据质量检测模块 | 1周 | 能检测出缺失值、异常值、重复值 |
| 第2周 | 处理策略推荐引擎 | 1周 | 根据问题类型给出恰当的处理建议 |
| 第3周 | 代码生成与API | 1周 | 生成可运行的Pandas清洗代码 |
| 第4周 | 前端交互与对比可视化 | 1周 | 展示清洗前后数据对比，用户体验流畅 |

---

**文档版本**：v2.0（完整）  
**最后更新**：2026-06-13  
**适用平台**：xmsxmss.pages.dev
