<template>
  <div id="body">
    <br>
    <div id="btnRetour">
      <router-link to="/" id="btn" ><v-btn rounded dark color="teal">
      <v-icon left>
       fas fa-arrow-left
      </v-icon>
     Page d'accueil
    </v-btn></router-link>
    </div> 
    
 
  </div>
</template>

<style scoped>
#body {
  background-image: url("@/assets/PageNotFound.png");
  height: 694px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
#btnRetour {
  margin-left:60px;
  margin-top: 15px;
}
</style>