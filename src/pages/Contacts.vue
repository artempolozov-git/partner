<template>
  <div class="page-main__container">
    <div class="title__wrapper">
      <h2 class="title__pages">Контакты</h2>
    </div>

    <div class="contacts-main__container">
      <div class="contacts-information__wrapper">
        <div class="contacts-information__blocks">
          <img class="contacts-icon" src="@/assets/icons/location.svg">
          <div class="contacts-text"><a target="_blank" href="https://yandex.ru/maps/9/lipetsk/house/ulitsa_telmana_21/Z0AYcw9oSUUHQFtofXpzcH1jZQ==/?ll=39.588000%2C52.621102&z=16">г. Липецк, ул. Тельмана, д. 21</a></div>
        </div>
        <div class="contacts-information__blocks indent-top">
          <img class="contacts-icon" src="@/assets/icons/phone.svg">
          <div class="contacts-text"><a href="tel:+74742501502">+7 (4742) 501-502</a></div>
        </div>
        <div class="contacts-information__blocks indent-top">
          <img class="contacts-icon" src="@/assets/icons/email.svg">
          <div class="contacts-text"><a href="mailto:info@partner-its.ru">info@partner-its.ru</a></div>
        </div>
      </div>

      <div class="time-works-information__wrapper">
        <div class="time-works-information">
          <img class="contacts-icon" src="@/assets/icons/time.svg">
          <div class="time-works__blocks">
            <div class="title__blocks">Отдел продаж, клиентский отдел:</div>
            <div class="time-works__text">
              Пн-чт: 08:00 - 18:00
              <br>Пт: 08:00 - 17:00
              <br>Сб-вс: выходной
            </div>
          </div>
        </div>

        <div class="time-works-information indent-top">
          <img class="contacts-icon" src="@/assets/icons/time.svg">
          <div class="time-works__blocks">
            <div class="title__blocks">Отдел технической поддержки:</div>
            <div class="time-works__text">
              Без выходных: 08:00 - 21:00
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="feedback-button__wrapper">
      <div class="feedback-button">
        <span>Связаться с нами</span>
      </div>
    </div>

    <div><iframe class="map-location" src="https://yandex.ru/map-widget/v1/?um=constructor%3A4837f8bc80fe0d7d0ee5d3678ac624cecfee974f8916934773252cd8ec00b4a0&amp;source=constructor" frameborder="0"></iframe></div>
  </div>
</template>

<script>
    export default {
        name: "Contacts"
    }
</script>

<style scoped>
  .page-main__container {
    padding: 0 100px 150px;
  }
  .title__wrapper {
    padding: 50px 100px;
    margin-top: 30px;
    box-sizing: border-box;
    border-radius: 30px;
    background: linear-gradient(45deg, rgba(32, 195, 208, 0.11) 50%, rgba(82, 34, 208, 0.11) 100%);
  }
  .title__pages {
    font-size: 38px;
    font-weight: bold;
  }
  .contacts-main__container {
    display: flex;
    margin: 100px 0 50px 0;
    padding: 0 100px;
    box-sizing: border-box;
  }
  .contacts-information__blocks {
    display: flex;
    align-items: center;
  }
  .indent-top {
    margin-top: 50px;
  }
  .contacts-icon {
    width: 3vw;
    margin-right: 15px;
  }
  .contacts-text > a {
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    color: #222222;
  }
  .contacts-text > a:hover {
    color: #0086C9;
    text-decoration: underline;
  }
  .time-works-information__wrapper {
    margin-left: 150px;
  }
  .time-works-information {
    display: flex;
    align-items: start;
  }
  .title__blocks {
    font-size: 24px;
    font-weight: bold;
  }
  .time-works__text {
    margin-top: 10px;
    color: #606060;
    font-size: 20px;
  }
  .feedback-button__wrapper {
    margin: 0 0 100px;
    padding: 0 100px;
    box-sizing: border-box;
  }
  .feedback-button {
    width: max-content;
    padding: 30px 70px;
    margin-right: 40px;
    background-color: rgba(82, 34, 208, 0.1);
    color: #5222d0;
    font-weight: bold;
    font-size: 24px;
    box-sizing: border-box;
    border-radius: 100px;
    transition: all 0.2s ease-out;
  }
  .feedback-button:hover {
    color: #ffffff;
    cursor: pointer;
    background-color: #5222D0;
    transition: all 0.2s ease-out;
  }
  .map-location {
    width: 100%;
    height: 720px;
    border-radius: 30px;
  }
</style>