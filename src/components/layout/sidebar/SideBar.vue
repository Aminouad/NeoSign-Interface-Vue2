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
    <div  v-if="!collapsed">
      <span>
       
        <!-- <div class="rotate-180Font">NEOsign</div> -->
        <div class="logoStyle"><img src="src/assets/logo.png"></div>
        
      </span>
      <h3>Signatue Digitale</h3>
          <p class="facile">Facile</p>


    </div>

    <span v-else>
        <div class="rotate-90">NEOsign</div>
       



      </span>
    <div class="listOfLink">

    
    <SidebarLink to="/documents" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/dashboard" icon="fas fa-columns">Tableau de bord</SidebarLink>
    <SidebarLink to="/analytics" icon="fas fa-chart-bar">Statistiques</SidebarLink>
    <SidebarLink to="/addDocument" icon="fas fa-file-alt">Doucments</SidebarLink>
    <SidebarLink to="/societes" icon="fas fa-building">Societes</SidebarLink>
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
  padding: 0em;
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
.logoStyleMinimized {
  padding-top: 0.1em;
  position: absolute;
  width: 250px;
  height: 54px;
  background-color: white;
  left: -20%;
  
}
.logoStyle{
  
 display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;
  margin-top: 20%;
  margin-bottom: 20px ;
  padding: 0px 10px;
  border-radius: 0;
  height: fit-content;
  color: white;
  text-decoration: none;
  background-color: white;
  padding-top: 5px;
  padding-bottom: 2px;
 


  
}
.listOfLink{
  margin-top: 20%;
  border-top: 0.01rem solid white;
  border-bottom: 0.01rem solid white;

}
.facile{
   
  font-family: "Harlow Solid";

}

.rotate-90 {
   margin-top: 120%;
   margin-bottom: 21% ;
  transform: rotate(-90deg);
  transition: 0.2s linear ;
}
</style>