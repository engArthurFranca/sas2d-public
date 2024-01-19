<template>
    <svg
        class="pan-zoom-frame"
        ref="zoomFrame"
        :style="{ transform: `translate(${offsetX}px, ${offsetY}px) scale(${scale})` }"
  
        viewBox="-50 -50 200 200"
        @mousedown="startPan"
        @touchstart="startPan"
        @mousemove="handlePan"
        @touchmove="handlePan"
        @mouseup="endPan"
        @touchend="endPan"
        @mouseleave="endPan"
        @wheel="handleZoom"
        @gesturestart="handleGestureStart"
        @gesturechange="handleGestureChange"
    >
        <slot></slot>
    </svg>
  </template>
  
  <script>
  export default {
    data() {
      return {
        panStartX: null,
        panStartY: null,
        offsetX: 0,
        offsetY: 0,
        scale: 1,
        containerWidth: 0,
        containerHeight: 0,
      };
    },
  
    mounted() {
      this.containerWidth = this.$el.clientWidth;
      this.containerHeight = this.$el.clientHeight;
    },
    methods: {
      startPan(e) {
        this.panStartX = e.clientX;
        this.panStartY = e.clientY;
        this.$refs.zoomFrame.style.cursor = 'grabbing';
      },
      handlePan(e) {
        if (!this.panStartX || !this.panStartY) return;
  
        const deltaX = e.clientX - this.panStartX;
        const deltaY = e.clientY - this.panStartY;
  
        this.offsetX += deltaX;
        this.offsetY += deltaY;
  
        this.panStartX = e.clientX;
        this.panStartY = e.clientY;
      },
      endPan() {
        this.panStartX = null;
        this.panStartY = null;
        this.$refs.zoomFrame.style.cursor = 'zoom-in';
      },
      handleZoom(e) {
        e.preventDefault();
  
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
  
        this.scale *= delta;
      },
      handleGestureStart(e) {
        // Armazena a escala inicial para o evento de pinça (zoom)
        this.pinchStartScale = e.scale;
      },
      handleGestureChange(e) {
        // Evento de pinça (zoom) para navegadores que suportam GestureEvent
        e.preventDefault();
  
        this.scale = Math.min(Math.max(this.scale * e.scale, 0.1), 3);
      },
    },
  };
  </script>
  
  <style scoped>
    .pan-zoom-frame {
      cursor: zoom-in;
      border: 1px solid black;
      background-color: white;
    }
  </style>