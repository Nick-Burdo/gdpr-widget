<template>
  <section>
    <v-parallax :src="bgImage" height="300">
      <v-layout
          column
          align-center
          justify-center
          class="white--text"
      >
        <h1 class="white--text mb-2 display-1 text-xs-center">GDPR Gateway</h1>
        <div class="subheading mb-3 text-xs-center">Simplest way to the users data control</div>
        <v-btn
            tag="router-link"
            class="blue lighten-2 mt-5"
            dark
            large
            to="/signup">
            Get Started
        </v-btn>
      </v-layout>
    </v-parallax>
  </section>
</template>

<script>
  import bgImage from '@/assets/images/photo_47493_20151007.jpg';
  export default {
    name: "SectionA",
    data: () => ({
      bgImage
    })
  }
</script>

<style scoped>

</style>