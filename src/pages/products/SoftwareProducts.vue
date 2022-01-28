<template>
  <div class="page-main__container">
    <h2 class="title__pages">Программные продукты 1С</h2>

    <div class="page__banner__container">
      <div class="banner-title__wrapper">
        <h2 class="title">Не знаете какую программу 1С:Предприятие выбрать?</h2>
        <div class="description">Получите бесплатную экспертную консультацию по выбору программного продукта
          1С для ваших задач!</div>
        <div class="feedback-button" @click="FeedbackForm">
          <span>Оставить заявку</span>
        </div>
      </div>
      <div class="image"><img src="@/assets/images/programs.svg"></div>
    </div>

    <div class="text__container">
      <span class="subtitle">Справка:</span>
      <p class="text"><strong>1С:Предприятие</strong> – программный продукт компании «1С», на базе которого создаются решения для автоматизации бизнес процессов в организациях</p>
      <p class="text"><span class="hint">✱ </span>Существует большое заблуждение, что «1С» - это программа, которая предназначена сугубо для бухгалтера. Это мнение сформировалось по причине того,
        что «1С:Бухгалтерия»  является первым, и по сей день один из самых популярных решений для автоматизации бухгалтерского учета на предприятии. Однако, за более
        чем 30 лет на рынке программная платформа «1С:Предприятие» получила развитие в виде огромного количества конфигураций для автоматизации бизнес процессов
        в компаниях любого профиля, от маленьких розничных магазинов до огромных филиальных производственных холдингов.</p>
    </div>

    <div class="section__container">
      <h2 class="title__section">Преимущества программ «1С»</h2>
      <div class="blocks-grid__container">
        <div class="areas-content__block" v-for="(areas, areasContent) in accountingAreasContent" :key="areasContent">
          <div class="areas-title">
            <img src="@/assets/icons/check.svg">
            <span>{{areas.titleAreas}}</span>
          </div>
          <span class="text">{{areas.textAreas}}</span>
        </div>
      </div>
    </div>

    <div class="section__container">
      <h2 class="title__section">Почему Partner?</h2>
      <div class="advantages__grid">
        <advantages v-for="(advantage, Advantages) in softwareAdvantages"
                    :key="Advantages"
                    :title="advantage.titleAdvantages"
                    :description="advantage.description"
                    :images="advantage.images"></advantages>
      </div>
    </div>

    <div class="section__container">
      <h2 class="title__section products-title__section">Популярные
        <span class="tooltip-text">типовые<vue-easy-tooltip withArrow="true">Типовые прикладные решения фирмы "1С" предназначены для автоматизации типовых задач учета и управления предприятий.</vue-easy-tooltip></span>
        программные продукты «1С»</h2>
      <div class="products-grid__container">
        <standard-software-products v-for="(products, Product) in softwareProducts"
                                    :key="Product"
                                    :title="products.title"
                                    :images="products.images"
                                    :naming="products.naming"
                                    :text="products.text"
                                    :sum="products.sum"
                                    :id="products.id"></standard-software-products>
        <div class="products-main__container">
          <div class="products-title">Лицензии:</div>
          <div class="products__container">
            <div class="products-images"><img src="@/assets/images/products/licenses.png"></div>
            <div class="products-information__wrapper">
              <div class="products-naming">Клиентские и серверные лицензии</div>
              <div class="text">Используются для запуска серверов 1С в составе клиент-серверной архитектуры для серверных лицензий, и для запуска
                дополнительных клиентских сеансов для клиентских лицензий. Стоимость зависит от количества лицензий и их типа.</div>
              <div class="view-more" @click="FeedbackForm">Подробнее</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="services__banner__container">
      <div class="services-offers__container">
        <h2 class="title">Не нашли интересующий вас типовой программный продукт «1С»?</h2>
        <p class="text">Оставьте заявку и получите бесплатную экспертную консультацию по выбору типового программного продукта 1С для ваших задач!</p>
      </div>
      <div class="services-button" @click="FeedbackForm">
        <span>Оставить заявку</span>
      </div>
    </div>

    <div class="section__container">
      <h2 class="title__section">Отраслевые и узкоспециализированные продукты «1С»</h2>
      <p class="text">Отраслевые решения на базе программного комплекса «1С:Предприятие» нацелены на максимальное соответствие требованиям бизнеса в автоматизации
        бизнес-процессов. Такие программы позволяют значительно сокращать издержки при внедрении, так как поставляются в виде готовых решений для конкретной отрасли.
      </p>
      <p class="text">По сравнению с доработкой типовых конфигураций выбор готового отраслевого продукта имеет ряд преимуществ:</p>
      <div class="point-list__wrapper">
        <div class="point-list__block">
          <img class="point-list__image" src="@/assets/icons/good.svg">
          <div class="information-text__wrapper">
            <div class="areas-title">Соответствие узким требованиям</div>
            <div class="text">Отраслевые программные продукты максимально соответствуют узким требованиям конкретной отрасли бизнеса,
              <br>что упрощает процесс автоматизации бизнес-процессов.</div>
          </div>
        </div>
        <div class="point-list__block">
          <img class="point-list__image" src="@/assets/icons/piggy.svg">
          <div class="information-text__wrapper">
            <div class="areas-title">Экономия при внедрении</div>
            <div class="text">Продукт поставляется «из коробки», что минимизирует необходимость в доработках, тем самым снижая стоимость внедрения.</div>
          </div>
        </div>
        <div class="point-list__block">
          <img class="point-list__image" src="@/assets/icons/partner.svg">
          <div class="information-text__wrapper">
            <div class="areas-title">Внедряет Partner</div>
            <div class="text">Компания Partner имеет большой опыт во внедрении отраслевых программных продуктов на базе программного комплекса «1С».</div>
          </div>
        </div>
      </div>
      <div class="point-list__text">Выберите интересующую вас отрасль и мы подберем для вас программный продукт,
        максимально соответствующий вашим требованиям:
      </div>
      <div class="other-products__container">
        <other-products v-for="(otherlinks, otherProducts) in otherProductsLinks"
                        :key="otherProducts"
                        :image="otherlinks.image"
                        :productsName="otherlinks.productsName"></other-products>
      </div>
    </div>

    <div class="section__container-links">
      <h2 class="title__section">Смотрите также:</h2>
      <div class="other-links__wrapper indent-bottom">
        <span>Сервисы 1С</span>
        <img class="links-arrow__icon" src="@/assets/icons/links-arrow.svg">
      </div>
      <div class="other-links__wrapper">
        <span>1С Комплект поддержки</span>
        <img class="links-arrow__icon" src="@/assets/icons/links-arrow.svg">
      </div>
    </div>
  </div>
