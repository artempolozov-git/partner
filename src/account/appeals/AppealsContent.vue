<template>
  <details>
    <summary class="item__trigger">
      <div class="item__trigger-title">{{title}}</div>
      <img class="trigger-arrow-icon" src="@/assets/icons/arrow.svg">
    </summary>
    <div class="trigger-content__container">
      <div class="information-about-orders">
        <span class="information-title">Описание: </span>
        <span class="information-content">{{desc}}</span>
      </div>
      <div class="information-about-orders">
        <span class="information-title">Сотрудник: </span>
        <span class="information-content">{{manager}}</span>
      </div>
      <div class="information-about-orders">
        <span class="information-title">Важность: </span>
        <span class="information-content">{{importance}}</span>
      </div>
      <div class="information-about-orders">
        <span class="information-title">Состояние обращения: </span>
        <span class="information-content">{{status}}</span>
      </div>

      <div class="table-main__container">
        <div class="table">
          <div class="table__container">
            <table class="table">
              <thead>
              <tr>
                <th>Наименование</th>
                <th>Сумма</th>
                <th>Комментарий</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, table ) in informationTable" :key="table">
                <td>{{item.named}}</td>
                <td>{{item.value}}</td>
                <td>{{item.comment}}</td>
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
        name: "AppealsContent",
        data () {
            return {
                informationTable: [
                    {
                        named: 'Информационно - технологические услуги',
                        value: 1,
                        comment: 'В бухгалтерии ноут с учеткой Денис Левин. Добавил пользователя в групп printer lip buh main',
                    },
                ],
            }
        },
        props: {
            title: String,
            manager: String,
            desc: String,
            importance: String,
            status: String,
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