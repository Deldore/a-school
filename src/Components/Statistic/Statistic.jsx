import React, {useEffect, useState} from 'react';
import style from './StatisticStyle.module.css';

const Statistic = () => {
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
    ];
    const [parts, setParts] = useState([
        {
            sp: new Date(2024, 8, 1, 0, 0, 0),
            ep: new Date(2024, 9, 26, 0, 0, 0),
        },
        {
            sp: new Date(2024, 10, 1, 0, 0, 0),
            ep: new Date(2024, 11, 26, 0, 0, 0),
        },
        {
            sp: new Date(2025, 0, 1, 0, 0, 0),
            ep: new Date(2025, 2, 26, 0, 0, 0),
        },
        {
            sp: new Date(2025, 3, 1, 0, 0, 0),
            ep: new Date(2025, 4, 26, 0, 0, 0),
        },
    ])
    const [choosenPart, setChoosenPart] = useState(0);
    const [actDate, setActDate] = useState(new Date());

    function startDate (p) {
        return String(p.sp.getDate()).padStart(2, "0") + " " + MONTHS[p.sp.getMonth()] + " " + String(p.sp.getFullYear())
    }

    function endDate (p) {
        return String(p.ep.getDate()).padStart(2, "0") + " " + MONTHS[p.ep.getMonth()] + " " + String(p.ep.getFullYear())
    }

    function fullDate (p) {
        return startDate(p) + " - " + endDate(p)
    }

    const [classes, setClasses] = useState([
        {
            title: "Русский язык",
            mark: 4.58,
            visit: 14,
            hours: 14,
        },
        {
            title: "Литература",
            mark: 4.28,
            visit: 11,
            hours: 14,
        },
        {
            title: "Математика",
            mark: 4.78,
            visit: 14,
            hours: 14,
        },
        {
            title: "Труд",
            mark: 5.00,
            visit: 8,
            hours: 14,
        },
        {
            title: "ИЗО",
            mark: 4.98,
            visit: 13,
            hours: 14,
        },
    ]);

    function getAllVisit() {
        let s = 0;
        classes.map(c => {
            s += c.visit;
        })
        // console.log('vis', s);
        return s;
    }
    function getAllHours() {
        let s = 0;
        classes.map(c => {
            s += c.hours;
        })
        return s;
    }

    const [allVisit, setAllVisit] = useState(getAllVisit);
    const [allHours, setAllHours] = useState(getAllHours);
    useEffect(() => {
        if (actDate < parts[1].sp) {
            setChoosenPart(0);
        } else if (actDate > parts[2].ep) {
            setChoosenPart(3);
        } else {
            for (let i = 1; i < 3; i ++) {
                if(actDate >= parts[i].sp && actDate <= parts[i + 1].ep) {
                    setChoosenPart(i);
                    break;
                }
            }
        }
    }, []);

    return (
        <div className={style.container}>
            <div className={style.counter}>
                <button className={style.dayButton} style={{fontSize: "120%"}} onClick={(e) => {
                    e.preventDefault();
                    setChoosenPart(choosenPart - 1);
                }} disabled={!(choosenPart > 0)}>
                    ←
                </button>
                {(choosenPart - 1 > 0) ? (
                    <div className={`${style.diaryItem} ${style.secondary} ${style.mobileHidden}`}>
                        <h2>{choosenPart - 1} четверть</h2>
                    </div>
                ) : (
                    <div className={`${style.diaryItem} ${style.secondary} ${style.mobileHidden}`} style={{opacity: 0}}>
                        <h2>{choosenPart - 2} четверть</h2>
                    </div>
                )}
                {(choosenPart > 0) ? (
                    <div className={`${style.diaryItem} ${style.secondary} ${style.mobileHidden}`}>
                        <h2>{choosenPart} четверть</h2>
                    </div>
                ) : (
                    <div className={`${style.diaryItem} ${style.secondary} ${style.mobileHidden}`} style={{opacity: 0}}>
                        <h2>{choosenPart - 1} четверть</h2>
                    </div>
                )}
                {(choosenPart < 4) ? (
                    <div style={{textAlign: "center", fontSize: "140%"}}>
                        <h2>{choosenPart + 1} четверть</h2>
                        <span style={{color: "#618935", fontSize: "70%"}}>{fullDate(parts[choosenPart])}</span>
                    </div>
                ) : (
                    <div style={{textAlign: "center", fontSize: "140%"}}>
                        <h2>Итоговая</h2>
                        <span style={{color: "#618935", fontSize: "70%"}}>{startDate(parts[0])} - {endDate(parts[3])}</span>
                    </div>
                )}
                {(choosenPart + 1 < 4) ? (
                    <div className={`${style.diaryItem} ${style.secondary} ${style.mobileHidden}`}>
                        <h2>{choosenPart + 2} четверть</h2>
                    </div>
                ) : (
                    <div className={`${style.diaryItem} ${style.secondary} ${style.mobileHidden}`} style={{opacity: (choosenPart >= 4) ? 0 : ''}}>
                        <h2>Итоговая</h2>
                    </div>
                )}

                {(choosenPart + 2 < 4) ? (
                    <div className={`${style.diaryItem} ${style.secondary} ${style.mobileHidden}`}>
                        <h2>{choosenPart + 3} четверть</h2>
                    </div>
                ) : (
                    <div className={`${style.diaryItem} ${style.secondary} ${style.mobileHidden}`} style={{opacity: (choosenPart >= 3) ? 0 : ''}}>
                        <h2>Итоговая</h2>
                    </div>
                )}
                <button className={style.dayButton} style={{fontSize: "120%"}} onClick={(e) => {
                    e.preventDefault();
                    setChoosenPart(choosenPart + 1);
                }} disabled={(choosenPart > 3)}>
                    →
                </button>
            </div>
            <div className={style.statistic}>
                <h1 className={style.title}>Успеваемость:</h1>
                <div className={style.table}>
                    <div className={`${style.item} ${style.mainItem} ${style.topItem}`}>
                        <span className={style.mainItem}>Предмет:</span>
                        <span className={style.mainItem}>Успеваемость:</span>
                    </div>
                    <div className={`${style.item} ${style.mainItem} ${style.topItem}`}>
                        <span className={style.mainItem}>Предмет:</span>
                        <span className={style.mainItem}>Успеваемость:</span>
                    </div>
                    {classes.map((c, index) => (
                        <div className={style.item}>
                            <span key={index}>{c.title}</span>
                            <div className={style.line}></div>
                            <span key={index}>{c.mark}</span>
                        </div>
                    ))}
                </div>
                <h1 className={style.title}>Посещаемость предметов:</h1>
                <div className={style.table}>
                    <div className={`${style.item} ${style.mainItem} ${style.topItem}`}>
                        <span className={style.mainItem}>Предмет:</span>
                        <span className={style.mainItem}>Посещаемость:</span>
                    </div>
                    <div className={`${style.item} ${style.mainItem} ${style.topItem}`}>
                        <span className={style.mainItem}>Предмет:</span>
                        <span className={style.mainItem}>Посещаемость:</span>
                    </div>
                    {classes.map((c, index) => (
                        <div className={style.item}>
                            <span>{c.title}</span>
                            <div className={style.line}></div>
                            <span>{c.visit}/{c.hours}</span>
                        </div>
                    ))}

                    <div className={style.item}>
                        <span className={style.mainItem}>Итоговая посещаемость</span>
                        <div className={style.line}></div>
                        <span className={style.mainItem}>{getAllVisit()}/{allHours}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistic;