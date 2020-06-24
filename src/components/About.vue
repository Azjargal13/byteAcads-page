<template>
  <div id="whatWeDo" class="mb-6">
    <div class="bg-grey-lightest">
      <div class="container mx-auto px-6 pt-20 pb-12">
        <h1 class="text-center info-about font-semibold">What we do</h1>
        <div class="items-center mt-10">
          <p
            class="text-black font-base text-l text-center px-6 py-6"
          >We develop an online learning platform which serves the objective to be reached to school students need.</p>
        </div>
      </div>

      <div class="container mx-auto px-6 pt-32">
        <h1 class="text-center font-semibold info-about">What values we provide</h1>
        <p
          class="text-center px-6 py-6 mt-10"
        >We aspire our learning platform can give valuable experience to each of our users.</p>
        <div class="flex md:flex-no-wrap xs:flex-wrap items-center justify-center mt-24">
          <div class="px-6 py-6 m-2 text-center hover:shadow-lg">
            <img src="./../assets/teacher.svg" alt="tutoring " class="info-about-img mb-4" />
            <h3 class="mb-4 text-2xl opacity-75">Personalized tutoring</h3>
            <p
              class="text font-base text-sm opacity-75"
            >One to one online personalized tutoring with experienced teachers.</p>
          </div>
          <div class="px-6 py-6 m-2 text-center hover:shadow-lg">
            <img src="./../assets/study.svg" alt="study" class="info-about-img mb-4" />
            <h3 class="mb-4 text-2xl opacity-60">International Olympiads, exams preparation</h3>
            <p
              class="text-black font-base text-sm opacity-75"
            >Prepare international exams and Olympiads by discussing with teachers and using quality materials.</p>
          </div>
        </div>
        <div class="flex md:flex-no-wrap xs:flex-wrap items-center justify-center xs:mt-0">
          <div class="flex-1">
            <div class="px-6 py-6 m-2 text-center hover:shadow-lg">
              <img src="./../assets/group.svg" alt="peer " class="info-about-img mb-4" />
              <h3 class="mb-4 text-2xl opacity-60">Peer review</h3>
              <p
                class="text-black font-base text-sm opacity-75"
              >Review friends study notes, materials and help each other.</p>
            </div>
            <div class="px-12 py-12 m-4 text-center hover:shadow-lg">
              <img src="./../assets/classmate.svg" alt="classmate " class="info-about-img mb-4" />
              <h3 class="mb-4 text-2xl opacity-60">Classmate group</h3>
              <p
                class="text-black font-base text-sm opacity-75"
              >Form a group, discuss subjects and share study materials.</p>
            </div>
            <div class="px-12 py-12 m-4 text-center hover:shadow-lg">
              <img src="./../assets/evaluation.svg" alt="homework " class="info-about-img mb-4" />
              <h3 class="mb-4 text-2xl opacity-60">Homework/Test evaluation</h3>
              <p
                class="text-black font-base text-sm opacity-75"
              >Teachers evaluate homework and exam, provide feedback to each student.</p>
            </div>
          </div>
          <div class="flex-1">
            <div class="px-12 py-12 m-4 text-center hover:shadow-lg">
              <img src="./../assets/feedback.svg" alt="feedback" class="info-about-img mb-4" />
              <h3 class="mb-4 text-2xl opacity-60">Feedback from teacher</h3>
              <p
                class="text-black font-base text-sm opacity-75"
              >Receive feedback from teacher on given assignments and clarify doubts.</p>
            </div>
            <div class="px-12 py-12 m-4 text-center hover:shadow-lg">
              <img src="./../assets/materials.svg" alt="materials " class="info-about-img mb-4" />
              <h3 class="mb-4 text-2xl opacity-60">Diverse study materials</h3>
              <p
                class="text-black font-base text-sm opacity-75"
              >Freely access various study materials such as book, notes, online lessons.</p>
            </div>
            <div class="px-12 py-12 m-4 text-center hover:shadow-lg">
              <img src="./../assets/scholar.svg" alt="scholarship" class="info-about-img mb-4" />
              <h3 class="mb-4 text-2xl opacity-60">Open information for scholarships</h3>
              <p
                class="text-black font-base text-sm opacity-75"
              >Latest national or international scholarship information</p>
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
        class="curve-svg"
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
  margin-bottom: -12px;
  overflow-x: hidden;
}

.curve-svg {
  width: 250%;
  overflow: scroll;
  position: relative;
  animation-name: mymove;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-timing-function: linear;
  animation-fill-mode: none;
}
@keyframes mymove {
  from {
    left: -200px;
  }
  to {
    left: 0px;
  }
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