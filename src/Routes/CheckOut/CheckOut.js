import React from 'react'
import styled from 'styled-components';
import CheckOutCard from '../../Components/CheckOutComponent/CheckOutComponent'

const CheckOut = () => {
  return (
    <Main>
        <CheckOutCard />
    </Main>
  )
}

export default CheckOut;

const Main = styled.div`
    height:80vh;
    display:flex;
    justify-content:center;
    align-items:center;
`