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
        <section class="mid-sec">
            <RouterView />
            <Footer />
        </section>
    </main>
</template>

<style>
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css');
</style>
