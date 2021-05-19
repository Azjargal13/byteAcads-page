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
        <div
          class="lg:w-full xs:m-0 md:m-1 md:pl-24 md:pr-24 justify-center pt-8"
        >
          <p
            class="text-white font-medium font-serif text-3xl lg:text-5xl md:text-4xl xs:text-2xl mb-4 lg:w-5/5 text-center"
          >
            {{ $t("name") }}
          </p>

          <h4
            class="text-gray-400 font-thin text-xl lg:text-2xl md:text-2xl xs:text-lg mb-4 lg:w-5/5 text-center"
          >
            {{ $t("type") }}
          </h4>
          <h5
            class="text-white font-medium lg:text-3xl trxt-xl md:text-2xl xs:text-lg mb-4 lg:w-5/5 text-center sm:pa-5"
          >
            {{ $t("shortIntro") }}
          </h5>
          <div
            class="text-gray-400 font-light mt-8 px-8 text-justify pb-8 text-md lg:text-xl lg:w-5/5 md:text-md xs:text-sm"
          >
            Online learning platform which helps primary and secondary school
            students to discover their own interests and support them to fulfill
            their future endeavors through quality education.
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
export default {
  name: "Home",
  components: {
    Navigation,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg-home {
  background-color: #235789;
}
</style>
