<template>
  <div class="page-main__container">
    <div class="title__wrapper">
      <h2 class="title__pages">Сервисы 1С</h2>
    </div>

    <div class="slogan">Сделайте работу в вашей программе «1С» проще и эффективнее!</div>
    <div class="text__container">
      <span class="subtitle">Справка:</span>
      <p class="text"><strong>Сервисы 1С</strong> расширяют и дополняют функционал программных продуктов на базе программной платформы «1С:Предприятие». Они помогают пользователям
        существенно ускорить и упростить взаимодействие с программами «1С» в различных направлениях: создание и проверка контрагентов, обмен электронными
        документами, сдача отчетности и многое другое.
      </p>
      <p class="text"><span class="hint">✱ </span>Сервисами 1С используют сотни тысяч пользователей: бухгалтеры, кадровики, логисты, менеджеры по работе с клиентами, ИТ-специалисты, руководители предприятий.</p>
    </div>

    <div class="feedback-button" @click="FeedbackForm">
      <span>Присоединяйтесь!</span>
    </div>

    <div class="section__container">
      <h2 class="title__section">Популярные сервисы:</h2>
      <div class="popular-services__grid">
        <popular-services v-for="(services, popularSerivces) in PopularServicesInformation"
                             :key="popularSerivces"
                             :images="services.images"
                             :title="services.title"
                             :text="services.text"></popular-services>
      </div>
    </div>

    <div class="section__container">
      <h2 class="title__section services-title__section">Все сервисы:</h2>
      <div class="all-services__grid">
        <all-services v-for="(all, allServices) in AllServicesInformation"
                      :key="allServices"
                      :title="all.title"
                      :image="all.image"
                      :naming="all.naming"
                      :text="all.text"></all-services>
      </div>
    </div>

    <div class="services__banner__container">
      <div class="services-offers__container">
        <h2 class="title">Заинтересовал какой-то сервис? Мы расскажем подробней!</h2>
        <p class="text">Оставьте заявку и получите бесплатную экспертную консультацию по выбору 1С Сервиса!</p>
      </div>
      <div class="services-button" @click="FeedbackForm">
        <span>Оставить заявку</span>
      </div>
    </div>

    <div class="section__container-links">
      <h2 class="title__section">Смотрите также:</h2>
      <div class="other-links__wrapper indent-bottom" v-on:click="goToPage('software-products')">
        <span>Программные продукты 1С</span>
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
    import PopularServices from "@/components/PopularServices";
    import AllServices from "@/components/AllServices";
    export default {
        name: "Services1C",
        components: {AllServices, PopularServices},
        data () {
            return {
                PopularServicesInformation: [
                    {
                       images: require('@/assets/icons/popular-services/reporting.png'),
                       title: '1С-Отчетность',
                       text: 'Сдавайте отчетность быстро, удобно и без ошибок. Отвечайте на запросы и требования ФНС из программы 1С. Формируйте выписки из ЕГРЮЛ/ЕГРИП. Работайте с комфортом.',
                       id: '',
                    },
                    {
                        images: require('@/assets/icons/popular-services/edo.png'),
                        title: '1С-ЭДО',
                        text: 'Отправляйте юридически значимые документы прямо из вашей «1С». Все документы защищены усиленной квалифицированной электронной подписью. Это просто, быстро и безопасно.',
                        id: '',
                    },
                    {
                        images: require('@/assets/icons/popular-services/counterpart.png'),
                        title: '1С:Контрагент',
                        text: 'Заполнит реквизиты в карточке контрагента по ИНН или наименованию. Проверит реквизиты инспекций ФНС и отделений ФСС и ПФР. Заполнит адреса по данным ФИАС. Соберет досье с подробной информацией о контрагенте.',
                        id: '',
                    },
                    {
                        images: require('@/assets/icons/popular-services/risks.png'),
                        title: '1СПАРК Риски',
                        text: 'Будьте в курсе изменений у ваших партнеров и клиентов: 1СПАРК Риски каждый день дает информацию о банкротстве, ликвидации, планах по реорганизации, включении контрагента в негативные реестры ФНС, появление в отношении контрагента новых исполнительных производств и т.д.',
                        id: '',
                    },
                    {
                        images: require('@/assets/icons/popular-services/fresh.png'),
                        title: '1С:Предприятие через Интернет (1С:Фреш)',
                        text: 'Ведите бухгалтерский и налоговый учет, контролируйте бизнес и управляйте им, сдавайте отчетность через Интернет из любой точки мирас помощью популярных программ "1С".',
                        id: '',
                    },
                ],
                AllServicesInformation: [
                    {
                        title: 'Для бухгалтера и кадровика:',
                        image: require('@/assets/icons/popular-services/cabinet.png'),
                        naming: '1С:Кабинет сотрудника',
                        text:'Мобильное взаимодействие сотрудников и бухгалтерии по кадровым вопросам.',
                    },
                    {
                        image: require('@/assets/icons/popular-services/sync.png'),
                        naming: '1С:Сверка',
                        text:'Автоматическая сверка счетов-фактур с контрагентами. Исключите ошибки при подготовке декларации по НДС.',
                    },
                    {
                        image: require('@/assets/icons/popular-services/direct.png'),
                        naming: '1С:ДиректБанк',
                        text:'Сервис для прямого обмена с банком – не нужно устанавливать и подключать программу "Клиент-Банк". Документы подписываются электронной подписью и передаются в банк по шифрованным каналам – все операции надежно.',
                    },
                    {
                        image: require('@/assets/icons/popular-services/its.png'),
                        naming: 'Информационная система 1С:ИТС',
                        text:'Практические рекомендации по ведению учета, пошаговые инструкции по работе с программами 1С, консультации специалистов, книги и бухгалтерские журналы',
                    },
                    {
                        image: require('@/assets/icons/popular-services/lecture.png'),
                        naming: '1С:Лекторий',
                        text:'Регулярные семинары по законодательству и его отражению в программах "1С" – в очной форме и в формате видеолекций.',
                    },
                    {
                        image: require('@/assets/icons/popular-services/auditor.png'),
                        naming: 'Отвечает аудитор',
                        text:'Персональные письменные консультации от экспертов, аудиторов и методистов "1С" по вопросам бухгалтерского налогового и кадрового учета.',
                    },
                    {
                        title: 'Для бизнеса:',
                        image: require('@/assets/icons/popular-services/net.png'),
                        naming: '1С:Бизнес-сеть. Торговая площадка',
                        text:'Торговая площадка в программах «1С:Предприятие» для поставщиков и покупателей (закупщиков).',
                    },
                    {
                        image: require('@/assets/icons/popular-services/umi.png'),
                        naming: '1С-UMI',
                        text:'Готовые сайты для всех типов бизнеса: для специалистов, компаний, а также лендинги и интернет-магазины.',
                    },
                    {
                        image: require('@/assets/icons/popular-services/etp.png'),
                        naming: '1С-ЭТП',
                        text:'Электронные подписи для участия в электронных торгах и работы на государственных порталах.',
                    },        {
                        image: require('@/assets/icons/popular-services/abbyy.png'),
                        naming: '1C-ABBYY Comparator',
                        text:'Сравнение документов в текстовых и графических форматах в различных комбинациях, выявление значимых несоответствий, отчет о различиях.',
                    },
                    {
                        title: 'Для электронного документооборота:',
                        image: require('@/assets/icons/popular-services/signed.png'),
                        naming: '1С:Подпись',
                        text:'Электронная подпись для отправки регламентированной отчетности в контролирующие органы, обмена юридически значимыми электронными документами или регистрации онлайн-касс в ФНС.',
                    },
                    {
                        title: 'Для розницы:',
                        image: require('@/assets/icons/popular-services/products.png'),
                        naming: '1С-Товары',
                        text:'Прогноз спроса и автоматический заказ, оптимизация ассортимента, понятные отчеты о работе магазина.',
                    },
                    {
                        image: require('@/assets/icons/popular-services/ofd.png'),
                        naming: '1С-ОФД',
                        text:'Онлайн-передача фискальных данных в ФНС и ЦРПТ (Маркировка), интеграция касс с программами 1С и аналитика по продажам, регистрация касс в ФНС, замена фискального накопителя и продление договора с ОФД.',
                    },
                    {
                        image: require('@/assets/icons/popular-services/nomenclature.png'),
                        naming: '1С:Номенклатура',
                        text:'Единый каталог описаний товаров в "1С:Предприятии 8".',
                    },
                    {
                        title: 'Для работы через интернет и защиты данных:',
                        image: require('@/assets/icons/popular-services/link.png'),
                        naming: '1С:Линк',
                        text:'Безопасный удаленный доступ через Интернет к программам 1С, установленным на вашем компьютере.',
                    },
                    {
                        image: require('@/assets/icons/popular-services/cloud.png'),
                        naming: '1С:Облачный архив',
                        text:'Надежная защита от потери учетных данных. Разработан специально для программ 1С. Работает автоматически.',
                    },
                    {
                        title: 'Для бюджетных учреждений:',
                        image: require('@/assets/icons/popular-services/finance.png'),
                        naming: '1С-Финконтроль',
                        text:'Организация внутреннего контроля и автоматическая проверка ведения учета в казенных учреждениях и органах государственной власти, а также в бюджетных и автономных учреждениях.',
                    },
                    {
                        title: 'Сервисы поддержки:',
                        image: require('@/assets/icons/popular-services/connect.png'),
                        naming: '1С-Коннект',
                        text:'Корпоративный чат с возможностью звонить, передавать файлы и удаленно подключаться к компьютеру. Оперативная поддержка пользователей программ 1С.',
                    },
                    {
                        image: require('@/assets/icons/popular-services/gear.png'),
                        naming: 'Корпоративная технологическая поддержка',
                        text:'Технологическая поддержка корпоративных клиентов. Повышение производительности, доступности и масштабируемости корпоративной информационной системы.',
                    },
                    {
                        image: require('@/assets/icons/popular-services/consultation.png'),
                        naming: 'Линия консультаций',
                        text:'Консультации специалистов Службы технической поддержки по «1С:Предприятию» и обслуживающего партнера по телефону и электронной почте.',
                    },
                    {
                        image: require('@/assets/icons/popular-services/industry.png'),
                        naming: '1С:КП Отраслевой',
                        text:'Является тарифным планом и предоставляет на определенный срок право использования обновленных версий и релизов отраслевых или специализированных программ 1С.',
                    },
                ]
            }
        },
        methods: {
            FeedbackForm() {
                let form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            },
            goToPage(page) {
                this.$router.push(page);
                window.scrollTo(0,0);
            }
        },
    }
