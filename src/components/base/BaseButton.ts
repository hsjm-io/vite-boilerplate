//--- Import dependencies.
import { computed, defineComponent } from 'vue'
import { useVModel } from '@vueuse/core'
import {
    useDisabled, useDisabledProps,
    useRouting, useRoutingProps,
    useLoading, useLoadingProps,
} from '../../useables'

//--- Define Vue component.
export default defineComponent({

    props: {

        //--- Component props.
        tag: {type: String, default: 'button'},
        modelValue: Boolean,
        toggle: Boolean,

        //--- Useables props.
        ...useDisabledProps,
        ...useRoutingProps,
        ...useLoadingProps,

        //--- Catch listeners.
        onClick: Function,
    },

    setup(props, {attrs, emit}){

        //--- Init reactive properties.
        const modelValue = useVModel(props, 'modelValue', null, {passive: true})
        const { classes: classesDisabled, attributes: attributesDisabled } = useDisabled(props)
        const { classes: classesRouting, href, isLink, isExternalLink, navigate } = useRouting(props)
        const { classes: classesLoading, loading } = useLoading(props)
        const tag = computed(() => isLink.value ? 'a' : props.tag ?? 'button')

        //--- Compute async functions.
        const onClick = async (e: Event) => {

            //--- Avoid native navigation.
            // if(isExternalLink.value)
                e.preventDefault()

            //--- Avoid any interation when `disabled`.
            if(props.disabled || props.readonly) return

            //--- Call `@click` and toggle `modelValue`.
            loading.value = true
            if(props.toggle) modelValue.value = !modelValue.value
            if(props.onClick) await props.onClick()
            loading.value = false

            //--- Call `vue-router` navigation.
            navigate()
        }

        //--- Compute CSS classes.
        const classes = computed(() => ({
            'active': modelValue.value,
            ...classesDisabled.value,
            ...classesRouting.value,
            ...classesLoading.value,
        }))

        const attributes = computed(() => ({

            href: href.value,
            class: classes.value,
            onClick: onClick,

            'role': props.onClick ? 'button' : undefined,

            ...attributesDisabled.value,
        }))

        return { tag, loading, attributes, isExternalLink }
    }

})