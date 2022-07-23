<template> 
      <div id="chart" class="pt-5" >
        <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
      </div>
</template>


<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data: () => ({
       series: [{
              name: "Desktops",
              data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            title: {
              text: 'Product Trends by Month',
              align: 'left'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
          },      
  }),
  methods: { 
  },
   created() {
  } 
};
</script>

<style scoped>
#chart{
    background-color: white;
    margin: 2px;
    margin-bottom:29px;
    border-radius: 10px;
}
</style>