<template>
  <div>
    <ul>
      <router-link to="/" >Home</router-link>
      <router-link to="/about" >About</router-link>
      <router-link to="/contact" >Contact</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

}
</script>

<style scoped>
  ul{
    display: flex;
    padding: 0px;
  }
  a{
    padding: 5px;
  }
</style>
