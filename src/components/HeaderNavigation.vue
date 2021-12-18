<template>
  <div class="header-navigations__block">
    <nav class="navigations__wrapper">
      <div class="navigation-links" v-on:click="goToPage('about-company')">О компании</div>

      <div class="dropdown__menu">
        <div class="navigation-links">
          <span class="list-title">Услуги</span>
          <img src="@/assets/icons/dropdown-arrow.svg">
        </div>
        <div class="dropdown-content">
          <p>Автоматизация бизнеса</p>
          <p>Автоматизация учреждений<br> госсектора</p>
          <p v-on:click="goToPage('consulting')">Консалтинговые услуги</p>
          <p>Бухгалтерское обслуживание</p>
          <p>IT - аутсорсинг</p>
        </div>
      </div>

      <div class="dropdown__menu">
        <div class="navigation-links">
          <span class="list-title">Купить 1С</span>
          <img src="@/assets/icons/dropdown-arrow.svg">
        </div>
        <div class="dropdown-content">
          <p>Программные продукты 1С</p>
          <p>Сервисы 1С</p>
          <p>1С Комплект поддержки</p>
        </div>
      </div>


      <div class="dropdown__menu">
        <div class="navigation-links">
          <span class="list-title">Торговое оборудование</span>
          <img src="@/assets/icons/dropdown-arrow.svg">
        </div>
        <div class="dropdown-content">
          <p>Фиксальные накопители</p>
          <p>Контрольно кассовая техника</p>
          <p>Сканеры</p>
          <p>Весы</p>
          <p>Терминалы сбора данных</p>
          <p>Принтеры этикеток</p>
        </div>
      </div>

      <div class="dropdown__menu">
        <div class="navigation-links">
          <span class="list-title">Нам доверяют</span>
          <img src="@/assets/icons/dropdown-arrow.svg">
        </div>
        <div class="dropdown-content">
          <p>Внедрения</p>
          <p>Отзывы клиентов</p>
        </div>
      </div>

      <div class="navigation-links" style="margin-right: 0">Контакты</div>
    </nav>
    <div class="account-links" @click="loginForm">
      <img src="@/assets/icons/account.svg">
      <span>Личный кабинет</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HeaderNavigation",
        methods: {
            loginForm() {
                let form = document.getElementById("login");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            },
            goToPage(page) {
                this.$router.push(page);
                window.scrollTo(0,0);
            }
        }
    }
</script>

<style scoped>
  .header-navigations__block {
    display: flex;
    align-items: center;
    padding: 30px 200px;
    box-sizing: border-box;
  }
  .navigations__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  }
  .navigation-links {
    display: flex;
    align-items: center;
    margin-right: 50px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 30px;
    transition: all 0.3s ease-out;
  }
  .navigation-links:hover {
    cursor: pointer;
    background-color: rgba(32, 195, 208, 0.10);
    transition: all 0.3s ease-out;
  }
  .navigation-links > span {
    margin-right: 10px;
  }
  .navigation-links > img {
    width: 8px;
  }
  .account-links {
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 30px;
    transition: all 0.2s ease-out;
  }
  .account-links:hover {
    cursor: pointer;
    background-color: rgba(32, 195, 208, 0.10);
    transition: all 0.2s ease-out;
  }
  .account-links > img {
    width: 35px;
    margin-right: 10px;
  }

  .dropdown__menu {
    position: relative;
    display: inline-block;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    border-radius: 5px;
    background-color: #ffffff;
    width: max-content;
    padding: 10px;
    box-shadow: 0px 5px 10px 2px rgba(157, 157, 157, 0.2);
    z-index: 1;
  }
  .dropdown-content > p {
    color: black;
    box-sizing: border-box;
    margin: 0;
    padding: 12px 16px;
    border-radius: 5px;
    text-decoration: none;
    display: block;
  }
  .dropdown-content p:hover {
    background-color: rgba(32, 195, 208, 0.10);
  }
  .dropdown__menu:hover .dropdown-content {
    display: block;
  }
  .dropdown__menu:hover {
    cursor: pointer;
  }

  @media only screen and (max-width : 1700px) {
    .header-navigations__block {
      padding: 30px 100px;
    }
  }
</style>