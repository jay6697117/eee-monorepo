# 按钮 Button

常用的操作按钮。

## 基础用法

使用 `variant` 属性来定义按钮的样式。

```vue
<template>
  <zjh-button variant="primary">主要按钮</zjh-button>
  <zjh-button variant="secondary">次要按钮</zjh-button>
</template>
```

## 禁用状态

使用 `disabled` 属性来禁用按钮。

```vue
<template>
  <zjh-button variant="primary" disabled>禁用按钮</zjh-button>
  <zjh-button variant="secondary" disabled>禁用按钮</zjh-button>
</template>
```

## 块级按钮

使用 `block` 属性将按钮设置为块级元素，宽度为父容器的 100%。

```vue
<template>
  <zjh-button variant="primary" block>块级按钮</zjh-button>
</template>
```

## API

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| variant | 按钮类型 | 'primary' \| 'secondary' | 'secondary' |
| disabled | 是否禁用 | boolean | false |
| block | 是否为块级元素 | boolean | false |

### 事件

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击按钮时触发 | (event: MouseEvent) => void |

## 示例

<script setup>
import { ref } from 'vue'

const count = ref(0)
const increment = () => {
  count.value++
}
</script>

### 计数器示例

<div class="space-y-4">
  <p class="text-lg">当前计数：{{ count }}</p>
  <zjh-button variant="primary" @click="increment">点击增加</zjh-button>
</div>

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
const increment = () => {
  count.value++
}
</script>

<template>
  <div class="space-y-4">
    <p class="text-lg">当前计数：{{ count }}</p>
    <zjh-button variant="primary" @click="increment">
      点击增加
    </zjh-button>
  </div>
</template>
```
