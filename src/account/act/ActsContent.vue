<template>
  <details>
    <summary class="item__trigger">
      <div class="item__trigger-title">{{title}}</div>
      <img class="trigger-arrow-icon" src="@/assets/icons/arrow.svg">
    </summary>
    <div class="trigger-content__container">
      <div class="information-about-orders">
        <span class="information-title">Период: </span>
        <span class="information-content">{{period}}</span>
      </div>
      <div class="information-about-orders">
        <span class="information-title">Статус: </span>
        <span class="information-content">{{status}}</span>
      </div>
      <div class="information-about-orders">
        <span class="information-title">Расхождения: </span>
        <span class="information-content">{{divergences}}</span>
      </div>
      <div class="information-about-orders">
        <span class="information-title">Договор: </span>
        <span class="information-content">{{contract}}</span>
      </div>
      <div class="information-about-orders">
        <span class="information-title">Организация: </span>
        <span class="information-content">{{organization}}</span>
      </div>
      <div class="download-button">Скачать акт</div>

      <div class="table-main__container">
        <div class="table">
          <div class="table__container">
            <table class="table">
              <thead>
              <tr>
                <th>Тип расчетов</th>
                <th>Партнер</th>
                <th>Объект расчетов</th>
                <th>Начальное сальдо</th>
                <th>Оборот приход</th>
                <th>Оборот расход</th>
                <th>Конечное сальдо</th>
                <th>Начальное сальдо регл</th>
                <th>Конечное сальдо регл</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, table ) in informationTable" :key="table">
                <td>{{item.named}}</td>
                <td v-for="(value, table) in item.value" :key="table">{{value}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </details>
</template>

<script>
    export default {
        name: "ActsContent",
        components: {},
        props: {
            title: String,
            period: String,
            date: String,
            divergences: String,
            status: String,
            contract: Number,
            organization: String,
        },
        data () {
            return {
                informationTable: [
                    {
                        named: 'Расчеты с клиентом',
                        value: [
                            'ООО СТАЛЬТОРГ',
                            'Реализация товаров и услуг ММУП - 000422 от 09.01.2020 23:59:59',
                            0, 2200, 2200, 0, 0, 0,
                        ],
                    },
                    {
                        named: 'Расчеты с клиентом',
                        value: [
                            'ООО СТАЛЬТОРГ',
                            'Информационно - технологические услуги за Ноябрь 2019г.',
                            17930, 0, 17930, 0, 17930, 0,
                        ],
                    },
                    {
                        named: 'Расчеты с клиентом',
                        value: [
                            'ООО СТАЛЬТОРГ',
                            'Заказ клиента ММУП - 000074 от 31.01.2020 23:59:59',
                            0, 5000, 5000, 0, 0, 0,
                        ],
                    },
                    {
                        named: 'Расчеты с клиентом',
                        value: [
                            'ООО СТАЛЬТОРГ',
                            'Заказ клиента ММУП - 000074 от 31.01.2020 23:59:59',
                            0, 5130, 0, 5130, 0, 5130,
                        ],
                    },
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
  details > summary {
    list-style: none;
  }
  details > summary::-webkit-details-marker {
    display: none;
  }
  .item__trigger {
    @extend %itemTrigger;
  }
  .item__trigger-title {
    font-weight: bold;
  }
  .trigger-arrow-icon {
    margin-left: auto;
    width: 25px;
  }
  .trigger-content__container {
    margin-top: 30px;
  }
  .information-about-orders {
    margin-bottom: 20px;
  }
  .information-title {
    font-weight: bold;
  }
  .information-content {
    color: $color-text;
  }
  .download-button {
    @extend %links;
  }
  .table{
    width: 100%;
  }
  .table__container {
    margin-top: 30px;
    overflow-x: auto;
    box-shadow: 0px 1px 6px 0px rgba(32, 33, 36, 0.2);
  }
  .table th, .table td{
    padding: 15px;
  }
  .table th{
    text-align: left;
    background-color: #5222D0;
    color: #ffffff;
  }
  .table th:nth-child(odd) {
    background: #7358F9;
  }
  .table tr:nth-child(even) {
    background: #F4F4F4;
  }
  .table td:not(:last-child){
    border-right: 1px solid #D3D3D3;
  }
</style>