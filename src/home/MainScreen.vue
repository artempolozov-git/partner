<template>
<div class="home__main-screen__container">
  <div class="main__block">
    <swiper class="swiper" :options="swiperOption">
      <!--Первый слайд-->
      <swiper-slide>
        <div class="title__container">
          <h2 class="title">Экспертные решения для управленческого учета!</h2>
          <div class="advantages__content">
            <div class="advantages__wrapper">
              <img src="@/assets/icons/check.svg">
              <span>Контроль и планирование</span>
            </div>
            <div class="advantages__wrapper advantages__indent-top">
              <img src="@/assets/icons/check.svg">
              <span>Повышение эффективности</span>
            </div>
            <div class="advantages__wrapper advantages__indent-top">
              <img src="@/assets/icons/check.svg">
              <span>Развитие и результат</span>
            </div>
          </div>
          <div class="feedback-button" @click="FeedbackForm">
            <span>Оставить заявку</span>
          </div>
        </div>
        <div class="image__block">
          <lottie-animation class="anim"
                            :loop="true"
                            :autoPlay="true"
                            ref="anim"
                            :animationData="require('@/assets/animation/solutions-main-page.json')"
          />
        </div>
      </swiper-slide>
      <!--Второй слайд-->
      <swiper-slide>
        <div class="title__container">
          <h2 class="title">Экспертные решения для управленческого учета!</h2>
          <div class="advantages__content">
            <div class="advantages__wrapper">
              <img src="@/assets/icons/check.svg">
              <span>Контроль и планирование</span>
            </div>
            <div class="advantages__wrapper advantages__indent-top">
              <img src="@/assets/icons/check.svg">
              <span>Повышение эффективности</span>
            </div>
            <div class="advantages__wrapper advantages__indent-top">
              <img src="@/assets/icons/check.svg">
              <span>Развитие и результат</span>
            </div>
          </div>
          <div class="feedback-button" @click="FeedbackForm">
            <span>Оставить заявку</span>
          </div>
        </div>
        <div class="image__block">
          <lottie-animation class="anim"
                            :loop="true"
                            :autoPlay="true"
                            ref="anim"
                            :animationData="require('@/assets/animation/solutions-main-page.json')"
          />
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</div>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import LottieAnimation from 'lottie-web-vue'
    export default {
        name: "MainScreen",
        components: {
            Swiper,
            SwiperSlide,
            LottieAnimation
        },
        data() {
            return {
                swiperOption: {
                    grabCursor: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    loop: false,
                    autoplay: {
                        delay: 5500,
                        disableOnInteraction: true,
                    },
                }
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
.home__main-screen__container {
  margin-top: 30px;
  box-sizing: border-box;
}
.main__block {
  @extend %bannerBackground;
}
.title {
  font-size: 60px;
  font-weight: bold;
  margin-bottom: 40px;
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
.image__block {
  width: 70%;
  margin-left: 100px;
}
.feedback-button {
  @extend %buttons;
  margin-top: 50px;
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}
@media only screen and (max-width : 1700px) {

}
</style>