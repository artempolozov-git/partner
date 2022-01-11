<template>
  <section class="footer__form__container">
    <form class="form__wrapper" id="feedback-form" action="" method="POST">
      <div class="form__title__container">
        <h2 class="title__section">Остались вопросы?</h2>
        <p class="subtitle">Пожалуйста оставьте свои контактные данные,
          наш специалист свяжется с вами и ответит
          на все интересующие вас вопросы!</p>
        <div class="send-button">
          <input type="submit" value="Связаться">
        </div>
      </div>
      <div class="input__container">
        <div class="data-input">
          <input name="Имя" type="text" placeholder="Имя" required>
        </div>
        <div class="input__block">
          <div class="data-input indent">
            <masked-input v-model="phone" mask="\+\7 (111) 111 11-11" name="Телефон" type="text" placeholder="Телефон" required></masked-input>
          </div>
          <div class="data-input">
            <input name="Эл.почта" type="text" placeholder="Эл.почта" required>
          </div>
        </div>
        <div class="data-input">
          <textarea name="Сообщение" placeholder="Сообщение"></textarea>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
    import MaskedInput from 'vue-masked-input'
    export default {
        name: "FooterForm",
        components: {
            MaskedInput
        },
    }
</script>

<style scoped>
.footer__form__container {
  padding: 100px 250px;
  box-sizing: border-box;
  max-width: 1920px;
  margin: auto;
}
.form__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  padding: 70px;
  box-sizing: border-box;
  background-color: #ffffff;
}
.form__title__container {
  width: 40%;
  margin-right: 50px;
}
.title__section {
  font-size: 36px;
  font-weight: bold;
  margin: 0 0 15px;
}
.subtitle {
  color: #848484;
  margin: 0;
}
.send-button {
  margin-top: 50px;
}
.send-button > input {
  padding: 20px 80px;
  font-family: SourceSansPro;
  font-size: 18px;
  font-weight: bold;
  box-sizing: border-box;
  color: #5222d0;
  background-color: rgba(82, 34, 208, 0.11);
  border-radius: 30px;
  transition: all 0.2s ease-out;
  border: none;
}
.send-button > input:hover {
  color: #ffffff;
  cursor: pointer;
  background-color: #5222D0;
  transition: all 0.2s ease-out;
}
.input__container {
  width: 50%;
}
.data-input {
  width: 100%;
}
.data-input > input, .data-input > textarea {
  width: 100%;
  height: 70px;
  padding: 20px;
  box-sizing: border-box;
  font-size: 18px;
  font-family: SourceSansPro;
  color: #222222;
  border-radius: 15px;
  background-color: #F6F6F6;
  border: 2px #F6F6F6 solid;
  resize: none;
}
.data-input > input:focus, .data-input > textarea:focus {
  outline: none;
  background-color: #ffffff;
  border: 2px #e1e1e1 solid;
}
.data-input > textarea {
  height: 150px;
  margin-top: 30px;
}
.indent {
  margin-right: 30px;
}
.input__block {
  display: flex;
  align-items: center;
  margin-top: 30px;
}
@media only screen and (max-width : 1700px) {
  .footer__form__container {
    padding: 100px 150px;
  }
  .form__wrapper {
    padding: 50px;
  }
}
</style>