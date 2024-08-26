import React from 'react';
import style from './Schedule.module.css';
import Header from "../../Components/Header/Header";
import MainHeader from "../../Components/MainHeader/MainHeader";
import Footer from "../../Components/Footer/Footer";
import Heading from "../../Components/Heading/Heading";
import Schedule from "../../Components/Schedule/Schedule";
const SchdeulePage = ({user, ...props}) => {
    return (
        <>
            <Header active={1} user={user}/>
            <MainHeader />
            <Heading title="Расписание"/>
            <Schedule />
            <Footer />
        </>
    );
};

export default SchdeulePage;