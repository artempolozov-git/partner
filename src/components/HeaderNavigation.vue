<template>
  <div class="header-navigations__block">
    <nav class="navigations__wrapper">
      <div class="navigation-links">О компании</div>
      <div class="navigation-links">
        <span>Услуги</span>
        <img src="@/assets/icons/dropdown-arrow.svg">
      </div>
      <div class="navigation-links">
        <span>Купить 1С</span>
        <img src="@/assets/icons/dropdown-arrow.svg">
      </div>
      <div class="navigation-links">
        <span>Торговое оборудование</span>
        <img src="@/assets/icons/dropdown-arrow.svg">
      </div>
      <div class="navigation-links">
        <span>Нам доверяют</span>
        <img src="@/assets/icons/dropdown-arrow.svg">
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
    margin-right: 30px;
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
  @media only screen and (max-width : 1700px) {
    .header-navigations__block {
      padding: 30px 100px;
    }
    .navigation-links {
      margin-right: 30px;
    }
  }
</style>