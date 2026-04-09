
# 部署到 Cloudflare Pages 指南

## 1. 构建项目

首先，在本地构建项目以确保没有错误：

```bash
npm run build
```

## 2. 准备部署到 Cloudflare Pages

### 方法一：使用 Cloudflare Pages 控制台（推荐）

1. **创建 GitHub 仓库**
   - 将项目代码推送到 GitHub 仓库

2. **访问 Cloudflare Pages**
   - 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - 进入 "Pages" 部分
   - 点击 "Create a project" → "Connect to Git"

3. **配置项目**
   - 选择您的 GitHub 仓库
   - 项目名称：`business-analytics-platform`（或您喜欢的名称）
   - 生产分支：`main` 或 `master`
   - 构建命令：`npm run build`
   - 构建输出目录：`dist`

4. **环境变量（如需要）**
   - 本项目不需要额外的环境变量

5. **点击 "Save and Deploy"**

### 方法二：使用 Wrangler CLI

1. **安装 Wrangler**
```bash
npm install -g wrangler
```

2. **登录 Cloudflare**
```bash
wrangler login
```

3. **部署项目**
```bash
wrangler pages deploy dist --project-name=business-analytics-platform
```

## 3. 项目特色功能

✅ **完整的课程体系**：4门专业课程，从基础到进阶
✅ **互动式学习模块**：章节式学习，带练习功能
✅ **练习和测评**：每章练习和综合测评
✅ **成就激励系统**：8个成就徽章，激励学习
✅ **本地存储**：学习进度自动保存到浏览器
✅ **响应式设计**：完美支持桌面和移动设备

## 4. 技术栈

- React 18 + TypeScript
- Vite（构建工具）
- Tailwind CSS（样式框架）
- Zustand（状态管理）
- React Router（路由）
- Lucide React（图标库）

## 5. 后续优化建议

1. **添加用户认证**：集成 Supabase 或 Auth0
2. **扩展课程内容**：添加更多课程和练习
3. **添加视频课程**：集成视频播放功能
4. **社区功能**：添加讨论区和问答功能
5. **数据分析仪表盘**：可视化学习数据

祝您使用愉快！
