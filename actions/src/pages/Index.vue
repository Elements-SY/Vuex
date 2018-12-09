<template>
    <div class="container">
      <ul>
          <li v-for="product in saleProducts">
              <span>{{product.name}}</span>
              <span>{{product.price}}</span>
          </li>
      </ul>
       <button @click="sum">走起</button>
    </div> 
</template>
<script>
 export default{
   computed:{
       saleProducts(){
           return this.$store.getters.saleProducts;
       }
   },
   methods:{
       sum(){
          this.$store.dispatch('reduce')
       }    
   }
 }

</script>
<style scoped>
.container{
 width: 400px;
 height: 400px;
 border: 1px solid #000;
 line-height: 40px;
 margin: 100px auto;
}


</style>
