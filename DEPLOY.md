# Python数据分析AI训练平台部署指南

本指南详细说明如何将Python数据分析AI训练平台部署到Cloudflare免费套餐。

## 一、前端部署（Cloudflare Pages）

### 步骤1：准备代码
1. 确保项目代码已提交到GitHub仓库
2. 确保 `package.json` 中的构建命令正确：
   - 构建命令：`npm run build`
   - 输出目录：`dist`

### 步骤2：部署到Cloudflare Pages
1. 登录 [Cloudflare 控制台](https://dash.cloudflare.com/)
2. 导航到 **Pages** 页面
3. 点击 **创建项目**
4. 选择 **连接到 Git**
5. 选择你的GitHub仓库
6. 配置构建设置：
   - 框架预设：`Vite`
   - 构建命令：`npm run build`
   - 构建输出目录：`dist`
7. 点击 **部署站点**
8. 等待部署完成，记录生成的访问域名

## 二、Workers部署（AI API代理）

### 步骤1：创建Worker
1. 登录 [Cloudflare 控制台](https://dash.cloudflare.com/)
2. 导航到 **Workers & Pages** 页面
3. 点击 **创建应用** → **创建Worker**
4. 命名你的Worker（例如：`ai-proxy`）
5. 点击 **部署**

### 步骤2：配置Worker代码
1. 在Worker详情页，点击 **快速编辑**
2. 复制 `worker.ts` 文件中的代码粘贴到编辑区域
3. 点击 **保存并部署**

### 步骤3：配置环境变量
1. 在Worker详情页，点击 **设置** → **变量**
2. 添加以下环境变量：
   - `CLOUDFLARE_ACCOUNT_ID`：你的Cloudflare账号ID
   - `AI_GATEWAY_NAME`：你的AI Gateway名称
   - `AI_API_KEY`：你的AI API密钥（如OpenAI API Key）
3. 确保 **加密** 选项已勾选，保护API密钥

## 三、AI Gateway配置

### 步骤1：创建AI Gateway
1. 登录 [Cloudflare 控制台](https://dash.cloudflare.com/)
2. 导航到 **AI** → **AI Gateway** 页面
3. 点击 **创建Gateway**
4. 命名你的Gateway（例如：`data-analysis-ai`）
5. 点击 **创建**

### 步骤2：配置AI提供商
1. 在Gateway详情页，点击 **添加路由**
2. 选择AI提供商（如OpenAI）
3. 输入API密钥
4. 点击 **保存**

## 四、前端配置（连接Workers）

### 步骤1：更新前端AI请求代码
1. 打开 `src/pages/ProjectDetail.tsx` 文件
2. 修改 `handleSendAIMessage` 函数，将模拟响应替换为真实的Worker请求：

```typescript
const handleSendAIMessage = async () => {
  if (!aiInput.trim()) return;
  
  const newMessage: ChatMessage = {
    role: 'user',
    content: aiInput,
    timestamp: Date.now()
  };
  
  setMessages(prev => [...prev, newMessage]);
  setAiInput('');
  setIsLoadingAI(true);
  
  try {
    // 调用Cloudflare Worker
    const response = await fetch('https://your-worker-name.your-username.workers.dev', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messages: [newMessage]
      })
    });
    
    const data = await response.json();
    const aiResponse: ChatMessage = {
      role: 'assistant',
      content: data.choices[0].message.content,
      timestamp: Date.now()
    };
    
    setMessages(prev => [...prev, aiResponse]);
    saveChatMessages(project.id, [...messages, newMessage, aiResponse]);
  } catch (error) {
    console.error('AI请求失败:', error);
  } finally {
    setIsLoadingAI(false);
  }
};
```

2. 将 `https://your-worker-name.your-username.workers.dev` 替换为你的Worker实际URL

### 步骤2：重新部署前端
1. 提交代码更改到GitHub
2. Cloudflare Pages会自动重新部署

## 五、验证部署

### 验证步骤
1. 访问Cloudflare Pages生成的前端域名
2. 进入项目列表页，选择一个项目
3. 点击"生成数据集"按钮，验证Pyodide是否正常工作
4. 编写简单的Python代码，点击"运行"按钮，验证代码执行功能
5. 在AI陪练面板中输入问题，验证AI响应功能
6. 测试进度保存功能，刷新页面后检查代码是否保留

## 六、免费资源使用注意事项

1. **Cloudflare Pages**：
   - 免费额度：无限站点、无限带宽、每天100次构建
   - 注意：超过构建次数会暂停部署

2. **Cloudflare Workers**：
   - 免费额度：每天10万次请求、1GB内存、30秒超时
   - 注意：超过请求次数会被限流

3. **Cloudflare AI Gateway**：
   - 免费额度：每天10万次请求
   - 注意：优先使用轻量模型（如gpt-4o-mini）降低调用成本

4. **LocalStorage**：
   - 限制：单域名5-10MB
   - 注意：避免存储过大数据，如完整数据集

## 七、故障排除

### 常见问题
1. **Pyodide加载失败**：
   - 检查网络连接
   - 确认Pyodide CDN地址正确

2. **AI请求失败**：
   - 检查Worker环境变量配置
   - 验证AI Gateway设置
   - 确认API密钥有效

3. **代码运行超时**：
   - 优化Python代码，减少计算复杂度
   - 避免处理过大的数据集

4. **部署失败**：
   - 检查构建命令是否正确
   - 确认依赖安装成功

## 八、后续维护

1. **更新项目内容**：
   - 修改 `src/data/projectsData.ts` 文件
   - 提交更改后自动重新部署

2. **更新AI提示词**：
   - 修改Worker中的系统提示词
   - 重新部署Worker

3. **监控使用情况**：
   - 在Cloudflare控制台查看使用统计
   - 确保不超出免费额度

## 九、部署完成

恭喜！你已成功部署Python数据分析AI训练平台到Cloudflare免费套餐。现在用户可以：
- 访问前端网站，浏览10个梯度项目
- 在浏览器中运行Python代码，生成图表
- 与AI教练互动，获取学习指导
- 保存学习进度，下次继续学习

平台完全基于Cloudflare免费资源，零成本、零运维，打开浏览器即可使用！
