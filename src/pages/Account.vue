<template>
  <div class="account-container">
    <div class="breadcrumbs">
      <span v-on:click="goToPage('/')">Главная / </span>
      <span>Личный кабинет</span>
    </div>
    <k-tabs>
      <k-tab class="select-tabs" name="Форма подачи заявки" :selected="true">Для приобретения продукта компании, Вы можете подать заявку на нашем сайте</k-tab>
      <k-tab class="select-tabs" name="Просмотр статусов заявок">Просмотрите статус поданной вами заявки</k-tab>
      <k-tab class="select-tabs" name="Реализация товаров и услуг">Как реализовать товары и услуги</k-tab>
      <k-tab class="select-tabs" name="Счет на оплату">Счет на оплату товаров и услуг</k-tab>
    </k-tabs>
  </div>
</template>

<script>
    export default {
        name: "Account",
        methods: {
            goToPage(page) {
                this.$router.push(page);
                window.scrollTo(0, 0);
            }
        }
    }
</script>

<style scoped>
.account-container {
  padding: 30px 100px;
}
.breadcrumbs {
  color: #c3c6c8;
  margin-bottom: 30px;
  cursor: pointer;
}
.select-tabs {
  color: #222222;
}
</style>