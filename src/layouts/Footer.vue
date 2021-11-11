<template>
  <div class="footer__container">
    <footer-form></footer-form>
  </div>
</template>

<script>
    import FooterForm from "@/components/FooterForm";
    export default {
        name: "Footer",
        components: {FooterForm}
    }
</script>

<style scoped>
.footer__container {
  padding: 100px 250px;
  box-sizing: border-box;
  background-color: #1A1B22;
}
</style>