<script>
export default {
    props: {
        icon: String,
        title: String,
        to: String,
    }
}
</script>

<template>
<Card :to="to" class="flex flex-col items-center" brand>
    <Icon class="mb-6" display :name="icon"/>
    <Title small brand>{{title}}</Title>
    <Text large secondary><slot/></Text>
</Card>
</template>
