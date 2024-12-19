<template>
  <div class="min-h-screen bg-gray-100 py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-bold text-center text-gray-900 mb-8">
        EeeUI 组件示例
      </h1>

      <div class="space-y-8">
        <!-- Toast 示例 -->
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">Toast 提示</h2>
          <div class="space-x-4">
            <zjh-button variant="primary" @click="showSuccessToast">成功提示</zjh-button>
            <zjh-button variant="secondary" @click="showErrorToast">错误提示</zjh-button>
            <zjh-button variant="primary" @click="showInfoToast">信息提示</zjh-button>
            <zjh-button variant="secondary" @click="showWarningToast">警告提示</zjh-button>
          </div>
        </div>

        <!-- 按钮示例 -->
        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">按钮组件</h2>
          <div class="space-y-4">
            <div class="space-x-4">
              <zjh-button variant="primary">主要按钮</zjh-button>
              <zjh-button variant="secondary">次要按钮</zjh-button>
            </div>

            <div class="space-x-4">
              <zjh-button variant="primary" disabled>禁用按钮</zjh-button>
              <zjh-button variant="secondary" disabled>禁用按钮</zjh-button>
            </div>

            <div class="w-64">
              <zjh-button variant="primary" block>块级按钮</zjh-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toast } from '@eee/utils';

// Toast 示例函数
const showSuccessToast = () => {
  toast('操作成功！', { type: 'success' });
};

const showErrorToast = () => {
  toast('操作失败！', { type: 'error' });
};

const showInfoToast = () => {
  toast('这是一条信息提示', { type: 'info' });
};

const showWarningToast = () => {
  toast('注意：这是一条警告信息', { type: 'warning' });
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
