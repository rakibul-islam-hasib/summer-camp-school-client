import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useUser } from '../../../../hooks/useUser';
import { Pagination, ThemeProvider, createTheme } from '@mui/material';
import { v4 } from 'uuid';
import { ScaleLoader } from 'react-spinners';
const EnrolledClasses = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [paginatedData, setPaginatedData] = useState([]); 
    const [loading, setLoading] = useState(true);
    const { currentUser } = useUser();
    let itemPerPage = 2;
    const totalPage = Math.ceil(data.length / itemPerPage);
    const axiosSecure = useAxiosSecure();
    const theme = createTheme({
        palette: {
            primary: {
                main: '#ff0000', // Set the primary color
            },
            secondary: {
                main: '#00ff00', // Set the secondary color
            },
        },
    });


    useEffect(() => {
        axiosSecure.get(`/enrolled-classes/${currentUser.email}`)
            .then(res => {
                setData(res.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    // Pagination
    useEffect(() => {
        let lastIndex = page * itemPerPage;
        let firstIndex = lastIndex - itemPerPage;

        // Adjust lastIndex if it exceeds the total number of items
        if (lastIndex > data.length) {
            lastIndex = data.length;
        }

        const currentData = data.slice(firstIndex, lastIndex);
        setPaginatedData(currentData);
    }, [page, totalPage]);




    const handleChange = (event, value) => setPage(value);
    if (loading) { // [2
        return <div className='h-full w-full flex justify-center items-center'><ScaleLoader color="#FF1949" /></div>;
    }
    return (
        <div>
            <div className="text-center  my-10">
                <h1 className="text-2xl font-bold text-gray-700">Enrolled Classes</h1>

            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {
                    paginatedData.map(item => <div key={item.classes._id + v4()} className="
                bg-white
                shadow-md
                h-96
                mx-3
                rounded-3xl
                flex flex-col
                justify-around
                items-center
                overflow-hidden
                sm:flex-row sm:h-52 sm:w-3/5
                md:w-96
              ">
                        <img
                            className="h-1/2 w-full sm:h-full sm:w-1/2 object-cover"
                            src={item.classes.image}
                            alt="image"
                        />

                        <div className="flex-1
                  w-full
                  flex flex-col
                  items-baseline
                  justify-around h-1/2
                  pl-6
                  sm:h-full sm:items-baseline sm:w-1/2
                ">
                            <div className="flex flex-col justify-start items-baseline">
                                <h1 title={item.classes.name} className="text-lg font-normal mb-0 text-gray-600 font-sans">
                                    {item.classes.name.length > 20 ? item.classes.name.slice(0, 20) + '...' : item.classes.name}
                                </h1>
                                <span className="text-xs text-indigo-300 mt-0">by <span className='text-black'>{item.classes.instructorName}</span></span>
                            </div>
                            <p className="text-xs text-gray-500 w-4/5">
                                {item.classes.description?.length > 100 ? item.classes.description.slice(0, 100) + '...' : item.classes.description}
                            </p>
                            <div className="w-full flex justify-between items-center">
                                <h1 className="font-bold text-gray-500">${item.classes.price}</h1>
                                <button
                                    className="bg-secondary font-bold rounded-xl mr-5 text-white px-3 py-1 shadow-md"
                                >
                                    View
                                </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <ThemeProvider theme={theme}>
                <div className="w-full h-full flex justify-center items-center my-10">
                    <Pagination onChange={handleChange} count={totalPage} color="primary" />
                </div>
            </ThemeProvider>
            <div className="">
                <p className='text-center'>Showing result <span className='text-secondary font-bold'>{page} <span className='text-black font-medium'>of</span> {totalPage}</span></p>
            </div>
        </div>
    );
};

export default EnrolledClasses;