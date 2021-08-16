<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    inheritAttrs: false,
    props:{

        //--- Alignment.
        center: Boolean,

        //--- Colors
        transparent: Boolean,
        darker: Boolean,
        brand: Boolean,
        contrast: Boolean,
    }
})
</script>

<template>
    <section class="content" :class="{center, darker, brand, contrast, transparent}">
        <div :class="$attrs.class">
            <slot></slot>
        </div>
    </section>
</template>

<style lang="postcss">
.content{
    
    /* --- Layout */
    @apply flex flex-col py-24;
    & > div{@apply container mx-auto px-6;}

    /* --- Alignment */
    &.center{@apply text-center items-center}

    /* --- Colors */
    &:not(.darker,.brand,.contrast,.transparent){@apply bg-base-500 text-on-base-500}
    &.darker{@apply bg-base-600 text-on-base-500}
    &.brand{@apply bg-brand-600 text-on-brand-500}
    &.contrast{@apply bg-contrast-600 text-on-base-500}
    &.transparent{@apply bg-transparent text-on-base-500}
}
</style>