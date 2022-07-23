import  Axios  from '../../Axios';

export default {
    Inscriptions(user) { 
        return Axios.post('/inscription',user)
    },
    ValidationUser(id) {
        return Axios.put("/valider/user/" + id);
    },
    ModifierUser(user) {
        return Axios.put("/user/"+ user.id , user);
    },
}