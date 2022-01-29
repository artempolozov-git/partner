<template>
  <div class="prices__block">
    <div class="prices-title">{{title}}</div>
    <div class="price">{{sum}}</div>
    <div class="prices__text-filling">{{text}}</div>
    <div class="feedback-button" @click="FeedbackForm">
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
        methods: {
            FeedbackForm() {
                let form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            },
        },
    }
</script>

<style lang="scss" scoped>
  .prices__block {
    height: fit-content;
    padding: 50px;
    box-sizing: border-box;
    border-radius: 30px;
    background-color: #ffffff;
    box-shadow: 0px 5px 10px 2px rgba(157, 157, 157, 0.2);
    transition: all 0.2s ease-out;
    &:hover {
      box-shadow:
      1px 1px #5222d0,
      2px 2px #5222d0,
      3px 3px #5222d0,
      4px 4px #5222d0,
      5px 5px #5222d0,
      6px 6px #5222d0,
      7px 7px #5222d0;
      -webkit-transform: translateX(-7px);
      transform: translateX(-7px);
      cursor: pointer;
      transition: all 0.2s ease-out;
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