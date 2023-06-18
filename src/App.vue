<template>
  <v-app>
    <v-main>
      <!-- <HelloWorld/> -->
      <v-tabs v-model="tab" align-tabs="title">
        <v-tab v-for="item in items" :key="item" :value="item">
          {{ item }}
        </v-tab>
        <v-tab-item v-for="item in items" :key="item" :value="item">
          {{ item }} content
        </v-tab-item>
      </v-tabs>
    </v-main>
  </v-app>
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
      items: ["Item 1", "Item 2"],
      //
    };
  },
});
</script>
