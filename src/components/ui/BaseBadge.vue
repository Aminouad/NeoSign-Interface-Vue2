<template>
    <span class="badge" :class="type">
        {{  text }}
    </span>
</template>
<script>
export default {
    props: ['type', 'title'],
    computed: {
        text(){
            return this.title.toUpperCase();
        }
    }
}
</script>
<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 4px;
  opacity: 50%;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.entrant {  
  background-color: #97E016;
  color: white;
}

.sortant {
  background-color: #E37302;
  color: white;
}

.signé {
  background-color: #0DFC53;
  color: white;
}
.non-signé {
  background-color: #FA2814;
  color: white;
}

</style>