<template>
  <div class="accordion__container">
    <div class="refresh-button">
      <span>Обновить</span>
    </div>
    <orders-realization-content v-for="(item, ordersContents) in OrdersContent"
                                :key="ordersContents"
                                :title="item.title"
                                :manager="item.manager"
                                :date="item.date"
                                :status="item.status"
                                :percent="item.percent"></orders-realization-content>
  </div>
</template>

<script>
    import OrdersRealizationContent from "@/account/realizations/OrdersRealizationContent";
    export default {
        name: "OrdersRealization",
        components: {OrdersRealizationContent},
        data () {
          return {
              OrdersContent: [
                  {
                      title: 'Реализация №УП - 422 от 09.01.2020 на сумму 2200р.',
                      manager: 'Нигматзянова Люция Закировна',
                      date: '23:59 09.01.2020',
                      status: 'Отгружен',
                      percent: 0,
                  },
                  {
                      title: 'Реализация №УП - 386 от 15.01.2020 на сумму 35000р.',
                      manager: 'Нигматзянова Люция Закировна',
                      date: '12:15 10.02.2020',
                      status: 'Отгружен',
                      percent: 5,
                  },
                  {
                      title: 'Реализация №УП - 615 от 31.03.2020 на сумму 50000р.',
                      manager: 'Нигматзянова Люция Закировна',
                      date: '4:20 5.03.2020',
                      status: 'Отгружен',
                      percent: 10,
                  },
              ],

          }
        },
    }
</script>

<style scoped>
.refresh-button {
  width: max-content;
  padding: 20px 60px;
  margin-right: 40px;
  background-color: rgba(82, 34, 208, 0.1);
  color: #5222d0;
  font-weight: bold;
  box-sizing: border-box;
  border-radius: 30px;
  transition: all 0.2s ease-out;
}
.refresh-button:hover {
  color: #ffffff;
  cursor: pointer;
  background-color: #5222D0;
  transition: all 0.2s ease-out;
}
</style>