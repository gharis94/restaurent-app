import React from 'react';
import { useSelector } from 'react-redux';
import {orderSaleSelector,orderCompleted,orderInQue,orderBar,portfolioByDish,orderBar1} from '../../redux/orderSlice/orderSelector';
import LineChart from '../LineChart/LineChart';
import PieChart from '../PieChart/PieChart';
const SaleComponent = () => {
 
    const saleAmount = useSelector(orderSaleSelector);
    const orderComplete = useSelector(orderCompleted);
    const orderInProcess = useSelector(orderInQue);
    //const bar = useSelector(orderBar)
    const pie = useSelector(portfolioByDish)
    let bar = useSelector(orderBar1)
    bar=bar.sort((a,b)=>new Date(a.x)-new Date(b.x))
    
 return (
    <div className='flex flex-col  items-center'>
        <h3 className='text-2xl font-semibold'>
            Sale Dashboard
        </h3>
            <div className='flex w-full md:flex-row flex-col items-center'>
                <div className='w-[200px] m-5 flex flex-col items-center px-5 py-2 justify-between rounded-lg border-b-2 drop-shadow-lg bg-gray-100'>
                    <p className='text-sm font-semibold text-gray-700'>Amount</p>
                    <p className='text-xl text-green-400'>{saleAmount}</p>
                </div>
                <div className = 'w-[200px] m-5 flex flex-col items-center px-5 py-2 justify-between rounded-lg border-b-2 drop-shadow-lg bg-gray-100' >
                    <p className='text-sm font-semibold text-gray-700'>Completed</p>
                    <p className='text-xl text-orange-500'>{orderComplete}</p>
                </div>
                <div className = 'w-[200px]  m-5 flex flex-col items-center px-5 py-2 justify-between rounded-lg border-b-2 drop-shadow-lg bg-gray-100' >
                    <p className='text-sm font-semibold text-gray-700'> Queue</p>
                    <p className='text-xl text-red-500'>{orderInProcess}</p>
                </div>
            </div>
        <div className='h-64 md:w-full w-96 rounded-lg drop-shadow-xl mb-5 bg-slate-400'>
            <LineChart data={bar}/>
        </div>
        <div className='h-64 md:w-full w-96 rounded-lg drop-shadow-xl mb-5 bg-slate-400'>
            <PieChart data={pie}/>
        </div>            
        
    </div>
    
  )
}

export default SaleComponent;


