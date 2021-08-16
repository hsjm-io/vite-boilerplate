<script lang="ts">
export default {
    props: {
        label: String,
        icon: String
    }
}
</script>


<template>
<div class="flex items-top space-x-8">
    <Icon fab large brand :name="icon"/>
    <div>
        <Title class="mb-3" small>{{label}}</Title>
        <Text class="!max-w-xs" secondary><slot/></Text>
    </div>
</div>
</template>