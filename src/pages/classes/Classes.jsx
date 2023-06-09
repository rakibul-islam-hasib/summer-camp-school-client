import React, { useEffect, useState } from 'react';
import useAxiosFetch from '../../hooks/useAxiosFetch';

const Classes = () => {
    const [classes, setClasses] = useState([]);
    const axiosFetch = useAxiosFetch();
    useEffect(()=>{
        axiosFetch.get('/classes')
        .then(res=>setClasses(res.data))
        .catch(err=>console.log(err))
    },[])
    return (
        <div>
            <h1>Classes</h1>
        </div>
    );
};

export default Classes;