import React from 'react';
import { useSelector } from 'react-redux';
import {orderSaleSelector,orderCompleted,orderInQue} from '../../redux/orderSlice/orderSelector';

const SaleComponent = () => {
 
    const saleAmount = useSelector(orderSaleSelector);
    const orderComplete = useSelector(orderCompleted);
    const orderInProcess = useSelector(orderInQue);
 return (
    <div>
        <h3>
            Sale Report
        </h3>
        <h4>{`Current Sale:     ${saleAmount}   PKR`}</h4>
        <h4>{`Order Completed:   ${orderComplete}`}</h4>
        <h4>{`Order in Kitchen:    ${orderInProcess}`}</h4>
    </div>
  )
}

export default SaleComponent;