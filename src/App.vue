<template>
  <side-bar v-if="isLoggedIn" />
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view></router-view>
    <the-footer />
  </div>
</template>

<script>
import SideBar from "./components/layout/sidebar/SideBar.vue";
import TheFooter from "./components/layout/THeFooter.vue";
import { sidebarWidth } from "./components/layout/sidebar/state";
export default {
  components: {
    SideBar,
    TheFooter,
  },
  setup() {
    return {
      sidebarWidth,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  created() {
    this.$store.commit("setUser", {
      token: JSON.parse(localStorage.getItem("token")),
      userId: JSON.parse(localStorage.getItem("userId")),
      role: JSON.parse(localStorage.getItem("role")),
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
