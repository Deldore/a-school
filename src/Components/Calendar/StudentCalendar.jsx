import React, {useState} from 'react';
import style from './Calendar.module.css';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
const StudentCalendar = () => {
    const DAYS = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
    ];
    const MONTHS = [
        "января",
        "февраля",
        "марта",
        "апреля",
        "мая",
        "июня",
        "июля",
        "августа",
        "сентября",
        "октября",
        "ноября",
        "декабря",
    ]
    const workWithCalendar = (value, event) => {
        setChoosenDate(value);
    }

    const [choosenDate, setChoosenDate] = useState(new Date())

    const [data, setData] = useState([
        {
            title: "Русский язык",
            time: "8:45 - 9:30"
        },
        {
            title: "ИЗО",
            time: "9:45 - 10:30"
        }
    ])

    return (
        <div className={style.main}>
            <Calendar
                minDate={new Date(2024, 7, 1)}
                maxDate={new Date(2025, 4, 31)}
                onClickDay={(value, event) => workWithCalendar(value, event)}
            />
            <div className={style.description}>
                <div className={style.date}>
                    <div className={style.dayNumb}>
                        <h1 style={{fontWeight: 800}}>
                            {String(choosenDate.getDate()).padStart(2, "0")}
                        </h1>
                    </div>
                    <div className={style.dayDesc}>
                        {MONTHS[choosenDate.getMonth()]} {String(choosenDate.getFullYear())} <br/>
                        <span className={style.secondary}>
                            {DAYS[choosenDate.getDay()]}
                        </span>
                    </div>
                </div>
                <div>
                    <h3 className={style.title}>Предметы:</h3>
                    <ul className={style.list}>
                        {data.map(d => (
                            <li className={style.item}>
                                <div style={{width: "125px", color: "#6C827F"}}>{d.time}</div>
                                <div style={{width: "125px"}}>{d.title}</div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className={style.title}>Мероприятия:</h3>
                    <ul className={style.list}>
                        {data.map(d => (
                            <li className={style.item}>
                                <div style={{width: "125px", color: "#6C827F"}}>{d.time}</div>
                                <div style={{width: "125px"}}>{d.title}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default StudentCalendar;