<template>
    
    <side-bar/>
    <div :style="{ 'margin-left': sidebarWidth }"> 
    <router-view></router-view>

    </div>
</template>



<script>
import SideBar from './components/layout/sidebar/SideBar.vue';
import { sidebarWidth} from './components/layout/sidebar/state'


export default {
    components: {
       
        SideBar
    },
    setup() {
        return {
            sidebarWidth
        }
    }

}
</script>




<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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