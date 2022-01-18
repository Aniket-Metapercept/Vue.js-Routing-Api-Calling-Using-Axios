<template>
  <h1>About Page </h1>
  <h3 v-if="this.$route.params.name">Hello {{name}} </h3>

</template>

<script> 

export default {
  name: 'About',
  props: {
    
  },
  data(){
      return{
          name:""    
      }
  },
  
  created() {
   console.log('The id is: ' + this.$route.params.name);
   this.name= this.$route.params.name
  }
}
</script>

