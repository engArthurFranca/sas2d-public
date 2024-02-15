import { ref } from 'vue';

export default function usePan() {
    let deltaX = ref(0);
    let deltaY = ref(0);

    function startPan() {
        window.addEventListener('mousemove', handlePan);
        window.addEventListener('mouseup', endPan);
    }

    function handlePan(e) {
        deltaX.value += e.movementX;
        deltaY.value += e.movementY;
    }

    function endPan() {
        window.removeEventListener('mousemove', handlePan);
        window.removeEventListener('mouseup', handlePan);
    }

    return {
        deltaX,
        deltaY,
        startPan,
        endPan
    }
}