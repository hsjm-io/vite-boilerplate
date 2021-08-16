<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    setup(props, {attrs, emit}){
        const navHeight = ref(1)
        return { navHeight }
    }
})
</script>

<template>
<div class="h-min-screen">

    <!-- Header -->
    <NavBase 
        v-model:height="navHeight">
    </NavBase>

    <!-- Page content -->
    <RouterView :style="{paddingTop:navHeight+'px'}">
    </RouterView>
    
</div>
</template>

<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;

html{@apply
    bg-base-500
    overflow-x-hidden
    overflow-y-scroll
}

body{@apply
    overflow-x-hidden
    overflow-y-visible
}
</style>