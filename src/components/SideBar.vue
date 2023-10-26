<template>
  <v-navigation-drawer
    v-model="drawer"
    :rail="rail"
    permanent
    class="bg-primary">
    <v-list-item nav>
      <template v-if="rail" v-slot:prepend>
        <v-avatar>
          <v-btn
            variant="text"
            icon="mdi-chevron-double-right"
            color="grey"
            @click="rail = false"></v-btn>
        </v-avatar>
      </template>
      <div
        v-if="!rail"
        class="flex items-center gap-2 cursor-pointer"
        @click="this.$router.push({ path: '/Accueil' })">
        <img class="ml-2" src="/images/logo.png" alt="" width="32" />
        <p class="text-omag font-bold">GmsPortail</p>
      </div>
      <template v-slot:append>
        <v-btn
          variant="text"
          icon="mdi-chevron-double-left"
          color="grey"
          @click.stop="rail = !rail"></v-btn>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        class="ma-0"
        prepend-icon="mdi-home"
        title="Accueil"
        value="accueil"
        @click="this.$router.push({ path: '/Accueil' })"></v-list-item>

      <v-list-item
        class="ma-0"
        prepend-icon="mdi-folder"
        title="Clients"
        value="mdi-folder"
        @click="this.$router.push({ path: '/Clients' })"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      rail: true,
    };
  },

  methods: {
    redirectToHome() {
      this.$router.push({ path: "/Accueil" });
    },
  },
};
</script>

<style scoped>
.v-navigation-drawer__content {
  color: white !important;
}

.v-list-item__prepend {
  width: 0px;
  margin: 0px !important;
}

.bg-grey-lighten-5-custom {
  background-color: #fbfbfa;
}
</style>
