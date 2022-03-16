<script>
export default {
    props: {

        //--- Icon
        name: String,

        //--- Spacing
        left: Boolean,
        right: Boolean,
        
        //--- Sizes
        display: Boolean,
        large: Boolean,
        small: Boolean,

        //--- Variants
        fab: Boolean,

        //--- Colors
        brand: Boolean,
        contrast: Boolean,
    }
}
</script>

<template>
    <span 
        class="icon"
        :class="{display, large, small, left, right, brand, contrast, fab}"
        :aria-labelledby="name"
        aria-hidden="true">
        <slot>{{name}}</slot>
    </span>
</template>

<style lang="postcss">
.icon {
    
    /* Recommended fonts.google.com style */
    @apply font-mdi;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    vertical-align: middle;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    user-select: none;

    /* Support for all WebKit, Safari, Chrome, Firefox and IE. */
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'liga';

    /* --- Spacing */
    &.left{@apply mr-2;}
    &.right{@apply ml-2;}

    /* --- Variants & Colors */
    &.fab{
        @apply rounded-full w-16 h-16;
        &.brand{@apply bg-gradient-to-r from-brand-400 to-brand-600 text-on-brand-500}
        &.contrast{@apply bg-gradient-to-r from-contrast-400 to-contrast-600 text-on-brand-500}
    }

    &:not(.fab){
        &.brand{@apply text-transparent bg-clip-text bg-gradient-to-br from-brand-400 to-brand-600;}
        &.contrast{@apply text-transparent bg-clip-text bg-gradient-to-br from-contrast-400 to-contrast-600; }
    }

    /* --- Sizes */
    &.display{@apply text-8xl}
    &.large{@apply text-5xl}
    &.small{@apply text-sm}
}
</style>