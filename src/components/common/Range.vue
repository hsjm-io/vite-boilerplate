<script lang="ts">
import { clamp, debounce } from 'lodash'
import { useVModel, useMouseInElement, useMousePressed, pausableWatch, useThrottle, templateRef } from '@vueuse/core'
import { defineComponent, ref, computed, Ref, WritableComputedRef, watch } from 'vue'

export default defineComponent({
    props:{
        modelValue: {type: Number, default: 0.5},
        min: {type: Number, default: 0},
        max: {type: Number, default: 100},
        step: {type: Number, default: 100},


    },

    setup(props, {attrs, emit}){

        const bar = templateRef('bar')
        const modelValue: Ref<number> = useVModel(props, 'modelValue', emit, {passive: true})
        const { elementX, elementWidth } = useMouseInElement(bar)

        const offsetValue = computed({get(){

            const value = modelValue.value
            const valueClamped = clamp(value, props.min, props.max)

        },
        set(){

        }
        })

        const setValue = () => {

            const value = modelValue.value
            const valueClamped = clamp(value, props.min, props.max)

            modelValue.value = clamp(elementX.value / elementWidth.value, props.min, props.max)
        }

        const { pressed } = useMousePressed({target: bar})
        const { resume, pause } = pausableWatch(elementX, setValue)
        pause()

        watch(pressed, pressed => {if(pressed) resume(); else pause()})

        const labelValue = computed(() => (offsetValue.value * 100).toFixed(2))
        const barTickStyle = computed(() => ({ left: offsetValue.value }))
        const barProgressStyle = computed(() => ({  width: offsetValue.value }))

        return { 
            labelValue,
            modelValue,
            setValue,
            bar,
            barTickStyle,
            barProgressStyle,
        } 
    },
})
</script>

<template>
<div class="range" ref="bar" @mousedown="setValue">


    <div class="bar">
        <div class="label" :style="barTickStyle">{{labelValue}}</div>
        <span class="tick" :style="barTickStyle"></span>
        <span class="progress" :style="barProgressStyle"></span>
    </div>

    <div class="labels">
        <span>0%</span>
        <span>25%</span>
        <span>50%</span>
        <span>75%</span>
        <span>100%</span>
    </div>

</div>
</template>

<style lang="postcss">
.range{
    @apply w-full;


    .bar{@apply bg-base-600 h-4 w-full rounded-full relative}

    .tick{@apply absolute bg-white h-4 w-4 top-0 left-0 bottom-0 rounded-full cursor-pointer}

    .label{@apply
        absolute
        select-none
        bg-base-600
        text-on-base-500
        p-2
        -top-4
        rounded-lg
        cursor-pointer 
        transform
        -translate-y-full
        -translate-x-1/3
    }

    .progress{@apply bg-base-700 absolute top-0 left-0 bottom-0 rounded-l-full}

    .tick,.progress{
        /* @apply transition-all duration-75 */
    }

    .labels{
        @apply 
            flex
            justify-between
            mt-3 text-xs
            select-none
            pointer-events-none
            text-on-base-500;

        span{@apply w-8 text-center}
        span::first-child{@apply text-left}
        span::last-child{@apply text-right}
    }

    
}
</style>