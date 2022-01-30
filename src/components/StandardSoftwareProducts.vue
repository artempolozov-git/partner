<template>
  <div>
    <div class="products-title">{{title}}</div>
    <div class="products__container" v-on:click="goToPage(id)">
      <div class="products-images"><img :src="images"></div>
      <div class="products-information__wrapper">
        <div class="products-naming">{{naming}}</div>
        <div class="text">{{text}}</div>
        <div class="button-sum__wrapper">
          <div class="products-sum">{{sum}}</div>
          <div class="view-more">Подробнее</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "StandardSoftwareProducts",
        props: {
            title: String,
            images: String,
            naming: String,
            text: String,
            sum: String,
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
  .products-title {
    font-size: $subtitle-fontsize;
    font-weight: bold;
    margin: 30px 0 30px 0;
  }
  .products__container {
    display: flex;
    align-items: center;
    padding: 30px 40px;
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
  .products-images > img {
    width: 9vw;
    height: 9vw;
    margin: 0 50px 0 0;
  }
  .products-naming  {
    font-size:  $additional-fontsize;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .text {
    color: $color-text;
  }
  .button-sum__wrapper {
    display: flex;
    align-items: center;
    margin-top: 30px;
  }
  .products-sum {
    color: #5222d0;
    font-size: $subtitle-fontsize;
    font-weight: bold;
  }
  .view-more {
    margin: 0 0 0 30px;
    @extend %links;
  }
</style>