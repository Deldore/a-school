import React, {useState} from 'react';
import style from './StudentListStyle.module.css';
import deleteIcon from '../../Images/deleteIcon.png';
import cancelIcon from '../../Images/cancelIcon.png';

const StudentList = () => {
    const [nominalStudents, setNominalStudents] = useState([
        {
            name: "Фирсов Стас Да",
            email: "f.stan@mail.ru",
            phone: "+7 888 888 88 88",
        },
        {
            name: "Фирсов Стас Да",
            email: "f.stan@mail.ru",
            phone: "+7 888 888 88 88",
        },
        {
            name: "Фирсов Стас Да",
            email: "f.stan@mail.ru",
            phone: "+7 888 888 88 88",
        },
        {
            name: "Фирсов Стас Да",
            email: "f.stan@mail.ru",
            phone: "+7 888 888 88 88",
        },
        {
            name: "Фирсов Стас Да",
            email: "f.stan@mail.ru",
            phone: "+7 888 888 88 88",
        },
        {
            name: "Фирсов Стас Да",
            email: "f.stan@mail.ru",
            phone: "+7 888 888 88 88",
        },
    ]);

    const [waitingStudents, setWaitingStudents] = useState([
        {
            email: "f.stan@mail.ru",
            phone: "+7 888 888 88 88",
        },
        {
            email: "f.stan@mail.ru",
            phone: "+7 888 888 88 88",
        },
    ])

    return (
        <div className={style.main}>
            <h1 className={style.title}>Текущие ученики</h1>
            <span className={style.secondary} style={{fontSize: "1.1rem", marginTop: "15px", fontWeight: "200"}}>
                Наши текущие ученики, здесь вы можете добавить ученика, для этого прийдется отправить запрос родителям
                на регистрацию. В случае, если ученик переводится в другую школу, вы можете отправить его в архив.
            </span>
            <div className={style.list}>
                {nominalStudents.map(s => (
                    <div className={style.listItem}>
                        <div className={style.item}>
                            <h3 className={style.name}>{s.name}</h3>
                            <span className={style.secondary}>{s.email} | {s.phone}</span>
                            <div className={style.deleteBlock}>
                                <button className={style.deleteButton}>
                                    <img style={{alignSelf: "center"}} src={deleteIcon} alt="."/>
                                    <span style={{alignSelf: "start", marginLeft: "5px"}}>В архив</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                {waitingStudents.map(s => (
                    <div className={style.listItem}>
                        <div className={style.item}>
                            <h3 className={style.waitingName}>пользователь ещё не зарегистрировался</h3>
                            <span className={style.secondary}>{s.email}</span>
                            <div className={style.deleteBlock}>
                                <button className={style.deleteButton}>
                                    <img style={{alignSelf: "center"}} src={deleteIcon} alt="."/>
                                    <span style={{alignSelf: "start", marginLeft: "5px"}}>В архив</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                <div className={style.listItem}>
                    <button className={style.buttonItem}>
                        <span className={style.buttonIcon}> + </span>
                        <span style={{marginLeft: "15px", fontWeight: 600, fontSize: "1.1rem"}}>Добавить нового<br/>ученика</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudentList;