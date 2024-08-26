import React from 'react';
import style from './HeadingStyle.module.css';
import {Link} from "react-router-dom";

const Heading = (props) => {
    return (
        <div className={style.container}>
            <div>
                <ul className={`${style.list}`}>
                    <li className={`${style.item} ${style.itemLink}`}>
                        <Link to="/">Главная</Link>
                    </li> >>
                    <li className={`${style.secondary} ${style.item}`}>
                        {props.title}
                    </li>
                </ul>
            </div>
            <div>
                <h1 className={style.title}>{props.title}</h1>
            </div>
        </div>
    );
};

export default Heading;