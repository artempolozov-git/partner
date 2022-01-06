<template>
  <div class="page-main__container">
    <h2 class="title__pages">Консалтинговые услуги</h2>

    <div class="page__banner__container">
      <div class="banner-title__wrapper">
        <h2 class="title">Консультации по любым вопросам в сфере автоматизации!</h2>
        <div class="description">Получите консультацию экспертов в сфере управленческого учета,
          ведения бухгалтерии, заработной платы и работы с прикладными продуктами «1С»</div>
        <div class="feedback-button">
          <span>Оставить заявку</span>
        </div>
      </div>
      <div class="image">
        <lottie-animation class="anim"
                          :loop="true"
                          :autoPlay="true"
                          ref="anim"
                          :animationData="require('@/assets/animation/consulting.json')"
        />
      </div>
    </div>

    <div class="text__container">
      <span class="subtitle">Справка:</span>
      <p class="text">Под модным словом <b>«Консалтинг»</b> скрывается простой и понятный всем процесс – это процесс консультирования рядовых сотрудников, руководителей и управленцев
        по широкому кругу вопросов, связанных с финансовой, коммерческой, технической и другими сферами управления предприятием. Основная цель консалтинга –
        помощь в достижении  поставленных управлением задач!
      </p>
    </div>

    <div class="section__container">
      <h2 class="title__section">Когда нужен консалтинг?</h2>
      <div class="point-list__wrapper">
        <div class="point-list__block">
          <img class="point-list__image" src="@/assets/icons/checkmark.svg">
          <span class="point-list__text">Компании не хватает свежих идей</span>
        </div>
        <div class="point-list__block">
          <img class="point-list__image" src="@/assets/icons/checkmark.svg">
          <span class="point-list__text">Нужна помощь для завершения какого-либо проекта</span>
        </div>
        <div class="point-list__block">
          <img class="point-list__image" src="@/assets/icons/checkmark.svg">
          <span class="point-list__text">В руководстве нет согласия по какому-то вопросу</span>
        </div>
        <div class="point-list__block">
          <img class="point-list__image" src="@/assets/icons/checkmark.svg">
          <span class="point-list__text">У внутренних специалистов не хватает знаний и опыта для выполнения конкретных задач</span>
        </div>
        <div class="point-list__block">
          <img class="point-list__image" src="@/assets/icons/checkmark.svg">
          <span class="point-list__text">Не хватает внутрикорпоративной коммуникации</span>
        </div>
      </div>
    </div>

    <div class="section__container">
      <h2 class="title__section">Мы предлагаем:</h2>
      <p class="text">Компания Partner предоставляет консультации экспертов в различных сферах бизнеса и управления государственными учреждениями, а также проводит обучение
        сотрудников определенным прикладным навыкам.
        <br><b>Мы предоставляем услуги:</b>
      </p>
      <div class="list__wrapper">
        <ul class="list__block">
          <li class="list__text"><span>Управленческий консалтинг</span></li>
          <li class="list__text"><span>Консалтинг по вопросам ведения бухгалтерии</span></li>
          <li class="list__text"><span>Консалтинг по вопросам ведения заработной платы</span></li>
          <li class="list__text"><span>IT-консалтинг</span></li>
          <li class="list__text"><span>Консалтинг по организации работы в отраслевых продуктах «1С»</span></li>
          <li class="list__text"><span>Обучение сотрудников работе в программных продуктах «1С»</span></li>
        </ul>
      </div>
    </div>

    <div class="section__container">
      <h1 class="title__section">Почему Partner?</h1>
      <div class="advantages__grid">
        <!--1 block-->
        <div class="advantages__block">
          <img src="@/assets/icons/flame.svg">
          <div class="advantages__information__wrapper">
            <h2 class="advantages__title">Высокий профессионализм</h2>
            <p class="advantages__description">Каждый наш сотрудник имеет большой опыт работы, а их функционал узко
              регламентирован, что позволяет отлично разбираться в своей сфере.</p>
          </div>
        </div>
        <!--2 block-->
        <div class="advantages__block">
          <img src="@/assets/icons/star.svg">
          <div class="advantages__information__wrapper">
            <h2 class="advantages__title">Богатый опыт</h2>
            <p class="advantages__description">Мы на рынке более 15 лет, и за это время смогли качественно оптимизировать
              наш рабочий процесс, а также отработать любые сложные ситуации.</p>
          </div>
        </div>
        <!--3 block-->
        <div class="advantages__block">
          <img src="@/assets/icons/layers.svg">
          <div class="advantages__information__wrapper">
            <h2 class="advantages__title">Комплексный подход</h2>
            <p class="advantages__description">В нашей команде трудятся специалисты со знаниями в различных сферах,
              что позволяет подойти к любой вашей проблеме комплексно, увеличив скорость
              ее решения и качество итогового результата.</p>
          </div>
        </div>
        <!--4 block-->
        <div class="advantages__block">
          <img src="@/assets/icons/clip.svg">
          <div class="advantages__information__wrapper">
            <h2 class="advantages__title">Ваша информация в надежных руках</h2>
            <p class="advantages__description">В штате нашей компании присутствуют IT-специалисты, которые умеют строить
              нагруженные и высоко доступные информационные системы , обеспечивающие
              сохранность и конфиденциальность вашей информации.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="section__container-links">
      <h2 class="title__container">Другие услуги Partner:</h2>
      <div class="directions__wrapper">
        <div class="direction">
          <span>Автоматизация бизнеса</span>
        </div>
        <div class="direction">
          <span>Автоматизация учреждений госсектора</span>
        </div>
        <div class="direction">
          <span>Бухгалтерское обслуживание</span>
        </div>
        <div class="direction">
          <span>IT - аутсорсинг</span>
        </div>
        <div class="direction">
          <span>Продажа, внедрение и поддержка программ «1С»</span>
        </div>
        <div class="direction">
          <span>Продажа и настройка торгового оборудования</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import LottieAnimation from 'lottie-web-vue'
    export default {
        name: "Consulting",
        components: {
            LottieAnimation
        }
    }
