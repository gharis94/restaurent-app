import React, { useState,useEffect } from 'react';
import SimpleCard from '../../Components/SimpleCard/SimpleCard';
import styled from 'styled-components';
import List from '../../Components/List/List';
import PendingOrder from '../../Components/PendingOrder/PendingOrder';
import { useDispatch } from 'react-redux';
import { fetchOrders} from '../../redux/orderSlice/orderSlice';

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

const Admin = () => {
    const [count,setCount] = useState(0);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchOrders());        
    },[])
  return (
    <Main>
        <h2>Admin Dashboard</h2>
        <Container>
            {
            INITIAL_STATE.map((state)=>(
                <SimpleCard key={state.id} item={state} set={setCount}/>
            ))
        }
        </Container>
        <ListContainer>
            {
              count === 0? (<List/>): 
              count ===1? (<h4>Admin Setting</h4>):
              count === 2? (<h4>Sales</h4>):
              count ===3? (<PendingOrder/>):null   
            }
        </ListContainer>
    </Main>
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