<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <div class="prices__block">
          <div class="prices-title">Автоматизация розничной сети</div>
          <div class="price">от 3600 ₽</div>
          <ul class="list__block">
            <li class="list__text"><span>Прозрачный учет товаров и услуг</span></li>
            <li class="list__text"><span>Оперативное получение данных о продажах</span></li>
            <li class="list__text"><span>Минимизация мошеннечества и краж со стороны продавцов</span></li>
            <li class="list__text"><span>Оптимизация товарного ассортимента</span></li>
            <li class="list__text"><span>Возможность анализа продаж в различных разрезах</span></li>
            <li class="list__text"><span>Работа с оборудованием, соответствующим 54-ФЗ</span></li>
            <li class="list__text"><span>Учет и реализация маркированых и подакцизных товаров</span></li>
          </ul>
        <div class="feedback-button" @click="FeedbackForm">
          <span>Оставить заявку</span>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="prices__block">
        <div class="prices-title">Автоматизация автотехцентра и магазина автозапчастей</div>
        <div class="price">от 62 000 ₽</div>
        <ul class="list__block">
          <li class="list__text"><span>Складской учет автозапчастей в разрезе каталожного номера</span></li>
          <li class="list__text"><span>Реализация ордерно-ячеистого склада</span></li>
          <li class="list__text"><span>Ведение базы клиентов и автомобилей</span></li>
          <li class="list__text"><span>Автоматизация процесса прихода запасных частей</span></li>
          <li class="list__text"><span>Доработка типовых форм документов (Заказ-наряд, Заявка на ремонт и др.)</span></li>
          <li class="list__text"><span>Разработка функционала подбора аналогов запасных частей</span></li>
          <li class="list__text"><span>Учет и реализация маркированых и подакцизных товаров</span></li>
        </ul>
        <div class="feedback-button" @click="FeedbackForm">
          <span>Оставить заявку</span>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="prices__block">
        <div class="prices-title">Автоматизация оптовой сети</div>
        <div class="price">от 7 200 ₽</div>
        <ul class="list__block">
          <li class="list__text"><span>Работа по заказам и учет резервов</span></li>
          <li class="list__text"><span>Расчет себестоимости, финрезультата торговой сети</span></li>
          <li class="list__text"><span>Партионный учет</span></li>
          <li class="list__text"><span>Расширенный калькулятор цен</span></li>
          <li class="list__text"><span>Расчет бонусов менеджеров</span></li>
          <li class="list__text"><span>Контроль взаиморасчетов по срокам задлролженности</span></li>
          <li class="list__text"><span>Электронный документооборот с контрагентами</span></li>
          <li class="list__text"><span>Внутренние перепродажи, оптимизация налоговой нагрузки</span></li>
        </ul>
        <div class="feedback-button" @click="FeedbackForm">
          <span>Оставить заявку</span>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="prices__block">
        <div class="prices-title">Автоматизация медицинского учреждения</div>
        <div class="price">от 38 600 ₽</div>
        <ul class="list__block">
          <li class="list__text"><span>Регистрация и хранение данных пациентов и законных представителей</span></li>
          <li class="list__text"><span>Составление и ведение сеток расписания специалистов и подразделений</span></li>
          <li class="list__text"><span>Возможность выставления счетов клиентом по различным источникам (ОМС, ДМС)</span></li>
          <li class="list__text"><span>Ведение электронных карт пациентов</span></li>
          <li class="list__text"><span>Автоматизация формирования печатных форм (рецептов, справок, протоколов осмотров и др.)</span></li>
          <li class="list__text"><span>Автоматизация лаборатории</span></li>
        </ul>
        <div class="feedback-button" @click="FeedbackForm">
          <span>Оставить заявку</span>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="prices__block">
        <div class="prices-title">Автоматизация фитнес клуба</div>
        <div class="price">от 50 000 ₽</div>
        <ul class="list__block">
          <li class="list__text"><span>Ведение базы клиентов</span></li>
          <li class="list__text"><span>Учет посещений клиентов</span></li>
          <li class="list__text"><span>Формирование и ведение сеток расписаний</span></li>
          <li class="list__text"><span>Использование дисконтных и клубных карт</span></li>
          <li class="list__text"><span>Учет отработанного времени сотрудников</span></li>
          <li class="list__text"><span>Использование оборудования для соответствия 54-ФЗ</span></li>
          <li class="list__text"><span>Системы СКУД</span></li>
        </ul>
        <div class="feedback-button" @click="FeedbackForm">
          <span>Оставить заявку</span>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="prices__block">
        <div class="prices-title">Автоматизация розничной сети аптек</div>
        <div class="price">от 26 400 ₽</div>
        <ul class="list__block">
          <li class="list__text"><span>Ведение каталога номенклатуры лекарственных средств</span></li>
          <li class="list__text"><span>Партионный учет медикаментов</span></li>
          <li class="list__text"><span>Контроль срока годности</span></li>
          <li class="list__text"><span>Отдельный склад "Карантинная зона"</span></li>
          <li class="list__text"><span>Контроль цен на ЖНВЛП</span></li>
          <li class="list__text"><span>Учет и продажа маркированного товара</span></li>
          <li class="list__text"><span>Маркетинговые мероприятия</span></li>
        </ul>
        <div class="feedback-button" @click="FeedbackForm">
          <span>Оставить заявку</span>
        </div>
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="prices__block">
        <div class="prices-title">Автоматизация автосалона</div>
        <div class="price">от 62 000 ₽</div>
        <ul class="list__block">
          <li class="list__text"><span>Ведение рабочих листов отдела продаж</span></li>
          <li class="list__text"><span>Продажа новых автомобилей и автомобилей с пробегом</span></li>
          <li class="list__text"><span>Предпродажная подготовка и дооборудование автомобилей</span></li>
          <li class="list__text"><span>Тест-драйв</span></li>
          <li class="list__text"><span>Сделки «Trade-in» и комиссионная торговля</span></li>
          <li class="list__text"><span>Учет поставок автомобилей</span></li>
          <li class="list__text"><span>Ответственное хранение автомобилей и консигнация</span></li>
        </ul>
        <div class="feedback-button" @click="FeedbackForm">
          <span>Оставить заявку</span>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        name: "BusinessAutomationPrices",
        components: {
            Swiper,
            SwiperSlide
        },
        methods: {
            FeedbackForm() {
                let form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            },
        },
        data() {
            return {
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
                }
            }
        },
        props: {
            title: String,
            price: String,
        },
    }
</script>

<style lang="scss" scoped>
.prices__block {
  height: fit-content;
  padding: 50px;
  box-sizing: border-box;
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
.list__text {
  margin-top: 20px;
    & span {
      color: $color-text;
    }
}
.list__block {
  margin-bottom: 70px;
    & li {
      color: #5222d0;
    }
}
.feedback-button {
  @extend %buttons;
  margin: auto;
}
</style>