import React from 'react';
import style from './MainHeaderStyle.module.css';
import logo from '../../Images/logo.png';
import {Link} from "react-router-dom";

const MainHeader = () => {
    return (
        <header className={style.main}>
            <div className={style.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={style.mobileHide} style={{alignSelf: "end"}}>
                <ul className={`${style.spis}`}>
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
                    <li className={`${style.listItem} ${style.listContactItem}`}>
                        <p>+7 812 777-77-77</p>
                        <Link className={`${style.contactLink}`}>Обратная связь</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default MainHeader;