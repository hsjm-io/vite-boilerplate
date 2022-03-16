<script>
import Markdown from 'markdown-it'
import { computed, getCurrentInstance, onMounted , defineComponent } from 'vue'
export default defineComponent({

    inheritAttrs: false,

    props: {

        div: Boolean,
        span: Boolean,

        //--- Template
        md: String,
        html: String,

        //--- Alignment
        center: Boolean,

        //--- Sizes
        display: Boolean,
        large: Boolean,
        small: Boolean,

        //--- Colors
        brand: Boolean,
        contrast: Boolean,
        secondary: Boolean,
    },

    setup(props, {attrs, emit, slots}){

        //--- Compute tag
        const tag = computed(() =>  
            props.div ? 'div' :
            props.span ? 'span' : 'p'
        )

        const compiledHtml = computed(() => {
            if(props.md) return new Markdown().render(props.md)
            if(props.html) return props.html
            return false
        })

        const classes = computed(() => ({
            text: true,
            brand: props.brand,
            contrast: props.contrast,
            secondary: props.secondary,
            display: props.display,
            large: props.large,
            small: props.small,
            center: props.center,
        }))

        return { tag, compiledHtml, classes }
    }
})
</script>

<template>

    <!-- Render HTML -->
    <div v-if="compiledHtml" v-html="compiledHtml" :class="classes" v-bind="$attrs"/>

    <!-- Render slot content. -->
    <component v-else :is="tag" :class="classes" v-bind="$attrs"><slot/></component>

</template>

<style lang="postcss">
.text{

    /* --- Spacing between paragraphs */
    & > *:not(:last-child){@apply mb-6}

    /* --- Sizes */
    &.center{@apply text-center mx-auto;}

    /* --- Sizes */
    @apply md:text-base text-sm max-w-md; & strong{@apply md:text-xl text-lg font-extrabold}
    &.large{@apply md:text-lg text-base max-w-md; & strong{@apply md:text-xl text-lg}}
    &.small{@apply md:text-sm text-xs max-w-sm; & strong{@apply md:text-base text-sm}}
    &.display{@apply md:text-4xl text-3xl max-w-4xl font-bold; & strong{@apply md:text-8xl text-7xl}}

    /* --- Colors */
    &.secondary{@apply opacity-75}
    &:not(.brand,.contrast){@apply text-on-base-500}
    &.brand strong{@apply text-transparent bg-clip-text bg-gradient-to-br from-brand-400 to-brand-600}
    &.contrast strong{@apply text-transparent bg-clip-text bg-gradient-to-br from-contrast-400 to-contrast-600}
}
</style>