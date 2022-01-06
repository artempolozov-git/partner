<template>
  <div class="account__container">
    <div class="title__wrapper">
      <h1 class="page-title">Личный кабинет</h1>
    </div>
    <k-tabs class="tabs__container">
      <k-tab class="select-tabs__content" name="Форма подачи заявки" :selected="true">Для приобретения продукта компании, Вы можете подать заявку на нашем сайте</k-tab>
      <k-tab class="select-tabs__content" name="Просмотр статусов заявок">Просмотрите статус поданной вами заявки</k-tab>
      <k-tab class="select-tabs__content" name="Реализация товаров и услуг">Как реализовать товары и услуги</k-tab>
      <k-tab class="select-tabs__content" name="Счет на оплату">Счет на оплату товаров и услуг</k-tab>
    </k-tabs>
  </div>
</template>

<script>
    export default {
        name: "Account",
        components: {

        },
        methods: {

        }
    }
</script>

<style scoped>
.account__container {
  padding: 0 100px 150px;
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