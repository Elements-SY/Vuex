<template>
 <div class="container">
  {{this.$store.state.name}}
  <button @click="sum">走起</button>
 </div> 
</template>
<script>
export default {
    methods:{
        sum(){
            console.log(this.$store.state.name);
            console.log(this);
        },
      
    }
}
</script>

<style scoped>
.container{
 width: 400px;
 height: 400px;
 border: 1px solid #000;
 line-height: 400px;
 margin: 100px auto;
}


</style>
