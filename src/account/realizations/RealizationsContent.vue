<template>
  <details>
    <summary class="item__trigger">
      <div class="item__trigger-title">{{title}}</div>
      <img class="trigger-arrow-icon" src="@/assets/icons/arrow.svg">
    </summary>
    <div class="trigger-content__container">
      <div class="information-about-orders">
        <span class="information-title">Менеджер: </span>
        <span class="information-content">{{manager}}</span>
      </div>
      <div class="information-about-orders">
        <span class="information-title">Срок выполнения: </span>
        <span class="information-content">{{date}}</span>
      </div>
      <div class="information-about-orders">
        <span class="information-title">Текущее состояние: </span>
        <span class="information-content">{{status}}</span>
      </div>
      <div class="information-about-orders">
        <span class="information-title">Процент оплаты: </span>
        <span class="information-content">{{percent}}</span>
      </div>
      <div class="download-button">Скачать счёт</div>

      <div class="table-main__container">
        <div class="table">
          <div class="table__container">
            <table class="table">
              <thead>
              <tr>
                <th>Номенклатура</th>
                <th>Количество</th>
                <th>Цена</th>
                <th>Сумма</th>
                <th>Сумма скидки</th>
                <th>Процент скидки</th>
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
        name: "RealizationsContent",
        components: {},
        data () {
          return {
              informationTable: [
                  {
                      named: 'Информационно - технологические услуги',
                      value: [1, 1000, 1000, 0, 0],
                  },
                  {
                      named: 'Технологические услуги',
                      value: [2, 2000, 4000, 1000, 0],
                  },
              ],
          }
        },
        props: {
            title: String,
            manager: String,
            date: String,
            status: String,
            percent: Number,
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
    box-shadow: 0px 5px 10px 2px rgba(157, 157, 157, 0.2);
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