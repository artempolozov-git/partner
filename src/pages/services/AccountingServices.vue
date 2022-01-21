<template>
  <div class="page-main__container">
    <h2 class="title__pages">Бухгалтерское обслуживание</h2>

    <div class="page__banner__container">
      <div class="banner-title__wrapper">
        <h2 class="title">Мы ведем бухгалтерию – вы ведете бизнес!</h2>
        <div class="description">Доверьте рутинную работу по ведению бухгалтерии профессионалам,
          а свои силы и ресурсы направьте на развитие вашего дела!</div>
        <div class="feedback-button" @click="FeedbackForm">
          <span>Оставить заявку</span>
        </div>
      </div>
      <div class="image"><img src="@/assets/images/accountant.svg"></div>
    </div>

    <div class="text__container">
      <span class="subtitle">Справка:</span>
      <p class="text"><b>Аутсорсинг бухгалтерии</b> – это частный случай аутсорсинга бизнес процессов, который подразумевает вынесение функций, связанных с организацией, ведением
        бухгалтерского учёта и составлением отчётности на предприятии за пределы компании и передачу их для исполнения специализирующейся на этом организации,
        аутсорсеру.
      </p>
      <p class="text"><span class="hint">✱ </span>Аутсорсинг бухгалтерского учета в нынешнем веке закрепился как одна из самых востребованный услуг на мировом рынке аутсорсинга. Согласно исследованию
        «Об эффективности отечественной и зарубежной предпринимательской деятельности на основе аутсорсинга» от консалтингового агентства «Yankelovich Partners»,
        в России менее 20% компаний пользуются услугами аутсорсинга бухгалтерии, когда, к примеру, в США эта цифра равна 92%, а в западной Европе 86%.
        Изучая успешный зарубежный опыт, мы можем с уверенностью сказать, что будущее бухгалтерии на отечественном рынке – это полный его аутсорсинг. </p>
    </div>

    <div class="section__container">
      <h2 class="title__section">Кому подойдет?</h2>
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
      <h2 class="title__section">Что вы получите?</h2>
      <div class="blocks-grid__container">
        <div class="get-results__wrapper" v-for="(result, resultContent) in getResultContent" :key="resultContent">
          <div class="get-results-title">{{result.titleResult}}</div>
          <div class="text">{{result.textResult}}</div>
        </div>
      </div>
    </div>

    <div class="section__container">
      <h2 class="title__section">Почему Partner?</h2>
      <div class="advantages__grid">
        <advantages v-for="(advantage, Advantages) in accountingAdvantages"
                    :key="Advantages"
                    :title="advantage.title"
                    :description="advantage.description"
                    :images="advantage.images"></advantages>
      </div>
    </div>

    <div class="section__container">
      <h2 class="title__section">Как это работает?</h2>
      <div class="stages-work__container indent-bottom">
        <div class="stages-work__block">
          <div class="stages-number">1</div>
          <div class="stages-text">Мы обсуждаем все особенности вашего
            бизнеса <br>и согласовываем все нюансы по ведению
            бухгалтерии и заработной платы</div>
        </div>
        <img class="arrow-icon" src="@/assets/icons/arrow.svg">
        <div class="stages-work__block">
          <div class="stages-number">2</div>
          <div class="stages-text">Мы заключаем договор на условиях,
            которые согласовали ранее</div>
        </div>
        <img class="arrow-icon" src="@/assets/icons/arrow.svg">
        <div class="stages-work__block">
          <div class="stages-number">3</div>
          <div class="stages-text">За вашей компанией закрепляется
            команда специалистов</div>
        </div>
    </div>

      <div class="stages-work__container">
        <div class="stages-work__block">
          <div class="stages-number">4</div>
          <div class="stages-text">Вы высылаете нам первичные
            и иные документы в мессенджере</div>
        </div>
        <img class="arrow-icon" src="@/assets/icons/arrow.svg">
        <div class="stages-work__block">
          <div class="stages-number">5</div>
          <div class="stages-text">Мы отражаем все в учетной
            системе с учетом всех особенностей
            вашего бизнеса</div>
        </div>
        <img class="arrow-icon" src="@/assets/icons/arrow.svg">
        <div class="stages-work__block">
          <div class="stages-number">6</div>
          <div class="stages-text">Когда приходит время –
            мы сдаем месячные, квартальные
            и годовые отчеты</div>
        </div>
        <img class="arrow-icon" src="@/assets/icons/arrow.svg">
        <div class="stages-work__block">
          <div class="stages-number">7</div>
          <div class="stages-text">Вам остается только все контролировать
            и свободное время направлять
            на развитие вашего дела</div>
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
        <div class="special-prices__text">Комплексное предложение: <span>от 11 357р. / месяц</span></div>
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
          <span>Вы можете скачать PDF - таблицу с информацией о предоставлении разовых бухгалтерских услуг</span>
        </div>
      </div>
      <div class="services-download__button">
        <span>Скачать</span>
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
    import Advantages from "@/components/Advantages";
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/default.css'
    import ServicesPrices from "@/components/ServicesPrices";
    import OtherServices from "@/components/OtherServices";
    export default {
        name: "AccountingServices",
        components: {
            OtherServices,
            ServicesPrices,
            Advantages,
            VueSlider,
        },
        methods: {
            FeedbackForm() {
                let form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            },
        },
        data () {
          return {
              accountingAreasContent: [
                  {
                      titleAreas: 'ИП и Микропредприятия',
                      textAreas: 'Нанимать штатного бухгалтера при такой форме бизнеса не имеет смысла, так как он не будет нагружен на 100%, а его труд придется оплачивать полноценно. Есть второй вариант – сторонний бухгалтер на удаленке, но приемлемого качества обслуживания от него едва ли стоит ожидать.',
                  },
                  {
                      titleAreas: 'Малые и средние компании',
                      textAreas: 'Бухгалтерия на аутсорсе для таких предприятий – хороший способ оптимизировать расходы и сэкономить средства на содержании собственного штата бухгалтерии, которая в определенные моменты может быть сильно загружена, а в определенные – простаивать.',
                  },
                  {
                      titleAreas: 'Крупный бизнес',
                      textAreas: 'Для больших предприятий и холдингов распространена практика передачи участков бухгалтерии на аутсорс. Чаще всего передаются наиболее рутинные и трудозатратные. Это позволяет сэкономить на инфраструктуре и снизить операционные издержки.',
                  },
                  {
                      titleAreas: 'Компании со специфической деятельностью',
                      textAreas: 'Иногда, для ведения бухгалтерии предприятия, нужны специфические навыки и знания тонкостей учета и сопутствующего законодательства. Найти специалиста под такие требования очень сложно. В компаниях аутсорсерах всегда есть узкие специалисты с опытом работы в определенных отраслях.',
                  },
                  {
                      titleAreas: 'Сезонный бизнес',
                      textAreas: 'Компаниям, деятельность которых имеет сезонный характер, просто невыгодно содержать штатную бухгалтерию вне сезона работы. Поэтому в таких компаниях аутсорсинг бухгалтерии часто просто необходим. В число таких предприятий входят агропромышленные производства, гостиничный и курортный бизнес.',
                  },
                  {
                      titleAreas: 'Иностранный бизнес',
                      textAreas: 'Во многих странах аутсорсинг бухгалтерии является привычным явлением. Его преимущества там оценили и просчитали задолго до нас. Поэтому, при открытии филиалов иностранных компаний, бухгалтерия на аутсорсе – привычный ход. Тем более, иностранным бизнесменам проще доверить бухгалтерский учет знающим людям, чем вникать в тонкости российского законодательства.',
                  },
              ],
              getResultContent: [
                  {
                      titleResult: 'Экономия в сравнении со штатным бухгалтером',
                      textResult:'Стоимость найма штатного бухгалтера всегда выше, чем ведение бухгалтерии на аутсорсе, ведь штатному бухгалтеру недостаточно платить заработную плату.\n' +
                          '            Добавьте к ней НДФЛ, страховые взносы, стоимость программных продуктов 1С, лицензии доступа к нормативно-правовым базам, стоимость оборудования\n' +
                          '            рабочего места, и при этом не забудьте про отпуск и больничный. При аутсорсинге бухгалтерии эти затраты берет на себя аутсорсинговая компания.\n' +
                          '            Также, расходы по договору с аутсорсером можно списать на затраты, уменьшив при этом налоговую базу.',
                  },
                  {
                      titleResult: 'Рациональность трат',
                      textResult:'Если бухгалтерским обслуживанием в вашей компании занимается аутсорсинговое агентство, вы платите только за услуги, которые вам оказывают, когда \n' +
                          'при ведении бухгалтерии штатным сотрудником он большую часть рабочего времени может быть не загружен работой.',
                  },
                  {
                      titleResult: 'Беспрерывность работы',
                      textResult:'Аутсорсинговая компания не уйдет на больничный, в оплачиваемый отпуск или отпуск по уходу за ребенком. Бухгалтерский учет вашего бизнеса не \n' +
                          'остановится ни по каким непредвиденным причинам. Отсюда всегда вовремя сданная отчетность и отсутствие проблем с органами государственной власти, \n' +
                          'а также всегда актуальная информация о положении дел в вашей компании.',
                  },
                  {
                      titleResult: 'Ответственность за результат',
                      textResult:'Бухгалтерский учет довольно сложная и требовательная к компетенции бухгалтера дисциплина, а ошибки иногда совершают все. В случае ведения \n' +
                          'бухгалтерии на аутсорсе ответственность за ошибки, а с ними и за корректность их исправления несет компания аутсорсер.',
                  },
                  {
                      titleResult: 'Сохранность и конфиденциальность информации',
                      textResult:'В текущий век цифровых технологий задача сохранности и конфиденциальности информации постепенно выходит на первый план. Обеспечить выполнение \n' +
                          'этих задач с каждым годом становится все сложнее и дороже. При аутсорсинге бухгалтерии вы не должны беспокоится, так как эта задача и ответственность \n' +
                          'за ее выполнение полностью лежит на плечах аутсорсера, который в силу профиля своей работы обеспечит должное качество.',
                  },
                  {
                      titleResult: 'Перенимайте тренды лучших',
                      textResult:'В 21-м веке тренд на использование аутсорсинга и его безоговорочные преимущества открыли для себя множество крупных и прибыльных компаний. \n' +
                          'Услуга, которая на западе получила популярность еще в конце 1990-х годов постепенно завоевывает и рынок России. Чем раньше вы осознаете пользу \n' +
                          'от аутсорсинга бухгалтерии, тем раньше сможете направить освободившиеся ресурсы на развитие вашей компании.',
                  },
              ],
              accountingAdvantages: [
                  {
                      title: 'Высокий профессионализм',
                      description: 'Каждый наш сотрудник имеет большой бухгалтерский стаж, а их функционал узко регламентирован, что позволяет отлично разбираться в своей работе.',
                      images: require('@/assets/icons/flame.svg'),
                  },
                  {
                      title: 'Богатый опыт',
                      description: 'Мы на рынке более 15 лет, и за это время смогли качественно оптимизировать наш рабочий процесс, а также отработать любые сложные ситуации в бухучете.',
                      images: require('@/assets/icons/star.svg'),
                  },
                  {
                      title: 'Полезные рекомендации',
                      description: 'Мы не только бухгалтерия, но и консалтинговое агентство. Помимо качественно выполненных услуг по ведению вашей бухгалтерии мы дадим релевантные рекомендации по ведению вашего бизнеса.',
                      images: require('@/assets/icons/layers.svg'),
                  },
                  {
                      title: 'Ваша информация в надежных руках',
                      description: 'В штате нашей компании присутствуют IT-специалисты, которые умеют строить нагруженные и высоко доступные информационные системы, обеспечивающие сохранность и конфиденциальность вашей информации.',
                      images: require('@/assets/icons/clip.svg'),
                  },
              ],
              options: {
                  dotSize: 21,
                  height: 5,
              },
              ServicesPricesContent: [
                  {
                      title: 'Комплексное обслуживание по з/п. тариф: Предприниматель (льготный)',
                      sum: 'от 5500р. / квартал',
                      text: 'Включает заполнение и сдачу регламентированной отчетности в ИФНС, ПФР, ФСС, формирование ПП',
                  },
                  {
                      title: 'Комплексное обслуживание по з/п. тариф: Предприниматель',
                      sum: 'от 10 000р. / месяц',
                      text: 'Включает заполнение и сдачу регламентированной отчетности в ИФНС, ПФР, ФСС, формирование ПП, подготовка 2-х платежных ведомостей, табель учета рабочего времени, расчет больничных листов по временной нетрудоспособности, расчет пособия по беременности и родам, расчет отпусков',
                  },
                  {
                      title: 'Комплексное обслуживание по бухгалтерии',
                      sum: 'от 10 000р. / месяц',
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
    width: 40%;
    margin-left: 100px;
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
        color: #0086C9;
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
  .get-results__wrapper {
    padding: 40px;
    box-sizing: border-box;
    border: 2px solid #cdcdcd;
    border-radius: 30px;
  }
  .get-results-title  {
    font-size:  $additional-fontsize;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .advantages__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 60px;
    grid-row-gap: 30px;
    margin-top: 50px;
  }
  .stages-work__container {
    display: flex;
  }
  .indent-bottom {
    margin-bottom: 50px;
  }
  .stages-number {
    font-size: 3vw;
    color: #5222d0;
    font-weight: bold;
    text-align: center;
  }
  .stages-text {
    text-align: center;
    color: $color-text;
  }
  .arrow-icon {
    width: 1.5vw;
    margin: 0 30px;
    transform: rotate(-90deg);
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
    color: #0086C9;
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
    border: 2px solid #cdcdcd;
    border-radius: 30px;
      &:hover {
        box-shadow: none;
        border: 2px solid #5222d0;
      }
  }
  .special-prices__text {
    font-size: $subtitle-fontsize;
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
  .pdf-images {
    width: 3vw;
  }
  .service-offers__text {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: $additional-fontsize;
    color: $color-text;
     & img {
       width: 4vw;
       margin-right: 15px;
     }
  }
  .services-download__button {
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