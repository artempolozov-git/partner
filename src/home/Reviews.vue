<template>
  <section class="home__reviews__container">
    <h1 class="title-section">Отзывы  клиентов</h1>
    <div class="review__wrapper">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <div class="review-slider">
            <div class="review-images"><img src="@/assets/images/reviews/pivnice.jpg"></div>
            <div class="review-information__wrapper">
              <h2 class="review-title">Бар и магазин PIVNICE</h2>
              <p class="review-subtitle">Зайцев Вадим Игоревич</p>
              <p class="review-text">ИП Зайцев Вадим Игоревич
                благодарит компанию ООО «Партнер»
                за профессиональную работу
                в сфере автоматизации розничных и
                оптовых продаж, а также поставки и
                обслуживания торгового и кассового
                оборудования.
              <br>Благодаря слаженной работе мы автоматизировали работу магазинов, менеджеров
                и управляющего персонала, внедрив систему учета на базе платформы 1С.Предприятие.</p>
            </div>
            <div class="view-more">Подробнее</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="review-slider">
            <div class="review-images"><img src="@/assets/images/reviews/steeringwheel.jpg"></div>
            <div class="review-information__wrapper">
              <h2 class="review-title">Автомагазин «Руль»</h2>
              <p class="review-subtitle">Холмецкий Игорь Сергеевич</p>
              <p class="review-text">Сеть магазинов и автотехцентров
                «Руль» однозначно рекомендует
                ООО «Партнер» к сотрудничеству.
                Данная компания зарекомендовала
                себя как надежный партнер, имеющий
                в своем составе
                высококвалифицированных специалистов,
                которые выполняют поставленные
                им задачи в намеченные сроки
                и с высоким качеством.</p>
            </div>
            <div class="view-more">Подробнее</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="review-slider">
            <div class="review-images"><img src="@/assets/images/reviews/administration.png"></div>
            <div class="review-information__wrapper">
              <h2 class="review-title">Администрация МВЦУ</h2>
              <p class="review-subtitle">Директор Мамонова И.Л.</p>
              <p class="review-text">Благодарим коллектив ООО «Партнер»
                за проведенные работы по
                автоматизации учета в нашей
                организации. Можем рекомендовать
                к сотрудничеству ООО Партнер
                как надежную и квалифицированную
                команду профессионалов!</p>
            </div>
            <div class="view-more">Подробнее</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="review-slider">
            <div class="review-images"><img src="@/assets/images/reviews/hops.png"></div>
            <div class="review-information__wrapper">
              <h2 class="review-title">Магазин Эль & Хмель</h2>
              <p class="review-subtitle">Коростин Роман Сергеевич</p>
              <p class="review-text">Наша компания плодотворно сотрудничает с ООО «Партнер» уже более 2 лет.
                Мы начали совместную работу с открытия нашего первого магазина в городе Липецке.
                Мы уверены в надежности, ответственности и профессионализме команды компании Партнер,
                поэтому можем смело рекомендовать ее к сотрудничеству!</p>
            </div>
            <div class="view-more">Подробнее</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="review-slider">
            <div class="review-images"><img src="@/assets/images/reviews/bp.png"></div>
            <div class="review-information__wrapper">
              <h2 class="review-title">Компания BP-MOTORS</h2>
              <p class="review-subtitle">Директор Попова И.А.</p>
              <p class="review-text">Услуги, оказанные компанией Партнер нам, соответствуют высокому профессиональному уровню.
                Система автоматизации продаж и автомобильного сервиса на базе 1С:Альфа-Авто.
                Можем рекомендовать ООО Партнер как надежного партнера в вопросах автоматизации бизнеса и информационных технологий.</p>
            </div>
            <div class="view-more">Подробнее</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="review-slider">
            <div class="review-images"><img src="@/assets/images/reviews/oculus.png"></div>
            <div class="review-information__wrapper">
              <h2 class="review-title">Центр микрохирургии глаза «Окулюс»</h2>
              <p class="review-subtitle">Ген. директор Горькаев В.А.</p>
              <p class="review-text">Компания Партнер выполняла у нас работы по внедрению информационных систем для ведения учета посетителей
                медицинского центра, автоматизации продаж аптечной торговой точки, а также программ для ведения бухгалтерии и заработной платы
                и кадров.
                Мы рекомендуем ООО Партнер как надежного партнера для реализации проектов любой сложности!
              </p>
            </div>
            <div class="view-more">Подробнее</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="review-slider">
            <div class="review-information__wrapper">
              <div class="review-images"><img src="@/assets/images/reviews/staltorg.png"></div>
              <h2 class="review-title">ООО «Стальторг»</h2>
              <p class="review-subtitle">Исп. директор Николаева Ю.О.</p>
              <p class="review-text">В качестве внедряющей компании была выбрана компания Партнер.
                Специалистами компании Партнер был проведен аудит IT- структуры и осуществлен анализ потребностей.
                В результате было принято решение о построении единой инфраструктуры в компании Стальторг,
                а также выбран программный продукт - 1С: Комплексная автоматизация!
              </p>
            </div>
            <div class="view-more">Подробнее</div>
          </div>
        </swiper-slide>
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
                    slidesPerGroup: 1,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: true,
                    },
                }
            }
        }
    }
</script>

<style scoped>
.home__reviews__container {
  padding: 100px 250px;
  margin-top: 100px;
  box-sizing: border-box;
  background-color: #f7f7f7;
}
.title-section {
  font-size: 2em;
  font-family: RobotoSlab;
  font-weight: normal;
  margin: 0;
}
.review__wrapper {
  margin-top: 70px;
}
.review-slider {
  height: auto;
  padding: 50px;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 30px;
}
.review-images > img {
  height: 5vh;
}
.review-title {
  font-weight: normal;
}
.review-subtitle {
  color: #848484;
}
.review-text {
  color: #848484;
}
.view-more {
  width: max-content;
  color: #0086C9;
  border-bottom: 1px #0086C9 solid;
  transition: all 0.2s ease-out;
}
.view-more:hover {
  cursor: pointer;
  color: #0093da;
  transition: all 0.2s ease-out;
}
@media only screen and (max-width : 1700px) {
  .home__reviews__container {
    padding: 100px 150px;
  }
}
</style>