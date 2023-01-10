import { useSelector } from "react-redux";
 
export const orderSelector = state=>state.order.orders;

export const orderSaleSelector = state => state.order.orders.reduce((acc,cur)=>{

    acc += cur.amount; 
    return acc;
},0)

export const orderCompleted = state => state.order.orders.filter(item=>item.status !== false).length;

export const orderInQue = state => state.order.orders.filter(item=>item.status === false).length;

//line chart data
export const orderBar=state=>state.order.orders.reduce((acc,cur)=>{
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
    
    for(let item of cur.items){
        acc[item.name] = (acc[item.name] || 0) + item.quantity
    }
    return acc
},{})