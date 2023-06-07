import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useTitle } from '../../hooks/useTitle';
import { AuthContext } from '../../utilities/providers/AuthProvider';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    useTitle('Register | Sound Safari');
    const { signUp, error, setError, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setError('');
        signUp(data.email, data.password)
            .then(userCredential => {
                // Signed in 
                const user = userCredential.user;
                if (user) {
                    updateUser(data.name, data.photoUrl)
                        .then(() => {
                            const userImp = {
                                name: user.displayName,
                                email: user.email,
                                photoUrl: user.photoURL,
                                gender: data.gender,
                                address: data.address,
                                role: 'user'
                            }
                            if (user.email && user.displayName) {
                                axios.post('http://localhost:5000/new-user', userImp)
                                    .then(res => {
                                        // console.log(res.data)
                                        navigate('/')
                                    })
                                    .catch(err => {
                                        console.log(err)
                                    })
                            }
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
            })
            .catch(err => {
                setError(err.code)

            })
    };

    return (
        <div className="flex justify-center items-center pt-14 bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-center mb-6">Please Register</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex items-center gap-5">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                Name
                            </label>
                            <input
                                placeholder='Enter your name'
                                type="text"
                                {...register('name', { required: true })}
                                className="w-full border-gray-300 border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                Email
                            </label>
                            <input
                                placeholder='Enter your email'
                                type="email"
                                {...register('email', { required: true })}
                                className="w-full border-gray-300 border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                                Password
                            </label>
                            <input
                                placeholder='Enter Password'
                                type="password"
                                {...register('password', {
                                    required: true,
                                    minLength: 6,
                                    // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                                })}
                                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                            />
                            {errors.password && (
                                <div className="text-red-500 text-sm w-full mt-1">
                                    <p>Password must be at least 6 characters long, <br /> contain a capital letter, <br /> and a special character.</p>
                                </div>
                            )}

                        </div>
                        <div className="mb-4">
                            <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
                                Phone Number
                            </label>
                            <input
                                placeholder='Phone Number'
                                type="tel"
                                {...register('phoneNumber', { required: true })}
                                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="mb-4">
                            <label htmlFor="photoUrl" className="block text-gray-700 font-bold mb-2">
                                Photo URL
                            </label>
                            <input
                                placeholder='Photo URL'
                                type="text"
                                {...register('photoUrl')}
                                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>

                        <div className="mb-4 w-1/2">
                            <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
                                Gender
                            </label>
                            <select
                                {...register('gender', { required: true })}
                                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                            Address
                        </label>
                        <textarea
                            {...register('address', { required: true })}
                            className="w-full border resize-none border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                            rows="3"
                            placeholder='Enter your address'
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-secondary hover:bg-red-500 text-white py-2 px-4 rounded-md"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <p className='text-center mt-4'>Already have an account ? <Link to='/login' className='underline text-secondary'>Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;
