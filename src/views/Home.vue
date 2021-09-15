<template>
  <div class="home-container">
    <div class="home-title">
      <div class="title">Внедрение и сопровождение 1С</div>
      <div class="description">Автоматизация бизнес-процессов</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
.home-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  padding: 100px 100px;
}
.home-title {
  text-align: center;
}
.title {
  font-size: 50px;
  color: #4D868E;
  margin-bottom: 20px;
}
.description {
  font-family: SourceCodePro;
  color: #222222;
  font-size: 30px;
  font-weight: 500;
}
</style>