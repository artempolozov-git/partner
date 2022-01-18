<template>
  <footer class="footer">
    <footer-form></footer-form>
    <div class="footer__container">
      <div class="footer-contacts__block">
        <div class="logotype"><img src="@/assets/icons/logotype-white.svg"></div>
        <div class="feedback__wrapper">
          <div class="feedback-button" @click="FeedbackForm">
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
        components: {FooterNavigation, FooterForm},
        methods: {
            FeedbackForm() {
                let form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            },
        },
    }
</script>

<style lang="scss" scoped>
.footer {
  background-color: #222222;
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
  width: 13vw;
}
.feedback__wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: auto;
}
.feedback-button {
  @extend %buttons;
  color: #ffffff;
  margin-right: 40px;
  background-color: rgba(255, 255, 255, 0.11);
}
.contacts {
  text-align: right;
  font-size:  $additional-fontsize;
}
.phone > a, .email > a {
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  color: #ffffff;
}
.phone {
  margin-bottom: 5px;
}
.phone > a:hover, .email > a:hover {
  color: #0093da;
  text-decoration: underline;
}
@media only screen and (max-width : 1700px) {
  .footer__container {
    padding: 100px;
  }
}
</style>