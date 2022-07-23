<template>
  <div id="chart" class="pb-5" >
  <h3 class="text-center pt-5"> Statistique des Action a Clôturer </h3>
  <v-divider id="VDividerGraphCirc"></v-divider>
  <div style="margin-left: 50px;">
    <apexchart 
        class="pt-5"
         type="pie" 
         width="390" 
         :options="chartOptions" 
         :series="series"></apexchart>
  </div>
  </div>
</template>


<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data: () => ({
      series: [44, 55, 13, 43, 22],
          chartOptions: {
            chart: {
              width: 380,
              type: 'pie',
            },
            labels: ['Affecter', 'Terminé', 'En Cours', 'Réfuser', 'Transférer'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },          
  }),
  methods: { 
  },
   created() {
  } 
};
</script>

<style scoped>

#body {
  font-family: times New Roman;
  }

  h3{
  color:black;
  }
#VDividerGraphCirc{
background-color: gray;margin-right: 9px;margin-left: 9px;margin-top: 21px;
}
</style>