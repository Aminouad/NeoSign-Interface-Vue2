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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  color: #252525;
  border-radius: 4px;
  height: fit-content;
  opacity: 50%;
  padding: 0.2rem 0.4rem;
  margin-right: 0.5rem;
  font-size: 10px;
  margin-inline: 5px;
  
}

.entrant {  
  background-color: #588905;
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
.expiré {
  background-color: #FA2814;
  color: white;
}
.activé {  
  background-color: #03d65f9e;
  color: white;
}

</style>