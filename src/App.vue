<template>
  <div class="app">
    <side-bar v-if="isLoggedIn" />
    <div class="main">
      <router-view></router-view>
      <the-footer />
    </div>
  </div>
</template>

<script>
import SideBar from "./components/layout/sidebar/SideBar.vue";
import TheFooter from "./components/layout/MainFooter.vue";
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

<style lang="scss">
#app {
  font-family: Trebuchet MS,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .app {
    display: flex;
    .main {
      width: 100%;
      max-height: 100vh;
      overflow: auto;
    }
  }
}
</style>
