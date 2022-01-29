<template>
    <div class="direction" v-on:click="goToPage(id)">
      <span>{{link}}</span>
    </div>
</template>

<script>
    export default {
        name: "OtherServices",
        props: {
          link: String,
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
  .direction  {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 50px;
    margin: 0 30px 30px 0;
    border-radius: 50px;
    border: 2px solid #e0e0e0;
    color: $color-text;
    transition: all 0.2s ease-out;
      &:hover {
        border: 2px solid #0086C9;
        background-color: rgba(0, 134, 201, 0.06);
        color: #0086C9;
        text-decoration: underline;
        cursor: pointer;
        transition: all 0.2s ease-out;
      }
  }
</style>