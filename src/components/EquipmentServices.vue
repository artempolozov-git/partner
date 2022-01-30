<template>
  <div class="equipment__block" v-on:click="goToPage(id)">
    <img class="equipment-images" :src="images">
    <div class="equipment-title">{{title}}</div>
    <div class="feedback-button">
      <span>Подробнее</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "EquipmentServices",
        props: {
            images: String,
            title: String,
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
  .equipment__block {
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
  .equipment-images {
    display: flex;
    margin: 0 auto 30px;
    width: auto;
    height: 30vh;
  }
  .equipment-title {
    text-align: center;
    font-size: $additional-fontsize;
    font-weight: bold;
    margin-bottom: 50px;
  }
  .feedback-button {
  @extend %links;
    margin: auto;
  }
</style>