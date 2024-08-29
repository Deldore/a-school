import React, {useState} from 'react';
import Header from "../../Components/Header/Header";
import MainHeader from "../../Components/MainHeader/MainHeader";
import Heading from "../../Components/Heading/Heading";
import Registration from "../../Components/Registration/Registration";
import Footer from "../../Components/Footer/Footer";
import {useParams} from "react-router-dom";

const RegistrationPage = () => {

    const [token, _] = useState(useParams().token);

    const [user, setUser] = useState({
        token: "123",
        secondName: "Пресняков",
        firstName: "Никита",
        patronic: "Владимирович",
        email: "example@mail.ru",
        number: "",
        password: "",
        confirmPassword: "",
    });

    return (
        <>
            <MainHeader />
            <Heading title="Регистрация" />
            <Registration user={user} setUser={setUser} token={token} />
            <Footer />
        </>
    );
};

export default RegistrationPage;