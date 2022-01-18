<template>
    <h1>Home Page</h1>

    <div v-for="i in lst" :key='i' >
        {{i.first_name}}---------{{i.email}}
        <img :src="i.avatar" alt="">
        
        
    </div>
       
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  props: {
   
  },
  data(){
      return {
          lst:[]
      }
  },
  async mounted(){
      let result = await axios.get('https://reqres.in/api/users?page=1')
      this.lst = result.data.data
  }
}
</script>

