import SecureLS from "secure-ls";

let ls = new SecureLS({encodingType: 'aes'});

export default {
    SaveData(NomData,data) {
      ls.set(NomData, data);
    },
    GetData(NomData){
      return ls.get(NomData);
    },
    RemoveData(NomData){
       localStorage.removeItem(NomData);
    }
}