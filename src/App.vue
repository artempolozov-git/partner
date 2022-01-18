<template>
  <div id="app">
    <router-view name="header"></router-view>
    <div id="app-content">
      <transition name="app-router-fade" mode="out-in">
        <router-view :key="defaultViewKey"></router-view>
      </transition>
    </div>
    <login-form></login-form>
    <feedback-form></feedback-form>
    <appeals-form></appeals-form>
    <acts-form></acts-form>
    <router-view name="reviews"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import LoginForm from "@/account/LoginForm";
import AppealsForm from "@/account/appeals/AppealsForm";
import ActsForm from "@/account/act/ActsForm";
import FeedbackForm from "@/components/FeedbackForm";
export default {
    name: 'App',
    components: {
        FeedbackForm,
        ActsForm,
        AppealsForm,
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
    font-family: SourceSansPro;
    font-size: 18px;
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
    font-family: SourceSansPro;
    src: url('./assets/SourceSansPro-SemiBold.ttf');
    font-weight: bold;
  }
  @font-face {
    font-family: SourceSansPro;
    src: url('./assets/SourceSansPro-Regular.ttf');
    font-weight: normal;
  }
  #app-content {
    flex: 1 0 auto;
    max-width: 1920px;
    align-self: center;
    width: -webkit-fill-available;
  }
</style>
