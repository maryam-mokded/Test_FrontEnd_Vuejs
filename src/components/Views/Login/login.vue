<template>
  <v-app id="body">
    <v-content>
      <v-container class="fill-height" fluid>
      
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card id="v-card" class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-5">
                        <h1
                          class="text-center display-2 teal--text text--darken-3"
                          style="font-family: times New Roman !important"
                        >
                          Connectez-vous à votre compte personnel
                        </h1>
                        <div class="text-center mt-4">
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                              <v-btn
                                v-on="on"
                                class="mx-2"
                                fab
                                dark
                                color="indigo"
                                outlined
                              >
                                <v-icon>fab fa-facebook-f</v-icon>
                              </v-btn>
                            </template>
                            <span>Facebook</span>
                          </v-tooltip>

                          <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                              <v-btn
                                v-on="on"
                                class="mx-2"
                                fab
                                dark
                                color="teal"
                                outlined
                              >
                                <v-icon>fab fa-google-plus-g</v-icon>
                              </v-btn>
                            </template>
                            <span>Google</span>
                          </v-tooltip>
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on }">
                              <v-btn
                                v-on="on"
                                class="mx-2"
                                fab
                                dark
                                color="cyan"
                                outlined
                              >
                                <v-icon>fab fa-linkedin-in</v-icon>
                              </v-btn>
                            </template>
                            <span>Linkedin</span>
                          </v-tooltip>
                        </div>
                        <h4 class="text-center mt-4">
                          Entrez vos informations ci-dessous
                        </h4>
                        <br />

                        <LoginForms></LoginForms>
                        <h3 class="text-center mt-4">
                          Avez-vous des problèmes?

                          <a v-on:click="SaveData()">
                            Réinitialiser le mot de passe</a
                          >
                        </h3>
                      </v-card-text>
                    </v-col>
                    <v-col cols="12" md="4" class="teal darken-3">
                      <v-card-text class="white--text mt-12"><br><br>   
                        <h2
                          class="text-center display-1"
                          style="font-family: times New Roman !important"
                        >
                            Création de votre compte
                          </h2>
                        <br />
                        <h2 class="text-center">
                          Entrez vos données personnelles et commencez votre
                          journée avec nous
                        </h2>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++"
                          >S'inscrire</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="teal darken-3 part">
                      <v-card-text class="white--text mt-12">
                        <h1
                          class="text-center display-1"
                          style="font-family: times New Roman !important"
                        >
                          Content de vous revoir !
                        </h1>
                        <br />
                        <h3 class="text-center">
                          Pour rester connecté avec nous, veuillez vous
                          connecter avec vos informations personnelles
                        </h3>
                      </v-card-text>
                      <br />
                      <div class="text-center">
                        <v-btn @click="step--" rounded outlined dark
                          >Se Connecter</v-btn
                        >
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 teal--text text--darken-3"
                          style="font-family: times New Roman !important"
                        >
                          S'inscrire 
                        </h1>
                        <br />
                       <InscriptionForms></InscriptionForms>
                      </v-card-text>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import LoginForms from "./LoginForms";
import InscriptionForms from "./InscriptionForms";

export default { 
  name : "LoginPage",
  components: {
    LoginForms,
    InscriptionForms,
  },
  data: () => ({
    step: 1,
  }),
  methods: {
  },
  props: {
    source: String,
  },
};
</script>
<style scoped>
#btnins {
  bottom: -10px;
}
#btncnx {
  bottom: 10px;
}
#v-card {
  box-shadow: 0px 5px 2px 7px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%),0px 1px 5px 0px rgb(0 0 0 / 12%);
}
#body {
  background-color: #f7f7f7;
  font-family: times New Roman;
}
#mtm {
  margin-top: -10px;
}

.part {
  padding-top: 122px;
}
</style>