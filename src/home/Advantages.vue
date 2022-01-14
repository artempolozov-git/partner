<template>
  <div class="home__advantages__container">
    <h1 class="title__section">Почему мы?</h1>
    <div class="advantages__grid">
      <!--1 block-->
      <div class="advantages__block">
        <img src="@/assets/icons/flame.svg">
        <div class="advantages__information__wrapper">
          <h2 class="advantages__title">Реализация проектов любой сложности</h2>
          <p class="advantages__description">Наша команда состоит из профессионалов,
            уровень знаний которых подтвержден множеством сертификатов от ключевых партнеров</p>
        </div>
      </div>
      <!--2 block-->
      <div class="advantages__block">
        <img src="@/assets/icons/layers.svg">
        <div class="advantages__information__wrapper">
          <h2 class="advantages__title">Комплексные решения автоматизации</h2>
          <p class="advantages__description">Мы предлагаем полный спектр услуг по автоматизации, сопровождению
            и поддержке вашего бизнеса</p>
        </div>
      </div>
      <!--3 block-->
      <div class="advantages__block">
        <img src="@/assets/icons/good.svg">
        <div class="advantages__information__wrapper">
          <h2 class="advantages__title">Индивидуальный подход к каждому клиенту</h2>
          <p class="advantages__description">Найдем подход к построению процессов
            с учетом специфики вашего бизнеса и вашим видением</p>
        </div>
      </div>
      <!--4 block-->
      <div class="advantages__block">
        <img src="@/assets/icons/star.svg">
        <div class="advantages__information__wrapper">
          <h2 class="advantages__title">Качество, подкрепленное опытом</h2>
          <p class="advantages__description">Благодаря богатому опыту за более
            чем 15 лет на рынке мы смогли достичь высокого качества предоставляемых услуг</p>
        </div>
      </div>
      <!--5 block-->
      <div class="advantages__block">
        <img src="@/assets/icons/clip.svg">
        <div class="advantages__information__wrapper">
          <h2 class="advantages__title">Статусы и компетенции</h2>
          <p class="advantages__description">Наша компания является официальным партнером 1С по всем ключевым
            статусам. Так же мы являемся партнером Kaspersky, Microsoft и многих других</p>
        </div>
      </div>
      <!--6 block-->
      <div class="advantages__block">
        <img src="@/assets/icons/flash.svg">
        <div class="advantages__information__wrapper">
          <h2 class="advantages__title">Собственные решения и разработки</h2>
          <p class="advantages__description">Мы обладает ресурсами для разработки собственных решений и доработке
            существующих под специфические требования каждого бизнеса</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Advantages"
    }
</script>

<style lang="scss" scoped>
.home__advantages__container {
  padding: 0 100px;
  margin: 100px 0;
  box-sizing: border-box;
}
.title__section {
  @extend %titleSection;
}
.advantages__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 90px;
  grid-row-gap: 50px;
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
  color: $color-text;
  margin-top: 10px;
}
@media only screen and (max-width : 1700px) {
  .advantages__grid {
    grid-column-gap: 50px;
    grid-row-gap: 50px;
  }
}
</style>