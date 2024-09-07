import React, {useEffect, useRef, useState} from 'react';
import style from './HeaderStyle.module.css';
import diaryIcon from '../../Images/diaryIcon.png';
import scheduleIcon from '../../Images/scheduleIcon.png';
import messageIcon from '../../Images/messageIcon.png';
import userIcon from '../../Images/userIcon.png';
import quitIcon from '../../Images/quitIcon.png';
import {Link} from "react-router-dom";
const Header = ({user, ...props}) => {
    const [menuState, setMenuState] = useState(false);

    const [menuTop, setMenuTop] = useState(0);

    const menuRef = useRef(null);

    useEffect(() => {
        setMenuTop(menuRef.current.clientHeight);
    }, []);

    return (
        <div className={style.main}>
            <div className={style.item} ref={menuRef}>
                <ul className={`${style.list} ${style.mobileHide} ${style.spis}`}>
                    <li className={(props.active === 0) ? `${style.liActive} ${style.listItem}` : `${style.listItem}`}>
                        <Link className={style.link} to="/schedule">
                            <img src={diaryIcon} style={{marginRight: "15px", alignSelf: "center"}}/>
                            {(!user.role) ? "Дневник" : "Расписание"}
                        </Link>
                    </li>
                    <li className={(props.active === 1) ? `${style.liActive} ${style.listItem}` : `${style.listItem}`}>
                        <Link className={style.link} to="/calendar">
                            <img src={scheduleIcon} style={{marginRight: "15px", alignSelf: "center"}}/>
                            {(!user.role) ? "Расписание" : "Журнал"}
                        </Link>
                    </li>
                    <li className={(props.active === 2) ? `${style.liActive} ${style.listItem}` : `${style.listItem}`}>
                        <Link className={style.link} to="#">
                            <img src={messageIcon} style={{marginRight: "15px", alignSelf: "center"}}/>
                            Сообщения
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={style.item}>
                <ul className={`${style.list} ${style.spis}`}>
                    <li className={(props.active === 4) ? `${style.liActive} ${style.listItem}` : `${style.listItem}`}>
                        <div style={{alignSelf: "center"}}>
                            <img src={userIcon} style={{marginRight: "15px"}}/>
                        </div>
                        <Link className={style.userLink} to="/profile">
                            {user.secondName} {user.firstName} {user.patronic}
                            <span className={style.secondary}>
                                {user.form} class
                            </span>
                        </Link>
                    </li>
                    <li className={`${style.mobileHide} ${style.listItem}`}>
                        <Link className={style.link} to="#">
                            <div style={{alignSelf: "center"}}>
                                <img src={quitIcon} style={{marginRight: "15px"}}/>
                            </div>
                            Выйти
                        </Link>
                    </li>
                    <li className={style.listItem}>
                        <button className={style.menuButton} onClick={() => {
                            setMenuState(!menuState)}}>=</button>
                    </li>
                </ul>
            </div>
            <div className={style.menu} style={{left: (menuState) ? '0' : '-80vw', top: menuTop + 'px'}}>
                <h1>Меню:</h1>
                <ul className={`${style.menuList} ${style.spis}`}>
                    <li className={`${style.menuLiActive} ${style.listItem}`}>
                        <Link className={style.link} to="/schedule">
                            Дневник
                        </Link>
                    </li>
                    <li className={style.listItem}>
                        <Link className={style.link} to="/calendar">
                            Расписание
                        </Link>
                    </li>
                    <li className={style.listItem}>
                        <Link className={style.link} to="#">
                            Сообщения
                        </Link>
                    </li>
                    <li className={`${style.listItem}`}>
                        <Link className={style.link} to="/profile">
                            <div style={{alignSelf: "center"}}>
                                <img src={quitIcon} style={{marginRight: "15px"}}/>
                            </div>
                            Выйти
                        </Link>
                    </li>
                    <hr style={{color: "white"}}/>
                    <li className={`${style.listItem}`}>
                        <Link className={`${style.link}`} to="#">
                            ОБРАЗОВАНИЕ
                        </Link>
                    </li>
                    <li className={`${style.listItem}`}>
                        <Link className={`${style.link}`} to="#">
                            ПОСТУПЛЕНИЕ И ОПЛАТА
                        </Link>
                    </li>
                    <li className={`${style.listItem}`}>
                        <Link className={`${style.link}`} to="#">
                            ИНФОРМАЦИЯ
                        </Link>
                    </li>
                    <li className={`${style.listItem}`}>
                        <Link className={`${style.link}`} to="#">
                            КОНТАКТЫ
                        </Link>
                    </li>
                    <li className={`${style.listItem} ${style.listContactItem}`} style={{flexDirection: "column"}}>
                        <p>+7 812 777-77-77</p>
                        <br/>
                        <Link className={`${style.contactLink}`}>Обратная связь</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;