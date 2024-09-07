import React, {useState} from 'react';
import Header from "../../Components/Header/Header";
import MainHeader from "../../Components/MainHeader/MainHeader";
import Heading from "../../Components/Heading/Heading";
import StudentDiary from "../../Components/Diary/StudentDiary";
import style from './ScheduleStyles.module.css';
import Statistic from "../../Components/Statistic/Statistic";
import Footer from "../../Components/Footer/Footer";
import TeacherDiary from "../../Components/Diary/TeacherDiary";
import Classes from "../../Components/Classes/Classes";

const SchedulePage = ({user, ...props}) => {

    const [pageStatus, setPageStatus] = useState(true);
    return (
        <>
            <Header active={0} user={user}/>
            <MainHeader />
            <Heading title={`Дневник ${user.form}`}/>
            <div style={{padding: "15px 5%"}}>
                <button onClick={() => setPageStatus(true)}
                        className={(!pageStatus) ? style.changeButton : `${style.changeButton} ${style.changeButtonActive}`}>
                    Расписание
                </button>
                <button onClick={() => setPageStatus(false)}
                        className={(pageStatus) ? style.changeButton : `${style.changeButton} ${style.changeButtonActive}`}>
                    {(!user.role) ? "Статистика" : "Список предметов и регулярных мероприятий"}
                </button>
            </div>
            <main>
                {(pageStatus) ? (
                        (!user.role) ? <StudentDiary /> : <TeacherDiary></TeacherDiary>
                ) : (
                    (!user.role) ? <Statistic /> : <Classes></Classes>
                )}
            </main>
            <Footer/>
        </>
    );
};

export default SchedulePage;