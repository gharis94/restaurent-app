import React, { useState } from 'react';
import SimpleCard from '../../Components/SimpleCard/SimpleCard';
import styled from 'styled-components';
import List from '../../Components/List/List';

const INITIAL_STATE=[
    {
        id:11,
        name:"Menu"
    },
    {
        id:22,
        name:'Admin Settings'
    },
    {
        id:33,
        name:'sales'
    },
    {
        id:44,
        name:'pending orders'
    }
]

const Admin = () => {
    const [count,setCount] = useState(0);
    
  return (
    <Main>
        <h2>Admin Dashboard</h2>
        <Container>
            {
            INITIAL_STATE.map(state=>(
                <SimpleCard key={state.id} item={state}/>
            ))
        }
        </Container>
        <ListContainer>
            {
              count === 0? (<>
                <List/>
              </>):null   
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