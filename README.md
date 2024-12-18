### 目录结构

eee-monorepo/
├── apps/
│   └── web/               # Vue3 + Vite + TS 项目
├── packages/
│   ├── ui/               # Vue3 组件库
│   └── utils/            # 工具库
├── docs/                 # VitePress 文档
├── package.json
├── pnpm-workspace.yaml
└── turbo.json


### 主要特点：
使用 pnpm 作为包管理器
配置了 Turborepo 的构建管道
支持 TypeScript
集成了 ESLint 和 Prettier
使用 Changesets 进行版本管理
所有包都使用 workspace 协议相互引用
您可以使用以下命令：
pnpm dev: 启动所有项目的开发环境
pnpm build: 构建所有项目
pnpm lint: 运行所有项目的代码检查
pnpm clean: 清理所有项目的构建文件
接下来您可能需要：
在 packages/ui 中开发您的组件
在 packages/utils 中添加工具函数
在 apps/web 中开发您的主应用
在 docs 中编写组件文档
