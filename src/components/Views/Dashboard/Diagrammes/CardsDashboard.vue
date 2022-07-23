<template>
    <v-row>
        <v-col cols="12" md="3">
          <v-card class="mx-auto" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-subtitle>Entreprise</v-list-item-subtitle>
                <v-list-item-title class="text-h5 Bvalue">
                  +256
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-avatar tile class="Vavtar" size="80" color="#00cae3">
                <v-icon color="white" id="GIcon">fas fa-building</v-icon>
              </v-list-item-avatar>
            </v-list-item>

            <v-divider></v-divider>
            <v-card-title id="VcardTiltle">
            <v-icon id="VcardTiltleIcon" color="grey"  >mdi-account-group-outline</v-icon >
              &nbsp;
              <p id="VcardTiltleP">Nombre des entreprisess</p>
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="12" md="3">
          <v-card class="mx-auto" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-subtitle>Achat</v-list-item-subtitle>
                <v-list-item-title class="text-h5 Bvalue">
                  - 256 DT
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-avatar tile class="Vavtar" size="80" color="#e91e63">
                <v-icon color="white" id="GIcon">fas fa-cart-arrow-down</v-icon>
              </v-list-item-avatar>
            </v-list-item>

            <v-divider></v-divider>
            <v-card-title id="VcardTiltle">
              <v-icon id="VcardTiltleIcon" color="grey"
                >mdi-clipboard-list-outline</v-icon
              >
              &nbsp;
              <p id="VcardTiltleP">Nombre des article achté</p>
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="12" md="3">
          <v-card class="mx-auto" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-subtitle>Vente</v-list-item-subtitle>
                <v-list-item-title class="text-h5 Bvalue">
                 + 80 
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-avatar tile class="Vavtar" size="80" color="#4caf50">
                <v-icon color="white" id="GIcon">fas fa-cart-plus</v-icon>
              </v-list-item-avatar>
            </v-list-item>

            <v-divider></v-divider>
            <v-card-title id="VcardTiltle">
              <v-icon id="VcardTiltleIcon" color="grey"
                >mdi-format-list-numbered</v-icon
              >
              &nbsp;
              <p id="VcardTiltleP">Nombre des article vendue</p>
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="12" md="3">
          <v-card class="mx-auto" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-subtitle>Solde</v-list-item-subtitle>
                <v-list-item-title class="text-h5 Bvalue">
                  +200
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-avatar tile class="Vavtar" size="80" color="#ff9800">
                <v-icon color="white" id="GIcon">fas fa-cash-register</v-icon>
              </v-list-item-avatar>
            </v-list-item>

            <v-divider></v-divider>
            <v-card-title id="VcardTiltle">
              <v-icon id="VcardTiltleIcon" color="grey"
                >mdi-head-lightbulb</v-icon
              >
              &nbsp;
              <p id="VcardTiltleP">Solde</p>
            </v-card-title>
          </v-card>
        </v-col>
    </v-row>
</template>


<script>

export default {
  components: {
  },
  data: () => ({
    nbONG: null,
  }),
 
};
</script>

<style scoped>

#body {
  font-family: times New Roman;
  }

.Vavtar {
  bottom: 38px;
  border-radius: 10px !important;
  box-shadow: 3px 3px 7px #d5d5d5;
}
.Bvalue {
  margin-top: -53px;
}

.v-sheet.v-card {
  border-radius: 8px;
}
.v-divider {
  margin-top: -30px;
  margin-right: 6px;
  margin-left: 6px;
}

.v-list-item__content {
  margin-top: -15px;
  margin-left: 5px;
}

#VcardTiltle {
  padding-bottom: 0px;
  padding-left: 24px;
  padding-right: 0;
  padding-top: 0px;
  padding-right: 0px;
  color: grey;
  font-size: 12px;
}

#VcardTiltleP {
  padding-top: 8px;
  padding-left: 8px;
}
#VcardTiltleIcon {
  bottom: 4px;
  left: 3px;
}

#GIcon {
  font-size: 42px;
}


</style>