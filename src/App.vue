<template>
  <div id="app">
    <Home msg="Welcome to Your Vue.js App" />
    <Info />
    <About />
    <InfoReason />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Info from "./components/Info.vue";
import InfoReason from "./components/InfoReason.vue";
import About from "./components/About.vue";

import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Home,
    Info,
    InfoReason,
    About,
    Contact,
    Footer
  }
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
