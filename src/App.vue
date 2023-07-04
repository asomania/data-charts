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
          <BarChart></BarChart>
        </v-window-item>

        <v-window-item value="two">
          <PieChart></PieChart>
        </v-window-item>

        <v-window-item value="three">
          <YBarChart></YBarChart>
        </v-window-item>
      </v-window>
    
  </v-card>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import BarChart from "./components/BarChart.vue"
import YBarChart from "./components/YBar.vue"
import PieChart from "./components/PieChart.vue"

export default defineComponent({
  name: "App",

  components: {
    BarChart,
    YBarChart,
    PieChart
  },
  data() {
    return {
      tab: null,
      items: ["Bar", "Pie", "YBar"],
      //
    };
  },
});
</script>
