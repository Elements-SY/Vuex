<template>
    <div class="container">

      <ul>
          <li v-for="product in saleProducts">
              <span>{{product.name}}</span>
              <span>{{product.price}}</span>
          </li>
      </ul>
    </div> 
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["saleProducts"]),
    //把getters对象里的函数的返回值传过来，然后遍历
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
