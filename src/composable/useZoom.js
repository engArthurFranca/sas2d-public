import { ref } from 'vue';

export default function useZoom() {
    let scale = ref(1);

    function handleZoom(e) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        scale.value *= delta;
    }

    function handleGestureChange(e) {
        // Evento de pinça (zoom) para navegadores que suportam GestureEvent
        e.preventDefault();
        scale.value = Math.min(Math.max(scale.value * e.scale, 0.1), 3);
    }

    return {
        scale,
        handleZoom,
        handleGestureChange
    }
}