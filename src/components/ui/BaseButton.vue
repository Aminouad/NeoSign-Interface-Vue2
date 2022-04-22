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
  padding: 0.4rem 1rem;
  font: inherit;
  background-color: #00B1B2;
  border: 1px solid #ffffff;
  color: white;
  cursor: pointer;
  border-radius: 3px;
  margin-right: 0.5rem;
  display: inline-block;
font-size: 70%;

}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #ffffff;
  border-color: #00B1B2;
  color: #00B1B2 ;
}

.flat {
  background-color: transparent;
  color: #00B1B2;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #00B1B2;
  color: #00B1B2;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #00B1B2;
    color: #ffffff;

}
</style>