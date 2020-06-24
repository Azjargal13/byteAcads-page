<template>
  <div id="app">
    <div
      class="container w-auto h-auto"
      v-if="isLoading"
      style="top:50%; left:50%; position:absolute"
    >
      <RippleLoader color="#235789" />
    </div>

    <div v-if="!isLoading">
      <Home />
      <Info />
      <About />
      <InfoReason />
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Info from "./components/Info.vue";
import InfoReason from "./components/InfoReason.vue";
import About from "./components/About.vue";

import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

import { RippleLoader } from "vue-spinners-css";

export default {
  name: "App",
  components: {
    Home,
    Info,
    InfoReason,
    About,
    Contact,
    Footer,
    RippleLoader
  },
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    window.addEventListener("load", () => {
      this.isLoading = !this.isLoading;
    });
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
