<template>
    <button v-if="!link" :class="mode">
        <slot></slot>
        
    </button>
    <router-link v-else :to="to" :class="mode">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        mode: {
           type:String,
           required:false,
           default:null 
        },
        link: {
            type: Boolean,
            required: false,
            default:false
        },
        to:{
            type: String,
            required: false,
            default:'/'
        }
    }
}
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #F7D125;
  border: 1px solid #F7D125;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #333331;
  border-color: #333331;
}

.flat {
  background-color: transparent;
  color: #333331;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #F7D125;
  color: #F7D125;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #333331;
    color: #ffffff;

}
</style>