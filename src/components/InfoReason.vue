<template>
  <div id="whyWe" class>
    <div class="bg-gray-100 pb-10">
      <div class="container mx-auto px-6 pt-32">
        <sequential-entrance fromBottom delay="4000" tag="div">
          <h1 class="text-center font-semibold info-reason">Why ByteAcads?</h1>
          <div class="flex mt-16 p-4 mx-auto my-auto text-gray-600 font-light text-center text-xl">
            <div class="flex-2">
              <div class="items-center justify-center mt-10">
                <h2 class="text-xl text-center px-6 py-6">High quality and Equal education</h2>
              </div>
              <div class="items-center justify-center mt-20">
                <h2 class="text-xl text-center px-6 py-6">Technology backed</h2>
              </div>
              <div class="items-center justify-center mt-20">
                <h2 class="text-xl text-center px-6 py-6">Easy to use</h2>
              </div>
            </div>

            <div>
              <img
                src="./../assets/team.svg"
                alt="image"
                class="xl:h-auto lg:h-150 md:h-120 sm:h-100 xs:h-100 p-12"
              />
            </div>
            <div class="flex-2">
              <div class="items-center justify-center mt-10">
                <h2 class="px-6 py-6">Understand our customers well</h2>
              </div>
              <div class="items-center justify-center mt-20 mb-20">
                <h2 class="px-6 py-6">Affordable & friendly application cost</h2>
              </div>
              <div class="items-center justify-center mt-20 mb-20">
                <h2 class="px-6 py-6">Dedicated, talented team</h2>
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
  }
};
</script>
<style scoped>
.info-reason {
  color: #235789;
  font-size: 32px;
}
</style>