<script>
import SidebarLink from "./SideBarLink.vue";
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
import logo from "@/assets/neosign_logo.png";
export default {
  props: {},

  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },

  data() {
    return {
      logo:logo,
      upHere: false,
    };
  },
  methods: {
    logout() {
      return this.$store.dispatch("logout");
    },
  },
  computed: {
    getRole() {
      return JSON.parse(localStorage.getItem("role"));
    },
    getUserEmail() {
      return JSON.parse(localStorage.getItem("userEmail"));
    },
  },
};
</script>
<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <div v-if="!collapsed">
      <span>
        <!-- <div class="rotate-180Font">NEOsign</div> -->
        <div class="logoStyle"><img :src="logo" /></div>
      </span>

      <h3>Signatue Digitale</h3>
      <p class="facile">Facile</p>
      <div class="user">
        <div class="userInfo1">
          <div class="userLogo">
            <i class="fa-solid fa-user"></i>
          </div>
          <p>{{ getUserEmail }}</p>
        </div>
        <div class="userInfo2">
          <div class="userLogo">
            <i class="fa-solid fa-user-gear"></i>
          </div>
          <p>{{ getRole }}</p>
        </div>
      </div>
    </div>

    <span v-else>
      <div class="rotate-90">NEOsign</div>
    </span>

    <div class="listOfLink">
      <SidebarLink to="/" icon="fas fa-home">Accueil</SidebarLink>
      <SidebarLink to="/dashboard" icon="fas fa-columns"
        >Tableau de bord</SidebarLink
      >
             <div v-if="getRole!=='AdminNeoledge'">

      <SidebarLink to="/certificat" icon="fa-solid fa-signature"
        >Mon certificat</SidebarLink
      ></div>
       <div v-if="getRole!=='AdminNeoledge'">
      <SidebarLink to="/documents" icon="fas fa-file-alt"
        >Doucments</SidebarLink
      ></div>
      <div v-if="getRole==='AdminNeoledge'">
      <SidebarLink  to="/companies" icon="fas fa-building">Sociétés</SidebarLink></div>
      <div v-if="getRole!=='AdminNeoledge'">
      <SidebarLink to="/personnels" icon="fas fa-address-book"
        >Personnels</SidebarLink
      ></div>
      <SidebarLink to="/authentication" @click="logout" icon="fas fa-sign-out"
        >Se déconnecter</SidebarLink
      >
    </div>
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #00b1b2;
  --sidebar-item-hover: #f7d647cb;
  --sidebar-item-active: #f5c900;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  height: 100vh;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.sidebar h1 {
  height: 2.5em;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(255, 255, 255, 0.7);
  transition: 0.2s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
.logoStyleMinimized {
  padding-top: 0.1em;
  position: absolute;
  width: 250px;
  height: 54px;
  background-color: white;
  left: -20%;
}
.logoStyle {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;
  margin-top: 20%;
  margin-bottom: 20px;
  padding: 0px 10px;
  border-radius: 0;
  height: fit-content;
  color: white;
  text-decoration: none;
  background-color: white;
  padding-top: 5px;
  padding-bottom: 2px;
}
.listOfLink {
  margin-top: 24%;
}
.facile {
  font-family: "Harlow Solid";
}

.rotate-90 {
  margin-top: 120%;
  margin-bottom: 21%;
  transform: rotate(-90deg);
  transition: 0.2s linear;
}
.userInfo1 {
  display: flex;
  flex-direction: row;
  margin-bottom: -9%;

}
.userInfo2 {
  display: flex;
  flex-direction: row;
  margin-top: -5%;
}
.userLogo {
  padding-top: 8%;
  margin-left: 5%;
  margin-right: 5%;
}
.user {
  margin-top: -5%;
font-size:0.8rem;
  border-top: 0.01rem solid;
  border-bottom: 0.01rem solid;
  margin-bottom: -15%;
}

</style>
