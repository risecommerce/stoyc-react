// components
import Header from "../components/Header";
import Footer from "../components/Footer"; 
import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
const Layout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    if (isLoading) {
        return <Loading />;
    }
    return (
        <>
            <Header />
         
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;




