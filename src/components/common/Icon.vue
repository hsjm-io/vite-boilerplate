<script>
export default {
    props: {

        //--- Icon
        name: String,

        //--- Colors
        brand: Boolean,
        contrast: Boolean,
        display: Boolean,
    }
}
</script>

<template>
    <span 
        class="icon"
        :class="{display, brand, contrast}"
        :aria-labelledby="name"
        aria-hidden="true">
        <slot>{{name}}</slot>
    </span>
</template>

<style lang="postcss">
.icon {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 24px;  /* Preferred icon size */
    display: inline-block;
    line-height: 1;
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

    &.display{@apply block text-8xl;}
    &.brand{@apply text-transparent bg-clip-text bg-gradient-to-br from-brand-400 to-brand-600;}
    &.contrast{@apply text-transparent bg-clip-text bg-gradient-to-br from-contrast-400 to-contrast-600; }
}
</style>