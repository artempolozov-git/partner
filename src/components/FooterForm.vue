<template>
  <section class="footer__form__container">
    <form class="form__wrapper" id="feedback-form" action="" method="POST">
      <div class="form__title__container">
        <h2 class="title">Остались вопросы?</h2>
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
            <input name="Телефон" type="text" placeholder="Телефон" required>
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
    export default {
        name: "FooterForm"
    }
</script>

<style scoped>
.footer__form__container {
  padding: 100px 250px;
  box-sizing: border-box;
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
.title {
  font-size: 2vw;
  font-weight: bold;
}
.subtitle {
  color: #848484;
  margin-top: 10px;
}
.send-button {
  margin-top: 50px;
}
.send-button > input {
  padding: 15px 60px;
  margin-right: 30px;
  font-size: 16px;
  box-sizing: border-box;
  background-color: transparent;
  border: 1px #222222 solid;
  border-radius: 30px;
  transition: all 0.2s ease-out;
}
.send-button > input:hover {
  color: #ffffff;
  cursor: pointer;
  border: 1px #5222D0 solid;
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
  font-size: 16px;
  font-family: SourceSansPro;
  color: #222222;
  border-radius: 15px;
  background-color: #F6F6F6;
  border: 2px #F6F6F6 solid;
  resize: none;
}
.data-input > input:focus, .data-input > textarea:focus {
  outline: none;
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