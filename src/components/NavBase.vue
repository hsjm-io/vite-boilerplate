<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { useWindowScroll, useElementSize } from '@vueuse/core'
import { useRoute } from 'vue-router'

export default defineComponent({
    
    props: {
        height: Number,
        scroll: Number,
    },

    setup(props, {attrs, emit}){

        const root = ref(null)
        const route = useRoute()

        //--- Watch for user scrolling.
        const { y: scroll } = useWindowScroll()
        if(props.scroll) watch(scroll, scroll => emit('update:scroll', scroll), {immediate: true})

        //--- Watch for nav height.
        const { height } = useElementSize(root)
        if(props.height) watch(height, height => emit('update:height', height), {immediate: true})

        const classes = computed(() => ({
            'shadow-lg': scroll.value > 0 || route.path !== '/',
            'bg-opacity-0': scroll.value === 0 && route.path === '/',
        }))

        const classesInner = computed(() => ({
            'border-b border-b-white': scroll.value === 0 && route.path === '/',
        }))
        
        return {
            root,
            classes,
            classesInner
        }
    }
})
</script>

<template>
    
    <!-- Header -->
    <nav ref="root"
        :class="classes"
        class="fixed w-full z-50 bg-base-500 top-0 items-center text-on-base-500 transition">

        <div :class="classesInner"
            class="flex items-center container mx-auto space-x-8 py-12">
            <h1 class="block border-b-red-500 align-middle">
                <span class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-brand-600">HSJM.io</span>
                <span class="text-xl font-thin"> Boilerplate</span>
            </h1>
            <div class="flex-grow"></div>

            <NavItem to="/" label="Acceuil"/>
            <NavItem to="/contact" label="Contact"/>
            <NavItem to="/about" label="Nos valeurs"/>
            <NavAuthButton to="/signin" label="Connexion" icon="login" inverted/>
            <NavAuthButton to="/signup" label="Inscription" icon="account_circle"/>

        </div>
    </nav>
</template>