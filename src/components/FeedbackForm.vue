<template>
  <div id="feedback" style="display: none;">
    <div class="overlay">
      <form class="form__wrapper">
        <div style="display: block; width: 100%;">
          <div class="title-form">Оставить заявку</div>
          <div class="button-close">
            <span class="closebtn" @click="FeedbackForm">&times;</span>
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

          <button class="button__container" type="submit">Отправить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
    import MaskedInput from 'vue-masked-input'
    export default {
        name: "FeedbackForm",
        components: {
            MaskedInput
        },
        methods: {
            FeedbackForm() {
                let form = document.getElementById("feedback");
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
  #feedback {
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
    width: 35vw;
    top: 25%;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    overflow: auto;
    z-index: 100;
    position: fixed;
  }
  .form__wrapper {
    display: flex;
    padding: 70px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #ffffff;
  }
  .title-form {
    font-size: $subtitle-fontsize;
    font-weight: bold;
    text-align: center;
    margin-bottom: 50px;
  }
  .data-input {
    width: 100%;
  }
  .data-input > input, .data-input > textarea {
    @extend %inputStyle;
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
  .button__container {
    @extend %buttons;
    margin: 50px auto 0;
  }
</style>