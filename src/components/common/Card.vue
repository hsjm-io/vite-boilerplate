<script lang="ts">
import ButtonBase from '../base/BaseButton'
export default { 

    //--- From `ButtonBase`
    extends: ButtonBase,
    setup: ButtonBase.setup,

    props: {
        
        tag: {type: String, default: 'div'},

        //--- Sizes
        large: Boolean,
        small: Boolean, 

        //--- Color
        brand: Boolean,
        contrast: Boolean,
        darker: Boolean,

    }
}
</script>

<template>

    <!-- Dynamic HTML component -->
    <component :is="tag" class="card" :class="{brand, contrast, darker, small, large}" v-bind="attributes">

        <!-- Content -->
        <slot/>
        
    </component>
</template>

<style lang="postcss">
.card{
    
    @apply transition shadow-none hover:shadow-xl;

    /* --- Sizes */
    @apply p-6 rounded-xl;
    &.large{@apply p-12 rounded-3xl}
    &.small{@apply p-3 rounded-lg}

    /* --- Variants */
    &:not(.brand,.contrast,.darker){@apply bg-base-500 text-on-base-500}
    &.brand{@apply border-brand-500 border-2}
    &.contrast{@apply border-contrast-500 border-2}
    &.darker{@apply bg-base-600 text-on-base-500}    
}
</style>