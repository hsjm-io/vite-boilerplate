<script>
import { defineComponent, computed } from 'vue'
export default defineComponent({
    props: {

        //--- Template
        h1: Boolean,
        h2: Boolean,
        label: String,

        //--- Alignment
        center: Boolean,

        //--- Sizes
        display: Boolean,
        large: Boolean,
        small: Boolean,

        //--- Colors
        brand: Boolean,
        contrast: Boolean,
    },

    setup(props){

        const tag = computed(() =>  
            props.h1 ? 'h1' :
            props.h2 ? 'h2' : 'h3'
        )

        return { tag }
    }
})
</script>

<template>
    <component :is="tag" class="title" :class="{brand, contrast, display, large, small, center}">
        <slot>{{label}}</slot>
    </component>
</template>

<style lang="postcss">
.title {
    
    /* --- Defaults */
    @apply md:text-3xl text-2xl max-w-3xl font-bold overflow-visible;
    &>strong{@apply md:text-4xl text-3xl font-bold}

    /* --- Sizes */
    &.center{@apply text-center mx-auto; }

    /* --- Sizes */
    &.display{@apply md:text-7xl text-6xl max-w-7xl; &>strong{@apply md:text-8xl text-7xl}}
    &.large{@apply md:text-4xl text-3xl max-w-4xl; &>strong{@apply md:text-5xl text-4xl}}
    &.small{@apply md:text-2xl text-xl max-w-2xl; &>strong{@apply md:text-3xl text-2xl}}

    /* --- Colors */
    &:not(.brand,.contrast){
        @apply text-on-base-500;
        &>strong{@apply text-transparent bg-clip-text bg-gradient-to-br from-brand-400 to-brand-600; }
    }

    &.brand{
        @apply text-transparent bg-clip-text bg-gradient-to-br from-brand-400 to-brand-600;
        &>strong{@apply text-on-base-500;}
    }

    &.contrast{
        @apply text-transparent bg-clip-text bg-gradient-to-br from-contrast-400 to-contrast-600;
        &>strong{@apply font-bold text-on-base-500;}
    }
}
</style>