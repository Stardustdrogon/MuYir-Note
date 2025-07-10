<script setup>
import { ref, computed, onMounted } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()
const progress = ref(0)

// 模拟学习进度计算
onMounted(() => {
  // 实际应用中可以从本地存储读取进度
  const storedProgress = localStorage.getItem(`progress:${page.value.relativePath}`)
  
  if (storedProgress) {
    progress.value = parseInt(storedProgress)
  } else {
    // 新页面默认进度为0
    progress.value = 0
  }
})

// 更新进度
const updateProgress = (value) => {
  progress.value = Math.min(Math.max(value, 0), 100)
  localStorage.setItem(`progress:${page.value.relativePath}`, progress.value)
}
</script>

<template>
  <div class="progress-container">
    <div class="progress-bar" :style="{ width: progress + '%' }"></div>
    <div class="progress-controls">
      <button @click="updateProgress(progress - 10)" :disabled="progress <= 0">-10%</button>
      <span>{{ progress }}%</span>
      <button @click="updateProgress(progress + 10)" :disabled="progress >= 100">+10%</button>
    </div>
  </div>
</template>

<style scoped>
.progress-container {
  margin: 2rem 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
}

.progress-bar {
  height: 30px;
  background-color: var(--vp-c-brand);
  transition: width 0.3s ease;
}

.progress-controls {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.progress-controls button {
  padding: 0.2rem 0.8rem;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  cursor: pointer;
}

.progress-controls button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.progress-controls span {
  font-weight: bold;
  min-width: 50px;
  text-align: center;
}
</style>