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

<style lang="scss" scoped>
.home__container {
  padding: $padding-main__container;
}
@media only screen and (max-width : 1700px) {
  .home__container {
    padding: 0 50px 100px;
  }
}
</style>