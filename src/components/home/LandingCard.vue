<script lang="ts">
import { defineComponent } from 'vue'
import Title from '../common/Title.vue'

export default defineComponent({
  components: { Title },
    props: {
        name: String,
        icon: String,
        action: String,
        to: String,
    }
})
</script>

<template>
<div class="w-full shadow-xs hover:shadow-lg rounded-xl border-brand-500 border-2 p-6 transition">

    <!-- Icon and title -->
    <Icon class="mb-6" display brand>{{icon}}</Icon>
    <Title small brand>{{name}}</Title>

    <!-- Card content -->
    <p class="text-sm max-w-sm mb-6">
        <slot/>
    </p>

    <!-- Card action -->
    <Button 
        outlined
        :label="action" 
        icon-right="chevron_right" 
        :to="to" 
        brand/>
</div>
</template>