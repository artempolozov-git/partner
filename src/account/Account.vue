<template>
  <div class="account__container">
    <div class="title__wrapper">
      <h1 class="page-title">Личный кабинет</h1>
    </div>
    <k-tabs class="tabs__container">
      <k-tab class="select-tabs__content" name="Заказы и реализации" :selected="true">
        <realizations></realizations>
      </k-tab>
      <k-tab class="select-tabs__content" name="Обращения">
        <appeals></appeals>
      </k-tab>
      <k-tab class="select-tabs__content" name="Акты сверки">
        <acts></acts>
      </k-tab>
    </k-tabs>
  </div>
</template>

<script>
    import Realizations from "@/account/realizations/Realizations";
    import Appeals from "@/account/appeals/Appeals";
    import Acts from "@/account/act/Acts";
    export default {
        name: "Account",
        components: {
            Acts,
            Appeals,
            Realizations
        },
    }
</script>

<style lang="scss" scoped>
.account__container {
  padding: $padding-main__container;
}
.title__wrapper {
  @extend %titleBackground;
}
.page-title {
  font-size: $page-title-fontsize;
  font-weight: bold;
}
.tabs__container {
  padding: 0 100px;
  margin-top: 50px;
}
.select-tabs__content {
  margin-top: 50px;
  color: #222222;
}
</style>

<!-- Стили для табов !-->
<style>
  ul.tabs li a {
    font-size: 21px;
  }
  ul.tabs li {
    margin-right: 50px;
  }
  ul.tabs li.is-active a {
    font-weight: bold;
  }
</style>
