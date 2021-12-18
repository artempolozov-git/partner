<template>
  <div class="footer-navigation">
    <div class="navigation__container">
      <nav class="navigation__wrapper">
        <div class="nav-title" v-on:click="goToPage('about-company')">О компании</div>
      </nav>
      <nav class="navigation__wrapper">
        <div class="nav-title">Услуги</div>
        <p class="navigation-links">Автоматизация бизнеса</p>
        <p class="navigation-links">Автоматизация учреждений<br> госсектора</p>
        <p class="navigation-links" v-on:click="goToPage('consulting')">Консалтинговые услуги</p>
        <p class="navigation-links">Бухгалтерское обслуживание</p>
        <p class="navigation-links">IT аутсорсинг</p>
      </nav>
      <nav class="navigation__wrapper">
        <div class="nav-title">Купить 1С</div>
        <p class="navigation-links">Программные продукты 1С</p>
        <p class="navigation-links">Сервисы 1С</p>
        <p class="navigation-links">1С Комплект поддержки</p>
      </nav>
      <nav class="navigation__wrapper">
        <div class="nav-title">Торговое оборудование</div>
        <p class="navigation-links">Фиксальные накопители</p>
        <p class="navigation-links">Контрольно кассовая техника</p>
        <p class="navigation-links">Сканеры</p>
        <p class="navigation-links">Весы</p>
        <p class="navigation-links">Терминалы сбора данных</p>
        <p class="navigation-links">Принтеры этикеток</p>
      </nav>
      <nav class="navigation__wrapper">
        <div class="nav-title">Нам доверяют</div>
        <p class="navigation-links">Внедрения</p>
        <p class="navigation-links">Отзывы клиентов</p>
      </nav>
      <nav class="navigation__wrapper">
        <div class="nav-title">Контакты</div>
      </nav>
    </div>
    <div class="privacy__container">
      <nav class="privacy__wrapper indent">
        <p class="privacy-links">Пользовательское соглашение</p>
      </nav>
      <nav class="privacy__wrapper">
        <p class="privacy-links">Политика конфиденциальности</p>
      </nav>
    </div>
  </div>
</template>

<script>
    export default {
        name: "FooterNavigation",
        methods: {
            goToPage(page) {
                this.$router.push(page);
                window.scrollTo(0,0);
            }
        },
    }
</script>

<style scoped>
  .navigation__container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 50px;
  }
  .navigation__wrapper  {
    margin-right: auto;
    color: #848484;
  }
  .nav-title  {
    color: #ffffff;
    cursor: pointer;
    font-weight: bold;
  }
  .navigation-links {
    width: max-content;
    text-decoration: underline;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .navigation-links:hover {
    color: #0093da;
    transition: all 0.2s ease;
  }
  .privacy__container {
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
  }
  .privacy__wrapper {
    font-size: 12px;
    color: #848484;
  }
  .indent {
    margin-right: 20px;
  }
  .privacy-links {
    width: max-content;
    text-decoration: underline;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .privacy-links:hover {
    color: #0093da;
    transition: all 0.2s ease;
  }
</style>