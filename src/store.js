import { createStore } from "vuex";

const apiEndPoint = [
  "http://178.238.238.52:8083/api",
  "http://localhost:8083/api",
];
const api = apiEndPoint[0];

const store = createStore({
  state: {
    lienAPI: api,
    utilisateur: null,
    utilisateurCommun6: null,
    token: null,
    AnneeFiscale: 0,
    Annees: [],
  },
  mutations: {
    setToken(state, token) {
      localStorage.setItem("token", token);
      state.token = token;
    },
    setUtilisateur(state, utilisateur) {
      state.utilisateur = utilisateur;
    },
    setLienAPI(state, apiRoot) {
      state.lienAPI = apiRoot;
    },
    setDialogOpen(state, isOpen) {
      state.dialogOpen = isOpen;
    },
    setAnnees(state, data) {
      state.Annees = data;
      state.Annee = data[0].Annee;
    },
  },
});

export default store;
