<template>
  <svg
      class="pan-zoom-frame bg-white border-black"
      style="border-width: 1px; cursor: zoom-in;"
      ref="zoomFrame"
      :style="{ transform: `translate(${deltaX}px, ${deltaY}px) scale(${scale}, -${scale})` }"
      @mousedown="startPan"
      @touchstart="startPan"
      @mouseup="endPan"
      @touchend="endPan"
      @mouseleave="endPan"
      @wheel="handleZoom"
      @gesturechange="handleGestureChange"
      :viewBox="props.vBox"
  >
      <slot></slot>
  </svg>
</template>

<script setup>
  import { defineProps } from 'vue';

  import usePan from '@/composable/usePan';
  import useZoom from '@/composable/useZoom';

  const props = defineProps({
    vBox: String
  });

  const { deltaX, deltaY, startPan, endPan } = usePan();
  const { scale, handleZoom, handleGestureChange } = useZoom();
</script>