import  Axios from '../../../Axios.js';

const state = {
    ListeUser: [],
};

const getters = {
    GetAllUser: state => state.ListeUser,
};

const actions = {
    async AfficherListeUser({commit}) {
        const response = await Axios.get("/users");    
        commit('setListeUser', response.data);
    },  
    async AjouterUser( { commit }, user) {
        const response = await Axios.post("/user", user);
        commit('AddUser', response.data.user);
    },
    async SupprimerUser( { commit }, user) {
        const response = await Axios.delete("/user/" + user.id);
        commit('Delete', response.data.user);
    },
    

};


const mutations = {
    setListeUser: (state, users) => state.ListeUser = users,
    AddUser: (state, user) => state.ListeUser =+ user,    
    Delete: (state, user) => state.ListeUser = state.ListeUser.filter(t => user.id !== t.id),
};

export default {
    state, getters, actions, mutations
}