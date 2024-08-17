import React from 'react';
import style from './HeaderStyle.module.css';
const Header = () => {
    return (
        <div className={style.main}>
            <div className={style.item}>
                <ul className={style.list}>
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
                    <li>
                        <a href="#">
                            Выйти
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;