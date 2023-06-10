import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutPayment from './CheckoutPayment';
import { Navigate, useLocation } from 'react-router-dom';
import './Payment.css';
const Payment = () => {
    const key = import.meta.env.VITE_STRIPE;
    const location = useLocation();
    const price = location.state?.price;
    console.log(price, 'price form payment');
    if (!price) {
        return <Navigate to="/dashboard/my-selected" replace />
    }

    const stripePromise = loadStripe(key)
    return (
        <div className="my-40 stripe-custom-class">
            <Elements stripe={stripePromise}>
                <CheckoutPayment price={price} />
            </Elements>
        </div>
    );
};

export default Payment;