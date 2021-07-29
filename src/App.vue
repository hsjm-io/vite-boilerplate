<script setup lang="ts">
</script>

<template>
<div class="bg-base min-h-screen">

    <!-- Header -->
    <nav class="flex items-center bg-base text-on-base w-screen">
        <div class="flex items-center container mx-auto space-x-12 border-b-on-base border-b py-8">

            <h1 class="font-thin block text-lg border-b-red-500 align-middle"><strong class="font-bold">HSJM.io</strong> Boilerplate</h1>
            <div class="flex-grow"></div>

            <Button>Accueil</Button>
            <Button>Contact</Button>
            <Button>Nos valeurs</Button>


        </div>
    </nav>

    <!-- Page content -->
    <RouterView class="text-on-base"/>

    
</div>
</template>