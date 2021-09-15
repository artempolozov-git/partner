<template>
  <div class="header-container">
    <div class="header-contacts-block">
      <div class="feedback-button">Обратная связь</div>
      <div class="contacts">
        <div class="number-phone">8 (4742) 501-502</div>
        <div class="email">info@partner-its.ru</div>
      </div>
    </div>
    <div class="header-navigations-block">
      <div class="logotype" v-on:click="goToPage('/')"><img src="@/assets/icons/logotype.svg"></div>
      <div class="navigations-wrapper">
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
        <div class="navigation-links">Контакты</div>
      </div>
      <div class="account-link" @click="loginForm">
        <img src="@/assets/icons/account.svg">
        <span>Личный кабинет</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Header",
        methods: {
            loginForm(){
                let form = document.getElementById("login");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            },
            goToPage(page) {
                this.$router.push(page);
                window.scrollTo(0,0);
            }
        },
    }
</script>

<style scoped>
.header-container {
  font-family: SourceCodePro;
  color: #222222;
}
.header-contacts-block {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 30px 100px 30px 100px;
  box-sizing: border-box;
  border-bottom: 1px #C3C6C8 solid;
}
.feedback-button {
  display:inline-block;
  position:relative;
  cursor:pointer;
  z-index:0;
  padding: 15px 30px;
  margin-right: 30px;
  box-sizing: border-box;
  border: 2px #4D868E solid;
}
.feedback-button:hover {
  color: #ffffff;
}
.feedback-button:before {
  content: "";
  position: absolute;
  z-index:-1;
  top: 0;  left: 0;  right: 0;  bottom: 0;
  background: #4D868E;
  transform: scaleX(0);
  transform-origin: 0 50%;
  transition: transform .3s ease-out;
}
.feedback-button:hover:before {
  transform: scaleX(1);
}
.contacts {
  text-align: right;
}
.number-phone:hover, .email:hover {
  cursor: pointer;
  color: #4D868E;
}
.header-navigations-block {
  display: flex;
  align-items: center;
  padding: 40px 100px 40px 100px;
  box-sizing: border-box;
  box-shadow: 0px 7px 7px -7px rgba(184, 184, 184, 0.7);
}
.logotype {
  width: 250px;
}
.logotype:hover {
  opacity: 0.8;
  cursor: pointer;
}
.navigations-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
}
.navigation-links {
  display: flex;
  align-items: center;
  margin-right: 50px;
}
.navigation-links:hover {
  cursor: pointer;
  color: #4D868E;
}
.navigation-links > span {
  margin-right: 10px;
}
.navigation-links > img {
  width: 12px;
}
.account-link {
  display: flex;
  align-items: center;
}
.account-link:hover {
  cursor: pointer;
  color: #4D868E;
}
.account-link > img {
  width: 35px;
  margin-right: 10px;
}
@media only screen and (max-width : 1700px) {
  .header-contacts-block {
    padding: 30px 60px 30px 60px;
  }
  .header-navigations-block {
    padding: 40px 60px 40px 60px;
  }
  .navigation-links {
    margin-right: 30px;
  }
}
</style>