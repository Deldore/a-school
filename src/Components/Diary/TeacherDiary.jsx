import React, {useEffect, useState} from 'react';
import style from './DiaryStyle.module.css';

const TeacherDiary = () => {
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
                schedule: [
                    {
                        name: "Русский язык",
                        theme: "Пример названия очень длинного названия",
                        homeTask: "write essay",
                        comment: "Any comment",
                    },
                    {
                        name: "Физ-ра",
                        theme: "Пример названия очень длинного названия",
                        homeTask: "write essay",
                        comment: "Any comment",
                    },
                    {
                        name: "Физ-ра",
                        theme: "Пример названия очень длинного названия",
                        homeTask: "write essay",
                        comment: "Any comment",
                    },
                    {
                        name: "Математика",
                        theme: "Пример названия очень длинного названия",
                        homeTask: "write essay",
                        comment: "Any comment",
                    },
                ]
            })
        }
        return diary;
    }

    const [weekDiff, setWeekDiff] = useState(0);

    const [days, setDays] = useState(constructDays(weekDiff));

    const changeLesson = (day, lesson, val, col) => {
        // let diary = [];
        // for(let i = 0; i < 6; i ++) {
        //     let cd = new Date();
        //     cd.setDate(cDate.sw + i + (weekDiff * 7));
        //     if (day !== i) {
        //         diary.push(days[i])
        //     } else {
        //         let sch = [];
        //         for (let j = 0; j < days[i].schedule.length; j ++) {
        //             if (j !== lesson) sch.push(days[i].schedule[j])
        //             else {
        //                 switch (col) {
        //                     case 0:
        //                         sch.push({
        //                             name: val,
        //                             theme: days[i].schedule[j].theme,
        //                             homeTask: days[i].schedule[j].homeTask,
        //                             comment: days[i].schedule[j].comment,
        //                         })
        //                         break;
        //                     case 1:
        //                         sch.push({
        //                             name: days[i].schedule[j].name,
        //                             theme: val,
        //                             homeTask: days[i].schedule[j].homeTask,
        //                             comment: days[i].schedule[j].comment,
        //                         })
        //                         break;
        //                     case 2:
        //                         sch.push({
        //                             name: days[i].schedule[j].name,
        //                             theme: days[i].schedule[j].theme,
        //                             homeTask: val,
        //                             comment: days[i].schedule[j].comment,
        //                         })
        //                         break;
        //                     case 3:
        //                         sch.push({
        //                             name: days[i].schedule[j].name,
        //                             theme: days[i].schedule[j].theme,
        //                             homeTask: days[i].schedule[j].homeTask,
        //                             comment: val,
        //                         })
        //                         break;
        //                 }
        //             }
        //         }
        //         diary.push({
        //             name: DAYS[i],
        //             date: String(cd.getDate()).padStart(2, "0") + " " + MONTHS[cd.getMonth()] + " " + String(cd.getFullYear()).padStart(2, "0"),
        //             status: ((cDate.day <= i && weekDiff >= 0) || weekDiff > 0),
        //             schedule: sch,
        //         })
        //     }
        // }
        let diary = [...days];
        const keys = ["name", "theme", "homeTask", "comment"];
        diary[day].schedule[lesson][keys[col]] = val;
        setDays(diary);
    }

    const addNewLesson = (day) => {
        let diary = [...days];
        diary[day].schedule.push({
            name: "",
            theme: "",
            homeTask: "",
            comment: "",
        })
        setDays(diary);
    }

    useEffect(() => {
        setDays(constructDays(weekDiff));
        setIsDayShowed([]);
    }, [weekDiff]);

    const [isDayShowed, setIsDayShowed] = useState([]);
    useEffect(() => {
        setIsDayShowed([getDate().day])
    }, []);

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
                    <div className={`${style.diaryItem} ${style.secondary} ${style.mobileHidden}`}>
                        <h2>{getDate().week - 2847 + weekDiff - 2} неделя</h2>
                    </div>
                ) : (
                    <div className={`${style.diaryItem} ${style.secondary} ${style.mobileHidden}`} style={{opacity: 0}}>
                        <h2>{getDate().week - 2847 + weekDiff - 2} неделя</h2>
                    </div>
                )}
                {(getDate().week - 2847 + weekDiff - 1 > 0) ? (
                    <div className={`${style.diaryItem} ${style.secondary} ${style.mobileHidden}`}>
                        <h2>{getDate().week - 2847 + weekDiff - 1} неделя</h2>
                    </div>
                ) : (
                    <div className={`${style.diaryItem} ${style.secondary} ${style.mobileHidden}`} style={{opacity: 0}}>
                        <h2>{getDate().week - 2847 + weekDiff - 1} неделя</h2>
                    </div>
                )}
                <div style={{textAlign: "center", fontSize: "140%"}}>
                    <h2>{getDate().week - 2847 + weekDiff} неделя</h2>
                    <span style={{color: "#618935", fontSize: "70%"}}>{days[0].date} - {days[5].date}</span>
                </div>
                <div className={`${style.diaryItem} ${style.mobileHidden}`}>
                    <h2>{getDate().week - 2847 + weekDiff + 1} неделя</h2>
                </div>
                <div className={`${style.diaryItem} ${style.mobileHidden}`}>
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
                            <tr>
                                <th>№</th>
                                <th className={style.time}>Время</th>
                                <th>Предмет/мероприятие</th>
                                <th>Тема</th>
                                <th>Дом. задание</th>
                                <th>Комментарий</th>
                            </tr>
                            <tbody>
                            {(day.schedule) ? day.schedule.map((lesson, jndex) => (
                                <tr>
                                    <td>{jndex + 1}</td>
                                    <td>{8 + jndex}:00 - {8 + jndex}:45</td>
                                    <td style={{padding: "5px 5px"}}>
                                        <input className={style.input} type="text" value={lesson.name}
                                               placeholder="Введите название предмета"
                                               onChange={(e) => changeLesson(index, jndex, e.target.value, 0)} />
                                    </td>
                                    <td style={{padding: "5px 5px"}}>
                                        <textarea className={style.input} value={lesson.theme}
                                                  placeholder="Введите тему предмета"
                                                  onChange={(e) => changeLesson(index, jndex, e.target.value, 1)} />
                                    </td>
                                    <td style={{padding: "5px 5px"}}>
                                        <textarea className={style.input} value={lesson.homeTask}
                                                  placeholder="Введите домашнее задание"
                                                  onChange={(e) => changeLesson(index, jndex, e.target.value, 2)} />
                                    </td>
                                    <td style={{padding: "5px 5px"}}>
                                        <textarea className={style.input} value={lesson.comment}
                                                  placeholder="Введите комментарий к предмету"
                                                  onChange={(e) => changeLesson(index, jndex, e.target.value, 3)} />
                                    </td>
                                </tr>
                            )) : <></>}
                            <tr>
                                <td colSpan="6">
                                    <button className={style.addRowButton} onClick={() => addNewLesson(index)}>+ Добавить строку</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </>
            ))}
        </div>
    );
};

export default TeacherDiary;