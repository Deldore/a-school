import React, {useState} from 'react';
import style from './Calendar.module.css';
import StudentList from "../StudentList/StudentList";
const TeacherCalendar = () => {
    const [page, setPage] = useState(1);
    return (
        <div style={{padding: "15px 5%"}}>
            <div>
                <button className={(!page) ? `${style.button} ${style.buttonActive}` : style.button}
                        onClick={() => setPage(0)}>
                    Журнал
                </button>
                <button className={(page) ? `${style.button} ${style.buttonActive}` : style.button}
                        onClick={() => setPage(1)}
                        style={{marginLeft: "15px"}}>
                    Ученики
                </button>
            </div>
            <div>
                {(!page) ? (<></>) : (<StudentList></StudentList>)}
            </div>
        </div>
    );
};

export default TeacherCalendar;