<template>
  <section>
    <v-parallax :src="bgImage" height="380">
      <v-layout column align-center justify-center>
        <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
        <em>Kick-start your application today</em>
        <v-btn
            tag="router-link"
            class="blue lighten-2 mt-5"
            dark
            large
            to="/signup"
        >
          Get Started
        </v-btn>
      </v-layout>
    </v-parallax>
  </section>
</template>

<script>
  import bgImage from '@/assets/images/section.jpg'
  export default {
    name: "SectionC",
    data: () => ({
      bgImage
    })
  }
</script>

<style scoped>

</style>