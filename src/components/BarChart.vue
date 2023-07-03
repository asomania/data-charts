<template>
  <v-fade-transition>
    <div style="height: 500px; width: 500px" ref="myChart"></div>
  </v-fade-transition>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { init, ECharts } from 'echarts';
import BarChart from '../data-classes/BarChart';

export default defineComponent({
  name: 'ChartComponent',
  setup() {
    const myChart = ref<HTMLDivElement | null>(null);
    const chart = ref<ECharts | null>(null)!;

    onMounted(() => {
      if (myChart.value) {
        chart.value = init(myChart.value);

        const data = [820, 932, 901, 934, 1290, 1330, 1320];
        const categories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

        const barChart = new BarChart(data, categories);
        const options = barChart.getOptions();

        if (chart.value) {
          chart.value.setOption(options);
        }
      }
    });

    return {
      myChart
    };
  }
});
</script>

<style scoped>
</style>
