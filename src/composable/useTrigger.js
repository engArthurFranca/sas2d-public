import { ref, onBeforeUnmount } from "vue";

let activeInstance = null;

export default function useTrigger( {idList, triggerFunc, unTriggerFunc} ) {
    //verify is exists any element to check
    if (idList.length === 0) return;

    const isActive = ref(false);

    function trigger() {
        //desactivate before instance
        if ( activeInstance instanceof Function ) { activeInstance(); }

        isActive.value = true;
        //set new instance
        activeInstance = unTriggerFunc;
        //call predefined trigger function
        if ( triggerFunc instanceof Function ) { triggerFunc() }
        window.addEventListener('click', listener);
    }

    function unTrigger() {
        isActive.value = false;
        //call predefined untrigger function
        if ( unTriggerFunc  instanceof Function ) { unTriggerFunc() }
        //reset instance after untrigger
        activeInstance = null;
        window.removeEventListener('click', listener);
    }

    function listener(e) {
        for (const idEl of idList) {
            //check if click was inside of the element list
            if ( document.getElementById(idEl).contains(e.target) ) {
                trigger()
                return
            }
        }

        unTrigger()
    }
    
    onBeforeUnmount(() => {
        window.removeEventListener('click', listener);
    });

    return {
        isActive,
        trigger
    }
}