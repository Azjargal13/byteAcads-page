<template>
  <div>
    <div class="bg-footer">
      <sequential-entrance fromBottom delay="2500" tag="div">
        <div class="h-auto pt-8 justify-center items-center">
          <a href="#" v-scroll-to="'#app'">
            <img
              src="./../assets/upArrow.svg"
              class="h-8 opacity-50"
              style="left:49%; position:absolute"
            />
          </a>
        </div>

        <div class="w-full text-center mt-12">
          <div class="text-grey-lightest fond-bold text-2xl logoText">
            ByteAcads
          </div>
        </div>
        <div
          class="flex items-start justify-center text-center text-grey-lightest mt-24 px-8"
        >
          <div class="md:w-1/5 xs:w-1/3">
            <div class="font-bold text-lg">{{ $t("service") }}</div>
            <div
              class="flex flex-col flex-wrap  items-center font-thin text-sm mt-4 text-black opacity-75"
            >
              <a href="#" class="no-underline text-black">{{ $t("srvc1") }}</a>
              <a href="#" class="no-underline mt-2">{{ $t("srvc2") }}</a>
              <a href="#" class="no-underline text-grey-lightest mt-2">{{
                $t("srvc3")
              }}</a>
              <a href="#" class="no-underline text-grey-lightest mt-2">{{
                $t("srvc4")
              }}</a>
              <a href="#" class="no-underline text-grey-lightest mt-2">{{
                $t("srvc5")
              }}</a>
            </div>
          </div>
          <div class="md:w-1/5 xs:w-1/3">
            <div class="font-bold text-lg">{{ $t("app") }}</div>
            <div
              class="flex flex-col flex-wrap items-center font-thin text-sm mt-4 text-black opacity-75"
            >
              <!-- <a href="#" class="no-underline text-grey-lightest">
                <span class="md:inline-block xs:hidden">(web)</span>
              </a> -->
            </div>
          </div>
          <div class="md:w-1/5 xs:w-1/3">
            <div class="font-bold text-lg">{{ $t("company") }}</div>
            <div
              class="flex flex-col flex-wrap  items-center font-thin text-sm text-black opacity-75 mt-4"
            >
              <a href="#" class="no-underline text-grey-lightest">{{
                $t("about")
              }}</a>
              <a href="#" class="no-underline text-grey-lightest mt-2">{{
                $t("job")
              }}</a>
              <a href="#" class="no-underline text-grey-lightest mt-2">{{
                $t("sitemap")
              }}</a>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap mt-12 items-center justify-center p-3">
          <div class="text-grey-lightest text-sm opacity-75 text-center">
            <p>{{ $t("right") }}</p>
            &copy; copyright by
            <a
              href="https://github.com/Azjargal13"
              class="no-underline text-blue hover:text-gray-700"
              >ByteAcads</a
            >
            in {{ date }}.
          </div>
        </div>
      </sequential-entrance>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getUTCFullYear(),
    };
  },
};
</script>
<style scoped>
.bg-footer {
  background-color: #fbe134;
}
.logoText {
  font-family: "Quicksand", sans-serif;
}
</style>
