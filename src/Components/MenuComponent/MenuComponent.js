import React, { useEffect } from 'react';
import DATA from '../../asset/data'
import CardComponent from '../CardComponent/CardComponent';
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { getMenu } from '../../redux/menuSlice/menuSelector';

const MenuComponent = () => {
    const menu = useSelector(getMenu);

    
  return (
    
        <MainContainer>
        {
            menu.length>0 && menu.map(item=>(
                <CardComponent key={item.id} item={item}/>
            ))
        }
    </MainContainer>
    
    
  )
}

export default MenuComponent


const MainContainer = styled.div`
    display:flex;
    justify-content: center;
    flex-wrap:wrap;
    padding:10px;
    
`