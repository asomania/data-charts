<template>
  <v-card>
    <v-tabs
      v-model="tab"
     
    >
      <v-tab value="one">Bar</v-tab>
      <v-tab value="two">Pie</v-tab>
      <v-tab value="three">Y-Bar</v-tab>
    </v-tabs>

  
      <v-window v-model="tab">
        <v-window-item value="one">
          One
        </v-window-item>

        <v-window-item value="two">
          Two
        </v-window-item>

        <v-window-item value="three">
          Three
        </v-window-item>
      </v-window>
    
  </v-card>
</template>


<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: "App",

  // components: {
  //   HelloWorld,
  // },

  data() {
    return {
      tab: null,
      items: ["Bar", "Pie", "YBar"],
      //
    };
  },
});
</script>
