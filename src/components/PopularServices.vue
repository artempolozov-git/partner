<template>
  <div class="popular-services__container" v-on:click="goToPage(id)">
    <div class="services-images"><img :src="images"></div>
    <div class="services-title">{{title}}</div>
    <div class="services-text">{{text}}</div>
    <div class="view-more">Подробнее</div>
  </div>
</template>

<script>
    export default {
        name: "PopularServices",
        props: {
            images: String,
            title: String,
            text: String,
            id: String,
        },
        methods: {
            goToPage(page) {
                this.$router.push(page);
                window.scrollTo(0,0);
            }
        },
    }
</script>

<style lang="scss" scoped>
.popular-services__container {
  height: fit-content;
  padding: 50px;
  box-sizing: border-box;
  border-radius: 30px;
  background-color: #ffffff;
  box-shadow: 0px 1px 6px 0px rgba(32, 33, 36, 0.2);
  transition: all 0.2s ease-out;
  &:hover {
    box-shadow:
            2px 2px #5222d0,
            3px 3px #5222d0,
            4px 4px #5222d0,
            5px 5px #5222d0,
            6px 6px #5222d0,
            7px 7px #5222d0,
            8px 8px #5222d0;
    -webkit-transform: translateX(-7px);
    transform: translateX(-7px);
    cursor: pointer;
    transition: all 0.2s ease-out;
  }
}
.services-images > img {
  width: 4vw;
  height: 4vw;
  margin: 0 0 20px;
}
.services-title {
  font-size: $additional-fontsize;
  font-weight: bold;
  margin-bottom: 10px;
}
.services-text {
  margin: 0 0 40px;
  color: $color-text;
}
.view-more {
  @extend %links;
}
</style>