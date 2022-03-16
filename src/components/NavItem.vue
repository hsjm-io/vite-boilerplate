<script lang="ts">
import ButtonBase from './base/BaseButton'
export default { 
    
    extends: ButtonBase,
    setup: ButtonBase.setup,
    
    props: { 
        label: String,
        icon: String
     }
}
</script>

<template>
    <component :is="tag" class="nav-item" v-bind="attributes">

        <!-- Prepend Icon -->
        <Icon v-if="icon" left :name="icon"/>

        <!-- Button default content. -->
        <slot><span>{{label}}</span></slot>

    </component>
</template>

<style lang="postcss">
.nav-item {
    @apply

        flex
        items-center
        justify-center

        px-2 py-1
        relative
        font-medium

        text-on-base-500
        bg-transparent
        text-opacity-60
        transition

        select-none
        cursor-pointer
        no-underline
        outline-none;

    &.active,
    &:active,
    &:hover{@apply
        text-opacity-100;
    }

    &::after{@apply 
        block absolute
        h-2 w-24
        opacity-0
        rounded-full
        transition-all
        pointer-events-none
        -bottom-3;
        content: '';
        left: 50%;
        transform: translateX(-50%);
    }
    &.active::after,
    &:active::after,
    &:hover::after{@apply
        w-2
        bg-gradient-to-r from-brand-400 to-brand-600
        opacity-100;
    }
}
</style>