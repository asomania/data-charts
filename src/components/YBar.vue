<template>
    <v-fade-transition>
      <div style="height: 500px; width: 500px" ref="myChart"></div>
    </v-fade-transition>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { init, ECharts } from 'echarts';
  import YBarChart from '../data-classes/YBarChart';
  
  export default defineComponent({
    name: 'ChartComponent',
    setup() {
      const myChart = ref<HTMLDivElement | null>(null);
      const chart = ref<ECharts | null>(null)!;
  
      onMounted(() => {
        if (myChart.value) {
          chart.value = init(myChart.value);
  
          const data1 = [820, 932, 901, 934 ];
          const data2 = [890, 532, 801, 1034];
          const categories = ['THY', 'Pegasus', 'SunExpress', 'Anadolu Jet'];
  
          const yBarChart = new YBarChart(data1, data2 ,categories);
          const options = yBarChart.getOptions();
  
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
  