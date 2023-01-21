

export const orderSelector = state=>{
        console.log('orderSelector')
    return(
    state.order.orders)};

export const orderPending=state=>{
    console.log(orderPending)
    return(
        state.order.orders.filter(item=>item.status===false)
    )
}

export const orderSaleSelector = state =>{ 
    console.log('orderSaleSelector')
    return(state.order.orders.reduce((acc,cur)=>{
    acc += cur.amount; 
    return acc;
},0))}

export const orderCompleted = state =>{ 
    return(state.order.orders.filter(item=>item.status !== false).length)}

 
export const orderInQue = state =>{ 
    console.log('orderInQue')
    return(state.order.orders.filter(item=>item.status === false).length)};

//line chart data
export const orderBar=state=>state.order.orders.reduce((acc,cur)=>{
    console.log('orderBar')
    let myDate=new Date(cur.time)
    let year = myDate.getFullYear()
    let month =myDate.getMonth() + 1
    let day = myDate.getDate()
    let date = `${year}/${month}/${day}`
    let data;
    let l =acc.length-1

    if(acc[l]?.x === date){
        data = {
            ...acc[l],
            y: acc[l].y+cur.amount

        }
        return[data]
    }
    else{
        data={
            x:date,
            y:cur.amount
        }
        return [...acc, data]
    }
    

    
},[])

//pie chart by category

export const portfolioByDish = state=>state.order.orders.reduce((acc,cur)=>{
    console.log('portfolioByDish')
    for(let item of cur.items){
        acc[item.name] = (acc[item.name] || 0) + item.quantity
    }
    return acc
},{})