</script>

<style scoped>
.page-main__container {
  padding: 0 100px 150px;
}
.title__pages {
  font-size: 38px;
  font-weight: bold;
  margin-top: 30px;
  padding: 0 100px;
}
.page__banner__container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 150px;
  box-sizing: border-box;
  margin-top: 50px;
  border-radius: 30px;
  background: linear-gradient(45deg, rgba(32, 195, 208, 0.11) 50%, rgba(82, 34, 208, 0.11) 100%);
}
.title {
  font-size: 36px;
  font-weight: bold;
  color: #5222D0;
  margin-bottom: 20px;
}
.description {
  color: #606060;
}
.image {
  width: 50%;
  margin-left: 100px;
}
.feedback-button {
  width: max-content;
  padding: 20px 60px;
  margin-top: 50px;
  background-color: rgba(82, 34, 208, 0.1);
  color: #5222d0;
  font-weight: bold;
  box-sizing: border-box;
  border-radius: 30px;
  transition: all 0.2s ease-out;
}
.feedback-button:hover {
  color: #ffffff;
  cursor: pointer;
  font-weight: bold;
  background-color: #5222D0;
  transition: all 0.2s ease-out;
}
.section__container {
  padding: 0 100px;
  margin: 0 0 100px;
  box-sizing: border-box;
}
.section__container-links {
  padding: 0 100px;
  box-sizing: border-box;
}
.text__container {
  padding: 0 130px;
  margin: 70px 0;
  box-sizing: border-box;
}
.subtitle {
  font-size: 24px;
  color: #0086C9;
  font-weight: bold;
}
.text {
  color: #606060;
}
.title__section {
  font-size: 36px;
  font-weight: bold;
  margin: 0 0 50px;
}
.point-list__wrapper {
  padding-left: 30px;
}
.point-list__block {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
.point-list__text {
  font-size: 21px;
  font-weight: bold;
}
.point-list__image {
  width: 3vw;
  margin-right: 15px;
}
.list__text {
  font-size: 21px;
  font-weight: bold;
  margin-top: 20px;
}
.list__text > span {
  color: #222222;
}
.list__block > li {
  color: #5222d0;
}
.advantages__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 60px;
  grid-row-gap: 30px;
  margin-top: 50px;
}
.advantages__block {
  display: flex;
  align-items: start;
}
.advantages__block > img {
  width: 4vw;
  margin-right: 20px;
}
.advantages__title {
  font-size: 21px;
  font-weight: bold;
  margin: 0;
}
.advantages__description {
  color: #606060;
  margin-top: 10px;
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
  color: #606060;
}
.direction:hover {
  border: 1px solid #0086C9;
  background-color: rgba(0, 134, 201, 0.11);
  color: #0086C9;
  text-decoration: underline;
  cursor: pointer;
}
</style>