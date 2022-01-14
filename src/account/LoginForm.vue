<template>
  <div id="login" style="display: none;">
    <div class="overlay">
      <form class="form__wrapper">
        <div style="display: block; width: 100%;">
          <div class="title-form">Вход в личный кабинет</div>
          <div class="button-close">
            <span class="closebtn" @click="loginForm">&times;</span>
          </div>

          <div class="input__container">
            <input name="Логин" type="text" placeholder="Логин" required/>
          </div>

          <div class="input__container">
            <input name="Пароль" type="password" placeholder="Пароль" required/>
          </div>

          <button class="button__container" type="submit" v-on:click="goToPage('/account')">Войти</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        data(){
            return {
            }
        },
        computed: {

        },
        methods: {
            loginForm(){
                let form = document.getElementById("login");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            },
            goToPage(page) {
                this.$router.push(page);
                window.scrollTo(0,0);
                let formClose = document.getElementById("login");
                formClose.style.display = 'none'
            },
        },
    };
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
  #login {
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
    width: 30em;
    top: 50%;
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
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 50px;
  }
  .input__container {
    font-family: SourceSansPro;
  }
  .input__container > input{
    @extend %inputStyle;
    margin-bottom: 30px;
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