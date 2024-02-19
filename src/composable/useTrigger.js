import { ref, onBeforeUnmount } from "vue";

let activeInstance = null;

export default function useTrigger( {idList, triggerFunc, unTriggerFunc, preventUntrigger=false} ) {
    
    const isActive = ref(false);

    function trigger() {

        console.log('calling trigger ', idList)


        //desactivate before instance
        if ( activeInstance instanceof Function && !preventUntrigger ) { activeInstance(); }

        isActive.value = true;
        //set new instance
        activeInstance = unTrigger;
        //call predefined trigger function
        if ( triggerFunc instanceof Function ) { triggerFunc() }
        window.addEventListener('click', listener);
    }

    function unTrigger() {

        console.log('calling untrigger')

        isActive.value = false;
        //call predefined untrigger function
        if ( unTriggerFunc  instanceof Function ) { unTriggerFunc() }
        //reset instance after untrigger
        activeInstance = null;
        window.removeEventListener('click', listener);
    }

    function listener(e) {
        for (const idEl of idList) {
            const element = document.getElementById(idEl);
            //ignore if click was inside one of the element list
            if ( element && element.contains(e.target) ) {
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