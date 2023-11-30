<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import Banner from "./components/Banner.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
    <main>
        <Header />
        <Banner />
        <RouterView />
        <Footer />
    </main>
</template>
