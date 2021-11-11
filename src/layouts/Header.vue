<template>
  <header class="header__container">
    <div class="header-contacts__block">
      <div class="logotype" v-on:click="goToPage('/')" title="Главная"><img src="@/assets/icons/logotype.svg"></div>
      <div class="feedback__wrap">
        <div class="feedback-button">
          <span>Обратная связь</span>
        </div>
        <div class="contacts">
          <div class="phone"><a href="tel:+74742501502">+7 (4742) 501-502</a></div>
          <div class="email"><a href="mailto:info@partner-its.ru">info@partner-its.ru</a></div>
        </div>
      </div>
    </div>
    <header-navigation></header-navigation>
  </header>
</template>

<script>
    import HeaderNavigation from "@/components/HeaderNavigation";
    export default {
        name: "Header",
        components: {HeaderNavigation},
        methods: {
            goToPage(page) {
                this.$router.push(page);
                window.scrollTo(0,0);
            }
        },
    }
</script>

<style scoped>
.header__container {
  font-family: SourceCodePro;
  color: #222222;
}
.header-contacts__block {
  display: flex;
  align-items: center;
  padding: 30px 250px;
  box-sizing: border-box;
  border-bottom: 1px #C3C6C8 solid;
}
.feedback__wrap {
  display: flex;
  align-items: center;
  margin-left: auto;
}
.feedback-button {
  padding: 15px 40px;
  margin-right: 30px;
  box-sizing: border-box;
  border: 1px #222222 solid;
  border-radius: 30px;
  transition: all 0.2s ease-out;
}
.feedback-button:hover {
  color: #ffffff;
  cursor: pointer;
  border: 1px #5222D0 solid;
  background-color: #5222D0;
  transition: all 0.2s ease-out;
}
.contacts {
  text-align: right;
}
.phone > a, .email > a {
  cursor: pointer;
  text-decoration: none;
  color: #222222;
  border-bottom: 1px #4d868e solid;
  transition: all 0.2s ease-out;
}
.phone {
  margin-bottom: 5px;
}
.phone > a:hover, .email > a:hover {
  color: #4d868e;
  transition: all 0.2s ease-out;
}
.logotype {
  width: 200px;
  cursor: pointer;
}
@media only screen and (max-width : 1700px) {
  .header-contacts__block {
    padding: 30px 100px;
  }
}
</style>