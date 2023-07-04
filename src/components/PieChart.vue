<template>
  <v-fade-transition>
    <div style="height: 500px; width: 500px" ref="myChart"></div>
  </v-fade-transition>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { init, ECharts } from "echarts";
import PieChart from "../data-classes/PieChart";

export default defineComponent({
  name: "PieChart",
  setup() {
    const myChart = ref<HTMLDivElement | null>(null);
    const chart = ref<ECharts | null>(null)!;

    onMounted(() => {
      if (myChart.value) {
        chart.value = init(myChart.value);

        const data = [108, 135, 180, 284, 100];
        const categories = [
          "Zeytin",
          "Elma",
          "Armut",
          "Kiwi",
          "Kavun",
        ];

        const pieChart = new PieChart(data, categories);
        const options = pieChart.getOptions();

        chart.value.setOption(options);
      }
    });
    return {
      myChart
    };
  },
});
</script>
