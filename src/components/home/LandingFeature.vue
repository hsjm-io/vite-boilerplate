<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        label: String,
        icon: String,
    }
})
</script>

<template>
<div class="text-center">
    <Icon class="mb-6" display brand :name="icon"></Icon>
    <Title class="mb-1" small>{{label}}</Title>
    <p class="max-w-xs text-lg mx-auto opacity-75"><slot/></p>
</div>
</template>