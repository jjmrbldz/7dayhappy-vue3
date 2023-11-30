<template>
     <section class="slide-sec">
        <Carousel class="slide" :autoplay="2000" :wrap-around="true">
            <Slide v-for="slide in banners" :key="slide">
                <img :src="slide.imgURL" />
            </Slide>
            <template #addons>
                <Navigation />
                <Pagination />
            </template>
        </Carousel>
    </section>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
export default {
    name: 'Banner',
    data() {
        return {
            banners: [
                {
                    imgURL: "src/assets/img/bgs/banner-1.jpg"
                },
                {
                    imgURL: "src/assets/img/bgs/banner-2.jpg"
                },
                {
                    imgURL: "src/assets/img/bgs/banner-3.jpg"
                }
            ],
        }
    },
    components: {
        Carousel,
        Slide,
        Navigation
    }
}
</script>

<style>

</style>