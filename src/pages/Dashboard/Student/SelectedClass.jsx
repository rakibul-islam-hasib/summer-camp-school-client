import React, { useEffect, useState } from 'react';
import { useTitle } from '../../../hooks/useTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useUser } from '../../../hooks/useUser';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
const SelectedClass = () => {
    useTitle('Selected Class | Sound Safari');
    const { currentUser } = useUser();
    const [classes, setClasses] = useState([]);
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        axiosSecure.get(`/cart/${currentUser?.email}`)
            .then((res) => {
                setClasses(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    const totalPrice = classes.reduce((acc, item) => acc + parseInt(item.price), 0);
    const totalTax = totalPrice * 0.01;
    let shipping = totalPrice > 100 ? 0 : totalPrice * 0.05;
    const total = totalPrice + totalTax + shipping;
    return (
        <div>
            <div className="my-6">
                <h1 className='text-4xl text-center font-bold'>My <span className='text-secondary'>Selected</span> Class</h1>
            </div>
            <div className=" h-screen py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-3/4">
                            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th className="text-left font-semibold">#</th>
                                            <th className="text-left font-semibold">Product</th>
                                            <th className="text-left font-semibold">Price</th>
                                            <th className="text-left font-semibold">Selected Date</th>
                                            <th className="text-left font-semibold">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            classes.map((item , idx) => <tr key={item._id}>
                                                <td className="py-4">{idx + 1}</td>
                                                <td className="py-4">
                                                    <div className="flex items-center">
                                                        <img className="h-16 w-16 mr-4" src={item.image} alt="Product image" />
                                                        <span className={`font-semibold ${item.name.length > 20 ? 'text-[13px]' : 'text-[18px]'}`}>{item.name}</span>
                                                    </div>
                                                </td>
                                                <td className="py-4">${item.price}</td>
                                                <td className="py-4">
                                                    <p className='text-green-700'>{moment(item.submitted).format('MMMM Do YYYY')}</p>
                                                </td>
                                                <td className="py-4">
                                                    <span className='px-3 py-1 cursor-pointer bg-secondary rounded-3xl text-white font-bold'>Delete</span>
                                                </td>
                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="md:w-1/5 fixed right-3">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                                <div className="flex justify-between mb-2">
                                    <span>Subtotal</span>
                                    <span>${totalPrice}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Taxes</span>
                                    <span>
                                        ${totalTax}
                                    </span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Shipping</span>
                                    <span>${shipping}</span>
                                </div>
                                <hr className="my-2" />
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">Total</span>
                                    <span className="font-semibold">${total}</span>
                                </div>
                                <button onClick={()=>navigate('/dashboard/user/payment' , {state : {price : total}})} disabled={total <= 0} className="bg-secondary text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedClass;