<template>
  <div class="direction" @click="FeedbackForm">
    <div class="direction-images"><img :src="image"></div>
    <span>{{productsName}}</span>
  </div>
</template>

<script>
    export default {
        name: "OtherProducts",
        props: {
            image: String,
            productsName: String,
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
  .direction-images > img {
    width: 2vw;
    margin-right: 20px;
  }
  .direction  {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 30px;
    margin: 0 30px 30px 0;
    border-radius: 50px;
    border: 1px solid #606060;
    color: $color-text;
    transition: all 0.2s ease-out;
      &:hover {
         border: 1px solid #5222d0;
         background-color: rgba(82, 34, 208, 0.11);
         color: #5222d0;
         cursor: pointer;
         transition: all 0.2s ease-out;
       }
  }
</style>