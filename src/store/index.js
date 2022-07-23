import Vuex from 'vuex';
import Vue from 'vue';
import user from './modules/user';
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
      user,
      auth
    }
});