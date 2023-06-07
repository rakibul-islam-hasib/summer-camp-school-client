import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Scroll = () => {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
};

export default Scroll;