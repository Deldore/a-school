import Header from "./Components/Header/Header";
import MainHeader from "./Components/MainHeader/MainHeader";
import Diary from "./Components/Diary/Diary";
import "./style.css";
import React, {useState} from "react";
import {BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
import Heading from "./Components/Heading/Heading";
import StudentPage from "./Pages/Students/StudentPage";
import AuthPage from "./Pages/Auth/AuthPage";
import SchdeulePage from "./Pages/SchedulePage/SchdeulePage";
import EditProfilePage from "./Pages/EditProfile/EditProfilePage";
import Registration from "./Components/Registration/Registration";
import RegistrationPage from "./Pages/Registration/RegistrationPage";
function App() {
        const [user, setUser] = useState({
            email: "mail@mail.ru",
            password: "123123123",
            firstName: "Никита",
            secondName: "Пресняков",
            patronic: "Владимирович",
            form: "2-A",
            role: "0",
            phone: "+78127777777",
        })
    return (
        <Routes>
            <Route path="/" element={<StudentPage user={user} />} />
            <Route path="/auth" element={<AuthPage user={user} />} />
            <Route path="/registration/:token" element={<RegistrationPage />} />
            <Route path="/schedule" element={<SchdeulePage user={user} />} />
            <Route path="/profile" element={<EditProfilePage user={user} setUser={setUser}/>} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
    );
}
export default App;

// main color - #618935