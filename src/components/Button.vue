<script setup lang="ts">
import { ref, defineProps, PropType } from 'vue'
import { useRouter, RouteLocationRaw } from 'vue-router'

//--- Define props.
const props = defineProps({
    to: {type: Object as PropType<RouteLocationRaw>},
    href: URL,
    color: String,
})

let loading = ref(false)
let onClick: Function;

//---
if(props.to !== undefined) {

    const router = useRouter()

    onClick = async () => {
        loading.value = true;
        await router.push(props.to)
        loading.value = false;
    }

}

</script>

<template>
    <button @click="onClick" class="button button-brand">
        <slot/>
    </button>
</template>

<style lang="postcss">
.button {
    @apply
        px-2 py-1
        text-lg
        font-thin focus:font-medium
        text-on-base
        text-opacity-80
        hover:text-opacity-100
        transition-color ease-out;

    @apply
        outline-none
        active:outline-none
        focus:outline-none;

    &-brand{@apply 
        hover:text-brand
        active:text-brand
        focus:text-brand
    }
}
</style>