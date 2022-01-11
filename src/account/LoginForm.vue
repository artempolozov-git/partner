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

<style scoped>
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
    width: 35em;
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
    width: 100%;
    height: 70px;
    padding: 20px;
    margin-bottom: 30px;
    box-sizing: border-box;
    font-size: 18px;
    font-family: SourceSansPro;
    color: #222222;
    border-radius: 15px;
    background-color: #F6F6F6;
    border: 2px #F6F6F6 solid;
    resize: none;
  }
  .input__container > input:focus {
    outline: none;
    background-color: #ffffff;
    border: 2px #e1e1e1 solid;
  }
  .button__container {
    display: flex;
    margin: 20px auto 0;
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
  .button__container:hover {
    color: #ffffff;
    cursor: pointer;
    background-color: #5222D0;
    transition: all 0.2s ease-out;
  }
  @media only screen and (max-width : 1700px) {
    .overlay {
      width: 35em;
      top: 25%;
    }
  }
</style>