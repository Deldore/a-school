import React, {useState} from 'react';
import Header from "../../Components/Header/Header";
import MainHeader from "../../Components/MainHeader/MainHeader";
import Heading from "../../Components/Heading/Heading";
import Diary from "../../Components/Diary/Diary";
import style from './StudentStyles.module.css';
import Statistic from "../../Components/Statistic/Statistic";

const StudentPage = () => {

    const [pageStatus, setPageStatus] = useState(true);
    return (
        <>
            <Header />
            <MainHeader />
            <Heading title="Дневник 1-А"/>
            <div style={{padding: "15px 5%"}}>
                <button onClick={() => setPageStatus(true)}
                        className={(!pageStatus) ? style.changeButton : `${style.changeButton} ${style.changeButtonActive}`}>Дневник</button>
                <button onClick={() => setPageStatus(false)}
                        className={(pageStatus) ? style.changeButton : `${style.changeButton} ${style.changeButtonActive}`}>Статистика</button>
            </div>
            <main>
                {(pageStatus) ? (
                    <Diary />
                ) : (
                    <Statistic />
                )}
            </main>
        </>
    );
};

export default StudentPage;