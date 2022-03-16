<script lang="ts">
import BaseButton from './base/BaseButton'
export default {

    extends: BaseButton,
    setup: BaseButton.setup,

    props: {
        label: String,
        icon: String,
        inverted: Boolean,
    }
}
</script>

<template>
    <component :is="tag" class="nav-auth-button" :class="{inverted}" v-bind="attributes">
        
        <!-- Prepend Icon -->
        <Icon v-if="icon" left :name="icon"/>

        <!-- Button default content. -->
        <slot><span>{{label}}</span></slot>

    </component>
</template>

<style lang="postcss">
.nav-auth-button {@apply

    flex
    items-center
    justify-center

    px-4 py-2
    text-sm font-bold
    rounded-full
    transition

    select-none
    cursor-pointer
    no-underline
    outline-none;

    /** --- Default variant --- */
    &:not(.inverted){@apply
        bg-gradient-to-r from-brand-400 to-brand-600
        text-base-500;
    } 

    &:not(.inverted).active,
    &:not(.inverted):hover,
    &:not(.inverted):active{@apply
        shadow-xl
        ring-brand-500 ring-4
        ring-offset-base-500 ring-offset-4;
    }

    /** --- Inverted variant --- */
    &.inverted{@apply
        text-transparent
        ring-brand-500 ring-2;
    }

    &.inverted > span{@apply
        bg-clip-text
        bg-gradient-to-r from-brand-400 to-brand-600;
    }

    &.inverted.active,
    &.inverted:hover,
    &.inverted:active{@apply
        bg-gradient-to-r from-brand-400 to-brand-600
        text-base-500
        ring-brand-500 ring-4
        ring-offset-base-500 ring-offset-4;
    }
}
</style>