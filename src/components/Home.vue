<template>
  <!-- <img src="https://source.unsplash.com/1_CMoFsPfso/1600x900" />
  <img src="https://source.unsplash.com/bF2vsubyHcQ/1600x900" />-->
  <div class="bg-home">
    <header class="container mx-auto">
      <Navigation />
      <div class="pt-16 lg:flex items-center">
        <div class="lg:w-1/2 text-center">
          <img
            src="./../assets/online.svg"
            alt="image"
            class="xl:bgImg lg:h-150 md:h-120 sm:h-100 xs:h-100"
          />
        </div>
        <div class="w-auto xs:m-0 md:m-1 md:pl-24 md:pr-24 justify-center">
          <h1
            class="text-primary font-medium lg:text-5xl md:text-3xl sm:text-xl xs:text-lg mb-4 lg:w-5/5 text-center"
          >Welcome to ByteAcads!</h1>

          <h4
            class="text-primary font-medium lg:text-2xl md:text-2xl sm:text-xl xs:text-lg mb-4 lg:w-5/5 text-center"
          >EdTech</h4>
          <h5
            class="text-primary font-medium lg:text-3xl md:text-2xl sm:text-xl xs:text-lg mb-4 lg:w-5/5 text-center"
          >Quality K-12 education for every child</h5>
          <div
            class="text-primary opacity-90 mt-8 text-justify lg:text-xl lg:w-5/5 md:text-md sm:text-sm xs:text-sm"
          >Online learning platform which helps primary and secondary school students to discover their own interests and support them to fulfill their future endeavors.</div>
        </div>
      </div>
    </header>
    <!-- <div data-v-7d15857f class="curve-shape">
      <svg data-v-7d15857f x="0px" y="0px" viewBox="0 0 3841 120" xml:space="preserve">
        <path
          data-v-7d15857f
          d="M3360.5,97.739c-242,0-480-48.375-480-48.375
                        S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
                        S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"
          style="fill: rgb(255, 255, 255); stroke-miterlimit: 10;"
        />
      </svg>
    </div>-->
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
  /* background-color: #235789; */
  height: 600px;
}
</style>
