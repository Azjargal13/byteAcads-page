<template>
  <div id="features" class="mb-6">
    <div class="bg-grey-lightest">
      <div class="container mx-auto px-6 pt-32">
        <h1 class="text-center font-semibold info-about">What values we give</h1>

        <div class="flex md:flex-no-wrap xs:flex-wrap items-center justify-center mt-24">
          <div class="px-6 py-6 m-2 text-center hover:shadow-lg">
            <img src="./../assets/teacher.svg" alt="tutoring " class="info-about-img mb-4" />
            <h3 class="mb-4 text-2xl opacity-60">Personalized tutoring</h3>
            <p
              class="text-black font-base text-sm opacity-50"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim urna eu eros facilisis commodo. Pellentesque nec sem.</p>
          </div>
          <div class="px-6 py-6 m-2 text-center hover:shadow-lg">
            <img src="./../assets/study.svg" alt="study" class="info-about-img mb-4" />
            <h3 class="mb-4 text-2xl opacity-60">International exam/Olympiads preparation</h3>
            <p
              class="text-black font-base text-sm opacity-50"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim urna eu eros facilisis commodo. Pellentesque nec sem.</p>
          </div>
        </div>
        <div class="flex md:flex-no-wrap xs:flex-wrap items-center justify-center xs:mt-0">
          <div class="flex-1">
            <div class="px-6 py-6 m-2 text-center hover:shadow-lg">
              <img src="./../assets/group.svg" alt="peer " class="info-about-img mb-4" />
              <h3 class="mb-4 text-2xl opacity-60">Peer review</h3>
              <p
                class="text-black font-base text-sm opacity-50"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim urna eu eros facilisis commodo. Pellentesque nec sem.</p>
            </div>
            <div class="px-12 py-12 m-4 text-center hover:shadow-lg">
              <img src="./../assets/classmate.svg" alt="classmate " class="info-about-img mb-4" />
              <h3 class="mb-4 text-2xl opacity-60">Classmate group</h3>
              <p
                class="text-black font-thin text-xs opacity-50"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim urna eu eros facilisis commodo. Pellentesque nec sem.</p>
            </div>
            <div class="px-12 py-12 m-4 text-center hover:shadow-lg">
              <img src="./../assets/evaluation.svg" alt="homework " class="info-about-img mb-4" />
              <h3 class="mb-4 text-2xl opacity-60">Homework evaluation</h3>
              <p
                class="text-black font-thin text-xs opacity-50"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim urna eu eros facilisis commodo. Pellentesque nec sem.</p>
            </div>
          </div>
          <div class="flex-1">
            <div class="px-12 py-12 m-4 text-center hover:shadow-lg">
              <img src="./../assets/feedback.svg" alt="feedback" class="info-about-img mb-4" />
              <h3 class="mb-4 text-2xl opacity-60">Feedback from teacher</h3>
              <p
                class="text-black font-thin text-xs opacity-50"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim urna eu eros facilisis commodo. Pellentesque nec sem.</p>
            </div>
            <div class="px-12 py-12 m-4 text-center hover:shadow-lg">
              <img src="./../assets/materials.svg" alt="materials " class="info-about-img mb-4" />
              <h3 class="mb-4 text-2xl opacity-60">Diverse study materials</h3>
              <p
                class="text-black font-thin text-xs opacity-50"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim urna eu eros facilisis commodo. Pellentesque nec sem.</p>
            </div>
            <div class="px-12 py-12 m-4 text-center hover:shadow-lg">
              <img src="./../assets/scholar.svg" alt="scholarship" class="info-about-img mb-4" />
              <h3 class="mb-4 text-2xl opacity-60">Open information for scholarships</h3>
              <p
                class="text-black font-thin text-xs opacity-50"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim urna eu eros facilisis commodo. Pellentesque nec sem.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="outer-flow mt-5">
      <svg
        data-v-7d15857f
        x="0px"
        y="0px"
        viewBox="0 0 3841 120"
        xml:space="preserve"
        style="overflow: scroll;"
      >
        <path
          data-v-7d15857f
          d="M3360.5,97.739c-242,0-480-48.375-480-48.375
                        S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5
                        S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"
          style="fill: #235789; stroke-miterlimit: 10;"
        />
      </svg>
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
.outer-flow {
  width: 100%;
  height: 150px;
  position: relative;
  margin-bottom: -12px;
  overflow-x: hidden;
  -webkit-animation: move-left-data-v-7d15857f 6s linear infinite;
  animation: move-left-data-v-7d15857f 6s linear infinite;
}
.info-about {
  color: #235789;
  font-size: 32px;
}
.info-about-img {
  height: 100px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>