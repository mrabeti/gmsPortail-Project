<template>
  <v-app-bar class="border-b px-6" :elevation="0" rounded height="48">
    <img
      src="https://gmsportail.com/PORTAILGMS_WEB/res/logo_4D8944D6_.png"
      alt="GmsPortail"
      width="120"
      class="cursor-pointer"
      @click="this.$router.push({ path: '/Accueil' })" />
    <div class="text-omag mx-auto flex w-full content-center justify-center">
      <p class="font-bold mt-1 mr-2">{{ nomSociete }}</p>
    </div>
    <template v-slot:append>
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-avatar
            class="bg-primary p-0 border cursor-pointer capitalize"
            image="/images/avatar.svg"
            size="36"
            v-bind="props">
            {{
              nomUtilisateur
                .split(" ")
                .map((name) => name[0])
                .join("")
            }}
          </v-avatar>
          <v-card-text class="px-2 cursor-pointer w-32" v-bind="props">{{
            nomUtilisateur
          }}</v-card-text>
          <v-icon size="small" icon="mdi-chevron-down" v-bind="props"></v-icon>
        </template>

        <div id="dropdownNavbar" class="bg-white rounded-lg shadow w-44 mt-2">
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-400"
            aria-labelledby="dropdownLargeButton">
            <li>
              <a
                href="#"
                class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                <span class="mr-2"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="mr-2 h-5 w-5 fill-primary group-hover:fill-white">
                    <path
                      d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"></path></svg>
                </span>
                Mon Profile
              </a>
            </li>
          </ul>
          <div class="py-1 border-t">
            <a
              href="#"
              class="flex px-4 py-2 text-sm text-gray-700 hover:bg-red-500 hover:text-white dark:hover:bg-red-600 dark:text-gray-400 dark:hover:text-white">
              <span class="mr-2">
                <svg
                  class="mr-2 h-5 w-5 group-hover:fill-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
              </span>
              Déconnexion
            </a>
          </div>
        </div>
      </v-menu>
    </template>
  </v-app-bar>
</template>
<script setup>
import { onMounted, ref } from "vue";
import store from "@/store";

let nomUtilisateur = ref("");

const nomSociete = store.state.nomSociete;
const annees = store.state.Annees;

const selectAnnee = () => {
  store.state.AnneeFiscale = annee;
};

onMounted(() => {
  nomUtilisateur.value = store.state.utilisateur.nom;
});
</script>
