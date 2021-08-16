<script lang="ts">
export default {
    props: {

        //--- Variants
        outlined: Boolean,

        //--- Color
        brand: Boolean,
        contrast: Boolean,

    }
}
</script>

<template>
<div class="card" :class="{outlined, brand, contrast}">
    <slot/>
</div>
</template>

<style lang="postcss">
.card{@apply
    flex flex-col
    items-start
    w-full
    p-6
    rounded-xl;

    &:not(.outlined){
        @apply shadow-xl;
        &:not(.brand,.contrast){@apply bg-base-500 }
        &.brand{@apply bg-brand-500 text-on-brand-500}
        &.contrast{@apply bg-contrast-500 text-on-brand-500}
    }

    &.outlined{
        &:not(.brand,.contrast){@apply border-on-base-500 border-2}
        &.brand{@apply border-brand-500 border-2}
        &.contrast{@apply border-contrast-500 border-2}
    }

    
    
}
</style>