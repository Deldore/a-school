import React from 'react';
import style from './FooterStyle.module.css';
import logo from '../../Images/logo.png';
import phoneIcon from '../../Images/phoneIcon.png';
import mailIcon from '../../Images/mailIcon.png';
import mapIcon from '../../Images/mapIcon.png';
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <footer>
            <div className={style.footer}>
                <div className={style.logo}>
                    <img src={logo} alt=""/>
                </div>
                <div className={style.lists}>
                    <ul className={style.list}>
                        <span className={style.title}>Образование</span>
                        <li className={style.listItem}><Link className={style.link} to="/">Начальная школа (1-4 класс)</Link></li>
                        <li className={style.listItem}><Link className={style.link} to="/">Подготовка к школе</Link></li>
                        <li className={style.listItem}><Link className={style.link} to="/">Нулевой класс</Link></li>
                        <li className={style.listItem}><Link className={style.link} to="/">Продленка</Link></li>
                        <li className={style.listItem}><Link className={style.link} to="/">Лагерь</Link></li>
                        <li className={style.listItem}><Link className={style.link} to="/">Секции</Link></li>
                    </ul>
                    <ul className={style.list}>
                        <span className={style.title}>Информация</span>
                        <li className={style.listItem}><Link className={style.link} to="/">Поступление и оплата</Link></li>
                        <li className={style.listItem}><Link className={style.link} to="/">О нас</Link></li>
                        <li className={style.listItem}><Link className={style.link} to="/">События и полезная информация</Link></li>
                        <li className={style.listItem}><Link className={style.link} to="/">Для родителей</Link></li>
                        <li className={style.listItem}><Link className={style.link} to="/">Контакты</Link></li>
                    </ul>
                    <ul className={style.list}>
                        <span className={style.title}>Контактные данные</span>
                        <li className={style.listItem}><Link className={style.link} to="/">
                            <img className={style.contactIcon} src={phoneIcon} alt="#" style={{marginRight: "10px"}}/>
                            <span className={style.contactText}>+7 812 777-77-77</span>
                        </Link></li>
                        <li className={style.listItem}><Link className={style.link} to="/">
                            <img className={style.contactIcon} src={mailIcon} alt="#" style={{marginRight: "10px"}}/>
                            <span className={style.contactText}>ashkola@mail.ru</span>
                        </Link></li>
                        <li className={style.listItem}><Link className={style.link} to="/">
                            <img className={style.contactIcon} src={mapIcon} alt="#" style={{marginRight: "10px"}}/>
                            <span className={style.contactText}>
                                Санкт-Петербург,<br/>
                                Название улицы, д. 26
                            </span>
                        </Link></li>
                    </ul>
                </div>
            </div>
            <hr style={{color: "#FFFFFF"}}/>
            <div className={style.bottom}>
                <div>
                    <span>© 2024  ООО “Ашкола”</span>
                </div>
                <div className={style.bottomLinks}>
                    <Link className={style.bottomLink} to="/">Пользовательское соглашение</Link>
                    <Link className={style.bottomLink} to="/">Политика конфиденциальности</Link>
                    <Link className={style.bottomLink} to="/">Карта сайта</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;