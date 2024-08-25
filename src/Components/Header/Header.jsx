import React, {useEffect, useRef, useState} from 'react';
import style from './HeaderStyle.module.css';
import diaryIcon from '../../Images/diaryIcon.png';
import scheduleIcon from '../../Images/scheduleIcon.png';
import messageIcon from '../../Images/messageIcon.png';
import userIcon from '../../Images/userIcon.png';
import quitIcon from '../../Images/quitIcon.png';
const Header = (props) => {
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
                    <li className={(props.active == 0) ? `${style.liActive} ${style.listItem}` : `${style.listItem}`}>
                        <a className={style.link} href="/">
                            <img src={diaryIcon} style={{marginRight: "15px", alignSelf: "center"}}/>
                            Дневник
                        </a>
                    </li>
                    <li className={(props.active == 1) ? `${style.liActive} ${style.listItem}` : `${style.listItem}`}>
                        <a className={style.link} href="/schedule">
                            <img src={scheduleIcon} style={{marginRight: "15px", alignSelf: "center"}}/>
                            Расписание
                        </a>
                    </li>
                    <li className={(props.active == 2) ? `${style.liActive} ${style.listItem}` : `${style.listItem}`}>
                        <a className={style.link} href="#">
                            <img src={messageIcon} style={{marginRight: "15px", alignSelf: "center"}}/>
                            Сообщения
                        </a>
                    </li>
                </ul>
            </div>
            <div className={style.item}>
                <ul className={`${style.list} ${style.spis}`}>
                    <li className={style.listItem}>
                        <div style={{alignSelf: "center"}}>
                            <img src={userIcon} style={{marginRight: "15px"}}/>
                        </div>
                        <div className={style.userLink}>
                        Фамилия Имя Отчество
                            <span className={style.secondary}>
                                1-A class
                            </span>
                        </div>
                    </li>
                    <li className={`${style.mobileHide} ${style.listItem}`}>
                        <a className={style.link} href="#">
                            <div style={{alignSelf: "center"}}>
                                <img src={quitIcon} style={{marginRight: "15px"}}/>
                            </div>
                            Выйти
                        </a>
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
                        <a className={style.link} href="#">
                            Дневник
                        </a>
                    </li>
                    <li className={style.listItem}>
                        <a className={style.link} href="#">
                            Расписание
                        </a>
                    </li>
                    <li className={style.listItem}>
                        <a className={style.link} href="#">
                            Сообщения
                        </a>
                    </li>
                    <li className={`${style.listItem}`}>
                        <a className={style.link} href="#">
                            <div style={{alignSelf: "center"}}>
                                <img src={quitIcon} style={{marginRight: "15px"}}/>
                            </div>
                            Выйти
                        </a>
                    </li>
                    <hr style={{color: "white"}}/>
                    <li className={`${style.listItem}`}>
                        <a className={`${style.link}`} href="#">
                            ОБРАЗОВАНИЕ
                        </a>
                    </li>
                    <li className={`${style.listItem}`}>
                        <a className={`${style.link}`} href="#">
                            ПОСТУПЛЕНИЕ И ОПЛАТА
                        </a>
                    </li>
                    <li className={`${style.listItem}`}>
                        <a className={`${style.link}`} href="#">
                            ИНФОРМАЦИЯ
                        </a>
                    </li>
                    <li className={`${style.listItem}`}>
                        <a className={`${style.link}`} href="#">
                            КОНТАКТЫ
                        </a>
                    </li>
                    <li className={`${style.listItem} ${style.listContactItem}`}>
                        <p>+7 812 777-77-77</p>
                        <a className={`${style.contactLink}`}>Обратная связь</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;