</script>

<style lang="scss" scoped>
  .page-main__container {
    padding: $padding-main__container;
  }
  .title {
    font-size: $section-title-fontsize;
    font-weight: bold;
    color: #5222D0;
    margin-bottom: 20px;
  }
  .title__wrapper {
  @extend %titleBackground;
  }
  .title__pages {
    font-size: $page-title-fontsize;
    font-weight: bold;
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
  .slogan {
    font-size: $section-title-fontsize;
    text-align: center;
    font-weight: bold;
    margin: 70px 0;
    color: #5222d0;
  }
  .section__container {
  @extend %sectionContainer;
  }
  .title__section {
    @extend %titleSection;
  }
  .feedback-button {
    @extend %buttons;
    margin: 0 auto 100px;
    font-size: $subtitle-fontsize;
  }
  .popular-services__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 2fr;
    grid-column-gap: 50px;
    grid-row-gap: 50px;
  }
  .all-services__grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(1, auto);
    grid-column-gap: 0px;
    grid-row-gap: 10px;
  }
  .services-title__section {
    margin: 0;
  }
  .services__banner__container {
    @extend %bannerBackground;
    margin: 0 0 100px;
  }
  .services-button {
    @extend %buttons;
    margin-top: 50px;
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
  .other-links__wrapper:hover .links-arrow__icon {
    transform: translate3d(10px, 0, 0);
    transition: all 0.2s ease;
  }
  .links-arrow__icon {
    width: 1vw;
    margin-left: 10px;
    transition: all 0.2s ease;
  }
  .indent-bottom {
    margin-bottom: 30px;
  }
</style>