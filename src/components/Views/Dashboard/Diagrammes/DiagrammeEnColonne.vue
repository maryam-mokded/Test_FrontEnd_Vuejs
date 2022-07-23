<template>
    <div id="chart" class="pt-5" >
      <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>


<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data: () => ({
     series: [
  {
    "id": 1,
    "name": "Offres",
    "data": [
      76,
      85,
      101,
      98,
      87,
      105,
      91,
      114,
      94,
      10,
      20,
      100
    ]
  },
  {
    "id": 2,
    "name": "membres",
    "data": [
      44,
      55,
      57,
      56,
      61,
      58,
      63,
      60,
      66,
      58,
      52,
      150
    ]
  },
  {
    "id": 3,
    "name": "nb des membres postuler dans un offre",
    "data": [
      35,
      41,
      36,
      26,
      45,
      48,
      52,
      53,
      41,
      10,
      10,
      70
    ]
  }
],
          chartOptions: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
         title: {
              text: 'Liste des offres',
              align: 'center'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            yaxis: {
              title: {
                text: 'TND (Dinar)'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "TND " + val + " Dinar"
                }
              }
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
    margin-top: 29px;
    margin-bottom:29px;
    border-radius: 10px;
}
</style>