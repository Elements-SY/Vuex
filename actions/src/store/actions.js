const actions={
    reduce:(context)=>{
      setTimeout(function(){
        context.commit("reducePrice");
      },2000);
    }
   }
   export {
    actions,
   }