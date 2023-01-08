import React from 'react';
import { useSelector } from 'react-redux';
import {orderSaleSelector,orderCompleted,orderInQue} from '../../redux/orderSlice/orderSelector';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
//import styled from 'styled-component';
import styled from 'styled-components';
import { style } from '@mui/system';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const SaleComponent = () => {
 
    const saleAmount = useSelector(orderSaleSelector);
    const orderComplete = useSelector(orderCompleted);
    const orderInProcess = useSelector(orderInQue);

    let arr = [saleAmount,orderComplete,orderInProcess]
    let header = ['Sale in PKR', 'Order Completed', 'Order In Preparation'];
    let color =['coral','green','red'];
 return (
    <Main>
        <h3>
            Sale Report
        </h3>
            <PaperContainer>
                {arr.map((item,idx)=>(
                    <Card sx={{ minWidth: 200,margin:'10px'}}>
                    <CardContent >
                        <Typography sx={{}} variant='h5'   gutterBottom>
                        {header[idx]}
                        </Typography>
                        <Typography sx={{fontSize:28,color:`${color[idx]}`}}>
                            {item}
                        </Typography>
                    </CardContent>
                </Card>
                ))}
            </PaperContainer>
            
        
    </Main>
    
  )
}

export default SaleComponent;

const Main = styled.div`
    display:flex;
    flex-direction:column;
    width:-webkit-fill-available;
`
const PaperContainer = styled.div`
    display:flex;
    justify-content:space-between;
    margin:20px;
    padding:20px
`


