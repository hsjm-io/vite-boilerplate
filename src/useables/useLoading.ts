import type { WritableComputedRef } from 'vue'
import { computed } from 'vue'
import { useVModel } from '@vueuse/core'

export const useLoadingProps = {
    loading: Boolean,
    loadingClass: { type: String, default: 'loading' },
}

export const useLoading = (props) => {

    //--- Define reactive variables.
    const loading = useVModel(props, 'loading', null, {passive: true}) as WritableComputedRef<boolean>

    //--- Define computed classes array.
    const classes = computed(() => ({
        [props.loadingClass]: loading.value,
    }))

    //--- Return reactive properties.
    return { loading, classes }

}