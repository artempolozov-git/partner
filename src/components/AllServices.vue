<template>
  <div>
    <div class="products-title">{{title}}</div>
    <div class="products__container">
      <div class="products-images"><img :src="image"></div>
      <div class="products-information__wrapper">
        <div class="products-naming">{{naming}}</div>
        <div class="text">{{text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AllServices",
        props: {
            title: String,
            image: String,
            naming: String,
            text: String,
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
    border: 2px solid #e0e0e0;
  }
  .products-images > img {
    width: 4vw;
    height: 4vw;
    margin: 0 30px 0 0;
  }
  .products-naming  {
    font-size:  $additional-fontsize;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .text {
    color: $color-text;
  }
</style>