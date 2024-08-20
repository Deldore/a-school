import React from 'react';
import style from './MainHeaderStyle.module.css';

const MainHeader = () => {
    return (
        <header className={style.main}>
            <div className={style.logo}></div>
            <div>
                <ul className={`${style.spis}`}>
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
        </header>
    );
};

export default MainHeader;