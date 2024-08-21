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
    const MONTHS = [
        "янв.",
        "февр.",
        "март",
        "апр.",
        "май",
        "июнь",
        "июль",
        "авг.",
        "сент.",
        "окт.",
        "ноябрь",
        "дек.",
    ]
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
                date: String(cd.getDate()).padStart(2, "0") + " " + MONTHS[cd.getMonth()] + " " + String(cd.getFullYear()).padStart(2, "0"),
                status: ((cDate.day <= i && weekDiff >= 0) || weekDiff > 0),
            })
        }
        return diary;
    }

    const [weekDiff, setWeekDiff] = useState(0);

    const [days, setDays] = useState(constructDays(weekDiff));

    const [isDayShowed, setIsDayShowed] = useState([]);

    useEffect(() => {
        setDays(constructDays(weekDiff));
        setIsDayShowed([]);
    }, [weekDiff]);

    const COUNTER = [1, 2, 3, 4, 5];

    return (
        <div className={style.container}>
            <div className={style.week}>
                <button className={style.dayButton} style={{fontSize: "120%"}} onClick={(e) => {
                    e.preventDefault();
                    setWeekDiff(weekDiff - 1);
                }} disabled={!(getDate().week - 2847 + weekDiff > 1)}>
                    ←
                </button>
                {(getDate().week - 2847 + weekDiff - 2 > 0) ? (
                    <div className={`${style.diaryItem} ${style.secondary}`}>
                        <h2>{getDate().week - 2847 + weekDiff - 2} неделя</h2>
                    </div>
                ) : (
                    <div className={`${style.diaryItem} ${style.secondary}`} style={{opacity: 0}}>
                        <h2>{getDate().week - 2847 + weekDiff - 2} неделя</h2>
                    </div>
                )}
                {(getDate().week - 2847 + weekDiff - 1 > 0) ? (
                    <div className={`${style.diaryItem} ${style.secondary}`}>
                        <h2>{getDate().week - 2847 + weekDiff - 1} неделя</h2>
                    </div>
                ) : (
                    <div className={`${style.diaryItem} ${style.secondary}`} style={{opacity: 0}}>
                        <h2>{getDate().week - 2847 + weekDiff - 1} неделя</h2>
                    </div>
                )}
                <div style={{textAlign: "center", fontSize: "140%"}}>
                    <h2>{getDate().week - 2847 + weekDiff} неделя</h2>
                    <span style={{color: "#618935", fontSize: "70%"}}>{days[0].date} - {days[5].date}</span>
                </div>
                <div className={`${style.diaryItem}`}>
                    <h2>{getDate().week - 2847 + weekDiff + 1} неделя</h2>
                </div>
                <div className={`${style.diaryItem}`}>
                    <h2>{getDate().week - 2847 + weekDiff + 2} неделя</h2>
                </div>
                <button className={style.dayButton} style={{fontSize: "120%"}} onClick={(e) => {
                    e.preventDefault();
                    setWeekDiff(weekDiff + 1);
                }}>
                    →
                </button>
            </div>
            {days.map((day, index) => (
                <>
                    <div className={style.dayPanel}>
                        <div className={style.dayPanel}>
                            <h1 className={style.dayName}>
                            {day.name}
                                <span className={style.secondary}>{day.date}</span>
                            </h1>
                            {(day.status) ? "" : (<span className={style.dayStatus}>День завершился</span>)}
                        </div>
                        <div className={style.line}></div>
                        <div>
                            <button className={style.dayButton} onClick={(e) => {
                                if (isDayShowed.includes(index)) {
                                    setIsDayShowed(isDayShowed.filter(day => day !== index))
                                } else {
                                    setIsDayShowed([...isDayShowed, index])
                                }
                            }}>
                                {(isDayShowed.includes(index)) ? "Свернуть" : "Развернуть"}
                            </button>
                        </div>
                    </div>
                    <div style={{display: (isDayShowed.includes(index)) ? "flex" : "none"}}>
                        <table className={style.table}>
                            <thead>
                                <th>№</th>
                                <th>Время</th>
                                <th>Предмет/мероприятие</th>
                                <th>Тема, домашнее задание, комментарий</th>
                                <th>Оценка</th>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>08:00 - 08:45</td>
                                <td>Литература, чтение</td>
                                <td style={{textAlign: "left"}}>
                                    <b>Тема:</b> Пример очень длинного названия темы, для визуализации второй
                                    строки.<br/>
                                    <br/>
                                    <b>Дом. задание:</b> Стр. 4-5 выучить стих из 4 строк<br/>
                                    <br/>
                                    <b>Комментарий:</b> На уроке будем зачитывать выученные стихи. Стих выберите любой,
                                    который считаете наиболее интересным. Ссылка на онлайн версию: some.link.com<br/>
                                </td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>09:00 - 09:45</td>
                                <td>Литература, чтение</td>
                                <td style={{textAlign: "left"}}>
                                    <b>Тема:</b> Пример очень длинного названия темы, для визуализации второй
                                    строки.<br/>
                                    <br/>
                                    <b>Дом. задание:</b> Стр. 4-5 выучить стих из 4 строк<br/>
                                    <br/>
                                    <b>Комментарий:</b> На уроке будем зачитывать выученные стихи. Стих выберите любой,
                                    который считаете наиболее интересным. Ссылка на онлайн версию: some.link.com<br/>
                                </td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>10:00 - 10:45</td>
                                <td>Литература, чтение</td>
                                <td style={{textAlign: "left"}}>
                                    <b>Тема:</b> Пример очень длинного названия темы, для визуализации второй
                                    строки.<br/>
                                    <br/>
                                    <b>Дом. задание:</b> Стр. 4-5 выучить стих из 4 строк<br/>
                                    <br/>
                                    <b>Комментарий:</b> На уроке будем зачитывать выученные стихи. Стих выберите любой,
                                    который считаете наиболее интересным. Ссылка на онлайн версию: some.link.com<br/>
                                </td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>11:00 - 11:45</td>
                                <td>Литература, чтение</td>
                                <td style={{textAlign: "left"}}>
                                    <b>Тема:</b> Пример очень длинного названия темы, для визуализации второй
                                    строки.<br/>
                                    <br/>
                                    <b>Дом. задание:</b> Стр. 4-5 выучить стих из 4 строк<br/>
                                    <br/>
                                    <b>Комментарий:</b> На уроке будем зачитывать выученные стихи. Стих выберите любой,
                                    который считаете наиболее интересным. Ссылка на онлайн версию: some.link.com<br/>
                                </td>
                                <td>5</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            ))}
        </div>
    );
};

export default Diary;