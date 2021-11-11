<template>
  <section class="home__container">
    <main-screen></main-screen>
    <advantages></advantages>
    <services></services>
    <reviews></reviews>
  </section>
</template>

<script>
    import MainScreen from "@/home/MainScreen";
    import Advantages from "@/home/Advantages";
    import Services from "@/home/Services";
    import Reviews from "@/home/Reviews";
    export default {
        name: "Home",
        components: {Reviews, Services, Advantages, MainScreen}
    }
</script>

<style scoped>
.home__container {

}
</style>