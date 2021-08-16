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
    <Icon class="mb-6" display brand :name="icon"/>
    <Title class="mb-1" small>{{label}}</Title>
    <Text class="!max-w-xs" secondary center><slot/></Text>
</div>
</template>