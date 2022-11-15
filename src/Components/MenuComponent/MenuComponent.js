import React from 'react';
import DATA from '../../asset/data'
import CardComponent from '../CardComponent/CardComponent';
import styled from 'styled-components'

const MenuComponent = () => {

  return (
    <MainContainer>
        {
            DATA.map(item=>(
                <CardComponent key={item.id} item={item}/>
            ))
        }
    </MainContainer>
  )
}

export default MenuComponent


const MainContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    padding:10px;
`