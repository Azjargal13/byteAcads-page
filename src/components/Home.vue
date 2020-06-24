<template>
  <!-- <img src="https://source.unsplash.com/1_CMoFsPfso/1600x900" />
  <img src="https://source.unsplash.com/bF2vsubyHcQ/1600x900" />-->
  <div class="bg-home h-auto w-auto">
    <header class="container mx-auto">
      <Navigation />
      <div class="pt-16 lg:flex items-center">
        <div class="lg:w-4/6">
          <img
            src="./../assets/online.svg"
            alt="image"
            class="xl:h-auto lg:h-150 md:h-120 sm:h-100 xs:h-100"
          />
        </div>
        <div class="lg:w-full xs:m-0 md:m-1 md:pl-24 md:pr-24 justify-center">
          <h1
            class="text-white font-medium font-serif lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl mb-4 lg:w-5/5 text-center"
          >Welcome to ByteAcads</h1>

          <h4
            class="text-gray-400 font-thin lg:text-2xl md:text-2xl sm:text-xl xs:text-lg mb-4 lg:w-5/5 text-center"
          >EdTech</h4>
          <h5
            class="text-white font-medium lg:text-3xl md:text-2xl sm:text-xl xs:text-lg mb-4 lg:w-5/5 text-center"
          >Quality K-12 education for every child</h5>
          <div
            class="text-gray-400 font-light mt-8 text-justify lg:text-xl lg:w-5/5 md:text-md sm:text-sm xs:text-sm"
          >Online learning platform which helps primary and secondary school students to discover their own interests and support them to fulfill their future endeavors through quality education.</div>
        </div>
      </div>
    </header>
    <div style="height: 150px; overflow: hidden;" class="mt-32">
      <!-- <svg viewBox="0 0 150 50" preserveAspectRatio="none" style="height: 100%; width: 100%;">
        <path
          d="M0.00,92.27 C216.83,192.92 304.30,8.39 500.00,109.03 L500.00,0.00 L0.00,0.00 Z"
          style="stroke: none;fill: white;"
        />
      </svg>-->
    </div>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
export default {
  name: "Home",
  components: {
    Navigation
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-home {
  background-color: #235789;
}
</style>
