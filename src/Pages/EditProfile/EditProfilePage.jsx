import React from 'react';
import Header from "../../Components/Header/Header";
import MainHeader from "../../Components/MainHeader/MainHeader";
import Heading from "../../Components/Heading/Heading";
import Footer from "../../Components/Footer/Footer";
import EditProfile from "../../Components/EditProfile/EditProfile";

const EditProfilePage = ({user, ...props}) => {
    return (
        <>
            <Header active={4} user={user}/>
            <MainHeader user={user}/>
            <Heading title={`Профиль ${user.secondName} ${user.firstName} ${user.patronic}`} />
            <EditProfile user={user} setUser={props.setUser}/>
            <Footer />
        </>
    );
};

export default EditProfilePage;