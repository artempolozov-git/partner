<template>
  <div id="login" style="display: none;">
    <div class="overlay">
      <form class="form-wrapper">
        <div style="display: block; width: 100%;">
          <div class="title-form">Вход в личный кабинет</div>
          <div class="button-close">
            <span class="closebtn" @click="loginForm">&times;</span>
          </div>

          <div class="input-wrapper">
            <div class="input-container">
              <input type="text" required/>
              <label>Логин</label>
            </div>
          </div>

          <div class="input-wrapper">
            <div class="input-container">
              <input type="password" required/>
              <label>Пароль</label>
            </div>
          </div>

          <button class="feedback-button" type="submit" v-on:click="goToPage('/account')">Войти</button>
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
    font-size: 35px;
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
    z-index: 100;
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
  .form-wrapper {
    display: flex;
    padding: 70px 70px;
    background-color: white;
  }
  .title-form {
    font-size: 24px;
    color: #333e48;
    text-align: center;
    margin-bottom: 70px;
  }
  .input-container{
    position: relative;
    margin-bottom: 25px;
    font-family: SourceCodePro;
  }
  .input-container label{
    position:absolute;
    top:0px;
    left:0px;
    font-size:16px;
    color: #c3c6c8;
    pointer-event:none;
    transition: all 0.3s ease-in-out;
  }
  .input-container input{
    border:0;
    border-bottom:1px solid #222222;
    background:transparent;
    width:100%;
    padding:8px 0 5px 0;
    font-size:16px;
    color: #222222;
    font-family: SourceCodePro;
  }
  .input-container input:focus{
    border:none;
    outline:none;
    border-bottom:1px solid #4D868E;
  }
  .input-container input:focus ~ label,
  .input-container input:valid ~ label{
    top:-12px;
    font-size:12px;
  }
  .input-wrapper {
    margin-bottom: 70px;
  }
  .input-title > span {
    color: #14244B;
    font-size: 1.1em;
    font-weight: bold;
  }
  .feedback-button {
    display: flex;
    margin: auto;
    padding: 15px 50px;
    box-sizing: border-box;
    text-align: center;
    color: white;
    font-size: 16px;
    font-family: SourceCodePro;
    font-weight: normal;
    background-color: #4d868e;
    border: none;
    transition: background-color 0.3s ease;
  }
  .feedback-button:hover {
    transition: background-color 0.3s ease;
    cursor: pointer;
    background-color: #7ea8ad;
  }
@media only screen and (max-width : 1700px) {
  .overlay {
    width: 35em;
    top: 25%;
  }
}
</style>