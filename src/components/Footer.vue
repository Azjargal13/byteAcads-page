<template>
  <div class="pt-24">
    <div class="bg-footer">
      <div class="w-full text-center pt-8 opacity-25">
        <a href="#" v-scroll-to="'#app'">
          <!-- <img src="./../assets/up-arrow.svg" alt class="h-6" /> -->
        </a>
      </div>

      <div class="w-full text-center">
        <div>
          <!-- <img src="./../assets/pine.svg" alt="Dasos Logo" class="h-16 mt-8" /> -->
        </div>
        <div class="text-grey-lightest fond-bold text-2xl">ByteAcads</div>
      </div>
      <div class="flex items-start justify-center text-center text-grey-lightest mt-24">
        <div class="md:w-1/5 xs:w-1/3">
          <div class="font-bold text-lg">Services</div>
          <div class="flex flex-col items-center font-thin text-sm opacity-50 mt-4">
            <a href="#" class="no-underline text-grey-lightest">Personalized tutoring</a>
            <a href="#" class="no-underline text-grey-lightest mt-2">Olympiad preparation</a>
            <a href="#" class="no-underline text-grey-lightest mt-2">Peer review</a>
            <a href="#" class="no-underline text-grey-lightest mt-2">Classmate group</a>
            <a href="#" class="no-underline text-grey-lightest mt-2">Homework evaluation</a>
          </div>
        </div>
        <div class="md:w-1/5 xs:w-1/3">
          <div class="font-bold text-lg">Application</div>
          <div class="flex flex-col items-center font-thin text-sm opacity-50 mt-4">
            <a href="#" class="no-underline text-grey-lightest">
              Online learning platform
              <span class="md:inline-block xs:hidden">(web)</span>
            </a>
          </div>
        </div>
        <div class="md:w-1/5 xs:w-1/3">
          <div class="font-bold text-lg">Company</div>
          <div class="flex flex-col items-center font-thin text-sm opacity-50 mt-4">
            <a href="#" class="no-underline text-grey-lightest">About Us</a>
            <a href="#" class="no-underline text-grey-lightest mt-2">Jobs</a>
            <a href="#" class="no-underline text-grey-lightest mt-2">Sitemap</a>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap mt-12 items-center justify-center p-3">
        <div class="text-grey-lightest text-sm opacity-75 text-center">
          <p>All rights reserved.</p>&copy; copyright by
          <a
            href="https://github.com/Azjargal13"
            class="no-underline text-blue"
          >ByteAcads in 2020.</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.bg-footer {
  background-color: #fbe134;
}
</style>