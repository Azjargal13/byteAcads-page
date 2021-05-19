<template>
  <div
    class="flex items-center justify-between flex-wrap p-8 place-item-center"
  >
    <div>
      <svg width="200" height="70">
        <rect width="200" height="70" rx="8" ry="8" style="fill:#fbe134;" />
        <text x="10" y="50" fill="#0b0c0c" class="logoText">ByteAcads</text>
      </svg>
    </div>
    <div class="block lg:hidden">
      <button
        @click="toggleMenu"
        class="flex items-center px-3 py-2 border rounded text-grey-lightest border-grey-lightest hover:text-main-green hover:border-main-green focus:outline-none"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <nav
      class="w-full text-gray-200 lg:flex items-center lg:w-auto "
      v-bind:class="{ 'nav-menu-mb': menu, hidden: !menu }"
    >
      <a
        href="#"
        v-scroll-to="'#whoWeAre'"
        class="block mt-4 lg:inline-block lg:mt-0 sm:text-right font-medium no-underline hover:text-main-green hover:underline mr-4"
        >who we are</a
      >
      <a
        href="#"
        v-scroll-to="'#whatWeDo'"
        class="block mt-4 lg:inline-block sm:text-right lg:mt-0 font-medium no-underline text-grey-lightest hover:underline hover:text-main-green mr-4"
        >what we do</a
      >
      <a
        href="#"
        v-scroll-to="'#whyWe'"
        class="block mt-4 lg:inline-block sm:text-right lg:mt-0 font-medium no-underline text-grey-lightest hover:underline  hover:text-main-green mr-4"
        >why ByteAcads?</a
      >
    </nav>
    <nav class="text-yellow-300 font-medium">
      <select class="langSwitch" v-model="$i18n.locale">
        <option selected value="mn">Монгол</option>
        <option value="en">English</option>
      </select>
    </nav>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      menu: false,
    };
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    },
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu;
    },
  },
};
</script>
<style scoped>
.logoText {
  font-size: 36px;
  font-weight: bold;
  font-family: "Quicksand", sans-serif;
}
.nav-menu-mb {
  flex-direction: column;
}
.langSwitch {
  background: none;
  font-weight: 600;
  cursor: pointer;
}
option {
  background: yellow;
  color: black;
}
</style>
