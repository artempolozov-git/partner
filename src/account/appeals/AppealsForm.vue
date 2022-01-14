<template>
  <div id="appeals" style="display: none;">
    <div class="overlay">
      <form class="form__wrapper">
        <div style="display: block; width: 100%;">
          <div class="title-form">Оставить обращение</div>
          <div class="button-close">
            <span class="closebtn" @click="appealsForm">&times;</span>
          </div>

          <div class="input-title">Контактное лицо:</div>
          <div class="select__container">
            <select name="Контактное лицо" required>
              <option value="Основное контактное лицо">Основное контактное лицо</option>
              <option value="Вариант ответа №2">Вариант ответа №2</option>
              <option value="Вариант ответа №3">Вариант ответа №3</option>
            </select>
          </div>

          <div class="input-title">Телефон для связи:</div>
          <div class="input__container">
            <masked-input v-model="phone" mask="\+\7 (111) 111 11-11" name="Телефон" type="text" placeholder="Телефон" required></masked-input>
          </div>

          <div class="input-title">Причина обращения:</div>
          <div class="select__container">
            <select name="Основное контактное лицо" required>
              <option value="Не классифицирована">Не классифицирована</option>
              <option value="Настройка ПК">Настройка ПК</option>
              <option value="Настроить ЭЦП">Настроить ЭЦП</option>
              <option value="Вопрос по программе 1С">Вопрос по программе 1С</option>
              <option value="Настроить ЭЦП">Доработка 1С</option>
              <option value="Проблема с кассовым оборудованием">Проблема с кассовым оборудованием</option>
              <option value="Проблема с торговым оборудованием">Проблема с торговым оборудованием</option>
              <option value="Настроить принтер">Настроить принтер</option>
            </select>
          </div>

          <div class="input-title">Срочность:</div>
          <div class="radio-button__container">
            <div class="radio-input">
              <input type="radio" id="standart" name="select" value="Стандартная срочность" checked>
              <label for="standart">Стандартная срочность</label>
            </div>
              <input type="radio" id="extra" name="select" value="Экстренное">
              <label for="extra">Экстренная (может потребоваться дополнительная оплата)</label>
          </div>

          <div class="input-title">Описание проблемы:</div>
          <div class="data__container">
            <textarea name="Сообщение" placeholder="Описание"></textarea>
          </div>

          <div class="input-title">Приложите файл:</div>
          <div class="file-button__container">
            <input type="file" name="Файл" accept=".jpg, .jpeg, .png, .doc, .docx, .xls, .xlsx, .txt" multiple>
          </div>

          <button class="button__container" type="submit">Отправить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
    import MaskedInput from 'vue-masked-input'
    export default {
        name: "AppealsForm",
        components: {
            MaskedInput
        },
        methods : {
            appealsForm(){
                let form = document.getElementById("appeals");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            },
        }
    }
</script>

<style lang="scss" scoped>
  .button-close {
    transition: 0.3s;
    position: absolute;
    z-index: 100;
    right: 25px;
    top: 15px;
  }
  .closebtn {
    color: #222222;
    font-weight: normal;
    font-size: 50px;
    line-height: 1em;
    cursor: pointer;
  }
  .closebtn:hover {
    color: #5f5f5f;
  }
  .closebtn::selection {
    outline: none;
    background: transparent;
  }
  #appeals {
    height: 100%;
    width: 100%;
    position: fixed;
    background-color: rgba(30, 30, 30, 0.3);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10000;
  }
  .overlay {
    height: 100%;
    width: 40em;
    top: 10%;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    overflow: auto;
    z-index: 100;
    position: fixed;
  }
  .overlay::-webkit-scrollbar {
    width: 0;
  }
  .form__wrapper {
    display: flex;
    padding: 70px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #ffffff;
  }
  .title-form {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 50px;
  }
  .input__container{
    font-family: SourceSansPro;
  }
  .input__container > input, .select__container > select, .data__container > textarea{
    @extend %inputStyle;
    margin-bottom: 30px;
  }
  .data__container > textarea {
    height: 150px;
  }
  .input-title {
    font-weight: bold;
    margin-bottom: 15px;
  }
  .radio-button__container {
    font-size: 18px;
    font-family: SourceSansPro;
    color: #222222;
    margin-bottom: 30px;
  }
  .radio-input {
    margin-bottom: 10px;
  }
  .button__container {
    @extend %buttons;
    margin: 50px auto 0;
  }
  @media only screen and (max-width : 1700px) {
    .overlay {
      width: 35em;
      top: 25%;
    }
  }
</style>