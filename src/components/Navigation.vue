<template>
  <nav class="flex items-center justify-between flex-wrap p-8">
    <!-- <app-logo></app-logo> -->
    <div>
      <svg width="200" height="100">
        <rect width="200" height="70" rx="8" ry="8" style="fill:#fbe134;" />
        <text x="10" y="50" fill="#0b0c0c" class="logoText">ByteAcads</text>
      </svg>
    </div>
    <div class="block lg:hidden">
      <button
        @click="toggleMenu"
        class="flex items-center px-3 py-2 border rounded text-grey-lightest border-grey-lightest hover:text-main-green hover:border-main-green focus:outline-none"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full lg:flex items-center lg:w-auto sm:block" v-bind:class="{'xs:hidden': menu}">
      <a
        href="#"
        v-scroll-to="'#whoWeAre'"
        class="block mt-4 lg:inline-block lg:mt-0 sm:text-right font-medium no-underline text-grey-lightest hover:text-main-green mr-4"
      >who we are</a>
      <a
        href="#"
        v-scroll-to="'#whatWeDo'"
        class="block mt-4 lg:inline-block sm:text-right lg:mt-0 font-medium no-underline text-grey-lightest hover:text-main-green mr-4"
      >what we do</a>
      <a
        href="#"
        v-scroll-to="'#whyWe'"
        class="block mt-4 lg:inline-block sm:text-right lg:mt-0 font-medium no-underline text-grey-lightest hover:text-main-green mr-4"
      >why ByteAcads?</a>
    </div>
  </nav>
</template>

<script>
// import AppLogo from "./AppLogo.vue"
export default {
  components: {
    // AppLogo
  },
  data() {
    return {
      menu: true
    };
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
    }
  }
};
</script>
<style scoped>
.logoText {
  font-size: 36px;
  font-weight: bold;
  font-family: "Quicksand", sans-serif;
}
</style>