<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :items-per-page="2"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Tableau des Vocations</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
          persistent 
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Vocation 
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.id"
                      label="ID"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.vocations"
                      label="Vocations"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red  darken-1"
                class="white--text"
                @click="close"
              >
               Annuler
              </v-btn>
              <v-btn
                color="blue darken-1"
                class="white--text"
                @click="save"
              >
               Enregistrer
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" persistent max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Etes-vous sur de supprimer cet vocation ?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn  color="red  darken-1" class="white--text" @click="closeDelete">Annuler</v-btn>
              <v-btn  color="blue darken-1" class="white--text" @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'Vocation', value: 'vocation' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      id: [],
      editedIndex: -1,
      editedItem: {
       id: '',
        vocation: " ",
      
      },
      defaultItem: {
        id: '',
        vocation: " ",
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nouvelle vocation' : 'Editer Vocation'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
        id: '1',
        vocation: "Communication",
          },
          {
           id: '2',
        vocation: "Arts",
          },
          {
            id: '3',
        vocation: "Education",
          }
        ]
      },

      editItem (item) {
        this.editedIndex = this.id.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.id.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.id.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.id[this.editedIndex], this.editedItem)
        } else {
          this.id.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>