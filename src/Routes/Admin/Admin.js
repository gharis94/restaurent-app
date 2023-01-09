import React, { useState,useEffect } from 'react';
import DashboardCard from '../../Components/DashboardCard/DashboardCard';
import styled from 'styled-components';
import List from '../../Components/List/List';
import PendingOrder from '../../Components/PendingOrder/PendingOrder';
import { useDispatch } from 'react-redux';
import { fetchOrders} from '../../redux/orderSlice/orderSlice';
import SaleComponent from '../../Components/SaleComponent/SaleComponent';
import AuthComponent from '../../Components/AuthComponent/AuthComponent';
import {signIn} from '../../utils/firebas'; 
import AdminSettingComponent from '../../Components/AdminSettingComponent/AdminSettingComponent';

const INITIAL_STATE=[
    {
        id:0,
        name:"Menu"
    },
    {
        id:1,
        name:'Admin Settings'
    },
    {
        id:2,
        name:'sales'
    },
    {
        id:3,
        name:'pending orders'
    }
]

const initialState = {
    email: '',
    password: ''
}
const Admin = () => {
    const [count,setCount] = useState(0);
    const dispatch = useDispatch();
    const [admin,setAdmin] = useState(initialState);
    const {email,password}=admin;
    const [isLogIn,setIsLogIn] = useState(false);

    useEffect(()=>{
        dispatch(fetchOrders());        
    },[])

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const rsp = await signIn(email,password);
        
        if(rsp.user.uid){
            setIsLogIn(true)
        }
        return rsp;
    }
  return (
    <div>
        <AuthComponent log={isLogIn} set={setAdmin} state={admin} handleSubmit={handleSubmit}/>
        <h2 className='mt-10 text-2xl font-semibold'>Admin Dashboard</h2>
        <div className='flex md:flex-row w-full flex-col justify-center items-center'>
            {
            INITIAL_STATE.map((state)=>(
                <DashboardCard key={state.id} count={count} item={state} setC={setCount}/>
            ))
        }
        </div>
        <ListContainer>
            {
              count === 0? (<List/>): 
              count ===1? (<AdminSettingComponent/>):
              count === 2? (<SaleComponent/>):
              count ===3? (<PendingOrder/>):null   
            }
        </ListContainer>
    </div>
  )
}

export default Admin;

const Main=styled.div`
    background:aliceblue;
    height:100vh;
    
`

const Container = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    margin-top:34px;
    align-items:center;
    justify-content:center;

`
const ListContainer = styled.div`
    display:flex;
    justify-content:center;
`