<template>
  <div class="page-main__container">
    <h2 class="title__pages">Автоматизация учреждений госсектора</h2>

    <div class="page__banner__container">
      <div class="banner-title__wrapper">
        <h2 class="title">Автоматизация для достижения результата, а не для самой автоматизации!</h2>
        <div class="description">Внедряем и поддерживаем системы автоматизации учреждений госсектора!</div>
        <div class="feedback-button" @click="FeedbackForm">
          <span>Оставить заявку</span>
        </div>
      </div>
      <div class="image">
        <img src="@/assets/images/institutions.svg">
      </div>
    </div>

    <div class="section__container">
      <h2 class="title__section">Нас выбирают:</h2>
      <div class="text">Уже более 250 учреждений из различных сфер госсектора выбрали Partner</div>
      <div class="advantages__grid">
        <div class="advantages__block" v-for="(item, advantageItem) in advantagesItems" :key="advantageItem">
          <img :src="item.images">
          <div class="advantages__information__wrapper">
            <h2 class="advantages__title">{{item.subtitle}}</h2>
            <ul class="list__block" v-for="(points, advantageItem) in item.points" :key="advantageItem">
              <li class="list__text"><span>{{points}}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section__container">
      <h2 class="title__section">Комплексаная автоматизация:</h2>
      <p class="text">Наша компания придерживается идеи "Комплексного" подхода к автоматизации, который затрагивает все сферы учета государственных учреждений:</p>
      <div class="list__container indent-bottom">
        <div class="list-number">1</div>
        <div class="list__wrapper">
          <div class="list-title">Бухгалтерский учет</div>
          <ul class="list__block">
            <li class="list__text"><span>Внедрение единой информационной системы для ведения бухгалтерии</span></li>
            <li class="list__text"><span>Построение процессов взаимодействия между бухгалтерией и другими отделами</span></li>
            <li class="list__text"><span>Внедрение ЭДО с контрагентами и контролирующими органами</span></li>
            <li class="list__text"><span>Обучение и консалтинг</span></li>
          </ul>
        </div>
      </div>
      <div class="list__container indent-bottom">
        <div class="list-number">2</div>
        <div class="list__wrapper">
          <div class="list-title">Кадровый учет</div>
          <ul class="list__block">
            <li class="list__text"><span>Ускорение и автоматизация рутинных процессов (выдача справок, рассылка расчетных листов)</span></li>
            <li class="list__text"><span>Уменьшение количества ошибок в учете</span></li>
            <li class="list__text"><span>Автоматизация учета рабочего времени и начисления зарплаты</span></li>
            <li class="list__text"><span>Внедрение систем электронной отчетности</span></li>
          </ul>
        </div>
      </div>
      <div class="list__container indent-bottom">
        <div class="list-number">3</div>
        <div class="list__wrapper">
          <div class="list-title">Управленческий учет</div>
          <ul class="list__block">
            <li class="list__text"><span>Предоставление руководителям отчетов о результатах деятельности организации</span></li>
            <li class="list__text"><span>Разработка средств контроля затрат</span></li>
            <li class="list__text"><span>Помощь в формировании внутренней отчетности</span></li>
          </ul>
        </div>
      </div>
      <div class="list__container">
        <div class="list-number">4</div>
        <div class="list__wrapper">
          <div class="list-title">Оперативный учет</div>
          <ul class="list__block">
            <li class="list__text"><span>Организация процесса хранения и обработки основных средств</span></li>
            <li class="list__text"><span>Автоматизация процессов инвентаризации</span></li>
            <li class="list__text"><span>Оптимизация производства</span></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section__container">
      <h2 class="title__section">Что мы предлагаем:</h2>
      <div class="arrow-list__wrapper">
        <div class="arrow-list__block" v-for="(list, arrowList) in ArrowListContent" :key="arrowList">
          <img class="arrow-icon" src="@/assets/icons/arrow.svg">
          <span class="arrow-list__text">{{list.text}}</span>
        </div>
      </div>
    </div>

    <div class="section__container">
      <h2 class="title__section">Популярные решения:</h2>
      <div class="prices__container">
          <services-prices v-for="(prices, ServicesPrice) in ServicesPricesContent"
                           :key="ServicesPrice" :title="prices.title"
                           :sum="prices.sum"
                           :text="prices.text"></services-prices>
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
    import OtherServices from "@/components/OtherServices";
    import ServicesPrices from "@/components/ServicesPrices";
    export default {
        name: "PublicAutomation",
        components: {
            ServicesPrices,
            OtherServices,
        },
        methods: {
            FeedbackForm() {
                let form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            },
        },
        data () {
            return {
                advantagesItems: [
                    {
                        images: require('@/assets/icons/education.svg'),
                        subtitle: 'Образование:',
                        points: [
                            'Общеобразовательные школы',
                            'Центры дополнительного образования',
                            'Колледжи',
                            'Университеты',
                        ],
                    },
                    {
                        images: require('@/assets/icons/culture.svg'),
                        subtitle: 'Культура:',
                        points: [
                            'Театры',
                            'Дома творчества',
                            'Музыкальные и художественные школы',
                            'Парки',
                        ],
                    },
                    {
                        images: require('@/assets/icons/healthcare.svg'),
                        subtitle: 'Здравоохранение:',
                        points: [
                            'Диспансеры',
                            'Больницы',
                            'Поликлиники',
                            'Лаборатории',
                        ],
                    },
                    {
                        images: require('@/assets/icons/sport.svg'),
                        subtitle: 'Физическая культура и спорт:',
                        points: [
                            'Спортивные комплексы',
                            'Спортивные школы',
                        ],
                    },
                    {
                        images: require('@/assets/icons/socialsector.svg'),
                        subtitle: 'Социальная сфера:',
                        points: [
                            'Детские дома',
                            'Службы психологической помощи',
                            'Благотворительные фонды',
                            'Пансионаты',
                        ],
                    },
                    {
                        images: require('@/assets/icons/authorities.svg'),
                        subtitle: 'Органы власти:',
                        points: [
                            'Администрации поселений',
                            'Централизованные бухгалтерии',
                            'Счетные палаты',
                            'Советы депутатов',
                        ],
                    },
                ],
                ArrowListContent: [
                  {
                    text: 'Комплекс профессиональной линии поддержки',
                  },
                  {
                      text: 'Подбор и внедрение программных продуктов «1С:Предприятие 8»',
                  },
                  {
                      text: '1С:Информационно-Технологическое Сопровождение',
                  },
                  {
                      text: 'Внедрение и доработка программных продуктов фирмы 1С',
                  },
                  {
                      text: 'Перенос данных из различных систем в конфигурации 1С',
                  },
                  {
                      text: 'Формирование и сдача отчетности в контролирующие органы',
                  },
                  {
                      text: 'Помощь в формировании сводной бюджетной отчетности',
                  },
                  {
                      text: 'Проектирование и создание информационных систем любого масштаба',
                  },
              ],
                ServicesPricesContent: [
                    {
                        title: '1С:Бухгалтерия государственного учреждения',
                        sum: 'от 3300р.',
                        text: 'Данное решение позволяет вести учет всем типам государственных (муниципальных) учреждений — казенным, бюджетным, автономным.  Продукт может также использоваться распорядителями, главными распорядителями средств бюджета, органами государственной власти, органами местного самоуправления, органами управления государственными внебюджетными фондами, финансовыми органами, органами казначейства, государственными академиями наук в части исполнения сметы на свое содержание. «1С:Бухгалтерия государственного учреждения 8» редакции 2 разработана в соответствии со всеми нормативными документами по бухгалтерскому учету в РФ.',
                    },
                    {
                        title: '1С:Зарплата и кадры государственного учреждения:',
                        sum: 'от 9200р.',
                        text: 'Программа «1С:Зарплата и кадры государственного учреждения 8» предназначена для автоматизации кадрового учета и расчета заработной платы в государственных учреждениях в соответствии с законодательством Российской Федерации. В ней предусмотрена гибкая настройка возможностей для обеспечения работы различных государственных учреждений. Благодаря своим функциональным возможностям и средствам гибкой настройки эта программа может использоваться в различных организациях — учреждениях, состоящих на самостоятельном балансе, финансируемых из федерального, регионального (субъектов Российской Федерации) или местного бюджета, а также из бюджета государственного внебюджетного фонда.',
                    },
                    {
                        title: '1С:Документооборот государственного учреждения:',
                        sum: 'от 117 600р.',
                        text: '«1С:Документооборот государственного учреждения 8» в комплексе решает широкий спектр задач автоматизации учета документов, взаимодействия сотрудников, контроля и анализа исполнительской дисциплины. При наличии у пользователя соответствующих клиентских лицензий программа поддерживает многопользовательскую работу в локальной сети или через Интернет, в том числе и через веб-браузеры. «1С:Документооборот государственного учреждения 8» соответствует основным делопроизводственным стандартам, ГОСТам и нормативным актам.',
                    },
                ],
                servicesLinks: [
                    {
                        link: 'Автоматизация бизнеса',
                        id: 'business-automation',
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
                        id: '',
                    },
                    {
                        link: 'Продажа и настройка торгового оборудования',
                        id: '',
                    },
                ],
            }
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
    margin-bottom: 100px;
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
    width: 40%;
    margin-left: 100px;
  }
  .feedback-button {
    @extend %buttons;
    margin-top: 50px;
  }
  .advantages__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 60px;
    grid-row-gap: 50px;
    margin-top: 50px;
  }
  .advantages__block {
    display: flex;
    align-items: start;
  }
  .advantages__block > img {
    width: 4vw;
    margin-right: 20px;
  }
  .advantages__title {
    font-size:  $additional-fontsize;
    font-weight: bold;
    margin: 0;
  }
  .list__container {
    display: flex;
  }
  .text {
    color: $color-text;
    margin-bottom: 30px;
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
  .arrow-list__wrapper {
    padding-left: 30px;
  }
  .arrow-list__block {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  .arrow-icon {
    width: 1.3vw;
    margin-right: 10px;
    transition: all 0.2s ease;
  }
  .arrow-list__text {
    font-weight: bold;
    font-size: $additional-fontsize;
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
  .prices__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 0px;
  }
  .section__container-links {
    padding: 0 100px;
    box-sizing: border-box;
  }
  .directions__wrapper  {
    display: flex;
    flex-wrap: wrap;
  }
  .direction  {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 50px;
    margin: 0 30px 30px 0;
    border-radius: 50px;
    border: 1px solid #606060;
    color: $color-text;
  }
  .direction:hover {
    border: 1px solid #0086C9;
    background-color: rgba(0, 134, 201, 0.11);
    color: #0086C9;
    text-decoration: underline;
    cursor: pointer;
  }
</style>