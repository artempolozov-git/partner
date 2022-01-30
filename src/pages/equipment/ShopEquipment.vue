<template>
  <div class="page-main__container">
    <h2 class="title__pages">Торговое оборудование</h2>

    <div class="page__banner__container">
      <div class="banner-title__wrapper">
        <h2 class="title">Оборудование для автоматизации бизнеса в Partner</h2>
        <div class="advantages__content">
          <div class="advantages__wrapper">
            <img src="@/assets/icons/check.svg">
            <span>Торговое оборудование</span>
          </div>
          <div class="advantages__wrapper advantages__indent-top">
            <img src="@/assets/icons/check.svg">
            <span>Кассовое оборудование</span>
          </div>
          <div class="advantages__wrapper advantages__indent-top">
            <img src="@/assets/icons/check.svg">
            <span>Оборудование для организации склада </span>
          </div>
        </div>
        <div class="feedback-button" @click="FeedbackForm">
          <span>Оставить заявку</span>
        </div>
      </div>
      <div class="image"><img src="@/assets/images/equipment.svg"></div>
    </div>

    <div class="section__container">
      <h2 class="title__section">Почему Partner?</h2>
      <div class="advantages__grid">
       <advantages v-for="(advantage, Advantages) in shopEquipmentAdvantages"
                   :key="Advantages"
                   :title="advantage.titleAdvantages"
                   :description="advantage.description"
                   :images="advantage.images"></advantages>
      </div>
    </div>

    <div class="section__container">
      <h2 class="title__section">Мы предлагаем:</h2>
      <div class="equipment-grid__container">
        <equipment-services v-for="(product, equipmentProducts) in equipmentProducts"
                            :key="equipmentProducts"
                            :images="product.images"
                            :title="product.title"></equipment-services>
      </div>
    </div>

    <div class="services__banner__container">
      <div class="services-offers__container">
        <h2 class="title">Не нашли нужное вам оборудование? Свяжитесь с нами!</h2>
        <p class="text">Оставьте заявку и получите бесплатную экспертную консультацию по выбору торгового оборудования  для вашего бизнеса!</p>
      </div>
      <div class="services-button" @click="FeedbackForm">
        <span>Оставить заявку</span>
      </div>
    </div>

    <div class="section__container">
      <h2 class="title__section">Наши партнеры:</h2>
      <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(logo, partnerlogo) in partnerLogos" :key="partnerlogo">
        <img class="partner-logotype__slider" :src="logo.logotype">
      </swiper-slide>
      </swiper>
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
    import EquipmentServices from "@/components/EquipmentServices";
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import OtherServices from "@/components/OtherServices";
    export default {
        name: "ShopEquipment",
        components: {
            OtherServices,
            EquipmentServices,
            Advantages,
            Swiper,
            SwiperSlide,
        },
        data () {
            return {
                shopEquipmentAdvantages: [
                    {
                        titleAdvantages: 'Знания',
                        description: 'Мы всегда учимся чему-то новому, чтобы всегда быть в курсе новых технологий на рынке торгового оборудования.',
                        images: require('@/assets/icons/mind.svg'),
                    },
                    {
                        titleAdvantages: 'Богатый опыт',
                        description: 'Наша компания уже более 15 лет занимается продажей и настройкой торгового оборудования различного назначения.',
                        images: require('@/assets/icons/star.svg'),
                    },
                    {
                        titleAdvantages: 'Комплексный подход',
                        description: 'Наша компания придерживается комплексного подхода в вопросах автоматизации бизнеса. Мы готовы проконсультировать вас по всем сопутствующим вопросам.',
                        images: require('@/assets/icons/layers.svg'),
                    },
                    {
                        titleAdvantages: 'Партнеры',
                        description: 'Нашими партнерами являются многие производители торгового оборудования.',
                        images: require('@/assets/icons/clip.svg'),
                    },
                ],
                equipmentProducts: [
                    {
                        images: require('@/assets/images/equipments/drive.webp'),
                        title:'Фискальные накопители',
                        id: '',
                    },
                    {
                        images: require('@/assets/images/equipments/register.webp'),
                        title:'Контрольно-кассовая техника',
                        id: '',
                    },
                    {
                        images: require('@/assets/images/equipments/scanner.webp'),
                        title:'Сканеры штрихкодов',
                        id: '',
                    },
                    {
                        images: require('@/assets/images/equipments/scales.webp'),
                        title:'Торговые весы',
                        id: '',
                    },
                    {
                        images: require('@/assets/images/equipments/terminal.webp'),
                        title:'Терминалы сбора данных',
                        id: '',
                    },
                    {
                        images: require('@/assets/images/equipments/labelprinter.webp'),
                        title:'Принтеры этикеток',
                        id: '',
                    },
                ],
                swiperOption: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                    loop: true,
                    autoplay: {
                        delay: 1300,
                        disableOnInteraction: true,
                    },
                },
                partnerLogos: [
                    {
                        logotype: require('@/assets/images/partners/astral.webp'),
                    },
                    {
                        logotype: require('@/assets/images/partners/atol.webp'),
                    },
                    {
                        logotype: require('@/assets/images/partners/drimkas.webp'),
                    },
                    {
                        logotype: require('@/assets/images/partners/zebra.webp'),
                    },
                    {
                        logotype: require('@/assets/images/partners/honeywell.webp'),
                    },
                    {
                        logotype: require('@/assets/images/partners/rarus.webp'),
                    },
                    {
                        logotype: require('@/assets/images/partners/shtrih.webp'),
                    },
                    {
                        logotype: require('@/assets/images/partners/evotor.webp'),
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
                        link: 'Бухгалтерское обслуживание',
                        id: 'accounting-services',
                    },
                    {
                        link: 'Продажа, внедрение и поддержка программ «1С»',
                        id: 'software-products',
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
  .title__pages {
    @extend %titlePages;
  }
  .page__banner__container {
    display: flex;
    align-items: center;
    margin: 0 0 100px;
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
    margin-bottom: 30px;
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
  .advantages__content {
    color: $color-text;
    font-size:  $additional-fontsize;
    font-weight: bold;
  }
  .advantages__wrapper {
    display: flex;
    align-items: center;
  }
  .advantages__wrapper > img {
    width: 20px;
    margin-right: 10px;
  }
  .advantages__indent-top {
    margin-top: 20px;
  }
  .advantages__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 80px;
    grid-row-gap: 40px;
    margin-top: 50px;
  }
  .equipment-grid__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 50px;
    grid-row-gap: 50px;
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
  .partner-logotype__slider {
    display: flex;
    width: auto;
    height: 13vh;
    margin: auto;
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