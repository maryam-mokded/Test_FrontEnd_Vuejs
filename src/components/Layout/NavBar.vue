
<template>
  <nav id="Nbody">
    <v-app-bar id="navbar" app>
      <v-icon
        color="black"
        class="MenuICon"
        @click.stop="drawer=!drawer;mini=!mini">mdi-dots-vertical</v-icon>
      <v-toolbar-title class="text-uppercase">
       <span class="font-weight" id="color">Nom application</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      
      <v-menu
        bottom
        left
        offset-y
        origin="top right"
        transition="scale-transition"
      >
        <template v-slot:activator="{ attrs, on }">
          <v-btn class="ml-2" min-width="0" text v-bind="attrs" v-on="on">
            <v-badge color="red" overlap bordered>
              <template v-slot:badge>
                <span>4</span>
              </template>
              <v-icon color="black">mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>

        <v-list two-line style="font-family: times New Roman !important">
          <h3 class="text-center">Notification(s)</h3>
          <v-list-item-group
            v-model="selected"
            active-class="pink--text"
            multiple
          >
            <template v-for="(item, index) in items">
              <v-list-item :key="item.title" style="width: 300px">
                <template v-slot:default="{ active }">
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>

                    <v-list-item-subtitle
                      class="text--primary"
                      v-text="item.headline"
                    ></v-list-item-subtitle>

                    <v-list-item-subtitle
                      v-text="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-list-item-action-text
                      v-text="item.action"
                    ></v-list-item-action-text>

                    <v-icon v-if="!active" color="grey lighten-1">
                      mdi-star-outline
                    </v-icon>

                    <v-icon v-else color="yellow darken-3"> mdi-star </v-icon>
                  </v-list-item-action>
                </template>
              </v-list-item>
              <v-divider
                v-if="index < items.length - 1"
                :key="index"
              ></v-divider>
            </template>
          </v-list-item-group>
          <v-divider></v-divider>
          <router-link to="">
            <h3 class="text-center">Voir plus</h3></router-link
          >
        </v-list>
      </v-menu>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on" class="BtnAvatar">
            <v-icon left id="color">expand_more</v-icon>
              <v-toolbar-title class="text-uppercase">
            <span id="color">            
                Mokded Maryam
            </span> &nbsp;&nbsp;
              </v-toolbar-title>
            <v-avatar size="40" color="teal" class="white--text"> MM </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-item-group
            multiple
            color="indigo"
            flat
            style="font-family: times New Roman !important">
            <router-link active-link="active">
              <v-list-item active-class="border">
                <v-list-item-title>
                  <v-icon color="black" right>person</v-icon>
                  Profile
                </v-list-item-title>
              </v-list-item>
            </router-link>
            
            <router-link active-link="active" to="" >
              <v-list-item active-class="border"  @click="LogoutUser()">
                <v-list-item-title>
                  <v-icon color="black" right>exit_to_app</v-icon> Déconnexion
                </v-list-item-title>
              </v-list-item>
            </router-link>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
      color="#ffffff"
    >
      <v-list-item class="px-1" >
        <v-list-item-avatar color="#000000" size="50">
           <img src="../../assets/PhotoProfil.png" />
         </v-list-item-avatar>
        <v-list-item-title>
          <span>Mokded Maryam</span>
        </v-list-item-title>
      </v-list-item>
      <hr />
      <SideBar></SideBar>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  components: {
    SideBar: () => import("./SideBar"),
  
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    drawer: false,
    mini: false,
    selected: [2],
    items: [],
  }),
 
  methods: {
   
    GetAllNotificationsMessage(){
      this.items = [
          {
            action: "15 min",
            headline: "benjemaahanin@gmail.com",
            subtitle: `Je n'arrive pas à accéder à la plateforme`,
            title: "Hanin Ben Jemaà",
          },
          {
            action: "2 hr",
            headline: "smiri@gmail.com",
            subtitle: `Quand devrions-nous lancer un nouvel événement`,
            title: "Wissem Smiri",
          },
          {
            action: "6 hr",
            headline: "hedhli@yahoo.fr",
            subtitle: "Où je peut trouver le rapport de réunion?",
            title: "Houssem Hedhli",
          },
          {
            action: "12 hr",
            headline: "Maryem mokded ",
            subtitle: "Nouvelle inscription ajoutée",
            title: "mariem.mokded@gmail.com",
          },
        ]
    },
    LogoutUser(){
      console.log("Logout");
    },
  },
  created() {
   },
};
</script>

<style scoped>
.border {
  border-left: 4px solid #0ba518;
}

#color {
  color: black;
}

#colorSideBarModeDark {
  color: white;
}
#colorSideBarModeLight {
  color: black;
}

#drawerModeDark {
  background-color: #283046 !important;
  box-shadow: 7px 4px 21px #ccc !important;
}

#drawerModeLight {
  background-color: #ffffff !important;
  box-shadow: 7px 4px 21px #ccc !important;
}

.nameSB {
  padding-top: 15px !important;
}

hr {
  margin-right: 11px !important;
  margin-left: 11px !important;
  height: 1.1px;
  background-color: #6c6c6c;
  border: none;
}
a {
  text-decoration: none;
}

#icon {
  color: white;
  left: 15px;
}
#smallText {
  margin-left: 89px;
  font-size: 12px;
  color: gray;
}
#Nbody {
  background-color: #eeeeee;
  font-family: times New Roman;
}

.v-navigation-drawer__content {
  background-color: #0b0b0b !important;
}

.BtnAvatar {
  padding-right: 0px !important;
  right: -8px;
}

.v-icon.v-icon.v-icon--link {
  padding: 6px !important;
  margin-right: 10px;
}

#nbNotification {
  background-color: #ff0000;
  magrin-top: -20px !important;
  color: white;
  border-radius: 50%;
  padding: 4px;
  font-size: 12px;
  border: 1.1px solid white;
  margin-left: -9px;
}

.layout.column {
  margin-left: -39px;
  margin-top: -3px;
}

#listItemTitle {
  margin-left: 30px !important;
}

#EmailInvitation {
  text-decoration: underline;
  font-size: 12px;
  color: blue;
}

#navbar {
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 12px !important;
  margin-left: 15px;
  margin-right: 15px;
}
.menuable__content__active{
  top: 80px !important;
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