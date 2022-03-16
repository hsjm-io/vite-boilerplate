import { computed, defineComponent, WritableComputedRef } from 'vue'
import { useVModel } from '@vueuse/core'

//--- Props definition.
export const useLoadingProps = {
    loading: Boolean,
    loadingClass: { type: String, default: 'loading' },
}

//--- Setup composition.
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

//--- Mixin definition.
export const loadable = defineComponent({
    props: useLoadingProps,
    setup: props => {
        const {loading, classes: classesLoading} = useLoading(props)
        return {loading, classesLoading}
    }
})