import Header from "./Components/Header/Header";
import MainHeader from "./Components/MainHeader/MainHeader";
import Diary from "./Components/Diary/Diary";
import "./style.css";
import React, {useState} from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Heading from "./Components/Heading/Heading";
import StudentPage from "./Pages/Students/StudentPage";
import AuthPage from "./Pages/Auth/AuthPage";
import SchdeulePage from "./Pages/SchedulePage/SchdeulePage";
function App() {
    return (
        <Routes>
            <Route path="/" element={<StudentPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/schedule" element={<SchdeulePage />} />
        </Routes>
    );
}
export default App;

// main color - #618935