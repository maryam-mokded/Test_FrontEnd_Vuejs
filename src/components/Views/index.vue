<template>
  <div id="body">
    <NavBar></NavBar>
    <div>
    <v-scroll-x-transition mode="in" hide-on-leave="true">
      <router-view></router-view>
    </v-scroll-x-transition> 
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  components: {
    NavBar: () => import("@/components/Layout/NavBar.vue"),
  },
};  
</script>

<style scoped>
#body {
  font-family: times New Roman;
  paddings-top: 100px;
  margin-left : 30px; 
}
</style>