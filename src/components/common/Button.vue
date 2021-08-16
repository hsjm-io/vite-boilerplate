<script lang="ts">
import ButtonBase from '../base/BaseButton.vue'
export default { 

    //--- From `ButtonBase`
    extends: ButtonBase,
    setup: ButtonBase.setup,
    
    //--- Extend props.
    props: { 

        //--- Template
        icon: String,
        iconLeft: String,
        iconRight: String,

        //--- Variants
        outlined: Boolean,
        square: Boolean,

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
    <component :is="tag" class="btn" :class="{brand, contrast, outlined, square, small, large}" v-bind="attributes">

        <!-- Left icon -->
        <Icon v-if="icon || iconLeft" :name="icon || iconLeft"></Icon>

        <!-- Label -->
        <slot>{{label}}</slot>

        <!-- Right icon -->
        <Icon v-if="iconRight" :name="iconRight"></Icon>

    </component>
</template>

<style lang="postcss">
.btn {
    @apply

        inline-flex
        items-center
        justify-center

        relative
        font-bold
        transition-all
        ease-out
        shadow-md

        select-none
        cursor-pointer
        no-underline
        outline-none;

    /* --- Base variant */
    &:not(.outlined){

        /* --- Colors */
        &:not(.brand,.contrast){@apply text-on-base-500 bg-gradient-to-br from-base-600 to-base-700;}
        &.brand{@apply text-base-500 bg-gradient-to-br from-brand-400 to-brand-600; }
        &.contrast{@apply text-base-500 bg-gradient-to-br from-contrast-400 to-contrast-600; }

        /* --- States */
        &.active,
        &:hover{@apply shadow-lg transform scale-110;}
        &:active{@apply shadow-md transform scale-105;}
        &.disabled{@apply filter grayscale opacity-50 pointer-events-none;}
    }

    /* --- Outlined variant */
    &.outlined{

        /* --- Colors */
        &:not(.brand,.contrast){@apply text-on-base-500 border border-on-base-500;}
        &.brand{@apply text-brand-500  border border-brand-500; }
        &.contrast{@apply text-contrast-500  border border-contrast-500; }

        /* --- States */
        &.active,
        &:hover{@apply shadow-lg transform scale-110;}
        &:active{@apply shadow-md transform scale-105;}
        &.disabled{@apply filter grayscale opacity-50 pointer-events-none;}
    }

    /* --- Shape */
    &:not(.square){@apply rounded-full;}
    &.square{@apply rounded-lg}

    /* --- Sizes */
    &:not(.large,.small){@apply px-4 py-2 text-base;}
    &.large{@apply px-5 py-3 text-xl;}
    &.small{@apply px-2 py-1 text-sm;}
}
</style>