

export const isOpenSelector = state=> state.cart.isOpen;

export const totalCount = state=>state.cart.cartItems.reduce((acc,cur)=>{
    acc += cur.quantity;
   return acc; 
},0);

export const cartItemSelector =state=>state.cart.cartItems;