<template>
  <div>
    <NavBar></NavBar>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {  
  name: 'IndexPage',
  components: {
    NavBar: () => import("@/components/Layout/NavBar.vue"),
  },
};
</script>
