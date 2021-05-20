<template>
  <div id="whyWe" class="sm:auto-cols-min">
    <div class="bg-gray-100 pb-10">
      <div class="container flex flex-row mx-auto px-6 pt-32">
        <sequential-entrance fromBottom delay="4000" tag="div">
          <h1 class="text-center font-semibold info-reason">
            {{ $t("title5") }}
          </h1>
          <div
            class="flex mt-16 p-4 mx-auto my-auto text-gray-600 font-light text-center text-xl"
          >
            <div class="flex-1">
              <div class="items-center justify-center mt-10">
                <h2 class="text-xl text-center px-6 py-6">
                  {{ $t("reason1") }}
                </h2>
              </div>
              <div class="items-center justify-center mt-20">
                <h2 class="text-xl text-center px-6 py-6">
                  {{ $t("reason2") }}
                </h2>
              </div>
              <div class="items-center justify-center mt-20">
                <h2 class="text-xl text-center px-6 py-6">
                  {{ $t("reason3") }}
                </h2>
              </div>
            </div>

            <div class="hidden md:block lg:block">
              <img
                src="./../assets/team.svg"
                alt="image"
                class="xl:h-auto lg:h-150 md:h-120 sm:h-100 xs:h-100 p-12"
              />
            </div>
            <div class="flex-1">
              <div class="items-center justify-center mt-10">
                <h2 class="px-6 py-6">{{ $t("reason4") }}</h2>
              </div>
              <div class="items-center justify-center mt-20 mb-20">
                <h2 class="px-6 py-6">
                  {{ $t("reason5") }}
                </h2>
              </div>
              <div class="items-center justify-center mt-20 mb-20">
                <h2 class="px-6 py-6">{{ $t("reason6") }}</h2>
              </div>
            </div>
          </div>
        </sequential-entrance>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.info-reason {
  color: #235789;
  font-size: 32px;
}
</style>
