<template>
  <div class="page-main__container">
    <h2 class="title__pages">Автоматизация бизнеса</h2>

    <div class="page__banner__container">
      <div class="banner-title__wrapper">
        <h2 class="title">Экспертный подход к автоматизация вашего бизнеса!</h2>
        <div class="description">Внедряем, обучаем, сопровождаем, поддерживаем!</div>
        <div class="feedback-button" @click="FeedbackForm">
          <span>Оставить заявку</span>
        </div>
      </div>
      <div class="image">
        <img src="@/assets/images/automation.svg">
      </div>
    </div>

    <div class="text__container">
      <span class="subtitle">Справка:</span>
      <p class="text"><strong>Автоматизация бизнес процессов</strong> — простыми словами, это перенос выполнения рутинных и однотипных задач в профессиональные программы, которые упрощают и ускоряют реализацию
        любых операций. Для выполнения задачи рабочие процессы превращаются в четкие алгоритмы, описывающие, что необходимо сделать для выполнения конкретной задачи.
      </p>
      <p class="text">Непосредственно в программной среде создаются функции, инструменты и шаблоны, необходимые для выполнения определенной операции.</p>
      <p class="text">Службы автоматизации выполняют многие виды операций без вмешательства человека, тем самым можно значительно сократить штаб сотрудников,
        оптимизировать расходы, улучшить сервис.</p>
      <p class="text">Программное обеспечение и инструменты для автоматизации бизнеса сокращают количество ошибок на рабочем месте, повышая продуктивность отдельных сотрудников,
        отделов и предприятия в целом. Человеческий фактор - это, пожалуй, самое первое, что автоматизация пытается устранить в компании.</p>
    </div>

    <div class="section__container">
    <h2 class="title__section">Какие проблемы решает автоматизация бизнеса?</h2>
    <div class="list__container indent-bottom">
      <div class="list-number">1</div>
      <div class="list__wrapper">
        <div class="list-title">Контроль и учет</div>
        <ul class="list__block">
          <li class="list__text"><span>Контроль движения каждой единицы продукции или товара в организации</span></li>
          <li class="list__text"><span>Производственные процессы с дистанционным управлением</span></li>
          <li class="list__text"><span>Учет всей продукции на производстве, на складе и во всей розничной сети</span></li>
          <li class="list__text"><span>Контроль расходов и доходов по каждой отдельной статье</span></li>
        </ul>
      </div>
    </div>
    <div class="list__container indent-bottom">
      <div class="list-number">2</div>
      <div class="list__wrapper">
        <div class="list-title">Повышение эффективности</div>
        <ul class="list__block">
          <li class="list__text"><span>Увеличение производства и продаж</span></li>
          <li class="list__text"><span>Идентификация товаров / услуг - «локомотивов» бизнеса</span></li>
          <li class="list__text"><span>Создание базы постоянных клиентов</span></li>
          <li class="list__text"><span>Формирование эффективной маркетинговой политики</span></li>
          <li class="list__text"><span>Исключение ошибок в учете клиентов</span></li>
        </ul>
      </div>
    </div>
    <div class="list__container indent-bottom">
      <div class="list-number">3</div>
      <div class="list__wrapper">
        <div class="list-title">Снижение потерь</div>
        <ul class="list__block">
          <li class="list__text"><span>Предотвращение краж и мошеннечества</span></li>
          <li class="list__text"><span>Выявление неэффективных работников</span></li>
          <li class="list__text"><span>Создание базы постоянных клиентов</span></li>
          <li class="list__text"><span>Сокращение сотрудников за счет автоматизации процессов</span></li>
          <li class="list__text"><span>Устранение ошибок при фиксации реализаций товаров и услуг</span></li>
        </ul>
      </div>
    </div>
    <div class="list__container">
      <div class="list-number">4</div>
      <div class="list__wrapper">
        <div class="list-title">Аналитика и статистика</div>
        <ul class="list__block">
          <li class="list__text"><span>Анализ динамики покупок и продаж за период</span></li>
          <li class="list__text"><span>Доступная статистика по товарообороту, прибыли и убыткам, а так же рентабельности компании в целом</span></li>
          <li class="list__text"><span>Управленческая отчетность для всех производств, складов, торговых точек в единой базе</span></li>
          <li class="list__text"><span>Прогнозирование и формирование бизнес-показателей, необходимых для роста вашего бизнеса</span></li>
        </ul>
      </div>
    </div>
  </div>

    <div class="offer-banner__container">
      <div class="offers__wrapper">
        <h2 class="offers-title">Мы поможем вам:
          <div class="slidingVertical">
            <span>Увеличить прибыль вашей компании</span>
            <span>Снизить затраты и издержки</span>
            <span>Увеличить количество клиентов и качество услуг</span>
            <span>Увеличить скорость обработки информации</span>
            <span>Дадим возможность решать несколько задач одновременно</span>
          </div>
        </h2>
      </div>
    </div>

    <div class="section__container">
      <h2 class="title__section">Нам доверяют:</h2>
      <div class="point-list__wrapper">
        <div class="point-list__block">
          <img class="point-list__image" src="@/assets/icons/robot.svg">
          <span class="point-list__text">Наша компания компетентна в вопросах автоматизации широкого спектра сфер бизнеса, включая автаматизацию розничных и оптовых сетей, медицинских учреждений, фитнеса и других сфер бизнеса</span>
        </div>
        <div class="point-list__block">
          <img class="point-list__image" src="@/assets/icons/time.svg">
          <span class="point-list__text">Мы всегда решаем вопросы клиентов в срок</span>
        </div>
        <div class="point-list__block">
          <img class="point-list__image" src="@/assets/icons/ribbon.svg">
          <span class="point-list__text">Наши специалисты имеют высокую квалификацию и сертификаты в профильных областях</span>
        </div>
        <div class="point-list__block">
          <img class="point-list__image" src="@/assets/icons/piggy.svg">
          <span class="point-list__text">Мы оплачиваем простои и потерю информации</span>
        </div>
      </div>
    </div>

    <div class="section__container">
      <h2 class="title__section">Популярные решения:</h2>
      <div class="prices__container">
         <business-automation-prices></business-automation-prices>
      </div>
    </div>

    <div class="section__container-links">
      <h2 class="title__section">Другие услуги Partner:</h2>
      <div class="directions__wrapper">
        <other-services v-for="(pages, otherLinks) in servicesLinks"
                        :key="otherLinks"
                        :link="pages.link"
                        :id="pages.id"></other-services>
      </div>
    </div>
  </div>
