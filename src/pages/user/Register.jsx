import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useTitle } from '../../hooks/useTitle';
import { AuthContext } from '../../utilities/providers/AuthProvider';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AiOutlineUser, AiOutlineMail, AiOutlineLock, AiOutlinePhone, AiOutlinePicture } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import GoogleLogin from '../../components/Social/GoogleLogin';

const Register = () => {
    useTitle('Register | Sound Safari');
    const { signUp, error, setError, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const onSubmit = (data) => {
        setError('');
        toast.promise(
            signUp(data.email, data.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    if (user) {
                        return updateUser(data.name, data.photoUrl).then(() => {
                            const userImp = {
                                name: user.displayName,
                                email: user.email,
                                photoUrl: user.photoURL,
                                gender: data.gender,
                                address: data.address,
                                role: 'user',
                                phone: data.phone,
                            };

                            if (user.email && user.displayName) {
                                return axios
                                    .post('https://sound-safari.vercel.app/new-user', userImp)
                                    .then(() => {
                                        navigate('/');
                                        return 'Registration successful!';
                                    })
                                    .catch((err) => {
                                        throw new Error(err);
                                    });
                            }
                        });
                    }
                })
                .catch((err) => {
                    setError(err.code);
                    throw new Error(err);
                }),
            {
                pending: 'Please wait...',
                success: 'Registration successful!',
                error: 'Registration failed!',
            }
        );
    };

    const password = watch('password', '');

    return (
        <div className="flex justify-center items-center pt-14 bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-center mb-6">Please Register</h2>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex items-center gap-5">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                <AiOutlineUser className="inline-block mr-2 mb-1 text-lg" />
                                Name
                            </label>
                            <input
                                placeholder="Enter your name"
                                type="text"
                                {...register('name', { required: true })}
                                className="w-full border-gray-300 border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                <AiOutlineMail className="inline-block mr-2 mb-1 text-lg" />
                                Email
                            </label>
                            <input
                                placeholder="Enter your email"
                                type="email"
                                {...register('email', { required: true })}
                                className="w-full border-gray-300 border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                                <AiOutlineLock className="inline-block mr-2 mb-1 text-lg" />
                                Password
                            </label>
                            <input
                                placeholder="Enter Password"
                                type="password"
                                {...register('password', {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                                })}
                                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">
                                <AiOutlineLock className="inline-block mr-2 mb-1 text-lg" />
                                Confirm Password
                            </label>
                            <input
                                placeholder="Confirm Password"
                                type="password"
                                {...register('confirmPassword', {
                                    required: true,
                                    validate: (value) => value === password || 'Passwords do not match',
                                })}
                                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                            />
                            {errors.confirmPassword && (
                                <div className="text-red-500 text-sm w-full mt-1">
                                    <p>{errors.confirmPassword.message}</p>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className="flex items-center gap-5">
                        <div className="mb-4">
                            <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
                                <AiOutlinePhone className="inline-block mr-2 mb-1 text-lg" />
                                Phone Number
                            </label>
                            <input
                                placeholder="Phone Number"
                                type="tel"
                                {...register('phone', { required: true })}
                                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="photoUrl" className="block text-gray-700 font-bold mb-2">
                                <AiOutlinePicture className="inline-block mr-2 mb-1 text-lg" />
                                Photo URL
                            </label>
                            <input
                                placeholder="Photo URL"
                                type="text"
                                {...register('photoUrl')}
                                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                            />
                        </div>
                    </div>
                        <div className="">
                            <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">
                                <AiOutlineUser className="inline-block mr-2 mb-1 text-lg" />
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
                        <div className="mb-4">
                            <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                                <HiOutlineLocationMarker className="inline-block mr-2 mb-1 text-lg" />
                                Address
                            </label>
                            <textarea
                                {...register('address', { required: true })}
                                className="w-full border resize-none border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
                                rows="3"
                                placeholder="Enter your address"
                            ></textarea>
                        </div>
                    <div className="text-center">
                        <button type="submit" className="bg-secondary hover:bg-red-500 text-white py-2 px-4 rounded-md">
                            Register
                        </button>
                        {errors.password && (
                            <div className="text-red-500 text-sm w-full mt-1">
                                <p>Password must be at least 6 characters long, contain a <br /> capital letter, and a special character.</p>
                            </div>
                        )}
                    </div>
                </form>
                <p className="text-center mt-4">
                    Already have an account? <Link to="/login" className="underline text-secondary">Login</Link>
                </p>
            <GoogleLogin /> 
            </div>
        </div>
    );
};

export default Register;
