<template>
  <footer class="footer">
    <footer-form></footer-form>
    <div class="footer__container">
      <div class="footer-contacts__block">
        <div class="logotype"><img src="@/assets/icons/logotype-white.svg"></div>
        <div class="feedback__wrapper">
          <div class="feedback-button">
            <span>Обратная связь</span>
          </div>
          <div class="contacts">
            <div class="phone"><a href="tel:+74742501502">+7 (4742) 501-502</a></div>
            <div class="email"><a href="mailto:info@partner-its.ru">info@partner-its.ru</a></div>
          </div>
        </div>
      </div>
      <footer-navigation></footer-navigation>
    </div>
  </footer>
</template>

<script>
    import FooterForm from "@/components/FooterForm";
    import FooterNavigation from "@/components/FooterNavigation";
    export default {
        name: "Footer",
        components: {FooterNavigation, FooterForm}
    }
</script>

<style scoped>
.footer {
  font-family: SourceCodePro;
  background-color: #1A1B22;
}
.footer__container {
  padding: 100px 250px;
  box-sizing: border-box;
  border-top: 1px solid #c3c6c8;
}
.footer-contacts__block {
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.logotype {
  width: 250px;
}
.feedback__wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: auto;
}
.feedback-button {
  padding: 15px 40px;
  margin-right: 30px;
  box-sizing: border-box;
  border: 1px #ffffff solid;
  color: #ffffff;
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
  text-decoration: underline;
  color: #ffffff;
  transition: all 0.2s ease;
}
.phone {
  margin-bottom: 5px;
}
.phone > a:hover, .email > a:hover {
  color: #0093da;
  transition: all 0.2s ease;
}
@media only screen and (max-width : 1700px) {
  .footer__container {
    padding: 100px;
  }
  .logotype {
    width: 200px;
  }
}
</style>