import React, {useEffect, useState} from 'react';
import style from './DiaryStyle.module.css';
import Heading from "../Heading/Heading";

const Diary = () => {
    const DAYS = [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье',
    ];
    const getDate = () => {
        let t = Date.now() + 3600000 * 3;
        let sw = new Date(), ew = new Date();
        sw.setDate(sw.getDate() - Math.floor(t / 1000 / 60 / 60 / 24 - 4) % 7);
        ew.setDate(sw.getDate() + 7);
        return {
            sw: sw.getDate(),
            ew: ew.getDate(),
            day: Math.floor(t / 1000 / 60 / 60 / 24 - 4) % 7,
            dayName: DAYS[Math.floor(t / 1000 / 60 / 60 / 24 - 4) % 7],
            week: Math.floor(t / 1000 / 60 / 60 / 24 / 7),
            date: String(sw.getDate()).padStart(2, "0") + "." + String(sw.getMonth() + 1).padStart(2, "0") + "." + String(sw.getFullYear()).padStart(2, "0")
                  + " - " +
                  String(ew.getDate()).padStart(2, "0") + "." + String(ew.getMonth() + 1).padStart(2, "0") + "." + String(ew.getFullYear()).padStart(2, "0"),
        }
    }

    const [cDate, setCDate] = useState(getDate());
    const constructDays = (dw) => {
        let diary = [];
        for(let i = 0; i < 6; i ++) {
            let cd = new Date();
            cd.setDate(cDate.sw + i + (dw * 7));
            diary.push({
                name: DAYS[i],
                date: String(cd.getDate()).padStart(2, "0") + "." + String(cd.getMonth() + 1).padStart(2, "0") + "." + String(cd.getFullYear()).padStart(2, "0"),
                status: ((cDate.day <= i && weekDiff >= 0) || weekDiff > 0),
            })
        }
        return diary;
    }

    const [weekDiff, setWeekDiff] = useState(0);

    const [days, setDays] = useState(constructDays(weekDiff));

    const [isDayShowed, setIsDayShowed] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
    ]);

    const [changedIsDayShowed, setChangedIsDayShowed] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
    ]);

    useEffect(() => {
        setDays(constructDays(weekDiff));
    }, [weekDiff]);


    return (
        <main className={style.container}>
            <Heading title="Дневник 1-А"/>
            <h2>{getDate().date}</h2>
            <button onClick={(e) => {
                e.preventDefault();
                setWeekDiff(weekDiff - 1);
            }}>
                -
            </button>
            <button onClick={(e) => {
                e.preventDefault();
                setWeekDiff(weekDiff + 1);
            }}>
                +
            </button>
            {days.map((day, index) => (
                <>
                    <div className={style.dayPanel}>
                        <div className={style.dayPanel}>
                            <h1 className={style.dayName}>
                                {day.name}
                                <span className={style.secondary}>{day.date}</span>
                            </h1>
                            {(day.status) ? "" : (<span className={style.dayStatus}>день завершился</span>)}
                        </div>
                        <div className={style.line}></div>
                        <div>
                            <button onClick={() => {
                                let h = isDayShowed;
                                h[index] = !h[index];
                                setChangedIsDayShowed(h);
                            }}>
                                {isDayShowed[index]} {(isDayShowed[index]) ? "Свернуть" : "Развернуть"}
                            </button>
                        </div>
                    </div>
                </>
            ))}
        </main>
    );
};

export default Diary;