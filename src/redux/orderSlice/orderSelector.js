import {createDraftSafeSelector} from '@reduxjs/toolkit'

export const order=state=>state.order.orders

export const orderSelector =createDraftSafeSelector(order,(state)=>{
        console.log('orderSelector')
    return state
});

export const orderPending=createDraftSafeSelector(order,(state)=>{
    console.log('orderPending')
    return(
        state.filter(item=>item.status===false)
    )
})

export const orderSaleSelector = createDraftSafeSelector(order, (state) => {
    console.log('orderSaleSelector')
    return(state.reduce((acc,cur)=>{
    acc += cur.amount; 
    return acc;
},0))})

export const orderCompleted = createDraftSafeSelector(order,(state)=>{ 
    return(state.filter(item=>item.status !== false).length)})

 
export const orderInQue = createDraftSafeSelector(order,(state)=>{ 
    console.log('orderInQue')
    return(state.filter(item=>item.status === false).length)});

//line chart data
export const orderBar1 =createDraftSafeSelector(order, (state) => {
    let arr=[]    
    const x=state.reduce((acc,cur)=>{
    let myDate = new Date(cur.time)
    let year = myDate.getFullYear()
    let month = myDate.getMonth() + 1
    let day = myDate.getDate()
    let date = `${year}/${month}/${day}`
    cur ={
        ...cur,
        date
    }
    acc[date] = (acc[date] || 0)+ cur.amount
    //console.log(acc)
    return acc;
},{})
for(let key in x){
    let obj={
        x:key,
        y:x[key]
    }
    arr.push(obj)

}
//console.log(arr)
return arr
})
// export const orderBar=state=>state.order.orders.reduce((acc,cur)=>{
//     console.log('orderBar')
//     //console.log(cur)
//     let myDate=new Date(cur.time)
//     let year = myDate.getFullYear()
//     let month =myDate.getMonth() + 1
//     let day = myDate.getDate()
//     let date = `${year}/${month}/${day}`
//     let data;
//     let l =acc.length-1
//   //  console.log(acc)
//     if(acc[l]?.x === date){
//         data = {
//             ...acc[l],
//             y: acc[l].y+cur.amount

//         }
//     //    console.log(data)
//         return[data]
//     }
//     else{
//         data={
//             x:date,
//             y:cur.amount
//         }
//      //   console.log(data)
//         return [...acc, data]
//     }
    

    
// },[])

//pie chart by category

export const portfolioByDish = createDraftSafeSelector(order, (state) => {
    console.log('portfolioByDish')
    return(state.reduce((acc,cur)=>{
    
    for(let item of cur.items){
        
        acc[item.name] = (acc[item.name] || 0) + item.quantity
    }
    
    return acc
},{}))})