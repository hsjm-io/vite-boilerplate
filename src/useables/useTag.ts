import { computed, ComputedRef } from 'vue'

export const useTagProps = {
    tag: String, 
}

export const useTag = (props, defaultTag?: string) => {

    //--- Define reactive variables.
    const tag = computed(() => props.tag ?? defaultTag ?? 'div') as ComputedRef<string>

    //--- Return reactive properties.
    return { tag }
}
