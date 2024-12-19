// 添加一些示例工具函数
export const add = (a: number, b: number) => a + b;

// Toast 配置类型
export interface ToastOptions {
  position?: 'top' | 'bottom';
  type?: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

/**
 * 显示一个 toast 提示框
 * @param message 提示信息
 * @param options 配置选项
 */
export const toast = (message: string, options: ToastOptions = {}) => {
  const {
    position = 'top',
    type = 'info',
    duration = 5000
  } = options;

  // 创建 toast 容器
  const toast = document.createElement('div');

  // 设置样式
  toast.style.cssText = `
    position: fixed;
    ${position}: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${type === 'error' ? '#ff4d4f' :
                       type === 'success' ? '#52c41a' :
                       type === 'warning' ? '#faad14' : '#1890ff'};
    color: white;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 14px;
    z-index: 9999;
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
                0 6px 16px 0 rgba(0, 0, 0, 0.08),
                0 9px 28px 8px rgba(0, 0, 0, 0.05);
    transition: all 0.3s;
  `;

  // 设置内容
  toast.textContent = message;

  // 添加到页面
  document.body.appendChild(toast);

  // 设置淡入效果
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
  });

  // 定时移除
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, duration);
};