</template>

<script>
    import Advantages from "@/components/Advantages";
    import VueEasyTooltip from "vue-easy-tooltip"
    import StandardSoftwareProducts from "@/components/StandardSoftwareProducts";
    import OtherProducts from "@/components/OtherProducts";
    export default {
        name: "SoftwareProducts",
        components: {
            OtherProducts,
            StandardSoftwareProducts,
            Advantages,
            VueEasyTooltip
        },
        data () {
            return {
                accountingAreasContent: [
                    {
                        titleAreas: 'Большой выбор типовых конфигураций',
                        textAreas: 'На сегодняшнем рынке программных продуктов на базе «1С» можно с легкостью подобрать конфигурацию, которая подойдет конкретно вашему бизнесу.',
                    },
                    {
                        titleAreas: 'Масштабируемость',
                        textAreas: 'Масштабируемость программных продуктов 1С позволяет адаптировать конфигурацию под организацию любого масштаба.',
                    },
                    {
                        titleAreas: 'Облачные технологии',
                        textAreas: 'Вы можете использовать программные продукты на базе «1С» практически на любой операционной системе из любой точки мира, где есть интернет. \n' +
                            'Благодаря технологиям публикации и сервису 1С:Fresh.',
                    },
                    {
                        titleAreas: 'Среда разработки',
                        textAreas: '«1С» предоставляет гибкую среду разработки, с помощью которой можно адаптировать существующий программный продукт «под себя» либо создать конфигурацию \n' +
                            'для автоматизации вашего бизнеса «с нуля».',
                    },
                    {
                        titleAreas: 'Многоплатформенность',
                        textAreas: 'Программные продукты на основе «1С:Предприятия» работают на всех современных операционных системах: Windows, Linux, MacOS, Android, Apple IOS.',
                    },
                    {
                        titleAreas: 'Интеграции',
                        textAreas: 'Современные технологии позволяют интегрировать программу на базе «1С» с любой внешней информационной системой или оборудованием. ',
                    },
                    {
                        titleAreas: 'Развернутая система отчетности',
                        textAreas: 'Возможность получать оперативные данные о работе предприятия для руководителей разных уровней. Расширенные возможности анализа.',
                    },
                    {
                        titleAreas: 'Постоянные обновления',
                        textAreas: 'Программные продукты «1С» постоянно совершенствуются, выполняя как новые требования законодательства, так и растущие запросы бизнеса.',
                    },
                ],
                softwareAdvantages: [
                    {
                        titleAdvantages: 'Квалифицированные сотрудники',
                        description: 'Наши сотрудники постоянно совершенствуют свои знания, а также обладают сертификатами от компании «1С» различных уровней.',
                        images: require('@/assets/icons/flame.svg'),
                    },
                    {
                        titleAdvantages: 'Богатый опыт',
                        description: 'Мы являемся партнером компании «1С» уже более 15 лет.',
                        images: require('@/assets/icons/star.svg'),
                    },
                    {
                        titleAdvantages: 'Комплексный подход',
                        description: 'Мы в Partner придерживаемся комплексного подхода к автоматизации и будем вас сопровождать от процесса приобретения ПП «1С» до его полноценного внедрения.',
                        images: require('@/assets/icons/layers.svg'),
                    },
                    {
                        titleAdvantages: 'Компетенция',
                        description: 'Наша компания обладает практически всеми ключевыми статусами компании «1С».',
                        images: require('@/assets/icons/clip.svg'),
                    },
                ],
                softwareProducts: [
                    {
                        title: 'Регламентированный учет:',
                        images: require('@/assets/images/products/accounting.png'),
                        naming: '1С Бухгалтерия',
                        text: 'Ведите бухгалтерский и налоговый учет, готовьте и сдавайте обязательную отчетность.',
                        sum: 'от 3 000 ₽',
                        id: '',
                    },
                    {
                        images: require('@/assets/images/products/salary.png'),
                        naming: '1С Зарплата и управление персоналом',
                        text: 'Постройте комплексную систему управления человеческими ресурсами компании.',
                        sum: 'от 7 400 ₽',
                        id: '',
                    },
                    {
                        title: 'Учет продаж:',
                        images: require('@/assets/images/products/commerce.png'),
                        naming: '1С Управление торговлей',
                        text: 'Используйте современный инструмент для повышения эффективности бизнеса торгового предприятия.',
                        sum: 'от 6 700 ₽',
                        id: '',
                    },
                    {
                        images: require('@/assets/images/products/retail.png'),
                        naming: '1С Розница',
                        text: 'Автоматизируйте все основные бизнес-процессы как отдельного магазина, так и крупной розничной сети.',
                        sum: 'от 3 300 ₽',
                        id: '',
                    },
                    {
                        title: 'Комплексные решения:',
                        images: require('@/assets/images/products/firm.png'),
                        naming: '1С Управление нашей фирмой',
                        text: 'Управляйте бизнесом в одной программе.',
                        sum: 'от 4 600 ₽',
                        id: '',
                    },
                    {
                        images: require('@/assets/images/products/automation.png'),
                        naming: '1С Комплексная автоматизация',
                        text: 'Постройте на предприятии единую информационную систему, охватывающую все основные задачи управления и учета.',
                        sum: 'от 61 700 ₽',
                        id: '',
                    },
                    {
                        images: require('@/assets/images/products/company.png'),
                        naming: '1С ERP Управление предприятием',
                        text: 'Постройте комплексную информационную систему для управления предприятием любого масштаба.',
                        sum: 'от 432 000 ₽',
                        id: '',
                    },
                    {
                        title: 'Учет в государственных учреждениях:',
                        images: require('@/assets/images/products/states.png'),
                        naming: '1С Бухгалтерия государственного учреждения',
                        text: 'Автоматизируйте бухгалтерский учет в государственных учреждений, финансируемых из федерального, регионального или местного бюджетов.',
                        sum: 'от 3 300 ₽',
                        id: '',
                    },
                    {
                        images: require('@/assets/images/products/personnel.png'),
                        naming: '1С Зарплата и кадры государственного учреждения',
                        text: 'Автоматизируйте кадровый учет и расчет заработной платы в государственных учреждениях в соответствии с законодательством Российской Федерации.',
                        sum: 'от 9 200 ₽',
                        id: '',
                    },
                ],
                otherProductsLinks: [
                    {
                      image: require('@/assets/icons/other-products/agriculture.svg'),
                      productsName: 'Сельское и лесное хозяйство',
                    },
                    {
                        image: require('@/assets/icons/other-products/manufacture.svg'),
                        productsName: 'Производство, ТЭК',
                    },
                    {
                        image: require('@/assets/icons/other-products/building.svg'),
                        productsName: 'Строительство, девелопмент, ЖКХ',
                    },
                    {
                        image: require('@/assets/icons/other-products/logistics.svg'),
                        productsName: 'Торговля, склад, логистика',
                    },
                    {
                        image: require('@/assets/icons/other-products/finances.svg'),
                        productsName: 'Финансовый сектор',
                    },
                    {
                        image: require('@/assets/icons/other-products/catering.svg'),
                        productsName: 'Общественное питание, гостиничный бизнес',
                    },
                    {
                        image: require('@/assets/icons/other-products/education.svg'),
                        productsName: 'Образование и культура',
                    },
                    {
                        image: require('@/assets/icons/other-products/medicine.svg'),
                        productsName: 'Здравоохранение и медицина',
                    },
                    {
                        image: require('@/assets/icons/other-products/states.svg'),
                        productsName: 'Государственное и муниципальное управление',
                    },
                    {
                        image: require('@/assets/icons/other-products/professionals.svg'),
                        productsName: 'Профессиональные услуги',
                    },
                ],
            }
        },
        methods: {
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
    width: 80%;
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
  }
  .text {
    color: $color-text;
  }
  .hint {
    font-weight: bold;
    color: #EC615B;
  }
  .areas-content__block {
    padding-left: 30px;
  }
  .blocks-grid__container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, auto);
    grid-column-gap: 0px;
    grid-row-gap: 40px;
  }
  .areas-title {
    font-size:  $additional-fontsize;
    font-weight: bold;
    margin-bottom: 10px;
    & img {
      width: 20px;
      margin-right: 10px;
    }
  }
  .advantages__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 80px;
    grid-row-gap: 40px;
    margin-top: 50px;
  }
  .tooltip-text {
    color: #5222d0;
    cursor: pointer;
      &:hover {
        color: #5b25eb;
      }
  }
  .products-grid__container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(1, auto);
    grid-column-gap: 0px;
    grid-row-gap: 20px;
  }
  .products-title__section {
    margin: 0;
  }
  .products-title {
    font-size: $subtitle-fontsize;
    font-weight: bold;
    margin: 30px 0 30px 0;
  }
  .products__container {
    display: flex;
    align-items: center;
    padding: 30px 40px;
    border-radius: 30px;
    border: 2px solid #ffffff;
    background-color: #ffffff;
    box-shadow: 0px 5px 10px 2px rgba(157, 157, 157, 0.2);
    transition: all 0.2s ease-out;
    &:hover {
      box-shadow: none;
      border: 2px solid #5222d0;
      cursor: pointer;
      transition: all 0.2s ease-out;
    }
  }
  .products-images > img {
    width: 9vw;
    height: 9vw;
    margin: 0 50px 0 0;
  }
  .products-naming  {
    font-size:  $additional-fontsize;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .text {
    color: $color-text;
  }
  .button-sum__wrapper {
    display: flex;
    align-items: center;
  }
  .products-sum {
    color: #5222d0;
    font-size: $subtitle-fontsize;
    font-weight: bold;
  }
  .view-more {
    margin-top: 30px;
    @extend %buttons;
  }
  .services__banner__container {
    @extend %bannerBackground;
    margin: 0 0 100px;
  }
  .services-button {
    @extend %buttons;
    margin-top: 50px;
  }
  .point-list__wrapper {
    margin-top: 50px;
    padding-left: 30px;
  }
  .point-list__block {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .point-list__image {
      width: 4vw;
      margin-right: 15px;
    }
  }
  .point-list__text {
    font-weight: bold;
    font-size: $additional-fontsize;
  }
  .other-products__container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
  }
  .section__container-links {
    padding: 0 100px;
    box-sizing: border-box;
  }
  .other-links__wrapper {
    display: flex;
    align-items: center;
    width: fit-content;
    color: #0086C9;
    font-weight: bold;
    font-size: $subtitle-fontsize;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
  }
  .links-arrow__icon {
    width: 1vw;
    margin-left: 10px;
  }
  .indent-bottom {
    margin-bottom: 30px;
  }
</style>

<style>
  .tooltip {
    font-size: 18px;
    text-align: center;
    font-family: SourceSansPro;
    width: 25%;
  }
</style>