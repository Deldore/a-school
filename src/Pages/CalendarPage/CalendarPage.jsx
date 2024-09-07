import React from 'react';
import Header from "../../Components/Header/Header";
import MainHeader from "../../Components/MainHeader/MainHeader";
import Footer from "../../Components/Footer/Footer";
import Heading from "../../Components/Heading/Heading";
import StudentCalendar from "../../Components/Calendar/StudentCalendar";
import TeacherCalendar from "../../Components/Calendar/TeacherCalendar";
const SchedulePage = ({user, ...props}) => {
    console.log("role: ", user.role)
    return (
        <>
            <Header active={1} user={user}/>
            <MainHeader />
            <Heading title={(!user.role) ? "Расписание" : "Журнал"}/>
            {(!user.role) ? <StudentCalendar/> : <TeacherCalendar />}
            <Footer />
        </>
    );
};

export default SchedulePage;