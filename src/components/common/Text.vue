<script>
import Markdown from 'markdown-it'
import { computed, ref, watch, defineComponent } from 'vue'
export default defineComponent({

    inheritAttrs: false,

    props: {

        div: Boolean,
        span: Boolean,

        //--- Template
        html: String,
        md: String,

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

    setup(props, {attrs, emit}){
        const tag = computed(() =>  
            props.div ? 'div' :
            props.span ? 'span' : 'p'
        )

        const toMd = md => new Markdown().render(md)

        return { tag, toMd }
    }
})
</script>

<template>
    
    <!-- Provide parsed HTML from props. -->
    <component :is="tag" class="text" :class="{brand, contrast, secondary, display, large, small, center}"
        v-bind="$attrs" v-if="md" v-html="toMd(md)"/>

    <!-- Provide parsed HTML from props. -->
    <component :is="tag" class="text" :class="{brand, contrast, secondary, display, large, small, center}"
        v-bind="$attrs" v-else-if="html" v-html="html"/>
    
    <!-- Provide slot content. -->
    <component :is="tag" class="text" :class="{brand, contrast, secondary, display, large, small, center}"
        v-bind="$attrs">
        <slot/>
    </component>

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