import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutPayment from './CheckoutPayment';

const Payment = () => {
    const key = import.meta.env.VITE_STRIPE ; 
    console.log(key);
    const stripePromise = loadStripe(key)
    return (
        <Elements stripe={stripePromise}>
            <CheckoutPayment />
        </Elements>
    );
};

export default Payment;