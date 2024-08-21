import React, {useState} from 'react';
import style from './StatisticStyle.module.css';

const Statistic = () => {
    const [parts, setParts] = useState([
        {date: ""}
    ])
    return (
        <div className={style.container}>

        </div>
    );
};

export default Statistic;