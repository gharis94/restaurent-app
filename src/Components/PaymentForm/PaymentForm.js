import React, { useEffect } from 'react'
import { CardElement,useStripe,useElements } from '@stripe/react-stripe-js'
import {totalAmount} from '../../redux/cartSlice/cartSelector';
import { useSelector } from 'react-redux';

const PaymentForm = () => {
    const amount =useSelector(totalAmount);
    const elements =useElements();

    const stripe = useStripe();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!stripe || !elements) return;

    const response = await fetch('/netlify/functions/createPaymentIntent', {
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({amount})
    }).then(res=>res.json())

    const {paymentIntent:{client_sectret}} =response;
    console.log(client_sectret)

    const paymentResult = await stripe.confirmCardPayment(client_sectret, {
        payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
                name: 'Gharis'
            }
        }

    })
    if (paymentResult.error) {
        alert(paymentResult.error)
    } else {
        if (paymentResult.paymentIntent.status === 'succeeded') {
            alert('Payment Successful')
        }
    }
  }

  

    return (
    <div className='w-60'>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <CardElement/>
            <button type='submit'>Pay</button>
        </form>
    </div>
  )
}

export default PaymentForm