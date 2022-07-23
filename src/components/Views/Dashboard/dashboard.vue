<template>
  <div id="body" transition="scale-transition">
    <v-container
      fluid
      tag="section"
      style="margin-top: -20px;"
    >
    </v-container>
    <v-container id="section">
      <CardsDashboard></CardsDashboard>
      <DiagrammeEnColonne></DiagrammeEnColonne>
      <div>
        <v-row>
          <div class="col-md-6 col-12">
            <v-card class="mx-auto" color="white" dark id="Card01">
              <GrapheCirculaire></GrapheCirculaire>
            </v-card>
          </div>
          <div class="col-md-6 col-12">
            <DiagrammeEnBaton></DiagrammeEnBaton>
          </div>
        </v-row>
        <v-row>
          <div class="col-md-6 col-12">
            <v-card class="mx-auto" color="white" dark id="Card01">
              <DiagrammeStacked></DiagrammeStacked>
            </v-card>
            
          </div> 
          <div class="col-md-6 col-12">
            <v-card class="mx-auto" color="white" dark id="Card01">
              <TableauTab></TableauTab>
            </v-card>
            
          </div>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "DashboradPage",
  components: {
    CardsDashboard: () => import("./Diagrammes/CardsDashboard.vue"),
    DiagrammeEnColonne: () => import("./Diagrammes/DiagrammeEnColonne"),
    DiagrammeEnBaton: () => import("./Diagrammes/DiagrammeEnBaton"),
    GrapheCirculaire: () => import("./Diagrammes/GrapheCirculaire"),
    DiagrammeStacked: () => import("./Diagrammes/DiagrammeStacked.vue"),
    TableauTab: () => import("./Diagrammes/TableauTab.vue"),
  },
};
</script>
<style scoped>
#body {
  font-family: times New Roman;
}

.translateLefet {
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute !important;
  animation: fadein 4s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

#section {
  margin-top: 50px;
}
</style>
