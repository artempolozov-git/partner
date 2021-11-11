<template>
  <section class="home__main-screen__container">
    <div class="main__block">
      <div class="title__wrapper">
        <h1 class="title">Экспертные решения для управленческого учета</h1>
        <div class="advantages-description">
          <div>Контроль и планирование</div>
          <div class="advantage">Повышение эффективности</div>
          <div class="advantage">Развитие и результат</div>
        </div>
        <div class="feedback-button">
          <span>Оставить заявку</span>
        </div>
      </div>
      <div class="image__block">
        <img src="@/assets/images/robot-mainpage.svg">
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "MainScreen",
    }
</script>

<style scoped>
.home__main-screen__container {
  padding: 0 150px;
}
.main__block {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 100px;
  box-sizing: border-box;
  border-radius: 30px;
  background: linear-gradient(45deg, rgba(32, 195, 208, 0.11) 10%, rgba(57, 116, 208, 0.11) 64%, rgba(82, 34, 208, 0.11) 100%);
}
.title {
  font-size: 3vw;
  font-weight: normal;
  margin-bottom: 40px;
}
.advantages-description {
  display: flex;
  font-family: SourceCodePro;
  color: #0086C9;
  font-weight: bold;
}
.advantage {
  margin-left: auto;
}
.image__block {
  width: 70%;
  margin-left: 100px;
}
.feedback-button {
  font-family: SourceCodePro;
  width: max-content;
  padding: 15px 40px;
  margin-top: 50px;
  box-sizing: border-box;
  border: 1px #222222 solid;
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
</style>