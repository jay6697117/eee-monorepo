<template>
  <button
    :class="[
      'btn',
      variant === 'primary' ? 'btn-primary' : 'btn-secondary',
      disabled ? 'opacity-50 cursor-not-allowed' : '',
      block ? 'w-full' : '',
    ]"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  block?: boolean
}>()

defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()</script>
