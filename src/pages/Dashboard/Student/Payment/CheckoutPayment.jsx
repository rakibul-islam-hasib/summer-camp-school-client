import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useUser } from '../../../../hooks/useUser';
const CheckoutPayment = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { currentUser, isLoading } = useUser();
    const [clientSecret, setClientSecret] = useState('');
    const [message, setMessage] = useState('');
    const [cart, setCart] = useState([]);
    useEffect(() => {
        axiosSecure.get(`/cart/${currentUser?.email}`)
            .then((res) => {
                // SET CLASSES ID IN STATE
                const classesId = res.data.map(item => item._id);
                setCart(classesId)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: price })
            .then(res => {
                setClientSecret(res.data.clientSecret)
                console.log(res.data)

            })
    }, [])
    const handleSubmit = async (event) => {
        setMessage('')
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            setMessage(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: currentUser.name || 'Unknown',
                        email: currentUser.email || 'Anonymous',
                    },
                },
            },
        );
        if (confirmError) {
            console.log('[error]', confirmError);
            setMessage(confirmError.message)
        }
        else {
            console.log('[PaymentMethod]', paymentIntent);

            // PAYMENT LOGIC HERE WHEN PAYMENT IS SUCCESSFUL
            if (paymentIntent.status === 'succeeded') {
                const transactionId = paymentIntent.id;
                const paymentMethod = paymentIntent.payment_method;
                const amount = paymentIntent.amount / 100;
                const currency = paymentIntent.currency;
                const paymentStatus = paymentIntent.status;
                const userName = currentUser.name;
                const userEmail = currentUser.email;
                const classesId = cart;
                const data = {
                    transactionId,
                    paymentMethod,
                    amount,
                    currency,
                    paymentStatus,
                    userName,
                    userEmail,
                    classesId
                }
                // axiosSecure.post('/payment-info', data)
                fetch('http://localhost:5000/payment-info', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify(data),
                })
                    .then(res => res.json())
                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }


        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" disabled={!stripe || !clientSecret || isLoading}>
                Pay
            </button>
            {message && <p className="text-red-500">{message}</p>}
        </form>
    );
};

export default CheckoutPayment;