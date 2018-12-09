const mutations={
    reducePrice:state=>{
        state.products.forEach(element => {
           element.price-=2; 
        });      
    }
   }

   export {
    mutations,
   }