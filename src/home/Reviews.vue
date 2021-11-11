<template>
  <section class="home__reviews__container">
    <h1 class="title-section">Отзывы  клиентов</h1>
    <div class="review__wrapper">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <div class="review-slider pivnice"></div>
        </swiper-slide>
        <swiper-slide>
          <div class="review-slider">2</div>
        </swiper-slide>
        <swiper-slide>
          <div class="review-slider">3</div>
        </swiper-slide>
        <swiper-slide>
          <div class="review-slider">4</div>
        </swiper-slide>
        <swiper-slide>
          <div class="review-slider">5</div>
        </swiper-slide>
        <swiper-slide>
          <div class="review-slider">6</div>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </section>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        name: "Reviews",
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    slidesPerGroup: 3,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        }
    }
</script>

<style scoped>
.home__reviews__container {
  padding: 100px 250px;
  box-sizing: border-box;
}
.title-section {
  font-size: 2vw;
  margin: 0;
}
.review__wrapper {
  margin-top: 70px;
}
.review-slider {
  height: 600px;
  border-radius: 30px;
  border: 1px #C3C6C8 solid;
}
.pivnice {
  background: url(../assets/images/reviews/pivnice.jpg);
  background-size: cover;
  background-position: center;
}
</style>