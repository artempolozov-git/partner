<template>
  <div class="account__container">
    <div class="title__wrapper">
      <h1 class="page-title">Личный кабинет</h1>
    </div>
    <k-tabs class="tabs__container">
      <k-tab class="select-tabs__content" name="Заказы и реализации" :selected="true">
        <orders-realization></orders-realization>
      </k-tab>
      <k-tab class="select-tabs__content" name="Обращения">Просмотрите статус поданной вами заявки</k-tab>
      <k-tab class="select-tabs__content" name="Акты сверки">Как реализовать товары и услуги</k-tab>
    </k-tabs>
  </div>
</template>

<script>
    import OrdersRealization from "@/account/realizations/OrdersRealization";
    export default {
        name: "Account",
        components: {
            OrdersRealization
        },
    }
</script>

<style scoped>
.account__container {
  padding: 0 100px 100px;
}
.title__wrapper {
  padding: 50px 100px;
  margin-top: 30px;
  box-sizing: border-box;
  border-radius: 30px;
  background: linear-gradient(45deg, rgba(32, 195, 208, 0.11) 50%, rgba(82, 34, 208, 0.11) 100%);
}
.page-title {
  font-size: 38px;
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
