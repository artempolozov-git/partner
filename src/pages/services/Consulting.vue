<template>
  <div class="page-main__container">
    <h2 class="title__pages">Консалтинговые услуги</h2>

    <div class="page__banner__container">
      <div class="banner-title__wrapper">
        <h2 class="title">Консультации по любым вопросам в сфере автоматизации!</h2>
        <div class="description">Получите консультацию экспертов в сфере управленческого учета,
          ведения бухгалтерии, заработной платы и работы с прикладными продуктами «1С»</div>
        <div class="feedback-button" @click="FeedbackForm">
          <span>Оставить заявку</span>
        </div>
      </div>
      <div class="image">
        <img src="@/assets/images/consulting.svg">
      </div>
    </div>

    <div class="text__container">
      <span class="subtitle">Справка:</span>
      <p class="text">Под модным словом <strong>«Консалтинг»</strong> скрывается простой и понятный всем процесс – это процесс консультирования рядовых сотрудников, руководителей и управленцев
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
        сотрудников определенным прикладным навыкам.</p>
      <p class="subtitle">Мы предоставляем услуги:</p>
      <div class="list__container">
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
        <advantages v-for="(advantage, Advantages) in consultingAdvantages"
                    :key="Advantages"
                    :title="advantage.title"
                    :description="advantage.description"
                    :images="advantage.images"></advantages>
      </div>
    </div>

    <div class="section__container-links">
      <h2 class="title__section">Другие услуги Partner:</h2>
      <div class="directions__wrapper">
        <other-services v-for="(pages, otherLinks) in servicesLinks"
                        :key="otherLinks"
                        :link="pages.link"
                        :id="pages.id"></other-services>
      </div>
    </div>
  </div>
</template>

<script>
    import Advantages from "@/components/Advantages";
    import OtherServices from "@/components/OtherServices";
    export default {
        name: "Consulting",
        components: {
            OtherServices,
            Advantages,
        },
        data () {
          return {
              consultingAdvantages: [
                  {
                      title: 'Высокий профессионализм',
                      description: 'Каждый наш сотрудник имеет большой опыт работы, а их функционал узко регламентирован, что позволяет отлично разбираться в своей сфере.',
                      images: require('@/assets/icons/flame.svg'),
                  },
                  {
                      title: 'Богатый опыт',
                      description: 'Мы на рынке более 15 лет, и за это время смогли качественно оптимизировать наш рабочий процесс, а также отработать любые сложные ситуации.',
                      images: require('@/assets/icons/star.svg'),
                  },
                  {
                      title: 'Комплексный подход',
                      description: 'В нашей команде трудятся специалисты со знаниями в различных сферах, что позволяет подойти к любой вашей проблеме комплексно, увеличив скорость ее решения и качество итогового результата.',
                      images: require('@/assets/icons/layers.svg'),
                  },
                  {
                      title: 'Ваша информация в надежных руках',
                      description: 'В штате нашей компании присутствуют IT-специалисты, которые умеют строить нагруженные и высоко доступные информационные системы , обеспечивающие сохранность и конфиденциальность вашей информации.',
                      images: require('@/assets/icons/clip.svg'),
                  },
              ],
              servicesLinks: [
                  {
                    link: 'Автоматизация бизнеса',
                    id: 'business-automation',
                  },
                  {
                      link: 'Автоматизация учреждений госсектора',
                      id: 'public-automation',
                  },
                  {
                      link: 'Бухгалтерское обслуживание',
                      id: 'accounting-services',
                  },
                  {
                      link: 'IT - аутсорсинг',
                      id: 'it-outsourcing',
                  },
                  {
                      link: 'Продажа, внедрение и поддержка программ «1С»',
                      id: '',
                  },
                  {
                      link: 'Продажа и настройка торгового оборудования',
                      id: '',
                  },
              ],
          }
        },
        methods: {
            goToPage(page) {
                this.$router.push(page);
                window.scrollTo(0,0);
            },
            FeedbackForm() {
                let form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            },
        },
    }
</script>

<style lang="scss" scoped>
.page-main__container {
  padding: $padding-main__container;
}
.title__pages {
  @extend %titlePages;
}
.page__banner__container {
  display: flex;
  align-items: center;
  justify-content: center;
  @extend %bannerBackground;
}
.title {
  font-size: $section-title-fontsize;
  font-weight: bold;
  color: #5222D0;
  margin-bottom: 20px;
}
.description {
  color: $color-text;
  width: 80%;
}
.image {
  width: 30%;
  margin-left: auto;
}
.feedback-button {
  @extend %buttons;
  margin-top: 50px;
}
.section__container {
  @extend %sectionContainer;
}
.section__container-links {
  padding: 0 100px;
  box-sizing: border-box;
}
.text__container {
  padding: 0 130px;
  margin: 70px 0;
  box-sizing: border-box;
  .subtitle {
    font-size: $subtitle-fontsize;
    color: #5222d0;
    font-weight: bold;
  }
  .text {
    color: $color-text;
  }
}
.title__section {
  @extend %titleSection;
}
.point-list__wrapper {
  padding-left: 30px;
}
.point-list__block {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
    .point-list__text {
      font-size: $additional-fontsize;
      font-weight: bold;
    }
    .point-list__image {
      width: 3vw;
      margin-right: 15px;
    }
}
.subtitle {
  font-size: $additional-fontsize;
  font-weight: bold;
  color: #5222d0;
}
.list__text {
  font-size: $additional-fontsize;
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
.directions__wrapper  {
  display: flex;
  flex-wrap: wrap;
}
</style>