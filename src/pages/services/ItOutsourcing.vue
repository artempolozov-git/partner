<template>
  <div class="page-main__container">
    <h2 class="title__pages">IT - аутсорсинг</h2>

    <div class="page__banner__container">
      <div class="banner-title__wrapper">
        <h2 class="title">Комплексные IT - решения для бизнеса</h2>
        <div class="description">Доверьте решение задач в области IT команде экспертов с большим опытом
          и высокой квалификацией!</div>
        <div class="feedback-button" @click="FeedbackForm">
          <span>Оставить заявку</span>
        </div>
      </div>
      <div class="image"><img src="@/assets/images/maintenance.svg"></div>
    </div>

    <div class="text__container">
      <span class="subtitle">Справка:</span>
      <p class="text">Если попытаться объяснить термин <strong>IТ - аутсорсинг простыми словами</strong>, то получиться, что это деловые отношения, при которых одна компания оказывает другой
        услуги по комплексному обслуживанию инфраструктуры информационных технологий.
      </p>
      <p class="text"><span class="hint">✱ </span>В век повсеместного распространения информационных технологий бизнес все больше становится зависим от своего IT-ландшафта. Вопрос «Сможет ли бизнес без IT?»
        уже давно не стоит ни перед одним руководителем. Вопрос только в поиске оптимальных ресурсов для организации информационной системы, выборе технологий
        и команде, которая эти технологии заставит работать на благо бизнеса.</p>
    </div>

    <div class="section__container">
      <h2 class="title__section">Что вам даст IT - аутсорсинг?</h2>
      <div class="blocks-grid__container">
        <div class="get-results__wrapper" v-for="(result, resultContent) in getResultContent" :key="resultContent">
          <div class="get-results-title">{{result.titleResult}}</div>
          <div class="text">{{result.textResult}}</div>
        </div>
        <div class="get-results__wrapper">
          <div class="get-results-title">Собственные сервисы и облачные решения</div>
          <div class="text">Очень часто крупные аутсорсеры IT предоставляют клиентам собственные сервисы и облачные решения, которые позволяют существенно сэкономить на аппаратной
            и программной инфраструктуре, предоставляя свою инфраструктуру как в качестве
            <span class="hint-text">IaaS
              <vue-easy-tooltip withArrow="true">
                Инфраструктура как услуга — одна из моделей обслуживания в облачных вычислениях, по которой потребителям предоставляются по подписке фундаментальные информационно-технологические ресурсы — виртуальные серверы с заданной вычислительной мощностью, операционной системой и доступом к сети.
              </vue-easy-tooltip>
            </span>, так и
            <span class="hint-text">PaaS
              <vue-easy-tooltip withArrow="true">
                Platform as a Service — модель предоставления облачных вычислений, при которой потребитель получает доступ к использованию информационно-технологических платформ: операционных систем, систем управления базами данных, связующему программному обеспечению, средствам разработки и тестирования, размещённым у провайдера.
              </vue-easy-tooltip>
            </span> и
            <span class="hint-text">SaaS
              <vue-easy-tooltip withArrow="true">
                SaaS — одна из форм облачных вычислений, модель обслуживания, при которой подписчикам предоставляется готовое прикладное программное обеспечение, полностью обслуживаемое провайдером.
              </vue-easy-tooltip>
            </span>.
            Переход в такие системы избавляет вас от необходимости разворачивать
            и содержать собственные серверы и держать штат специалистов для проведения этих работ.</div>
        </div>
      </div>
    </div>

    <div class="section__container">
      <h2 class="title__section">Ситуации, когда IT - аутсорсинг жизненно необходим:</h2>
      <div class="point-list__wrapper">
        <div class="point-list__block">
          <img class="point-list__image" src="@/assets/icons/exclamation.svg">
          <span class="point-list__text">Для вас дорого нанять штатного системного администратора, а инфраструктура требует внимания</span>
        </div>
        <div class="point-list__block">
          <img class="point-list__image" src="@/assets/icons/exclamation.svg">
          <span class="point-list__text">Штатный системный администратор неожиданно уволился или заболел, а доступ к информационной системе утерян</span>
        </div>
        <div class="point-list__block">
          <img class="point-list__image" src="@/assets/icons/exclamation.svg">
          <span class="point-list__text">Штатный системный администратор не справляется со своими обязанностями и у вас случаются регулярные сбои и простои в работе</span>
        </div>
        <div class="point-list__block">
          <img class="point-list__image" src="@/assets/icons/exclamation.svg">
          <span class="point-list__text">Ваши сотрудники постоянно жалуются на регулярные проблемы при пользовании информационными системами и компьютерами</span>
        </div>
        <div class="point-list__block">
          <img class="point-list__image" src="@/assets/icons/exclamation.svg">
          <span class="point-list__text">Ваш бизнес растет, и вы видите, что штатный системный администратор не справляется с дополнительной нагрузкой</span>
        </div>
      </div>
    </div>

    <div class="section__container">
      <h2 class="title__section">Почему Partner?</h2>
      <div class="advantages__grid">
        <advantages v-for="(advantage, Advantages) in OutsourcingAdvantages"
                    :key="Advantages"
                    :title="advantage.title"
                    :description="advantage.description"
                    :images="advantage.images"></advantages>
      </div>
    </div>

    <div class="section__container">
      <h2 class="title__section">Штатный сисадмин VS IT - аутсорсинг в Partner:</h2>
      <div class="versus-main__container">
        <div class="versus__wrapper">
          <div class="versus-title">IT - аутсорсинг:</div>
          <div class="versus-points" v-for="(points, versusPoints) in plusPoints" :key="versusPoints">
            <img class="versus-icons" src="@/assets/icons/plus.svg">
            <span class="versus-text">{{points.textPlus}}</span>
          </div>
        </div>
        <div class="versus__wrapper indent-left">
          <div class="versus-title">Штатный системный администратор:</div>
          <div class="versus-points" v-for="(points, versusPoints) in minusPoints" :key="versusPoints">
            <img class="versus-icons" src="@/assets/icons/minus.svg">
            <span class="versus-text">{{points.textMinus}}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="section__container">
      <h2 class="title__section">Сколько это будет стоить?</h2>
      <h3>Калькулятор стоимости IT - аутсорсинга</h3>
      <div class="radio-button__container">
        <div class="system-title">Ваша система налогообложения:</div>
        <div class="radio-button__block">
          <input type="radio" id="usn-6" name="select" value="Стандартная срочность" checked>
          <label for="usn-6">УСН (6% - доходы)</label>
        </div>
        <div class="radio-button__block">
          <input type="radio" id="usn-15" name="select" value="Экстренное">
          <label for="usn-15">УСН (15% - доходы, уменьшенные на величину расходов)</label>
        </div>
        <div class="radio-button__block">
          <input type="radio" id="psn-6" name="select" value="Экстренное">
          <label for="psn-6">ПСН + УСН (6% - доходы)</label>
        </div>
        <div class="radio-button__block">
          <input type="radio" id="general" name="select" value="Экстренное">
          <label for="general">Общий налоговый режим</label>
        </div>
      </div>

      <div class="slider__container">
        <div class="vue-slider">
          <p class="text">Количество хозяйственных операций (первичных документов)</p>
          <vue-slider v-model="value" v-bind="options"></vue-slider>
        </div>
        <div class="vue-slider">
          <p class="text">Количество сотрудников работающих по штатному расписанию</p>
          <vue-slider v-model="value" v-bind="options"></vue-slider>
        </div>
      </div>

      <div class="prices__container">
        <services-prices v-for="(prices, ServicesPrice) in ServicesPricesContent"
                         :key="ServicesPrice" :title="prices.title"
                         :sum="prices.sum"
                         :text="prices.text"></services-prices>
      </div>
      <div class="special-prices__container">
        <div class="special-prices__text">Комплексное предложение: <span>от 11 357 ₽ / месяц</span></div>
        <div class="prices-feedback__button" @click="FeedbackForm">
          <span>Оставить заявку</span>
        </div>
      </div>
    </div>

    <div class="services__banner__container">
      <div class="services-offers__container">
        <h2 class="title__section">Разовые услуги</h2>
        <div class="service-offers__text">
          <img src="@/assets/icons/pdf.svg">
          <span>Вы можете ознакомиться с информацией о предоставлении разовых IT - услуг</span>
        </div>
      </div>
      <div class="services-button">
        <span>Ознакомиться</span>
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
    import VueEasyTooltip from "vue-easy-tooltip"
    import Advantages from "@/components/Advantages";
    import VueSlider from 'vue-slider-component';
    import 'vue-slider-component/theme/default.css';
    import ServicesPrices from "@/components/ServicesPrices";
    import OtherServices from "@/components/OtherServices";
    export default {
        name: "ItOutsourcing",
        components: {
            OtherServices,
            ServicesPrices,
            Advantages,
            VueSlider,
            VueEasyTooltip
        },
        methods: {
            FeedbackForm() {
                let form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            },
        },
        data () {
            return {
                getResultContent: [
                    {
                        titleResult: 'Безопасность и сохранность данных',
                        textResult:'Данные – новое золото 21-го века. Бреши в информационной безопасности и утеря данных может быть плачевной для любого бизнеса. Область информационной безопасности \n' +
                            'сложная и довольно обширная. Найти специалиста, компетентного на всех уровнях этой области задача не из легких. Здесь вам проще и дешевле обратиться к аутсорсеру, \n' +
                            'у которого есть узкие специалисты по обеспечению информационной безопасности, и который отвечает перед вами по договору, ставя на кон не только деньги, \n' +
                            'но и свою репутацию.',
                    },
                    {
                        titleResult: 'Построение и поддержка состояния инфраструктуры',
                        textResult:'Офис современной компании без компьютеров или серверов - что-то немыслимое в современной картине мира. Этот факт положительно сказывается на эффективности работы, \n' +
                            'но и несет за собой определенную опасность, ведь при поломке всего одного компьютера или сервера может быть парализован весь рабочий процесс. С учетом сложности \n' +
                            'и большого разнообразия оборудования держать нескольких специалистов для предотвращения подобных проблем дорого и неэффективно.  Надежный партнер для IT \n' +
                            'аутсорсинга решит эту проблему.',
                    },
                    {
                        titleResult: 'Развертывание и обновление программного обеспечения',
                        textResult:'Программное обеспечение в современном мире не менее, а скорее более важная вещь в сфере автоматизации бизнеса, чем аппаратная ее часть. Правильнее будет сказать, \n' +
                            'что одно без другого просто не имеет смысла. Производители программного обеспечения регулярно обновляют свои продукты, добавляя новые возможности и устраняя старые \n' +
                            'ошибки и недочеты. Чем современнее ПО на рабочих местах сотрудников и серверах, тем выше производительность всей компании в целом. Для поддержания актуальности\n' +
                            ' программного обеспечения и установки новых программ лучше всего обратиться за помощью к IT аутсорсеру с опытом и знаниями по работе с конкретным ПО.',
                    },
                    {
                        titleResult: 'Техническая поддержка пользователей',
                        textResult:'По мере развития бизнеса возрастает и роль квалифицированной технической помощи пользователям в использовании оборудования, различных информационных систем \n' +
                            'и сервисов. Важно, чтобы эта помощь оказывалась квалифицированными специалистами, которые обладают нужными компетенциями и не отнимала много рабочего времени \n' +
                            'и ресурсов. Аутсорсинг IT выглядит наиболее оправданным способом обеспечения такой поддержки, так как силами внутреннего отдела информационных технологий достичь \n' +
                            'высокого качества и скорости технической поддержки пользователей будет затруднительно.',
                    },
                ],
                OutsourcingAdvantages: [
                    {
                        title: 'Опыт в IT - аутсорсинге более 15 лет',
                        description: 'Благодаря богатому опыту мы смогли эффективно организовать рабочий процесс и обеспечить высокое качество и скорость оказываемых услуг',
                        images: require('@/assets/icons/flame.svg'),
                    },
                    {
                        title: 'Команда экспертов',
                        description: 'В компании Partner трудятся профессионалы в различных отраслях IT, которые на своем участке ответственности смогут обеспечить решение проблем любой сложности',
                        images: require('@/assets/icons/layers.svg'),
                    },
                    {
                        title: 'Постоянная поддержка',
                        description: 'Специалисты первой линии поддержки всегда готовы отреагировать и решить ваш вопрос за минимально отведенное время, а если проблему не решить удаленно – мы приедем и устраним ее на месте',
                        images: require('@/assets/icons/good.svg'),
                    },
                    {
                        title: 'Собственные сервисы',
                        description: 'Наша компания предоставляет собственные сервисы по доступу к различным информационным системам, таким как 1С Предприятие. Вам не потребуется разворачивать и обслуживать свои серверы и содержать специалистов для их обслуживания',
                        images: require('@/assets/icons/star.svg'),
                    },
                    {
                        title: 'Сохранность данных',
                        description: 'При работе с нами резервная копия ваших данных регулярно снимается и хранится в надежно защищенном месте, чтобы в любой момент вы могли начать с точки восстановления, не теряя ценные данные',
                        images: require('@/assets/icons/clip.svg'),
                    },
                    {
                        title: 'Отвечаем деньгами',
                        description: 'Мы готовы в договоре обозначить денежную ответственность нашей компании за простой вашей информационной системы. Будьте уверены, что не потеряете деньги во время технических проблем',
                        images: require('@/assets/icons/piggy.svg'),
                    },
                ],
                plusPoints: [
                    {
                        textPlus: 'Платите только за услуги, которые используете',
                    },
                    {
                        textPlus: 'Большинство обращений выполняем удаленно,  по необходимости можно заказать выезд специалиста',
                    },
                    {
                        textPlus: 'Всегда на связи в рабочее время',
                    },
                    {
                        textPlus: 'Готовы отвечать за простой как деньгами так и своей репутацией',
                    },
                    {
                        textPlus: 'Не имеет значение сколько проблем возникнет одновременно. \n' +
                            'Штат наших специалистов готов решить ваши проблемы сразу',
                    },
                    {
                        textPlus: 'Наши специалисты регулярно проходят курсы обучения новым навыкам \n' +
                            'и подтверждают их на практике при работе с большим количеством \n' +
                            'информационных систем',
                    },
                ],
                minusPoints: [
                    {
                        textMinus:'Требует ежемесячной оплаты, даже если ничего не делает',
                    },
                    {
                        textMinus:'Нужно оборудовать рабочее место, а лучше отдельный кабинет',
                    },
                    {
                        textMinus:'Может заболеть, уйти в отпуск или неожиданно уволиться',
                    },
                    {
                        textMinus:'Не несет ответственности за простой',
                    },
                    {
                        textMinus:'Отсутствие многозадачности. Так как одновременно может возникнуть \n' +
                            'несколько проблем, времени на их решение уйдет много',
                    },
                    {
                        textMinus:'Не сможет должным образом развиваться в небольшой компании',
                    },
                ],
                options: {
                    dotSize: 21,
                    height: 5,
                },
                ServicesPricesContent: [
                    {
                        title: 'Комплексное обслуживание по з/п. тариф: Предприниматель (льготный)',
                        sum: 'от 5500 ₽ / квартал',
                        text: 'Включает заполнение и сдачу регламентированной отчетности в ИФНС, ПФР, ФСС, формирование ПП',
                    },
                    {
                        title: 'Комплексное обслуживание по з/п. тариф: Предприниматель',
                        sum: 'от 10 000 ₽ / месяц',
                        text: 'Включает заполнение и сдачу регламентированной отчетности в ИФНС, ПФР, ФСС, формирование ПП, подготовка 2-х платежных ведомостей, табель учета рабочего времени, расчет больничных листов по временной нетрудоспособности, расчет пособия по беременности и родам, расчет отпусков',
                    },
                    {
                        title: 'Комплексное обслуживание по бухгалтерии',
                        sum: 'от 10 000 ₽ / месяц',
                        text: 'Включает подготовку платежных поручений, получение электронной выписки: Оформление первичных документов (счетов, накладных, счетов-фактур). Ввод первичных документов в программу бухгалтерского учета. Формирование книги учета доходов и расходов. Составление и представление квартальной и годовой отчетности и налоговых деклараций в составе и по формам в соответствии с действующим законодательством в ИФНС, ФСС, ПФР',
                    },
                ],
                servicesLinks: [
                    {
                        link: 'Автоматизация бизнеса',
                        id: 'business-automation',
                    },
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
                        link: 'Продажа, внедрение и поддержка программ «1С»',
                        id: 'software-products',
                    },
                    {
                        link: 'Продажа и настройка торгового оборудования',
                        id: 'shop-equipment',
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
  }
  .text {
    color: $color-text;
  }
  .hint {
    font-weight: bold;
    color: #EC615B;
  }
  .blocks-grid__container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, auto);
    grid-column-gap: 0px;
    grid-row-gap: 40px;
  }
  .get-results__wrapper {
    padding: 40px;
    box-sizing: border-box;
    border: 2px solid #e0e0e0;
    border-radius: 30px;
  }
  .get-results-title  {
    font-size:  $additional-fontsize;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .hint-text {
    color: #5222d0;
    font-weight: bold;
    cursor: pointer;
    font-size: $additional-fontsize;
      &:hover {
        color: #5b25eb;
      }
  }
  .point-list__wrapper {
    padding-left: 30px;
  }
  .point-list__block {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    .point-list__text {
      font-size: $additional-fontsize;
      font-weight: bold;
    }
    .point-list__image {
      width: 3vw;
      margin-right: 15px;
    }
  }
  .advantages__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 60px;
    grid-row-gap: 20px;
    margin-top: 50px;
  }
  .versus-main__container {
    display: flex;
  }
  .indent-left {
    margin-left: 100px;
  }
  .versus-title {
    font-size: $subtitle-fontsize;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .versus-points {
    display: flex;
    align-items: center;
    font-size: $additional-fontsize;
    margin-bottom: 30px;
  }
  .versus-icons {
    width: 20px;
    margin-right: 10px;
  }
  .radio-button__container {
    font-size: $buttons-inputs-fontsize;
    font-family: SourceSansPro;
    color: #222222;
    margin-bottom: 30px;
    .radio-button__block {
      margin-bottom: 10px;
    }
  }
  .system-title {
    font-size: $additional-fontsize;
    font-weight: bold;
    color: #5222d0;
    margin-bottom: 15px;
  }
  .vue-slider {
    width: 500px;
  }
  .prices__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 0px;
    margin-top: 50px;
  }
  .special-prices__container {
    display: flex;
    align-items: center;
    width: fit-content;
    margin-top: 30px;
    padding: 40px;
    box-sizing: border-box;
    background-color: #ffffff;
    box-shadow: 0px 1px 6px 0px rgba(32, 33, 36, 0.2);
    transition: all 0.2s ease-out;
    border-radius: 30px;
    &:hover {
      box-shadow:
              2px 2px #5222d0,
              3px 3px #5222d0,
              4px 4px #5222d0,
              5px 5px #5222d0,
              6px 6px #5222d0,
              7px 7px #5222d0,
              8px 8px #5222d0;
      -webkit-transform: translateX(-7px);
      transform: translateX(-7px);
      cursor: pointer;
      transition: all 0.2s ease-out;
    }
  }
  .special-prices__text {
    font-size: $additional-fontsize;
    font-weight: bold;
    & span {
      color: #5222d0;
    }
  }
  .prices-feedback__button {
    @extend %buttons;
    margin: 0 0 0 30px;
  }
  .services__banner__container {
    display: flex;
    align-items: center;
    @extend %bannerBackground;
    margin: 0 0 100px;
  }
  .service-offers__text {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: $additional-fontsize;
    color: #222222;
    & img {
      width: 3vw;
      margin-right: 15px;
    }
  }
  .services-button {
    @extend %buttons;
    margin-left: auto;
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

<!--Стили для выплывающей подсказки-->
<style>
  .tooltip {
    font-size: 18px;
    text-align: center;
    font-family: SourceSansPro;
    width: 25%;
  }
</style>