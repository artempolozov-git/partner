<template>
  <div class="accordion__container">
    <div class="button__container">
      <span>Обновить</span>
    </div>
    <realizations-content v-for="(item, ordersContents) in OrdersContent"
                                :key="ordersContents"
                                :title="item.title"
                                :manager="item.manager"
                                :date="item.date"
                                :status="item.status"
                                :percent="item.percent"></realizations-content>
  </div>
</template>

<script>
    import RealizationsContent from "@/account/realizations/RealizationsContent";
    export default {
        name: "Realizations",
        components: {RealizationsContent},
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

<style lang="scss" scoped>
.button__container {
  @extend %buttons;
}
</style>