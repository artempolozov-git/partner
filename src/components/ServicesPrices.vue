<template>
  <div class="prices__block">
    <div class="prices-title">{{title}}</div>
    <div class="price">{{sum}}</div>
    <div class="prices__text-filling">{{text}}</div>
    <div class="feedback-button">
      <span>Оставить заявку</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ServicesPrices",
        props: {
          title: String,
          sum: String,
          text: String,
        },
    }
</script>

<style lang="scss" scoped>
  .prices__block {
    height: fit-content;
    padding: 50px;
    box-sizing: border-box;
    border-radius: 30px;
    border: 2px solid #cdcdcd;
    &:hover {
      box-shadow: none;
      border: 2px solid #5222d0;
      cursor: pointer;
    }
  }
  .prices-title {
    text-align: center;
    font-size: $additional-fontsize;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .price {
    text-align: center;
    font-size: $subtitle-fontsize;
    font-weight: bold;
    color: #5222d0;
    margin-bottom: 30px;
  }
  .prices__text-filling {
    margin: 20px 0 70px;
    & span {
      color: $color-text;
    }
  }
  .feedback-button {
    @extend %buttons;
    margin: auto;
  }
</style>