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
import { useNavigate } from 'react-router-dom';

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
    const navigateTo =useNavigate();

    useEffect(()=>{
        dispatch(fetchOrders());        
    },[])
    useEffect(()=>{
        alert('This is a demo App. Admin Console is divided into four section (1)Menu -> to manage/add any item  (2) Admin Setting -> Under developement (3) Sales -> Shows the analytics (4) Pending Orders -> Shows the order which are in preparation',)
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
    <div className='flex flex-col w-full items-center relative'>
        <AuthComponent log={isLogIn} set={setAdmin} state={admin} handleSubmit={handleSubmit}/>
        <p className='absolute top-1 right-2 cursor-pointer underline text-sm text-gray-600' onClick={()=>navigateTo('/')}>Customer Console?</p>
        <h2 className='mt-10 text-2xl font-semibold'>Admin Dashboard</h2>
        <div className='flex md:flex-row w-full flex-col justify-center items-center'>
            {
            INITIAL_STATE.map((state)=>(
                <DashboardCard key={state.id} count={count} item={state} setC={setCount}/>
            ))
        }
        </div>
        <div className='flex flex-col justify-center items-center w-full'>
            {
              count === 0? (<List/>): 
              count ===1? (<AdminSettingComponent/>):
              count === 2? (<SaleComponent/>):
              count ===3? (<PendingOrder/>):null   
            }
        </div>
    </div>
  )
}

export default Admin;
