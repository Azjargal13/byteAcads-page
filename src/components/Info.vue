<template>
  <div id="whoWeAre" class="mb-6 bg-gray-100 shadow-lg">
    <div class>
      <div class="container mx-auto px-6 pt-20 pb-12">
        <sequential-entrance fromBottom delay="1300">
          <h1 class="text-center info-we font-semibold">{{ $t("title1") }}</h1>
          <div class="items-center mt-10 opacity-75">
            <p
              class="text-black font-base text-l md:text-center lg:text-center px-6 py-6 text-justify"
            >
              {{ $t("introsub1") }}
            </p>
            <p
              class="text-black font-base text-l lg:text-center md:text-center text-justify px-6 py-6"
            >
              {{ $t("introsub2") }}
            </p>
          </div>
        </sequential-entrance>
      </div>

      <div class="container mx-auto px-6 pt-20">
        <sequential-entrance fromBottom delay="1100" tag="div">
          <h1 class="text-center info-we font-semibold">{{ $t("title2") }}</h1>
          <div class="items-center justify-center mt-10">
            <img
              src="./../assets/children.svg"
              alt="children "
              class="info-img mb-4"
            />
            <h2
              class="text-black font-base text-l lg:text-center md:text-center text-justify  px-6 py-6 opacity-75"
            >
              {{ $t("introsub3") }}
            </h2>
          </div>
          <div class="items-center justify-center mt-20">
            <img
              src="./../assets/support.svg"
              alt="support "
              class="info-img mb-4"
            />
            <h2
              class="text-black font-base text-l lg:text-center md:text-center text-justify  px-6 py-6 opacity-75"
            >
              {{ $t("introsub4") }}
            </h2>
          </div>
          <div class="items-center justify-center mt-20 mb-20">
            <img
              src="./../assets/certification.svg"
              alt="free-edu "
              class="info-img mb-4"
            />
            <h2
              class="text-black font-base text-llg:text-center md:text-center text-justify  px-6 py-6 opacity-75"
            >
              {{ $t("introsub5") }}
            </h2>
          </div>
        </sequential-entrance>
      </div>
    </div>
    <svg
      id="curveDownColor"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="100%"
      height="100"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path style="fill: #fbe134;" d="M0 0 C 90 100 50 100 120 0 Z" />
    </svg>
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
.info-we {
  color: #235789;
  font-size: 32px;
}
.info-img {
  height: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
