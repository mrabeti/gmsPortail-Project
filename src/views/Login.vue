<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-2 py-0 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 mt-8 pt-8 px-8 text-2xl font-semibold text-gray-900 dark:text-white">
        <img class="w-15" src="../src/assets/images/Logo.png" alt="gsmsPortail" />
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Connectez-vous à votre compte
          </h1>
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input v-model="email" type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Email" required />
          </div>
          <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
            <input v-model="password" type="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Mot de passe" required />
          </div>
          <button
            class="w-full text-white bg-omag focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            @click="login()">
            Sign in
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
import Swal from "sweetalert2";
import store from '@/store';

export default {
  data() {
    return {
      rules: {
        required: (value) => !!value || "Champ requis",
      },
      email: "",
      password: "",
      showPassword: false,
      lienAPIRoot: this.$store.state.lienAPI,
    };
  },
  created() {
    localStorage.clear();
  },
  methods: {
    ...mapMutations(["setUtilisateur", "setToken"]),
    async login() {
      const url = `${this.lienAPIRoot}/utilisateurs/${this.email}/${this.password}`;

      try {

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const utilisateur = data[0];

        if (utilisateur == null) {

          Swal.fire({
            icon: "error",
            title: `Adresse e-mail ou mot de passe incorrect. Veuillez vérifier vos identifiants de connexion et réessayer`,
            showConfirmButton: false,
            timer: 1000,
          });
        } else {
          this.setUtilisateur(utilisateur);

          const resutilisateurCommun6 =  await fetch(`${this.lienAPIRoot}/utilisateurCommun6/${utilisateur.IdClients}/${this.email}`)
          const utilisateurCommun6 = await resutilisateurCommun6.json() ;
       
          

          if (utilisateurCommun6.length !== 0) {
            this.$store.state.utilisateurCommun6 = utilisateurCommun6[0];
            this.$emit("login");
          }else{
            Swal.fire({
              icon: "error",
              title: `Cordonnees commun6 incorrect`,
              showConfirmButton: false,
              timer: 1000,
            });
          }

        }
      } catch (error) {
        alert(error);
      }
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>
<style>
.form-control,
.formkit-input {
  height: 3rem;
  width: 100%;
  border-radius: 0.313rem;
  border-width: 2px;
  border-color: rgb(224 224 224 / var(--tw-border-opacity));
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  padding: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  line-height: 1;
  color: rgb(30 41 59 / var(--tw-text-opacity));
}


.ag-header-cell-text {
  font-weight: bold;
  color: #1e293b;
}

.ag-theme-balham {
  --ag-header-background-color: white !important;
  --ag-font-family: quicksand;
}

.ag-theme-balham .ag-header-cell {
  font-weight: bolder !important;
}
</style>
