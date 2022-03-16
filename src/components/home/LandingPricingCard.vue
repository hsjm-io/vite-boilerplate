<script>
import { defineComponent } from 'vue'
export default defineComponent({
    props: {
        title: String,
        price: Number,
        description: String,
        items: Array,
        to: String,
        highlight: Boolean,
    }
})
</script>

<template>
<Card outlined :brand="highlight" class="pricing-card" :class="{highlight}">

    <!-- Title -->
    <Title class="mb-3" h3 small>{{title}}</Title>

    <!-- Price -->
    <Text class="mb-3">
        <span class="text-5xl" v-if="price">${{price.toFixed(2)}}</span>
        <span class="text-base">/month</span>
    </Text>

    <!-- Description -->
    <Text class="mb-12">{{description}}</Text>

    <!-- Items -->
    <ul class="mb-6 space-y-6">
        <Text v-for="(item, i) in items" :key="i">
            <Icon brand name="check_circle" left/>
            {{item}}
        </Text>
    </ul>

    <!-- Call to action -->
    <Button square block brand  :to="to">
        Choose Plan
    </Button>
</Card>
</template>

<style lang="postcss">
.pricing-card{
    @apply transform hover:scale-110;
    &.highlight{@apply scale-110;}
}
</style>