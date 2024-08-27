import React, {useState} from 'react';
import Header from "../../Components/Header/Header";
import MainHeader from "../../Components/MainHeader/MainHeader";
import Heading from "../../Components/Heading/Heading";
import Registration from "../../Components/Registration/Registration";
import Footer from "../../Components/Footer/Footer";
import {useParams} from "react-router-dom";

const RegistrationPage = () => {

    const [token, _] = useState(useParams().token);

    console.log(token);
    return (
        <>
            <MainHeader />
            <Heading title="Регистрация" />
            <Registration />
            <Footer />
        </>
    );
};

export default RegistrationPage;