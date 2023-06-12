import React, { useEffect, useState } from 'react';
import { useUser } from '../../../../../hooks/useUser';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
import useAxiosFetch from '../../../../../hooks/useAxiosFetch';
import moment from 'moment';
const MyPaymentHistory = () => {
    const { currentUser } = useUser();
    const [payments, setPayments] = useState([]);
    const axiosSecure = useAxiosSecure();
    const axiosFetch = useAxiosFetch();
    useEffect(() => {
        axiosFetch.get(`/payment-history/${currentUser.email}`)
            .then(res => {
                console.log(res.data, 'payment history')
                setPayments(res.data)
            })
            .catch(err => console.log(err))
    }, [currentUser.email])
    return (
        <div>
            <div className="text-center mt-6   mb-16">
                <p className='text-gray-400'>Hey, <span className='text-secondary font-bold'>{currentUser.name}</span> Welcome...!</p>
                <h1 className='text-4xl font-bold'>My Paym<span className='text-secondary'>ent Hist</span>ory</h1>
                <p className='text-gray-500 text-sm my-3'>You can see your payment history here </p>
            </div>



            <div className="">
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-left text-sm font-light">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" className="px-6 py-4">#</th>
                                            <th scope="col" className="px-6 py-4">Amount</th>
                                            <th scope="col" className="px-6 py-4">Total Item</th>
                                            <th scope="col" className="px-6 py-4">Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            payments.map((payment , idx) => <tr
                                                key={payment._id}
                                                className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                                <td className="whitespace-nowrap px-6 py-4 font-medium">{idx+1}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{payment.amount}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{payment.classesId.length}</td>
                                                <td className="whitespace-nowrap px-6 py-4">{moment(payment.date).format('MMMM Do YYYY, h:mm a')}</td>
                                            </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default MyPaymentHistory;