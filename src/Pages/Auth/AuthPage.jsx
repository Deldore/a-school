import React from 'react';
import MainHeader from "../../Components/MainHeader/MainHeader";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Auth from "../../Components/Auth/Auth";

const AuthPage = () => {
    return (
        <>
            <MainHeader />
            <Auth />
            <Footer />
        </>
    );
};

export default AuthPage;