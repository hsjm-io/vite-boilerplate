<script lang="ts">
export default {
    props: {
        name: String,
        icon: String,
        action: String,
        to: String,
    }
}
</script>

<template>
<Card outlined brand>
    <Icon class="mb-6" display brand>{{icon}}</Icon>
    <Title class="mb-0" small brand>{{name}}</Title>
    <Text class="mb-6" small><slot/></Text>
    <Button brand outlined :label="action" icon-right="chevron_right" :to="to"/>
</Card>
</template>
