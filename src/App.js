import Header from "./Components/Header/Header";
import MainHeader from "./Components/MainHeader/MainHeader";
import StudentDiary from "./Components/Diary/StudentDiary";
import "./style.css";
import React, {useState} from "react";
import {BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
import Heading from "./Components/Heading/Heading";
import SchedulePage from "./Pages/Schedule/SchedulePage";
import AuthPage from "./Pages/Auth/AuthPage";
import CalendarPage from "./Pages/CalendarPage/CalendarPage";
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
            role: 1,
            phone: "+78127777777",
        })
    return (
        <Routes>
            <Route path="/schedule" element={<SchedulePage user={user} />} />
            <Route path="/auth" element={<AuthPage user={user} />} />
            <Route path="/registration/:token" element={<RegistrationPage />} />
            <Route path="/calendar" element={<CalendarPage user={user} />} />
            <Route path="/profile" element={<EditProfilePage user={user} setUser={setUser}/>} />
            <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
    );
}
export default App;

// main color - #618935