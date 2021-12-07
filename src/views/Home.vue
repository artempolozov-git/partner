<template>
  <section class="home__container">
    <main-screen></main-screen>
    <advantages></advantages>
    <services></services>
  </section>
</template>

<script>
    import MainScreen from "@/home/MainScreen";
    import Advantages from "@/home/Advantages";
    import Services from "@/home/Services";
    export default {
        name: "Home",
        components: {Services, Advantages, MainScreen}
    }
</script>

<style scoped>
.home__container {

}
</style>