<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useVModel } from '@vueuse/core'
export default defineComponent({

    props: {
        modelValue: Boolean,
        label: String,

        large: Boolean,

        brand: Boolean,
        contrast: Boolean,
    },

    setup(props, {attrs, emit}){
        
        const internalValue = useVModel(props, 'modelValue', emit, {passive: true})

        return { internalValue }
    },
})
</script>

<template>
<div class="switch" :class="{brand, contrast, large}"  @click="internalValue = !internalValue" tabindex="0">

    <!-- Hidden HTML input element -->
    <input name="toggle" aria-hidden="true" type="checkbox" v-model="internalValue" tabindex="-1"/>

    <!-- Switch and tick -->
    <div class="box">
        <div class="tick"/>
    </div>

    <!-- Label -->
    <label for="toggle" v-if="label"><slot>{{label}}</slot></label>
    
</div>
</template>

<style lang="postcss">
.switch{
    
    @apply
        flex
        items-center
        cursor-pointer
        outline-none
        select-none;

    /* --- Hide HTML input elements. */
    input{@apply pointer-events-none hidden}
    label{@apply cursor-pointer inline}

    .box{@apply
        flex
        flex-shrink-0
        items-center
        rounded-full
        hover:shadow-lg
        bg-base-700
        transition;
    }

    /* --- Tick element */
    .tick{@apply 
        transition-all
        rounded-full 
        bg-on-base-500;
    }

    /* --- Sizes */
    &:not(.large){
        .box{@apply w-12 h-7}
        .tick{@apply h-5 w-5 ml-1}
        input:checked + .box > .tick{@apply ml-6}
        label{@apply ml-3 text-sm}
    }

    &.large{
        .box{@apply h-10 w-20}
        .tick{@apply h-8 w-8 ml-1}
        input:checked + .box > .tick{@apply ml-11}
        label{@apply ml-3 text-xl}
    }

    /* ---Colors */
    &:not(.brand,.contrast){
        .tick{@apply bg-on-base-500}
        input:checked + .box{@apply bg-on-base-500; .tick{@apply bg-base-500}}
        &:focus > input:not(:checked) + .box{@apply ring-2 ring-on-base-600}
    }

    &.brand{
        .tick{@apply bg-brand-400}
        input:checked + .box{@apply bg-gradient-to-br from-brand-300 to-brand-700; .tick{@apply bg-base-500}}
        &:focus > input:not(:checked) + .box{@apply ring-2 ring-brand-600}
    }

    &.contrast{
        .tick{@apply bg-contrast-400}
        input:checked + .box{@apply bg-gradient-to-br from-contrast-400 to-contrast-600; .tick{@apply bg-base-500}}
        &:focus > input:not(:checked) + .box{@apply ring-2 ring-contrast-600}
    }
}
</style>