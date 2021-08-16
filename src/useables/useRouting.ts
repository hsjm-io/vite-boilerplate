import { ComputedRef, reactive } from 'vue'
import { ref, computed } from 'vue'
import { whenever } from '@vueuse/core'
import { useLink } from 'vue-router'

export const useRoutingProps = {
    tag: String, 
    to: { type: [String, Object], required: false },
    activeClass: { type: String, default: 'active' },
    exactActiveClass: { type: String, default: 'exact-active' },
    custom: Boolean,
    replace: Boolean,
    useExactActive: Boolean,
}

export const useRouting = (props) => {

    //--- Define reactive variables.
    let navigate = () => {}
    let isActive = ref(false)
    let isExactActive = ref(false)
    let href = computed(() => props.to)
    let isLink = computed(() => !!props.to)
    let isExternalLink = computed(() => isLink.value && typeof props.to === 'string' && props.to?.startsWith('http'))
    let isInternalLink = computed(() => isLink.value && !isExternalLink.value)

    //--- Overwrite state when the button is an internal link.
    whenever(isInternalLink, () => {
        const link = useLink(props)
        navigate = link.navigate
        isActive = link.isActive
        isExactActive = link.isExactActive
        href = link.href
    }, {immediate: true})

    //--- Define computed classes array.
    const classes = computed(() => {

        //--- Dont use these classes if we dont need them.
        if(!isInternalLink.value) return {}

        //--- Return classes that depends on the router state.
        return {
            [props.activeClass as string]: props.useExactActive ? isActive.value : isExactActive.value,
            [props.exactActiveClass as string]: props.useExactActive ? isExactActive.value : false,
        }
    })

    //--- Return reactive properties.
    return { 
        href, 
        isActive, 
        isExactActive, 
        navigate, 
        classes,
        isLink,
        isExternalLink,
        isInternalLink,
    }
}
