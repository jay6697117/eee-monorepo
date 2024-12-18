<template>
  <div class="min-h-screen bg-gray-100 py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-bold text-center text-gray-900 mb-8">
        EeeUI 组件示例
      </h1>

      <div class="space-y-8">
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
// 组件已全局注册，无需导入
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
