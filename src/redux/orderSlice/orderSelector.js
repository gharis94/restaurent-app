 
export const orderSelector = state=>state.order.orders;

export const orderSaleSelector = state => state.order.orders.reduce((acc,cur)=>{

    acc += cur.amount; 
    return acc;
},0)

export const orderCompleted = state => state.order.orders.filter(item=>item.status !== false).length;

export const orderInQue = state => state.order.orders.filter(item=>item.status === false).length;