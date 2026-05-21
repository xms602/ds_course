// 学习进度类型定义
export interface ProjectProgress {
  code: string; // 用户编写的代码
  completed: boolean; // 是否完成
  lastUpdated: number; // 最后更新时间
}

// 聊天记录类型定义
export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

// 存储单个项目进度
export const saveProjectProgress = (projectId: string, progress: Omit<ProjectProgress, 'lastUpdated'>) => {
  try {
    const allProgress = JSON.parse(localStorage.getItem('learningProgress') || '{}');
    allProgress[projectId] = {
      ...progress,
      lastUpdated: Date.now()
    };
    localStorage.setItem('learningProgress', JSON.stringify(allProgress));
  } catch (error) {
    console.error('保存项目进度失败:', error);
  }
};

// 获取单个项目进度
export const getProjectProgress = (projectId: string): ProjectProgress => {
  try {
    const allProgress = JSON.parse(localStorage.getItem('learningProgress') || '{}');
    return allProgress[projectId] || { code: '', completed: false, lastUpdated: 0 };
  } catch (error) {
    console.error('获取项目进度失败:', error);
    return { code: '', completed: false, lastUpdated: 0 };
  }
};

// 获取所有项目进度
export const getAllProgress = (): Record<string, ProjectProgress> => {
  try {
    return JSON.parse(localStorage.getItem('learningProgress') || '{}');
  } catch (error) {
    console.error('获取所有项目进度失败:', error);
    return {};
  }
};

// 保存聊天记录
export const saveChatMessages = (projectId: string, messages: ChatMessage[]) => {
  try {
    const allChats = JSON.parse(localStorage.getItem('chatMessages') || '{}');
    allChats[projectId] = messages;
    localStorage.setItem('chatMessages', JSON.stringify(allChats));
  } catch (error) {
    console.error('保存聊天记录失败:', error);
  }
};

// 获取聊天记录
export const getChatMessages = (projectId: string): ChatMessage[] => {
  try {
    const allChats = JSON.parse(localStorage.getItem('chatMessages') || '{}');
    return allChats[projectId] || [];
  } catch (error) {
    console.error('获取聊天记录失败:', error);
    return [];
  }
};

// 清除所有数据（用于测试）
export const clearAllData = () => {
  try {
    localStorage.removeItem('learningProgress');
    localStorage.removeItem('chatMessages');
  } catch (error) {
    console.error('清除数据失败:', error);
  }
};
