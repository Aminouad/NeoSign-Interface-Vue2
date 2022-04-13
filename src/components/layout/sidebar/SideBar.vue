<script>
import SidebarLink from './SideBarLink.vue'
import { collapsed, toggleSidebar, sidebarWidth } from './state'
export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
       
        <!-- <div class="rotate-180Font">NEOsign</div> -->
        <div class="logoStyle"><img src="src/assets/logo.png"></div>
        
      </span>
      <span  v-else>
        <div class="logoStyle"><img src="src/assets/logo.png"></div>
        </span>
    </h1>

    <SidebarLink to="/documents" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/dashboard" icon="fas fa-columns">Dashboard</SidebarLink>
    <SidebarLink to="/analytics" icon="fas fa-chart-bar">Analytics</SidebarLink>
    <SidebarLink to="/friends" icon="fas fa-users">Friends</SidebarLink>
    <SidebarLink to="/image" icon="fas fa-image">Images</SidebarLink>

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
  --sidebar-bg-color: #F7D125;
  --sidebar-item-hover: #333331;
  --sidebar-item-active: #333331;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
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
.rotate-180Font {
  top: 7%;
  left:-32%;
  position: absolute;
  transform: rotate(-90deg);
  transition: 0.8s linear;
  width: 250px;
  height: 54px;
  background-color: white;
  left: -20%;
}
.logoStyle{
    position: absolute;
  padding: 0.09em;
  width: 250px;
  height: 54px;
  background-color: white;
  left: -20%;
  
}
</style>