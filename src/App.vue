<template>
  <router-view></router-view>
  <Login v-if="!loggedIn" @login="loggedIn = true" />
  <v-layout v-if="!loading && loggedIn" class="rounded rounded-md">
    <SideBar />
    <v-main class="align-center justify-center bg-slate-100">
      <AppBar />
      <div class="p-3">
        <Transition>
          <router-view></router-view>
        </Transition>
      </div>
    </v-main>
  </v-layout>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import AppBar from "./components/AppBar.vue";
import Login from "./views/Login.vue";

import { onMounted, ref } from "vue";

export default {
  name: "App",
  components: { SideBar, AppBar, Login },
  setup() {
    const loading = ref(true);
    const isShowing = ref(true);
    const loggedIn = ref(false);

    onMounted(() => {
      setTimeout(function () {
        loading.value = false;
      }, 1000);
    });

    return { loading, isShowing, loggedIn};
  },
};
</script>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

input:focus,
textarea:focus,
select:focus,
a:focus {
  outline: none !important;
}
</style>
