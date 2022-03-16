<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useVModel } from '@vueuse/core'

export default defineComponent({


    props: {

        modelValue: [String],

        name: String,
        icon: String,
        iconLeft: String,
        iconRight: String,


        label: String,
        type: String,
        cols: Number,

        hint: String,
        error: String,

        placeholder: String,
    },

    setup(props, {attrs, emit}){

        const internalValue = useVModel(props, 'modelValue', emit, {passive: true})

        const iconLeft = computed(() => props.icon || props.iconLeft)
        const iconRight = computed(() => props.error ? 'error_outline' : props.iconRight)

        const classes = computed(() => ({
            'has-icon-left': !!iconLeft.value,
            'has-icon-right': !!iconRight.value,
            'has-error': !!props.error,
        }))

        const tag = computed(() => props.type === 'textarea' ? 'textarea' : 'input')

        return { tag, internalValue, classes, iconLeft, iconRight }
    }
})
</script>

<template>
<div class="input" :class="classes">

    <label v-if="label" :for="name">{{label}}</label>

    <div class="input-group">
        
        <component
            class="input-field"
            :is="tag"
            v-model="internalValue"
            :name="name"
            :placeholder="placeholder"
            :aria-label="label"
            :aria-placeholder="placeholder"
            :aria-colspan="cols"/>

        <Icon v-if="iconLeft" class="icon-left" :name="iconLeft"/>
        <Icon v-if="iconRight" class="icon-right" :name="iconRight"/>

    </div>

    <span v-if="hint" class="hint">{{hint}}</span>

    <span v-if="error" class="error">{{error}}</span>


</div>
</template>

<style lang="postcss">
.input{

    @apply flex flex-col w-full;

    /* --- Label */
    label {@apply text-on-base-500 text-sm  mb-1 px-4}

    /* Input */
    .input-field{@apply 
        text-on-base-500
        w-full
        px-4 py-3 h-12
        outline-none
        transition;

        @apply 
            bg-base-500 
            rounded-xl
            ring-2
            ring-transparent
            focus:ring-brand-500
            focus:shadow-lg
            hover:shadow-lg;
    }


    /* --- Hint and error sub-span */
    .hint,.error,{@apply text-xs px-4 mt-2}
    .hint{@apply text-on-base-500 text-opacity-50}
    .error{@apply text-xs text-red-400 text-opacity-75}

    /* --- Icons positions */
    .input-group {@apply relative}
    .icon-left,.icon-right{@apply w-0 absolute top-0 h-12 text-on-base-500 text-opacity-50}
    .icon-left{@apply left-7}
    .icon-right{@apply right-7}

    /* --- Padding in field to leave spaces for icons */
    &.has-icon-left .input-field{@apply !pl-12}
    &.has-icon-right .input-field{@apply !pr-12}

    /* --- Overwrite colors if input has error. */
    &.has-error .input-field{@apply ring-red-400}
    &.has-error .icon-right{@apply !text-red-400 text-opacity-100}

    /* --- Overwrite colors if input is successful. */
    &.has-success > .input-field{@apply ring-green-400 }

    /* --- Text area specific */
    textarea.input-field{
        min-height: 128px;
        @apply overflow-x-scroll;
        &::-webkit-scrollbar{@apply bg-transparent w-2}
        &::-webkit-scrollbar-thumb{@apply bg-base-400 rounded-full}
        &::-webkit-scrollbar-corner{@apply hidden}
        &::-webkit-resizer{@apply bg-transparent h-0}
    }
}
</style>