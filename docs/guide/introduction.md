# 介绍

EeeUI 是一个基于 Vue 3、TypeScript 和 Tailwind CSS 的现代组件库。它提供了一系列美观、易用的组件，帮助开发者快速构建现代化的 Web 应用。

## 特性

- 🚀 基于 Vue 3 和 TypeScript，提供完整的类型支持
- 🎨 使用 Tailwind CSS 构建，提供灵活的样式定制能力
- 📦 支持按需引入，优化打包体积
- 📱 响应式设计，支持移动端和桌面端
- 🎯 提供完整的文档和示例
- ⚡️ 基于 Vite 构建，开发体验极致

## 安装

使用包管理器安装 EeeUI：

```bash
# npm
npm install @eee/ui

# yarn
yarn add @eee/ui

# pnpm
pnpm add @eee/ui
```

## 快速开始

在你的应用中引入 EeeUI：

```ts
import { createApp } from 'vue'
import EeeUI from '@eee/ui'
import '@eee/ui/dist/ui.css'

const app = createApp(App)
app.use(EeeUI)
app.mount('#app')
```
