import React, {useState} from 'react';
import style from './ClassesStyle.module.css';

const Classes = () => {
    const [classes, setClasses] = useState([
        "Русский язык",
        "Математика",
        "ИЗО",
        "Музыка",
        "Труд",
        "Литература и Чтение"
    ]);
    const [events, setEvents] = useState([
        "Отдых на воздухе",
        "Спортивный час",
        "Экскурсия в музей",
    ]);

    const [tempClass, setTempClass] = useState({
        status: false,
        name: "",
    });

    const [tempEvent, setTempEvent] = useState({
        status: false,
        name: "",
    });

    return (
        <div className={style.main}>
            <div>
                <h1 className={style.title}>Предметы:</h1>
                <div className={style.list}>
                    {classes.map(c => (
                        <div className={style.item}>
                            {c}
                        </div>
                        )
                    )}
                    {(tempClass.status) ?
                        <div className={`${style.tempItem}`}>
                            <input className={`${style.input}`} onChange={(e) => {
                            e.preventDefault();
                            setTempClass({
                                status: true,
                                name: e.target.value,
                            })
                        }}
                               style={{width: tempClass.name.length*0.52 + "rem"}}
                               placeholder="название предмета"
                               type="text"/>
                            <button onClick={() => {
                                setClasses([...classes, tempClass.name]);
                                setTempClass({status: false, name: ""});
                            }} style={{
                                background: "lime",
                                color: "black",
                                border: "none",
                                marginLeft: "-10px",
                                padding: "0 5px",
                                borderRadius: "5px"
                            }}>✔</button>
                            <button onClick={() => {
                                setTempClass({status: false, name: ""});
                            }} style={{
                                background: "red",
                                color: "black",
                                border: "none",
                                padding: "0 5px",
                                borderRadius: "5px"
                            }}>X</button>
                        </div>
                        :
                        <></>
                    }
                </div>
                <br/>
                <button className={style.buttonAdd} onClick={() => {setTempClass({
                    status: true,
                    name: "",
                })}}>+ Добавить новый предмет</button>
            </div>
            <div>
                <h1 className={style.title}>Мероприятия:</h1>
                <div className={style.list}>
                    {events.map(e => (
                            <div className={style.item}>
                                {e}
                            </div>
                        )
                    )}
                    {(tempEvent.status) ?
                        <div className={`${style.tempItem}`}>
                            <input className={`${style.input}`} onChange={(e) => {
                                e.preventDefault();
                                setTempEvent({
                                    status: true,
                                    name: e.target.value,
                                })
                            }}
                                   style={{width: tempEvent.name.length*0.52 + "rem"}}
                                   placeholder="название предмета"
                                   type="text"/>
                            <button onClick={() => {
                                setEvents([...events, tempEvent.name]);
                                setTempEvent({status: false, name: ""});
                            }} style={{
                                background: "lime",
                                color: "black",
                                border: "none",
                                marginLeft: "-10px",
                                padding: "0 5px",
                                borderRadius: "5px"
                            }}>✔</button>
                            <button onClick={() => {
                                setTempEvent({status: false, name: ""});
                            }} style={{
                                background: "red",
                                color: "black",
                                border: "none",
                                padding: "0 5px",
                                borderRadius: "5px"
                            }}>X</button>
                        </div>
                        :
                        <></>
                    }
                </div>
                <br/>
                <button className={style.buttonAdd} onClick={() => {
                    setTempEvent({
                        status: true,
                        name: "",
                    })
                }}>+ Добавить новое мероприятие</button>
            </div>
        </div>
    );
};

export default Classes;