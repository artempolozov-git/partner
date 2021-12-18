<template>
  <div class="page-main__container">
    <div class="title__wrapper">
      <h1 class="page-title">О компании</h1>
    </div>

    <div class="text__container">
      <h2 class="text__subtitle">Компания Partner</h2>
      <p class="text">Мы команда людей, работающих на результат!
        <br>Наша цель - создание, адаптация и внедрение современных IT продуктов, которые позволят вашему бизнесу покорять новые вершины, а вашим сотрудникам комфортно и эффективно
        выполнять свои обязанности.
      </p>
      <div class="slogan-text">Более 15 лет опыта работы компании!</div>
      <p class="text">Уже более 15 лет приоритетом нашей работы является процессная модель автоматизации, при которой мы рассматриваем каждую компанию как единую уникальную экосистему, в которой
        все процессы взаимосвязаны между собой. Для достижения максимального результата все эти процессы должны быть описаны, автоматизированы и работать как часы, что и является нашей
        конечной целью.
      </p>
    </div>

    <div class="team-photography__container">
      <div class="team-photography"></div>
    </div>

    <div class="direction__container">
      <h2 class="title__container">Основные направления</h2>
      <div class="directions__wrapper">
        <div class="direction" style="background-color: rgba(32,195,208,0.15)" v-tooltip="{
          content: 'англ. Enterprise Resource Planning, планирование ресурсов предприятия',
          class: 'tooltip-custom tooltip-other-custom'}">
          <span>Внедрение комплексных систем 1С: Предприятие класса ERP</span>
        </div>
        <div class="direction" style="background-color: rgba(202,235,82,0.15)" v-tooltip="{
          content: 'В том числе с использованием технологии 1С:FRESH (Облачная подсистема Фреш — современный инструментарий для создания онлайн-сервисов, обеспечивающих работу пользователей в прикладных решениях на платформе «1С:Предприятие» через Интернет (в «облаке»)',
          class: 'tooltip-custom tooltip-other-custom'}">
          <span>Автоматизация учреждений государственного сектора</span>
        </div>
        <div class="direction" style="background-color: rgba(236,97,91,0.15)" v-tooltip="{
          content: '(1C:Предприятие, 1С-Битрикс) для Windows, Android и iOS',
          class: 'tooltip-custom tooltip-other-custom'}">
          <span>Разработка программного обеспечения по техническому заданию</span>
        </div>
        <div class="direction" style="background-color: rgba(82,34,208,0.15)">
          <span>Комплексное сопровождение оптовых и розничных сетей</span>
        </div>
        <div class="direction indent" style="background-color: rgba(255,135,25,0.15)">
          <span>Обслуживание IT - инфраструктуры клиентов</span>
        </div>
      </div>
    </div>

      <div class="arrow__container">
        <h2 class="title__container">Как построена наша работа?</h2>
        <div class="arrow-list__wrapper">
          <div class="arrow-list__block">
            <img class="arrow-image" src="@/assets/icons/arrow.svg">
            <span class="arrow-list__text">Мы постоянно обучаемся чему-то новому и повышаем квалификацию наших сотрудников</span>
          </div>
          <div class="arrow-list__block">
            <img class="arrow-image" src="@/assets/icons/arrow.svg">
            <span class="arrow-list__text">Всегда работаем на результат, соблюдая все договоренности и сроки</span>
          </div>
          <div class="arrow-list__block">
            <img class="arrow-image" src="@/assets/icons/arrow.svg">
            <span class="arrow-list__text">Ответственно подходим к безопасности и конфиденциальности данных наших клиентов</span>
          </div>
          <div class="arrow-list__block">
            <img class="arrow-image" src="@/assets/icons/arrow.svg">
            <span class="arrow-list__text">Отвечаем за результат деньгами и репутацией</span>
          </div>
          <div class="arrow-list__block">
            <img class="arrow-image" src="@/assets/icons/arrow.svg">
            <span class="arrow-list__text">Применяем «лучшие практики», выработанные за более чем 15 лет опыта на рынке</span>
          </div>
          <div class="arrow-list__block">
            <img class="arrow-image" src="@/assets/icons/arrow.svg">
            <span class="arrow-list__text">Мы команда! Все отделы работают слаженно и взаимодействуют друг с другом для достижения цели</span>
          </div>
        </div>
        <div class="list-text">Истории успехов наших партнеров вдохновляют нас на постоянное развитие, построение новых моделей взаимодействия
          и поиск наиболее оптимальных путей решения задач!</div>
      </div>

    <div class="text-padding__container">
      <div class="slogan-text__down">Присоединяйтесь - вместе мы создаем будущее!</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AboutCompany",
        components: {
        },
    }
</script>

<style scoped>
.page-main__container {
  padding: 0 150px 100px;
}
.title__wrapper {
  padding: 50px 100px;
  margin-top: 30px;
  box-sizing: border-box;
  border-radius: 30px;
  background: linear-gradient(45deg, rgba(32, 195, 208, 0.11) 50%, rgba(202, 235, 82, 0.11) 100%);
}
.page-title {
  font-size: 2.5em;
  font-weight: bold;
}
.text__container {
  padding: 50px 100px;
  box-sizing: border-box;
}
.direction__container {
  padding: 100px;
  box-sizing: border-box;
}
.text__subtitle {
  font-size: 1.5em;
}
.text {
  color: #606060;
}
.slogan-text {
  font-size: 2.5em;
  text-align: center;
  font-weight: bold;
  margin: 50px 0;
  color: #5222d0;
}
.team-photography {
  width: 100%;
  height: 700px;
  border-radius: 30px;
  background: url(../assets/images/team-photography.webp);
  background-size: cover;
  background-position: center;
}
.title__container {
  font-size: 2em;
  font-weight: bold;
  margin: 0 0 50px;
}
.directions__wrapper  {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.direction  {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 50px;
  margin: 0 30px 30px 0;
  border-radius: 50px;
  font-weight: bold;
}
.indent {
  margin: 0;
}
.arrow__container {
  padding: 0 100px;
  box-sizing: border-box;
  /*background: url(../assets/images/arrow-list-background.svg);*/
  /*background-size: cover;*/
  /*background-position: center;*/
}
.arrow-list__wrapper {
  padding-left: 30px;
}
.arrow-list__block {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
.arrow-list__text {
  font-size: 21px;
  font-weight: bold;
  transition: all 0.2s ease;
}
.arrow-image {
  width: 2vw;
  margin-right: 20px;
  transition: all 0.2s ease;
}
.arrow-list__block:hover .arrow-image {
  transform: rotate(90deg);
  transition: all 0.2s ease;
}
.arrow-list__block:hover .arrow-list__text {
  color: #5222d0;
  transition: all 0.2s ease;
  cursor: default;
}
.list-text {
  font-size: 21px;
  font-weight: bold;
}
.slogan-text__down {
  font-size: 2.5em;
  text-align: center;
  font-weight: bold;
  color: #5222d0;
  margin-top: 100px;
}
@media only screen and (max-width : 1700px) {
  .page-main__container {
    padding: 0 50px 100px;
  }
}
</style>
<!--Стили для выплывающей подсказки-->
<style>
.vue-tooltip.tooltip-custom {
  background-color: #373737;
  font-family: SourceSansPro;
  color: #ebebeb;
  text-align: center;
  padding: 20px;
  border-radius: 5px;
}
.vue-tooltip.tooltip-custom .tooltip-arrow {
  border-color: #242424;
}
</style>