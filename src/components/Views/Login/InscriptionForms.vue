<template>

<div>
      <v-alert
            text
            prominent
            type="error"
            icon="fas fa-exclamation-triangle"
            v-if="errors != null">
            {{ errors }}
          </v-alert>
      <v-form>
          <v-text-field
            outlined
            v-model="user.name"
            label="Nom et prènom*"
            placeholder="Entrer votre nom et prènom"
            type="email"
            color="teal darken-3"
            solo
            required
          /> 
          <v-text-field
            outlined
            v-model="user.email"
            label="E-mail *"
            placeholder="Entrer votre Email"
            append-icon="email"
            type="email"
            color="teal darken-3"
            solo
            required
          />
          <v-text-field
             placeholder="Tapez votre mot de passe"
            outlined
            v-model="user.password"
            :counter="30"
            :type="passwordShow ? 'text' : 'password'"
            label="Mot de passe *"
            name="Mot de passe"
            color="teal darken-3"
            :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="passwordShow = !passwordShow"
            solo
            required
          />
      </v-form>
      <small class="red--text"
        >* indique que les Champs sont obligatoires</small
      >
      <div class="text-center mt-3">
        <v-btn
          rounded
          color="teal darken-3"
          class="white--text"
          v-on:click="InscriptionUser()"
          >
           S'inscrire</v-btn
        >
      </div>
    </div>
</template>

<script>

import Service from "@/Services/Service";

export default {
  data: () => ({ 
    step: 1,
    passwordShow: false,
    errors: null,
    user:{
      email: "",
      password: ""
    },
  }),
  methods: {
    async clear() {
        this.user.name =
        this.user.email =
        this.user.password =
          "";
      this.$nextTick(() => {
        this.$refs.obs.reset();
      });
    },
    InscriptionUser(){
        Service.Inscriptions(this.user)
          .then(() => {
            console.log(this.user);
          })
          .catch((error) => {
            console.log(error);
          });
          this.clear();
    },
  },
};
</script>
<style scoped>
#btnins {
  bottom: -8px;
}
#mar {
  margin-bottom: 10px;
}
</style>