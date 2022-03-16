<script lang="ts">
import BaseButton from '../base/BaseButton'
export default {

    //--- From `BaseButton`
    extends: BaseButton,
    setup: BaseButton.setup,
    
    //--- Extend props.
    props: {

        //--- Template
        label: String,
        icon: String,
        iconLeft: String,
        iconRight: String,

        //--- Variants
        block: Boolean,
        outlined: Boolean,
        square: Boolean,
        text: Boolean,
        fab: Boolean,

        //--- Sizes
        large: Boolean,
        small: Boolean,

        //--- Colors
        brand: Boolean,
        contrast: Boolean,
    },
}
</script>

<template>

    <component :is="tag" class="btn" :class="{brand, block, contrast, outlined, text, fab, square, small, large}" v-bind="attributes">

        <!-- Left icon -->
        <Icon v-if="icon || iconLeft" :name="icon || iconLeft" :left="!!label || !!$slots.default"/>

        <!-- Button default content. -->
        <slot>{{label}}</slot>

        <!-- Right icon -->
        <Icon v-if="iconRight" :name="iconRight" right/>

    </component>
</template>

<style lang="postcss">
.btn {
    @apply

        items-center
        justify-center
        overflow-hidden

        relative
        font-medium
        transition-all
        duration-100
        ease-out

        select-none
        cursor-pointer
        no-underline
        outline-none;

    /* --- Base variant */
    &:not(.outlined,.text){
        @apply text-on-base-500 bg-base-500;
        &.brand{@apply text-base-500 bg-gradient-to-br from-brand-400 to-brand-600; }
        &.contrast{@apply text-base-500 bg-gradient-to-br from-contrast-400 to-contrast-600; }

        /* --- States */
        @apply shadow-none;
        &.active,
        &:hover{@apply shadow-xl transform -translate-y-0.5;}
        &:active{@apply shadow-none transform -translate-y-0;}
    }

    /* --- Outlined variant */
    &.outlined{
        @apply text-on-base-500 ring-1 bg-base-600 ring-base-400;
        &.brand{@apply text-brand-500 bg-base-500 ring-brand-500; }
        &.contrast{@apply text-contrast-500 bg-base-500 ring-contrast-500; }

        /* --- States */
        @apply shadow-none;
        &.active,
        &:hover{@apply shadow-xl transform -translate-y-0.5;}
        &:active{@apply shadow-none transform -translate-y-0;}
    }

    /* --- Text variant */
    &.text{
        @apply transform active:scale-90;
        @apply hover:text-base-500 text-on-base-500 hover:bg-on-base-500 bg-transparent;
        &.brand{@apply hover:text-base-500 text-on-base-500 from-brand-300 to-brand-700 hover:bg-gradient-to-br}
        &.contrast{@apply text-on-base-500 from-contrast-300 to-contrast-700 hover:bg-gradient-to-br}
    }


    /* --- Sizes and FAB variant */
    &:not(.fab){
        @apply px-4 py-3 text-base;
        &.large{@apply px-8 h-14 text-base;}
        &.small{@apply px-3 h-10 text-sm;}
    }
    &.fab{
        @apply p-0 h-12 w-12 text-base;
        &.large{@apply p-0 h-16 w-16 text-xl;}
        &.small{@apply p-0 h-8 w-8 text-sm;}
    }

    /* --- Disabled & Readonly */
    &.readonly{@apply filter pointer-events-none;}
    &.disabled{@apply filter grayscale opacity-75 pointer-events-none;}

    /* --- Shape */
    @apply rounded-full;
    &.square{@apply rounded-lg}

    @apply inline-flex;
    &.block{@apply flex w-full;}
}
</style>