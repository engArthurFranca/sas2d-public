import { onMounted, onBeforeUnmount } from "vue";

export default function useClickOutside(el_target_ref, callback_fn){
    if (!el_target_ref) return;

    let listener = (e) => {
        if (!el_target_ref.contains(e.target)) {
            callback_fn();
        }
    }

    onMounted(() => {
        window.addEventListener('click', listener)
        
    });
    
    onBeforeUnmount(() => {
        window.removeEventListener('click', listener);
    });
    
    return {
        listener
    }
}