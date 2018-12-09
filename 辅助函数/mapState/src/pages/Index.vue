<template>
    <div class="container">
      <ul>
          <li v-for="item in products">
              <span>{{item.name}}</span>
              <span>{{item.price}}</span>
          </li> 
      </ul>
    </div> 
</template>
<script>
import { mapState } from "vuex";
export default {
  data(){
    return{
      //...mapState(['products']),//在data函数里写不会奏效
    }
  },
   computed: {
      ...mapState(['products']),
   },
};
</script>
<style scoped>
.container {
  width: 400px;
  height: 400px;
  border: 1px solid #000;
  line-height: 40px;
  margin: 100px auto;
}
</style>
