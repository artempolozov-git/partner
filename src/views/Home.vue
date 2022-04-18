<template>
  <section class="home__container">
    <main-screen></main-screen>
    <div class="home__advantages__container">
      <h1 class="title__section">Почему мы?</h1>
      <div class="advantages__grid">
        <advantages v-for="(advantage, Advantages) in homeAdvantages"
                    :key="Advantages"
                    :title="advantage.title"
                    :description="advantage.description"
                    :images="advantage.images"></advantages>
        </div>
    </div>
    <services></services>
  </section>
</template>

<script>
    import MainScreen from "@/home/MainScreen";
    import Advantages from "@/components/Advantages";
    import Services from "@/home/Services";
    export default {
        name: "Home",
        components: {Services, Advantages, MainScreen},
        data () {
            return {
                homeAdvantages: [
                    {
                        title: 'Реализация проектов любой сложности',
                        description: 'Наша команда состоит из профессионалов, уровень знаний которых подтвержден множеством сертификатов от ключевых партнеров',
                        images: require('@/assets/icons/flame.svg'),
                    },
                    {
                        title: 'Комплексные решения автоматизации',
                        description: 'Мы предлагаем полный спектр услуг по автоматизации, сопровождению и поддержке вашего бизнеса',
                        images: require('@/assets/icons/layers.svg'),
                    },
                    {
                        title: 'Индивидуальный подход к каждому клиенту',
                        description: 'Найдем подход к построению процессов с учетом специфики вашего бизнеса и вашим видением',
                        images: require('@/assets/icons/good.svg'),
                    },
                    {
                        title: 'Качество, подкрепленное опытом',
                        description: 'Благодаря богатому опыту за более чем 15 лет на рынке мы смогли достичь высокого качества предоставляемых услуг',
                        images: require('@/assets/icons/star.svg'),
                    },
                    {
                        title: 'Статусы и компетенции',
                        description: 'Наша компания является официальным партнером 1С по всем ключевым статусам. Так же мы являемся партнером Kaspersky, Microsoft и многих других',
                        images: require('@/assets/icons/clip.svg'),
                    },
                    {
                        title: 'Собственные решения и разработки',
                        description: 'Мы обладает ресурсами для разработки собственных решений и доработке существующих под специфические требования каждого бизнеса',
                        images: require('@/assets/icons/flash.svg'),
                    },
                ],
            }
        },
    }
</script>

<style lang="scss" scoped>
.home__container {
  padding: $padding-main__container;
}
.title__section {
  @extend %titleSection;
}
.home__advantages__container {
  padding: 0 100px;
  margin: 100px 0;
  box-sizing: border-box;
}
.advantages__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 90px;
  grid-row-gap: 50px;
}
@media only screen and (max-width : 1700px) {
  .home__container {
    padding: 0 50px 100px;
  }
}
@media only screen and (max-width : 1536px) {
  .home__container {
    padding: 0 50px 50px;
  }
  .home__advantages__container {
    padding: 0 50px;
  }
}
</style>