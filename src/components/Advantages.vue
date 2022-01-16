<template>
    <div class="advantages__block">
      <img :src="images">
      <div class="advantages__information__wrapper">
        <h2 class="advantages__title">{{title}}</h2>
        <p class="advantages__description">{{description}}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Advantages",
        props: {
            title: String,
            description: String,
            images: String,
        }
    }
</script>

<style lang="scss" scoped>
.advantages__block {
  display: flex;
  align-items: start;
}
.advantages__block > img {
  width: 4vw;
  margin-right: 20px;
}
.advantages__title {
  font-size:  $additional-fontsize;
  font-weight: bold;
  margin: 0;
}
.advantages__description {
  color: $color-text;
  margin-top: 10px;
}
</style>