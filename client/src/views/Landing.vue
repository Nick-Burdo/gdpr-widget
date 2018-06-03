<template>
  <div class="home">
    <v-app light>
      <v-toolbar class="white">
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
            tag="router-link"
            class="blue lighten-2 elevation-5"
            outline
            large
            to="/login">
          Log In
        </v-btn>

      </v-toolbar>
      <v-content>
        <SectionA/>

        <SectionB/>

        <SectionC/>

        <SectionD/>

        <v-footer class="blue darken-2">
          <v-layout row wrap align-center>
            <v-flex xs12>
              <div class="white--text ml-3">
                Made with
                <v-icon class="red--text">favorite</v-icon>
                by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
                and <a class="white--text" href="https://github.com/vwxyzjn">Costa Huang</a>
              </div>
            </v-flex>
          </v-layout>
        </v-footer>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import SectionA from '@/components/section-a/SectionA.vue';
  import SectionB from '@/components/section-b/SectionB.vue';
  import SectionC from '@/components/section-c/SectionC.vue';
  import SectionD from '@/components/section-d/SectionD.vue';

    // title: 'Your Logo'

  export default {
    name: 'home',
    components: {
      SectionA,
      SectionB,
      SectionC,
      SectionD
    },
    data: () => ({
      title: 'TRLab'
    })
  }
</script>
