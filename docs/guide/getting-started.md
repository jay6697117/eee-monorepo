# 快速开始

## 环境要求

- Node.js >= 16
- Vue >= 3.3

## 安装

### 使用包管理器

```bash
# npm
npm install @eee/ui

# yarn
yarn add @eee/ui

# pnpm
pnpm add @eee/ui
```

### 完整引入

在应用入口文件中引入 EeeUI：

```ts
import { createApp } from 'vue'
import EeeUI from '@eee/ui'
import '@eee/ui/dist/ui.css'
import App from './App.vue'

const app = createApp(App)
app.use(EeeUI)
app.mount('#app')
```

### 使用组件

现在你可以在模板中使用 EeeUI 的组件了：

```vue
<template>
  <zjh-button variant="primary">点击我</zjh-button>
</template>
```

## TypeScript 支持

EeeUI 使用 TypeScript 编写，提供了完整的类型定义。

## 样式定制

EeeUI 使用 Tailwind CSS 构建，你可以通过以下方式定制样式：

1. 在你的项目中创建 `tailwind.config.js`：

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@eee/ui/dist/**/*.{js,css}',
  ],
  theme: {
    extend: {
      // 在这里添加你的主题配置
    },
  },
  plugins: [],
}
```

2. 配置 PostCSS：

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
