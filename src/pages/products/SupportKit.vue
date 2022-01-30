<template>
  <div class="page-main__container">
    <div class="title__wrapper">
      <h2 class="title__pages">1С:Комплект поддержки</h2>
    </div>

    <div class="slogan">Полный комплекс поддержки для комфортной работы в вашей программе 1С!</div>
    <div class="text__container">
      <span class="subtitle">Справка:</span>
      <p class="text"><strong>1С:Комплект поддержки (ИТС)</strong> – это договор комплексной поддержки, который включает в себя услуги и сервисы, которые упрощают и ускоряют работу в вашей
        программе «1С». Заключая с нами договор ИТС, вы получаете:</p>
      <ul class="list__block">
        <li class="list__text"><span>Легальные обновления программных продуктов 1С;</span></li>
        <li class="list__text"><span>Профессиональную Информационную систему 1С:ИТС;</span></li>
        <li class="list__text"><span>Cервисные и консультационные услуги от Partner фирмы "1С";</span></li>
        <li class="list__text"><span>Cервисы 1С , входящие в ваш тариф ИТС.</span></li>
      </ul>
      <p class="text"><span class="hint">✱ </span>С заключенным договором «1С:Комплект поддержки» вы сможете поддерживать ваши информационные базы «1С» в актуальном состоянии, что особенно важно
        в продуктах, связанных с текущим законодательством, а так же сможете получить исчерпывающие консультации экспертов (в объеме, зависящем от типа договора КП)
        при сложностях работы в «1С».</p>
    </div>

    <div class="section__container">
      <h2 class="title__section">Возможности:</h2>
      <div class="features-information__block indent-bottom">
        <div class="subtitle"><span>1.</span> Информационная система 1С:ИТС</div>
        <p class="text">Информационная система 1С:ИТС позволяет правильно выстраивать бухгалтерский, налоговый и кадровый учет, вовремя и без ошибок сдавать отчетность
          и платить налоги и взносы. В информационной системе 1С:ИТС представлены новости, комментарии и консультации специалистов по вопросам бухгалтерского,
          налогового и кадрового учета, рекомендации по налогообложению хозяйственных операций, пошаговые инструкции по их отражению в программе, инструкции
          по составлению бухгалтерской, налоговой отчетности и отчетности по страховым взносам и отправке отчетности в контролирующие органы в электронном
          виде прямо из 1С:Предприяти</p>
      </div>
      <div class="features-information__block indent-bottom">
        <div class="subtitle"><span>2.</span> Обновления программ</div>
        <p class="text"><b>Подсистема «Обновления программ» позволяет пользователю программ 1С:</b></p>
        <ul class="list__block">
          <li class="list__text"><span>Настроить автоматическое получение обновлений используемой конфигурации и платформы программы 1С:Предприятие.</span></li>
          <li class="list__text"><span>Получить информацию о плановом графике выхода новых версий прикладных программ и технологической платформы; получить информацию о плановых изменениях функционала, которые будут сделаны в новой версии программы;</span></li>
          <li class="list__text"><span>Узнать какая версия программного продукта актуальна на текущий момент, скачать дистрибутивы для обновления программ 1С;</span></li>
          <li class="list__text"><span>Получить информацию о списке ошибок, которые зарегистрированы и будут исправляться в следующих версиях программ;</span></li>
          <li class="list__text"><span>Скачать разные дополнительные файлы, которые рекомендованы разработчиками программных продуктов для использования.</span></li>
        </ul>
      </div>
      <div class="features-information__block">
        <div class="subtitle"><span>3.</span> Сервисы 1С</div>
        <p class="text">Облачные сервисы 1С – это дополнительные функциональные возможности программ 1С, которые помогают эффективно работать с программными
          продуктами 1С и создают комфортные условия труда для пользователей 1С".</p>
        <p class="text"><b>С помощью сервисов можно:</b></p>
        <ul class="list__block">
          <li class="list__text"><span>Сдавать электронную отчетность в контролирующие органы напрямую из программ 1С;</span></li>
          <li class="list__text"><span>Автоматически заполнять реквизиты контрагентов в программе по ИНН;</span></li>
          <li class="list__text"><span>Отправлять и получать электронные счета-фактуры и другие документы;</span></li>
          <li class="list__text"><span>Организовать безопасный доступ к базе 1С через интернет;</span></li>
          <li class="list__text"><span>Обеспечить надежное хранение учетных баз данных и защитить их от утери;</span></li>
          <li class="list__text"><span>Отправить из программы 1С заявление на получение электронной подписи;</span></li>
          <li class="list__text"><span>Проводить автоматическую сверку счетов-фактур с контрагентами;</span></li>
          <li class="list__text"><span>Отправлять платежи в банк и получать выписки по расчетным счетам непосредственно из программ «1С», без переключения в систему «Клиент-банк»;</span></li>
          <li class="list__text"><span>Упростить ввод номенклатуры в справочники программы и многое другое.</span></li>
        </ul>
      </div>
    </div>

    <div class="section__container">
      <h2 class="title__section">Почему Partner?</h2>
      <div class="advantages__grid">
        <advantages v-for="(advantage, Advantages) in supportKitAdvantages"
                    :key="Advantages"
                    :title="advantage.titleAdvantages"
                    :description="advantage.description"
                    :images="advantage.images"></advantages>
      </div>
    </div>

    <div class="section__container">
      <h2 class="title__section">Популярные тарифы:</h2>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="(prices, priceBlock) in pricesInformation" :key="priceBlock">
          <div class="prices__block">
            <div class="prices-title">{{prices.title}}</div>
            <div class="price">{{prices.sum}}</div>
            <div class="prices__text-filling">{{prices.text}}</div>
            <div class="feedback-button" @click="FeedbackForm">
              <span>Оставить заявку</span>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <div class="buttons__container">
        <div class="special-prices__container">
          <div class="special-prices__text"><span>Все цены на тарифы</span> 1С:КП ПРОФ и 1С:КП Базовый</div>
          <div class="prices-feedback__button">Смотреть</div>
        </div>
        <div class="special-prices__container">
          <div class="special-prices__text"><span>Сравнение тарифов</span> 1С:КП ПРОФ и 1С:КП Базовый </div>
          <div class="prices-feedback__button">Смотреть</div>
        </div>
      </div>
    </div>

    <div class="section__container">
      <h2 class="title__section">Другие тарифы 1С:КП</h2>
      <div class="rates-information__block rates-indent-bottom">
        <div class="subtitle">1С:КП Ритейл</div>
        <p class="text">Доступ к обновлениям и минимально необходимый набор сервисов для исполнения требования законодательства в сфере розничной торговли и поддержки продуктов 1С
          для компаний, использующих профессиональные версии программ 1С для ведения учета продаж.</p>
        <div class="view-more" @click="FeedbackForm">Подробнее</div>
          <div class="table">
            <div class="table__container">
              <table class="table">
                <thead>
                <tr>
                  <th>Тип</th>
                  <th>6 мес.</th>
                  <th>12 мес.</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, table ) in retailTable" :key="table">
                  <td>{{item.named}}</td>
                  <td>{{item.sixmonths}}</td>
                  <td>{{item.twelvemonths}}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
      </div>

      <div class="rates-information__block rates-indent-bottom">
        <div class="subtitle">1С:КП Ритейл ПРОФ</div>
        <p class="text">Пакет сервисов и услуг для исполнения требований современного российского законодательства в сфере розничной торговли, повышения эффективности бизнеса
          и технической поддержки программ 1С по выгодной цене.</p>
        <div class="view-more" @click="FeedbackForm">Подробнее</div>
        <div class="table">
          <div class="table__container">
            <table class="table">
              <thead>
              <tr>
                <th>Тип</th>
                <th>3 мес.</th>
                <th>6 мес.</th>
                <th>12 мес.</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, table ) in retailProfTable" :key="table">
                <td>{{item.named}}</td>
                <td>{{item.threemonths}}</td>
                <td>{{item.sixmonths}}</td>
                <td>{{item.twelvemonths}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="rates-information__block rates-indent-bottom">
        <div class="subtitle">1С:КП Медицина</div>
        <p class="text">Доступ к обновлениям, консультациям, сервисам 1С:ИТС для медицинских организаций различных организационно-правовых форм: больниц, поликлиник, диспансеров,
          аптек, клинических лабораторий. Включает услуги партнеров по регулярному обновлению программных продуктов «1С:Предприятие» и информационно-методическую
          поддержку. В состав пакета сопровождения включен неограниченный доступ к справочнику лекарственных препаратов в сервисе 1С:Номенклатура.</p>
        <div class="view-more" @click="FeedbackForm">Подробнее</div>
        <div class="table">
          <div class="table__container">
            <table class="table">
              <thead>
              <tr>
                <th>Тип</th>
                <th>6 мес.</th>
                <th>12 мес.</th>
                <th>24 мес.</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, table ) in medicineTable" :key="table">
                <td>{{item.named}}</td>
                <td>{{item.sixmonths}}</td>
                <td>{{item.twelvemonths}}</td>
                <td>{{item.twentyfourmonths}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="rates-information__block rates-indent-bottom">
        <div class="subtitle">1С:КП Строительство</div>
        <p class="text">Доступ к обновлениям, консультациям, сервисам 1С:ИТС для организаций строительной отрасли и ЖКХ. Включает услуги партнеров по регулярному обновлению
          программных продуктов «1С:Предприятие» и информационно-методическую поддержку сметчиков, прорабов и мастеров, юристов, бухгалтеров, кадровиков,
          руководителей и IT-специалистов.</p>
        <div class="view-more" @click="FeedbackForm">Подробнее</div>
        <div class="table">
          <div class="table__container">
            <table class="table">
              <thead>
              <tr>
                <th>Тип</th>
                <th>3 мес.</th>
                <th>6 мес.</th>
                <th>12 мес.</th>
                <th>24 мес.</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(item, table ) in buildingTable" :key="table">
                <td>{{item.named}}</td>
                <td>{{item.threemonths}}</td>
                <td>{{item.sixmonths}}</td>
                <td>{{item.twelvemonths}}</td>
                <td>{{item.twentyfourmonths}}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="rates-information__block rates-indent-bottom">
        <div class="subtitle">1С:КП Отраслевой</div>
        <p class="text">Доступ к обновлениям, консультациям, сервисам 1С:ИТС для государственных учреждений в Централизованных информационных системах — ЦИС (Централизованных
          бухгалтериях, Общих центрах обслуживания).</p>
        <p class="text"><b>Стоимость 1С:КП ЦГУ определяется исходя из количества учреждений на сопровождении, количества лицензий «1С:Предприятие»,
          срока сопровождения (от 1 месяца до 1 года).</b></p>
        <div class="view-more" @click="FeedbackForm">Подробнее</div>
      </div>

      <div class="rates-information__block">
        <div class="subtitle">1С:КП для централизованных государственных учреждений (1С:КП ЦГУ)</div>
        <p class="text">Доступ к обновлениям, консультациям, сервисам 1С:ИТС для государственных учреждений в Централизованных информационных системах — ЦИС (Централизованных
          бухгалтериях, Общих центрах обслуживания).</p>
        <p class="text"><b>Стоимость 1С:КП ЦГУ определяется исходя из количества учреждений на сопровождении, количества лицензий «1С:Предприятие»,
          срока сопровождения (от 1 месяца до 1 года).</b></p>
        <div class="view-more" @click="FeedbackForm">Подробнее</div>
      </div>
    </div>

    <div class="section__container-links">
      <h2 class="title__section">Смотрите также:</h2>
      <div class="other-links__wrapper indent-bottom" v-on:click="goToPage('software-products')">
        <span>Программные продукты 1С</span>
        <img class="links-arrow__icon" src="@/assets/icons/links-arrow.svg">
      </div>
      <div class="other-links__wrapper indent-bottom" v-on:click="goToPage('services-1C')">
        <span>Сервисы 1С</span>
        <img class="links-arrow__icon" src="@/assets/icons/links-arrow.svg">
      </div>
    </div>
  </div>
</template>

<script>
    import Advantages from "@/components/Advantages";
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        name: "SupportKit",
        components: {
            Advantages,
            Swiper,
            SwiperSlide,
        },
        data () {
            return {
                supportKitAdvantages: [
                    {
                        titleAdvantages: 'Богатый опыт',
                        description: 'Мы являемся партнером компании «1С» и оказываем услуги по договорам 1С:КП уже более 15 лет.',
                        images: require('@/assets/icons/star.svg'),
                    },
                    {
                        titleAdvantages: 'Компетенция',
                        description: 'Наша компания обладает практически всеми ключевыми статусами компании «1С».',
                        images: require('@/assets/icons/clip.svg'),
                    },
                    {
                        titleAdvantages: 'Получите исчерпывающие консультации',
                        description: 'Наши сотрудники постоянно совершенствуют свои знания, а также обладают сертификатами от компании «1С» различных уровней.',
                        images: require('@/assets/icons/flash.svg'),
                    },
                    {
                        titleAdvantages: 'Комплексный подход',
                        description: 'Мы в Partner придерживаемся комплексного подхода к автоматизации и будем вас сопровождать как в процессе заключения договора «1С:КП», так и в сопутствующих вопросах, связанных с 1С.',
                        images: require('@/assets/icons/layers.svg'),
                    },
                ],
                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                    centeredSlides: true,
                    grabCursor: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                },
                pricesInformation: [
                    {
                        title: '1С:КП ПРОФ ',
                        sum: 'от 33 816 ₽ / год',
                        text:'Наиболее популярный тариф для бухгалтеров, кадровиков и руководителей, дает право полного доступа к разделам Информационной системы 1С, обновлениям программ 1С:Предприятие, зарегистрированных в личном кабинете пользователя на Портале 1С:ИТС, облачным сервисам , консультациям экспертов компании Partner.',
                    },
                    {
                        title: '1С:КП Базовый',
                        sum: 'от 14 280 ₽ / год',
                        text:'Тариф для технических специалистов, предоставляет доступ к разделам технической поддержки информационной системы 1С:ИТС, документации, обновлениям программ 1С:Предприятие, зарегистрированных в личном кабинете пользователя на Портале 1С:ИТС',
                    },
                    {
                        title: '1С:КП ГУ ПРОФ',
                        sum: 'от 33 816  ₽ / год',
                        text:'Разработан для автономных, бюджетных и казенных учреждений , дает право полного доступа к разделам Информационной системы 1С, обновлениям программ 1С:Предприятие, зарегистрированных в личном кабинете пользователя на Портале 1С:ИТС, облачным сервисам , консультациям экспертов компании Partner.',
                    },
                    {
                        title: '1С:КП ГУ Базовый ',
                        sum: 'от 16 248 ₽ / год',
                        text:'Разработан для автономных, бюджетных и казенных учреждений . Предоставляет доступ к разделам технической поддержки информационной системы 1С:ИТС, документации, обновлениям программ 1С:Предприятие, зарегистрированных в личном кабинете пользователя на Портале 1С:ИТС.',
                    },
                ],
                retailTable: [
                    {
                        named: 'Базовая цена',
                        sixmonths: '10 806 ₽',
                        twelvemonths: '20 688 ₽',
                    },
                    {
                        named: 'Льготная цена (при непрерывном продлении договора 1С:КП)',
                        sixmonths: '9 006 ₽',
                        twelvemonths: '17 232 ₽',
                    },
                ],
                retailProfTable: [
                    {
                        named: 'Базовая цена',
                        threemonths: '12 339 ₽',
                        sixmonths: '23 820 ₽',
                        twelvemonths: '45 588 ₽',
                    },
                    {
                        named: 'Льготная цена (при непрерывном продлении договора 1С:КП)',
                        threemonths: '10 284 ₽',
                        sixmonths: '19 842 ₽',
                        twelvemonths: '37 980 ₽',
                    },
                ],
                medicineTable: [
                    {
                        named: 'Базовая цена',
                        sixmonths: '23 262 ₽',
                        twelvemonths: '44 652 ₽',
                        twentyfourmonths: '-',
                    },
                    {
                        named: 'Льготная цена (при непрерывном продлении договора 1С:КП)',
                        sixmonths: '19 386 ₽',
                        twelvemonths: '37 212 ₽',
                        twentyfourmonths: '66 982 ₽',
                    },
                ],
                buildingTable: [
                    {
                        named: 'Базовая цена',
                        threemonths: '15 087 ₽',
                        sixmonths: '29 082 ₽',
                        twelvemonths: '55 836 ₽',
                        twentyfourmonths: '-',
                    },
                    {
                        named: 'Льготная цена (при непрерывном продлении договора 1С:КП)',
                        threemonths: '12 573 ₽',
                        sixmonths: '24 234 ₽',
                        twelvemonths: '46 536 ₽',
                        twentyfourmonths: '83 765 ₽',
                    },
                ],
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
  .subtitle {
    font-size: $subtitle-fontsize;
    font-weight: bold;
      & span {
        color: #5222d0;
        font-size: 28px;
      }
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
  .list__block {
    & li {
      color: #5222d0;
    }
  }
  .list__text {
    margin-top: 20px;
    & span {
      color: $color-text;
    }
  }
  .indent-bottom {
    margin-bottom: 30px;
  }
  .rates-indent-bottom {
    margin-bottom: 70px;
  }
  .advantages__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 80px;
    grid-row-gap: 40px;
    margin-top: 50px;
  }
  .prices__block {
    height: fit-content;
    padding: 50px;
    box-sizing: border-box;
    border-radius: 30px;
    background-color: #ffffff;
    box-shadow: 0px 1px 6px 0px rgba(32, 33, 36, 0.2);
    transition: all 0.2s ease-out;
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
  .prices-title {
    text-align: center;
    font-size: $additional-fontsize;
    font-weight: bold;
    margin-bottom: 30px;
  }
  .price {
    text-align: center;
    font-size: $subtitle-fontsize;
    font-weight: bold;
    color: #5222d0;
    margin-bottom: 30px;
  }
  .prices__text-filling {
    margin: 20px 0 70px;
    & span {
      color: $color-text;
    }
  }
  .feedback-button {
    @extend %buttons;
    margin: auto;
  }
  .swiper-container {
    height: 550px;
  }
  .buttons__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 40px;
    grid-row-gap: 0px;
    margin-top: 50px;
  }
  .special-prices__container {
    display: flex;
    align-items: center;
    width: fit-content;
    padding: 30px;
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
    @extend %links;
    margin: 0 0 0 30px;
  }
  .view-more {
    margin-top: 30px;
    @extend %buttons;
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
</style>