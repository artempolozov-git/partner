<template>
  <section class="home__advantages__container">
    <h1 class="title-section">Почему мы</h1>
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
  </section>
</template>

<script>
    export default {
        name: "Advantages"
    }
</script>

<style scoped>
.home__advantages__container {
  padding: 100px 250px;
  box-sizing: border-box;
}
.title-section {
  font-size: 2vw;
  margin: 0;
}
.advantages__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 100px;
  grid-row-gap: 70px;
  margin-top: 70px;
}
.advantages__block {
  display: flex;
  align-items: start;
}
.advantages__block > img {
  width: 35px;
  margin-right: 20px;
}
.advantages__title {
  font-weight: normal;
  margin: 0;
}
.advantages__description {
  font-family: SourceCodePro;
  color: #848484;
  margin-top: 10px;
}
</style>