</template>

<script>
    import BusinessAutomationPrices from "@/components/BusinessAutomationPrices";
    import OtherServices from "@/components/OtherServices";
    export default {
        name: "BusinessAutomation",
        components: {
            OtherServices,
            BusinessAutomationPrices,
        },
        data () {
            return {
                servicesLinks: [
                    {
                        link: 'Автоматизация учреждений госсектора',
                        id: 'public-automation',
                    },
                    {
                        link: 'Консалтинговые услуги',
                        id: 'consulting',
                    },
                    {
                        link: 'Бухгалтерское обслуживание',
                        id: 'accounting-services',
                    },
                    {
                        link: 'IT - аутсорсинг',
                        id: 'it-outsourcing',
                    },
                    {
                        link: 'Продажа, внедрение и поддержка программ «1С»',
                        id: 'software-products',
                    },
                    {
                        link: 'Продажа и настройка торгового оборудования',
                        id: '',
                    },
                ],
            }
        },
        methods: {
            goToPage(page) {
                this.$router.push(page);
                window.scrollTo(0,0);
            },
            FeedbackForm() {
                let form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            },
        },
    }
</script>

<style lang="scss" scoped>
.page-main__container {
  padding: $padding-main__container;
}
.title__pages {
  @extend %titlePages;
}
.page__banner__container {
  display: flex;
  align-items: center;
  justify-content: center;
  @extend %bannerBackground;
}
.section__container {
 @extend %sectionContainer;
}
.title__section {
  @extend %titleSection;
}
.title {
  font-size: $section-title-fontsize;
  font-weight: bold;
  color: #5222D0;
  margin-bottom: 20px;
}
.description {
  color: $color-text;
}
.image {
  width: 30%;
  margin-left: auto;
}
.feedback-button {
  @extend %buttons;
  margin-top: 50px;
}
.text__container {
  padding: 0 130px;
  margin: 70px 0;
  box-sizing: border-box;
    .subtitle {
      font-size: $subtitle-fontsize;
      color: #5222d0;
      font-weight: bold;
    }
    .text {
      color: $color-text;
    }
}
.list__container {
  display: flex;
}
.indent-bottom {
  margin-bottom: 30px;
}
.list-number {
  font-size: 3vw;
  color: #5222d0;
  font-weight: bold;
}
.list-title {
  padding-left: 20px;
  font-size: $additional-fontsize;
  font-weight: bold;
}
.list__text {
  margin-top: 20px;
    & span {
      color: $color-text;
    }
}
.list__block > li {
  color: #5222d0;
}
// анимация оффера
.offer-banner__container {
  @extend %bannerBackground;
  margin: 0 0 100px;
}
.offers-title {
  font-size: $section-title-fontsize;
  font-weight: bold;
  text-align: left;
}
.slidingVertical{
  display: inline;
  text-indent: 8px;
}
.slidingVertical span{
  animation: topToBottom 12.5s linear infinite 0s;
  color: #5222d0;
  opacity: 0;
  overflow: hidden;
  position: absolute;
}
.slidingVertical span:nth-child(2){
  animation-delay: 2.5s;
}
.slidingVertical span:nth-child(3){
  animation-delay: 5s;
}
.slidingVertical span:nth-child(4){
  animation-delay: 7.5s;
}
.slidingVertical span:nth-child(5){
  animation-delay: 10s;
}
@-moz-keyframes topToBottom{
  0% { opacity: 0; }
  5% { opacity: 0; -moz-transform: translateY(-50px); }
  10% { opacity: 1; -moz-transform: translateY(0px); }
  25% { opacity: 1; -moz-transform: translateY(0px); }
  30% { opacity: 0; -moz-transform: translateY(50px); }
  80% { opacity: 0; }
  100% { opacity: 0; }
}
@-webkit-keyframes topToBottom{
  0% { opacity: 0; }
  5% { opacity: 0; -webkit-transform: translateY(-50px); }
  10% { opacity: 1; -webkit-transform: translateY(0px); }
  25% { opacity: 1; -webkit-transform: translateY(0px); }
  30% { opacity: 0; -webkit-transform: translateY(50px); }
  80% { opacity: 0; }
  100% { opacity: 0; }
}
@-ms-keyframes topToBottom{
  0% { opacity: 0; }
  5% { opacity: 0; -ms-transform: translateY(-50px); }
  10% { opacity: 1; -ms-transform: translateY(0px); }
  25% { opacity: 1; -ms-transform: translateY(0px); }
  30% { opacity: 0; -ms-transform: translateY(50px); }
  80% { opacity: 0; }
  100% { opacity: 0; }
}
//
.point-list__wrapper {
  padding-left: 30px;
}
.point-list__block {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  .point-list__text {
    font-size: $additional-fontsize;
  }
  .point-list__image {
    width: 4vw;
    margin-right: 15px;
  }
}
.section__container-links {
  padding: 0 100px;
  box-sizing: border-box;
}
.directions__wrapper  {
  display: flex;
  flex-wrap: wrap;
}
</style>