<template>
  <div id="act" style="display: none;">
    <div class="overlay">
      <form class="form__wrapper">
        <div style="display: block; width: 100%;">
          <div class="title-form">Запросить акт сверки</div>
          <div class="button-close">
            <span class="closebtn" @click="actForm">&times;</span>
          </div>

          <div class="input-title">Контактное лицо:</div>
          <div class="select__container">
            <select name="Основное контактное лицо" required>
              <option value="Основное контактное лицо">Основное контактное лицо</option>
              <option value="Вариант ответа №2">Вариант ответа №2</option>
              <option value="Вариант ответа №3">Вариант ответа №3</option>
            </select>
          </div>

          <div class="input-title">Телефон для связи:</div>
          <div class="input__container">
            <masked-input v-model="phone" mask="\+\7 (111) 111 11-11" name="Телефон" type="text" placeholder="Телефон" required></masked-input>
          </div>

          <div class="input-title">Организация:</div>
          <div class="select__container">
            <select name="Организация" required>
              <option value="Основная организация">Основная организация</option>
              <option value="Вариант ответа №2">Вариант ответа №2</option>
              <option value="Вариант ответа №3">Вариант ответа №3</option>
            </select>
          </div>

          <div class="input-date__container">
            <div class="input-date__wrapper">
              <div class="input-title">Начало периода:</div>
              <label for="start"></label>
              <input class="input-date" type="date" id="start" name="Дата" value="date" min="2021-01-01" max="2023-12-31">
            </div>
            <div>
              <div class="input-title">Конец периода:</div>
              <label for="finished"></label>
              <input class="input-date" type="date" id="finished" name="Дата" value="date" min="2021-01-01" max="2023-12-31">
            </div>
          </div>

          <div class="input-title">Комментарий:</div>
          <div class="data__container">
            <textarea name="Сообщение" placeholder="Комментарий"></textarea>
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
        name: "ActsForm",
        components: {
            MaskedInput
        },
        methods : {
            actForm(){
                let form = document.getElementById("act");
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
  #act {
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
  .input__container > input:focus, .select__container > select:focus,
  .data__container > textarea:focus, .input-date:focus {
    outline: none;
    background-color: #ffffff;
    border: 2px #e1e1e1 solid;
  }
  .data__container > textarea {
    height: 150px;
  }
  .input-title {
    font-weight: bold;
    margin-bottom: 15px;
  }
  .input-date__container {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }
  .input-date__wrapper {
    margin-right: 30px;
  }
  .input-date {
    padding: 20px;
    box-sizing: border-box;
    font-size: 18px;
    font-family: SourceSansPro;
    color: #222222;
    border-radius: 15px;
    background-color: #F6F6F6;
    border: 2px #F6F6F6 solid;
    cursor: pointer;
  }
  .button__container {
    @extend %buttons;
    margin: 20px auto 0;
  }
  @media only screen and (max-width : 1700px) {
    .overlay {
      width: 35em;
      top: 25%;
    }
  }
</style>