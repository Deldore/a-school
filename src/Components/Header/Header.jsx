import React, {useEffect, useRef, useState} from 'react';
import style from './HeaderStyle.module.css';
const Header = () => {
    const [menuState, setMenuState] = useState(false);

    const [menuTop, setMenuTop] = useState(0);

    const menuRef = useRef(null);

    useEffect(() => {
        setMenuTop(menuRef.current.clientHeight);
    }, []);

    return (
        <div className={style.main}>
            <div className={style.item} ref={menuRef}>
                <ul className={`${style.list} ${style.mobileHide}`}>
                    <li className={style.liActive}>
                        <a href="#">
                            Дневник
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Расписание
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Сообщения
                        </a>
                    </li>
                </ul>
            </div>
            <div className={style.item}>
                <ul className={style.list}>
                    <li>
                        <div>
                            <img src="" alt=""/>
                        </div>
                        <div className={style.userLink}>
                            Фамилия Имя Отчество
                            <span className={style.secondary}>
                                1-A class
                            </span>
                        </div>
                    </li>
                    <li className={style.mobileHide}>
                        <a href="#">
                            Выйти
                        </a>
                    </li>
                    <li>
                        <button className={style.menuButton} onClick={() => {setMenuState(!menuState)}}>=</button>
                    </li>
                </ul>
            </div>
            <div className={style.menu} style={{left: (menuState) ? '0' : '-80vw', top: menuTop + 'px'}}>
                <h1>Меню:</h1>
                <ul className={`${style.menuList}`}>
                    <li className={style.menuLiActive}>
                        <a href="#">
                            Дневник
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Расписание
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Сообщения
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;