import React from 'react';
import { useForm } from 'react-hook-form';
import { useTitle } from '../../hooks/useTitle';

const Register = () => {
    useTitle('Register | Sound Safari');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="flex justify-center items-center pt-14 bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-6">Registration Form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex items-center gap-5">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                Name
                            </label>
                            <input
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
                                type="email"
                                {...register('email', { required: true })}
                                className="w-full border-gray-300 border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                    </div>
                    <div className="flex gap-5 items-center">
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                {...register('password', {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                                })}
                                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">
                                    Password must be at least 6 characters long, contain a capital letter, and a special character.
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                {...register('confirmPassword', { required: true })}
                                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photoUrl" className="block text-gray-700 font-bold mb-2">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            {...register('photoUrl')}
                            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
                            Gender
                        </label>
                        <select
                            {...register('gender', { required: true })}
                            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            {...register('phoneNumber', { required: true })}
                            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                            Address
                        </label>
                        <textarea
                            {...register('address', { required: true })}
                            className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
