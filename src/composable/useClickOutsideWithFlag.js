
export default function useClickOutside(el_target_ref, el_flag, callback_fn){
    

    let listener = (e) => {
        if (!el_target_ref.contains(e.target)) {
            callback_fn();
        }
    }
    
    if ( el_flag ) {
        window.addEventListener('click', listener)
    } else {
        window.removeEventListener('click', listener);
    }

    return {
        listener
    }
}