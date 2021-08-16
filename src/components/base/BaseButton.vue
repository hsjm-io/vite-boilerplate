<script lang="ts">

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
        label: String,
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
        const { classes: classesRouting, href, isLink, navigate } = useRouting(props)
        const { classes: classesLoading, loading } = useLoading(props)
        const tag = computed(() => isLink ? 'a' : props.tag)

        //--- Compute CSS classes.
        const classes = computed(() => ({
            'active': modelValue.value,
            ...classesDisabled.value,
            ...classesRouting.value,
            ...classesLoading.value,
        }))

        //--- Compute async functions.
        const onClick = async (e: Event) => {

            //--- Avoid native navigation.
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

        const attributes = computed(() => ({

            href: href.value,
            class: classes.value,
            onClick: onClick,

            'role': 'button',
            'aria-labelledby': props.label,

            ...attributesDisabled.value,
        }))

        return {
            tag: tag,
            label: props.label,
            loading: loading,
            attributes: attributes,
        }
    }

})

</script>

<template>

    <!-- Dynamic HTML component -->
    <component :is="tag" v-bind="attributes">

        <!-- When button is in the `loading` state -->
        <slot name="loading" v-if="loading"/>

        <!-- Prepend element before label, like an icon -->
        <slot name="prepend"/>

        <!-- Button default content, defaults to `label`. -->
        <slot>{{label}}</slot>
        
        <!-- Append element before label, like an icon -->
        <slot name="append"/>
    </component>
</template>