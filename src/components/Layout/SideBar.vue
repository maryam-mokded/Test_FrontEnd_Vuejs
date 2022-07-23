<template>
  <v-list shaped>
    <v-list-item-group v-model="selectedItem" >
      <v-list-item to="/index/dashboard" v-if="isAdmin">
        <v-list-item-action v-on="on" v-bind="attrs">
          <v-icon>dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title to="/">
            Tableau de bord
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
  
      <v-list-item to="/index/liste" v-if="isAdmin">
        <v-list-item-action>
          <!-- <v-icon>fas fa-circle-notch fa-spin</v-icon> -->
           <v-icon>fas fa-users</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
           Utilisateurs
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>    

      <v-list-item to="/index/accueil" v-if="!isAdmin">
        <v-list-item-action>
           <v-icon>fas fa-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
           Accueil
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>    

    </v-list-item-group>
  </v-list>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  data: () => ({
  }),
  computed: mapGetters(["isAdmin","isUser"]),
  mounted() {
  },
};
</script>

<style scoped>
#colorSideBarModeDark {
  color: white;
}
#colorSideBarModeLight {
  color: black;
}

#drawerModeDark {
  background-color: #0b0b0b !important;
  box-shadow: 7px 4px 21px #ccc !important;
}

#drawerModeLight {
  background-color: #f7f7f7 !important;
  box-shadow: 7px 4px 21px #ccc !important;
}

hr {
  margin-right: 11px !important;
  margin-left: 11px !important;
  height: 1.1px;
  background-color: #6c6c6c;
  border: none;
}

.v-list-item:hover {
  color: #1b4ae4;
  border-radius: 6%;
  margin-left: 5px;
  margin-right: 5px;
}
.v-list-group:hover {
  color: #1b4ae4;
  border-radius: 6%;
  margin-left: 5px;
  margin-right: 5px;
}


/* width */
::-webkit-scrollbar {
  width: 20px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: red; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
}
</style>

















