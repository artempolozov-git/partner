<template>
  <div class="header-navigations__block">
    <nav class="navigations__wrapper">
      <div class="navigation-links" v-on:click="goToPage('about-company')">О компании</div>

      <div class="dropdown__menu">
        <div class="navigation-links">
          <span class="list-title">Услуги</span>
          <img src="@/assets/icons/arrow.svg">
        </div>
        <div class="dropdown-content">
          <p v-on:click="goToPage('business-automation')">Автоматизация бизнеса</p>
          <p v-on:click="goToPage('public-automation')">Автоматизация учреждений госсектора</p>
          <p v-on:click="goToPage('consulting')">Консалтинговые услуги</p>
          <p v-on:click="goToPage('accounting-services')">Бухгалтерское обслуживание</p>
          <p v-on:click="goToPage('it-outsourcing')">IT - аутсорсинг</p>
        </div>
      </div>

      <div class="dropdown__menu">
        <div class="navigation-links">
          <span class="list-title">Купить 1С</span>
          <img src="@/assets/icons/arrow.svg">
        </div>
        <div class="dropdown-content">
          <p v-on:click="goToPage('software-products')">Программные продукты 1С</p>
          <p v-on:click="goToPage('services-1C')">Сервисы 1С</p>
          <p v-on:click="goToPage('support-kit')">1С Комплект поддержки</p>
        </div>
      </div>


      <div class="dropdown__menu">
        <div class="navigation-links">
          <span class="list-title" v-on:click="goToPage('shop-equipment')">Торговое оборудование</span>
          <img src="@/assets/icons/arrow.svg">
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
          <img src="@/assets/icons/arrow.svg">
        </div>
        <div class="dropdown-content">
          <p>Внедрения</p>
          <p v-on:click="goToPage('reviews')">Отзывы клиентов</p>
        </div>
      </div>

      <div class="navigation-links" style="margin-right: 0" v-on:click="goToPage('contacts')">Контакты</div>
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

<style lang="scss" scoped>
  .header-navigations__block {
    display: flex;
    align-items: center;
    justify-content: center;
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
    margin-right: 40px;
    padding: 10px 20px;
    box-sizing: border-box;
    border-radius: 30px;
    transition: all 0.3s ease-out;
  }
  .navigation-links:hover {
    cursor: pointer;
    background: linear-gradient(45deg, rgba(32,195,208,0.10) 0%, rgba(0,134,201,0.10) 100%);
    transition: all 0.3s ease-out;
  }
  .navigation-links > span {
    margin-right: 10px;
  }
  .navigation-links > img {
    width: 10px;
  }
  .account-links {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    box-sizing: border-box;
    border-radius: 30px;
    transition: all 0.2s ease-out;
  }
  .account-links:hover {
    cursor: pointer;
    background: linear-gradient(45deg, rgba(32,195,208,0.10) 0%, rgba(0,134,201,0.10) 100%);
    transition: all 0.2s ease-out;
  }
  .account-links > img {
    width: 40px;
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
    box-shadow: 0px 1px 6px 0px rgba(32, 33, 36, 0.2);
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
    background: linear-gradient(45deg, rgba(32,195,208,0.10) 0%, rgba(0,134,201,0.10) 100%);
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
  @media only screen and (max-width : 1536px) {
    .header-navigations__block {
      padding: 30px 50px;
    }
  }
</style>