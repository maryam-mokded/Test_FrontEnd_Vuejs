import  Axios  from '../../../Axios';
import router from '@/Router/router';
import LocalStorageService from '@/Services/LocalStorageService';

const state = {
    authenticated: LocalStorageService.GetData("auth") ?? true ?? false,
    user: LocalStorageService.GetData("auth").user ?? null,
    token: LocalStorageService.GetData("auth").token ?? null,
    isAdmin: false,
    isUser: false,
};

const getters = { 
    isAuthenticated(state) {
        return state.authenticated;
    },
    user(state) {
        return state.user;
    },
    userToken(state) {
        return state.token;
    },
    isUser: state => state.user.role == "Utilisateur" ? true : false,
    isAdmin: state => state.user.role == "Administrateur" ? true : false,
};


const actions = {
    async Login( { commit }, user) {
        return new Promise((resolve, reject) => {
            Axios.post("/login" , user).then((response) => {
                    commit('authenticateUser', response.data);
                    if(response.data.user.role == "Administrateur"){
                      router.push({name:'DashboardPage'});
                    }else{
                        router.push({name:'AccueilPage'});
                    }
                    resolve(response)
                  })
                  .catch((error) => {
                    reject(error.response.data.message)
                    commit('setError', error.response.data.message);
                })
              });
    },
    async Logout( { commit } ) {
        await Axios.post("/logout");
        commit('unauthenticateUser');
        router.push({name:'LoginPage'});
    }, 
};

const mutations = {
    authenticateUser(state, data) {
        LocalStorageService.SaveData('auth',data);
        state.authenticated = true;
        state.token = data.token;
        state.user = data.user;
        state.isUser = state.user.role == "Utilisateur" ? true : false;
        state.isAdmin = state.user.role == "Administrateur" ? true : false;
    },
    initialzeAuth(state){
        if(LocalStorageService.GetData('auth') != null ){
            state.authenticated = true;
            state.token = LocalStorageService.GetD('auth').token;
            state.user = LocalStorageService.GetD('auth').user;
            state.isUser = state.user.role == "Utilisateur" ? true : false;
            state.isAdmin = state.user.role == "Administrateur" ? true : false;
        }
    },
    unauthenticateUser(state) {
        LocalStorageService.RemoveData('auth');
        state.authenticated = false;
        state.token = null;
        state.user = null;
        state.isAdmin = false;
        state.isUser = false;
    },
};

export default {
    state, getters, actions, mutations
}