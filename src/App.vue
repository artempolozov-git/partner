<template>
  <div id="app">
    <router-view name="header"></router-view>
    <div id="app-content">
      <transition name="app-router-fade" mode="out-in">
        <router-view :key="defaultViewKey"></router-view>
      </transition>
    </div>
    <login-form></login-form>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";
export default {
    name: 'App',
    components: {
        LoginForm
    },
    computed: {
        defaultViewKey: function() {
            return this.$route.name;
        }
    }
}
</script>

<style>
  html, body {
    height: 100%;
  }
  body {
    margin: initial;
    font-family: RobotoSlab, SourceCodePro;
    font-size: 16px;
    line-height: 1;
    font-weight: normal;
    color: #222222;
  }
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    background-color: white;
  }
  @font-face {
    font-family: RobotoSlab;
    src: url('./assets/RobotoSlab-Bold.ttf');
    font-weight: bold;
  }
  @font-face {
    font-family: RobotoSlab;
    src: url('./assets/RobotoSlab-Medium.ttf');
    font-weight: normal;
  }
  @font-face {
    font-family: RobotoSlab;
    src: url('./assets/RobotoSlab-Regular.ttf');
    font-weight: 500;
  }
  @font-face {
    font-family: SourceCodePro;
    src: url('./assets/SourceCodePro-Bold.ttf');
    font-weight: bold;
  }
  @font-face {
    font-family: SourceCodePro;
    src: url('./assets/SourceCodePro-Medium.ttf');
    font-weight: normal;
  }
  @font-face {
    font-family: SourceCodePro;
    src: url('./assets/SourceCodePro-Regular.ttf');
    font-weight: 500;
  }
  #app-content {
    flex: 1 0 auto;
    max-width: 1920px;
    align-self: center;
    width: -webkit-fill-available;
  }
  @media only screen and (max-width : 1700px) {
    body {
      font-size: 14px;
    }
  }
</style>
