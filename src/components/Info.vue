<template>
  <div id="whoWeAre" class="mb-6">
    <div class="bg-grey-lightest">
      <div class="container mx-auto px-6 pt-32">
        <h1 class="text-center info-we font-semibold">What we believe</h1>
        <div class="items-center justify-center mt-10">
          <img src="./../assets/children.svg" alt="children " class="info-img mb-4" />
          <h2
            class="text-black font-base text-xl opacity-50 text-center px-6 py-6"
          >We believe that children are the leader of the future.</h2>
        </div>
        <div class="items-center justify-center mt-20">
          <img src="./../assets/support.svg" alt="support " class="info-img mb-4" />
          <h2
            class="text-black font-base text-xl opacity-50 text-center px-6 py-6"
          >Our role is to guide and help them to reach their potential and to support and prepare them to become their better self by providing easy accessible, high quality education regardless of their social status.</h2>
        </div>
        <div class="items-center justify-center mt-20 mb-20">
          <img src="./../assets/certification.svg" alt="free-edu " class="info-img mb-4" />
          <h2
            class="text-black font-base text-xl opacity-50 text-center px-6 py-6"
          >Fundamental education should reach to every kid free of charge no matter where they live.</h2>
        </div>
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
  }
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