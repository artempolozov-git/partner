<template>
  <div class="page-main__container">
    <div class="title__wrapper">
      <h2 class="title__pages">О компании</h2>
    </div>

    <div class="text__container">
      <h2 class="subtitle">Компания Partner</h2>
      <p class="text">Мы команда людей, работающих на результат!
        <br>Наша цель - создание, адаптация и внедрение современных IT продуктов, которые позволят вашему бизнесу покорять новые вершины, а вашим сотрудникам комфортно и эффективно
        выполнять свои обязанности.
      </p>
      <div class="slogan">Более 15 лет опыта работы компании!</div>
      <p class="text">Уже более 15 лет приоритетом нашей работы является процессная модель автоматизации, при которой мы рассматриваем каждую компанию как единую уникальную экосистему, в которой
        все процессы взаимосвязаны между собой. Для достижения максимального результата все эти процессы должны быть описаны, автоматизированы и работать как часы, что и является нашей
        конечной целью.
      </p>
    </div>

    <div class="team-photography__container">
      <div class="team-photography"></div>
    </div>

    <div class="section__container">
      <h2 class="title__section">Основные направления</h2>
      <div class="directions__wrapper">
        <div class="direction tooltip-block" style="background-color: rgba(32,195,208,0.15)">
          <span>Внедрение комплексных систем 1С: Предприятие класса ERP
            <span class="direction__info">✱</span>
          </span>
          <vue-easy-tooltip withArrow="true">
            англ. Enterprise Resource Planning, планирование ресурсов предприятия
          </vue-easy-tooltip>
        </div>
        <div class="direction direction__indent-right tooltip-block" style="background-color: rgba(202,235,82,0.15)">
          <span>Автоматизация учреждений государственного сектора
            <span class="direction__info">✱</span>
          </span>
          <vue-easy-tooltip withArrow="true">
            В том числе с использованием технологии 1С:FRESH (Облачная подсистема Фреш — современный инструментарий для создания онлайн-сервисов, обеспечивающих работу пользователей в прикладных решениях на платформе «1С:Предприятие» через Интернет (в «облаке»)
          </vue-easy-tooltip>
        </div>
        <div class="direction tooltip-block" style="background-color: rgba(236,97,91,0.15)">
          <span>Разработка программного обеспечения по техническому заданию
            <span class="direction__info">✱</span>
          </span>
          <vue-easy-tooltip withArrow="true">
            (1C:Предприятие, 1С-Битрикс) для Windows, Android и iOS
          </vue-easy-tooltip>
        </div>
        <div class="direction direction__indent-right" style="background-color: rgba(82,34,208,0.15)">
          <span>Комплексное сопровождение оптовых и розничных сетей</span>
        </div>
        <div class="direction direction__indent-bottom" style="background-color: rgba(255,135,25,0.15)">
          <span>Обслуживание IT - инфраструктуры клиентов</span>
        </div>
      </div>
    </div>

    <div class="section__container">
      <h2 class="title__section">Что мы предлагаем:</h2>
      <div class="arrow-list__wrapper">
        <div class="arrow-list__block" v-for="(list, arrowList) in listContent" :key="arrowList">
          <img class="arrow-icon" src="@/assets/icons/arrow.svg">
          <span class="arrow-list__text">{{list.text}}</span>
        </div>
      </div>
      <div class="arrow-list__text">Истории успехов наших партнеров вдохновляют нас на постоянное развитие, построение новых моделей взаимодействия
        и поиск наиболее оптимальных путей решения задач!</div>
    </div>

    <div class="slogan indent-bottom">Присоединяйтесь - вместе мы создаем будущее!</div>
  </div>
</template>

<script>
    import VueEasyTooltip from "vue-easy-tooltip"
    export default {
        name: "AboutCompany",
        components: {
            VueEasyTooltip
        },
        data () {
            return {
                listContent: [
                    {
                        text: 'Мы постоянно обучаемся чему-то новому и повышаем квалификацию наших сотрудников',
                    },
                    {
                        text: 'Всегда работаем на результат, соблюдая все договоренности и сроки',
                    },
                    {
                        text: 'Ответственно подходим к безопасности и конфиденциальности данных наших клиентов',
                    },
                    {
                        text: 'Отвечаем за результат деньгами и репутацией',
                    },
                    {
                        text: 'Применяем «лучшие практики», выработанные за более чем 15 лет опыта на рынке',
                    },
                    {
                        text: 'Мы команда! Все отделы работают слаженно и взаимодействуют друг с другом для достижения цели',
                    },
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
.page-main__container {
  padding: $padding-main__container;
}
.title__wrapper {
  @extend %titleBackground;
}
.title__pages {
  font-size: $page-title-fontsize;
  font-weight: bold;
}
.subtitle {
  font-size: $subtitle-fontsize;
}
.text__container {
  padding: 0 100px;
  margin: 50px 0;
  box-sizing: border-box;
}
.text {
  color: $color-text;
}
.slogan {
  font-size: $section-title-fontsize;
  text-align: center;
  font-weight: bold;
  margin: 50px 0;
  color: #5222d0;
}
.section__container {
  @extend %sectionContainer;
}
.indent-bottom {
  margin: 0;
}
.team-photography {
  width: 100%;
  height: 720px;
  margin: 0 0 100px;
  border-radius: 30px;
  background: url(../assets/images/team-photography.webp);
  background-size: cover;
  background-position: center;
}
.title__section {
  @extend %titleSection;
}
.directions__wrapper  {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.direction  {
  padding: 25px 50px;
  margin: 0 30px 30px 0;
  border-radius: 50px;
  font-weight: bold;
  text-align: center;
}
.tooltip-block {
  cursor: pointer;
}
.direction__info {
  font-weight: bold;
  color: #EC615B;
}
.direction__indent-bottom {
  margin: 0;
}
.direction__indent-right {
  margin-right: 0;
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
  font-weight: bold;
  font-size: $additional-fontsize;
}
.arrow-icon {
  width: 1.3vw;
  margin-right: 10px;
  transition: all 0.2s ease;
}
.arrow-list__block:hover .arrow-icon{
  transform: rotate(-90deg);
  transition: all 0.2s ease;
}
.arrow-list__block:hover .arrow-list__text {
  color: #5222d0;
  transition: all 0.2s ease;
  cursor: default;
}
</style>

<!--Стили для выплывающей подсказки-->
<style>
.tooltip {
  font-size: 18px;
  text-align: center;
  font-family: SourceSansPro;
  width: 25%;
}
</style>