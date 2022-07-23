<template>
  <div id="body">
    <v-container
      fluid
      id="section"
      tag="section" 
    >
      <v-row justify="space-around" class="Btn">
        <v-spacer></v-spacer>
        <v-col cols="auto">
          <v-dialog transition="dialog-top-transition" max-width="600">
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" id="Btn" v-on="on">Ajouter</v-btn>
            </template>
            <template v-slot:default="dialog">
              <v-card>
                <v-toolbar color="grey lighten-2" dark><h2 class="black--text">Ajouter utilisateur</h2></v-toolbar>
                <v-card-text>
                  <div class="text-h2 pa-8">
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="Nom et prènom"
                          outlined 
                          v-model="NewUser.name"
                          solo
                          placeholder="nom et prénoms"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Email*"
                          outlined
                          v-model="NewUser.email"
                          solo
                          placeholder="example@exapmle.com"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Mot de passe*"
                          v-model="NewUser.password"
                          outlined
                          solo
                          type="password"
                          placeholder="********"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </div>
                </v-card-text>
                
        <v-divider></v-divider>
                <v-card-actions class="justify-end ">
                  <v-btn text color="primary" @click="{dialog.value = false , AddUser()}">Enregistrer</v-btn>  
                  <v-btn text color="error" @click="dialog.value = false">Fermer</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-row>
       
       
      <base-v-component heading="Members Tables" />
      <base-material-card>
        <v-data-table
          :headers="headers"
          :items="GetAllUser"
          :search="search"
          sort-by="GetAllUser"
          :items-per-page="5"
          class="elevation-1"
        >
         
          <template v-slot:[`item.valider`]="{ item }">
            <v-chip outlined :color="getValiderColor(item.valider)" dark>
              {{ item.valider }}
            </v-chip>
          </template>

          <template v-slot:top>
            <v-toolbar elevation="20" id="headerTable">
              <v-toolbar-title> Liste des utilisateurs </v-toolbar-title>

              <v-spacer></v-spacer>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify-expand"
                  label="Recherche.."
                  single-line
                  hide-details
                ></v-text-field>
              </v-col>
            </v-toolbar>
          </template>

          <template v-slot:[`item.actions`]="{ item }">
                


<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on : onDialog }">
      
       <v-tooltip bottom> 
              <template v-slot:activator="{ on: onTooltip }">
                <v-btn
                  class="ma-2"
                  outlined
                  small
                  fab
                  v-if="item.valider == 'valider'"
                   v-on="{ ...onDialog, ...onTooltip }"
                  color="green"
                  @click="EditeUser(item)"
                >
                  <v-icon>fas fa-edit</v-icon></v-btn
                >
              </template>
              <span>Modifier</span>
            </v-tooltip>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Modifier Utilisateur
        </v-card-title>

        <v-card-text>
       
         <div class="text-h2 pa-8">
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          label="Nom et prènom"
                          outlined 
                          v-model="OldUser.name"
                          solo
                          placeholder="nom et prénoms"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Email*"
                          outlined
                          v-model="OldUser.email"
                          solo
                          placeholder="example@exapmle.com"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </div>
                

        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="updateUser()"
          >
            Enregistrer
          </v-btn>
          <v-btn
            color="error"
            text
            @click="dialog = false"
          >
            Fermer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


    <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  v-on="on"
                  class="ma-2"
                  outlined
                  small
                  v-if="item.valider == 'valider'"
                  fab
                  color="red"
                  @click="DeleteUser(item)"
                >
                  <v-icon> fas fa-trash-can </v-icon>
                </v-btn>
              </template>
              <span>Supprimer</span>
            </v-tooltip>
             <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn
                  v-on="on"
                  v-if="item.valider == 'Non valider'"
                  class="ma-2"
                  outlined
                  small
                  fab
                  color="primary "
                  @click="ValiderUser(item)"
                >
                  <v-icon> fas fa-check </v-icon>
                </v-btn>
              </template>
              <span>Valider</span>
            </v-tooltip>
          </template>

        </v-data-table>
      </base-material-card>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Service from "@/Services/Service";
export default {
  name: "PageAccueil", 
  props: ["ListeUser"],
  data() {
    return {
     dialog: false,
      dialogEdit: false,
      NewUser : {
        name: "",
        email:"",
        password:"" 
      },
      OldUser: {
        id:"",
        name:"",
        email:""
      },
      search: "",
      headers: [
        {
          text: "Nom et prénom",
          align: "start",
          filterable: false,
          value: "name",
        },
        { text: "Email", value: "email" },
        { text: "Valider", value: "valider" },
        { text: "Actions", align: "center", value: "actions", sortable: false },
      ],
    };
  },
  created() {
    this.AfficherListeUser();
  },
  computed: mapGetters(["GetAllUser","isUser","isAdmin"]),
  methods: {
    ...mapActions([
      "AfficherListeUser",
      "AjouterUser",
      "SupprimerUser",
      "ValidationUser"
    ]),
    getValiderColor(valider) {
      if (valider == "valider") return "green";
      else return "orange darken-1";
    },
    EditeUser(user) {
      this.dialog = true;
      this.OldUser.id = user.id;
      this.OldUser.name = user.name;
      this.OldUser.email = user.email;
    },
    updateUser() {
      this.dialog = false;
      console.log(this.OldUser);
      Service.ModifierUser(this.OldUser)
          .then(() => {
              this.AfficherListeUser();
               this.$toast("utilisateur modsifié ", {
                  timeout: 2000
              });
          })
          .catch((error) => {
            console.log(error);
          });
      this.dialogEdit = false;
    },
    AddUser() {
      this.AjouterUser(this.NewUser);
      this.AfficherListeUser();
      this.$toast("utilisateur ajouté ", {
          timeout: 2000
      });
    },
    ValiderUser(user){ 
    Service.ValidationUser(user.id)
          .then(() => {
              this.AfficherListeUser();
               this.$toast("utilisateur validé ", {
                  timeout: 2000
              });
          })
          .catch((error) => {
            console.log(error);
          });
    },
    DeleteUser(user){
      this.SupprimerUser(user);
      this.AfficherListeUser();
       this.$toast("utilisateur supprimé", {
          timeout: 2000
      });
    }
  },
};
</script>



<style scoped>
#section{
    margin-top: 49px;
}
#body {
  font-family: times New Roman;
}
#headerTable {
  margin-left: 15px;  
  bottom: 30px;
  margin-right: 15px;
  background-color: white !important;
  border-radius: 5px !important;
  color: black !important;
  font-weight: bold;
  font-family: times New Roman !important;
}
#ColorIconDetails {
  color: white;
}
#searchInput {
  margin-bottom: 30px;
  padding-left: 24px;
}
#part2 {
  margin-left: 14px;
  margin-top: 18px;
  display: grid;
  grid-template-columns: 46% 53%;
  font-size: 20px;
}
#parte21 {
  font-weight: bold;
}
#btnConfirmer {
  margin-right: 11px !important;
}
a {
  text-decoration: none;
}
#btnColor {
  color: white;
}
#Btn{
  background-color : teal;
  color: white;
  margin-right :20px;
}
a {
  height: 55px !important;
}
#icon {
  font-size: 32px !important;
}
.v-btnModif {
  bottom: 16px;
}
.Btn{
  margin-bottom: 49px;
  color :teal;
}
</style>