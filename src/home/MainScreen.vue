<template>
<section class="home__main-screen__container">
  <div class="main__block">
    <swiper class="swiper" :options="swiperOption">
      <!--Первый слайд-->
      <swiper-slide>
        <div class="title__wrapper">
          <h1 class="title">Экспертные решения для управленческого учета</h1>
          <div class="advantages-description">
            <div>Контроль и планирование</div>
            <div class="advantage">Повышение эффективности</div>
            <div class="advantage">Развитие и результат</div>
          </div>
          <div class="feedback-button">
            <span>Оставить заявку</span>
          </div>
        </div>
        <div class="image__block">
          <img src="@/assets/images/robot-mainpage.svg">
        </div>
      </swiper-slide>
      <!--Второй слайд-->
      <swiper-slide>
        <div class="title__wrapper">
          <h1 class="title">Экспертные решения для управленческого учета</h1>
          <div class="advantages-description">
            <div>Контроль и планирование</div>
            <div class="advantage">Повышение эффективности</div>
            <div class="advantage">Развитие и результат</div>
          </div>
          <div class="feedback-button">
            <span>Оставить заявку</span>
          </div>
        </div>
        <div class="image__block">
          <img src="@/assets/images/robot-mainpage.svg">
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</section>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        name: "MainScreen",
        components: {
            Swiper,
            SwiperSlide,
        },
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    loop: true,
                    autoplay: {
                        delay: 3500,
                        disableOnInteraction: true,
                    },
                }
            }
        },
    }
</script>

<style scoped>
.home__main-screen__container {
  padding: 0 150px;
}
.main__block {
  padding: 50px 100px;
  box-sizing: border-box;
  border-radius: 30px;
  background: linear-gradient(45deg, rgba(32, 195, 208, 0.11) 10%, rgba(57, 116, 208, 0.11) 64%, rgba(82, 34, 208, 0.11) 100%);
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  font-size: 3vw;
  font-family: RobotoSlab;
  font-weight: normal;
  margin-bottom: 40px;
}
.advantages-description {
  display: flex;
  color: #5222d0;
  font-size: 16px;
  font-weight: bold;
}
.advantage {
  margin-left: auto;
}
.image__block {
  width: 70%;
  margin-left: 100px;
}
.feedback-button {
  width: max-content;
  padding: 15px 40px;
  margin-top: 50px;
  box-sizing: border-box;
  border: 1px #222222 solid;
  border-radius: 30px;
  transition: all 0.2s ease-out;
}
.feedback-button:hover {
  color: #ffffff;
  cursor: pointer;
  border: 1px #5222D0 solid;
  background-color: #5222D0;
  transition: all 0.2s ease-out;
}
@media only screen and (max-width : 1700px) {
  .home__main-screen__container {
    padding: 0 50px;
  }
}
</style>