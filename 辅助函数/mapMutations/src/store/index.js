import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        products:[
            {name:"佳能",price:16000},
            {name:"尼康",price:20000},
            {name:"奥林巴斯",price:10000},
            {name:"哈苏",price:60000},
        ]    
    },
    getters:{
        saleProducts:(state)=>{
            var saleProducts = state.products.map(product=>{
                return{
                    name: product.name,
                    price: product.price/2
                };
            });
            return saleProducts;
        },
    },
    mutations:{
        reducePrice:state=>{
                state.products.forEach(element => {
                element.price-=2; 
           });      
        }
    },
    actions:{
        reduce:(context)=>{
            setTimeout(function(){
                context.commit("reducePrice");
            },2000);
        }
    },   
 })