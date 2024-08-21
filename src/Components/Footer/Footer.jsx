import React from 'react';
import style from './FooterStyle.module.css';
import logo from '../../Images/logo.png';
import phoneIcon from '../../Images/phoneIcon.png';
import mailIcon from '../../Images/mailIcon.png';
import mapIcon from '../../Images/mapIcon.png';
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
                        <li className={style.listItem}><a className={style.link} href="#">Начальная школа (1-4 класс)</a></li>
                        <li className={style.listItem}><a className={style.link} href="#">Подготовка к школе</a></li>
                        <li className={style.listItem}><a className={style.link} href="#">Нулевой класс</a></li>
                        <li className={style.listItem}><a className={style.link} href="#">Продленка</a></li>
                        <li className={style.listItem}><a className={style.link} href="#">Лагерь</a></li>
                        <li className={style.listItem}><a className={style.link} href="#">Секции</a></li>
                    </ul>
                    <ul className={style.list}>
                        <span className={style.title}>Информация</span>
                        <li className={style.listItem}><a className={style.link} href="#">Поступление и оплата</a></li>
                        <li className={style.listItem}><a className={style.link} href="#">О нас</a></li>
                        <li className={style.listItem}><a className={style.link} href="#">События и полезная информация</a></li>
                        <li className={style.listItem}><a className={style.link} href="#">Для родителей</a></li>
                        <li className={style.listItem}><a className={style.link} href="#">Контакты</a></li>
                    </ul>
                    <ul className={style.list}>
                        <span className={style.title}>Контактные данные</span>
                        <li className={style.listItem}><a className={style.link} href="#">
                            <img className={style.contactIcon} src={phoneIcon} alt="#" style={{marginRight: "10px"}}/>
                            <span className={style.contactText}>+7 812 777-77-77</span>
                        </a></li>
                        <li className={style.listItem}><a className={style.link} href="#">
                            <img className={style.contactIcon} src={mailIcon} alt="#" style={{marginRight: "10px"}}/>
                            <span className={style.contactText}>ashkola@mail.ru</span>
                        </a></li>
                        <li className={style.listItem}><a className={style.link} href="#">
                            <img className={style.contactIcon} src={mapIcon} alt="#" style={{marginRight: "10px"}}/>
                            <span className={style.contactText}>
                                Санкт-Петербург,<br/>
                                Название улицы, д. 26
                            </span>
                        </a></li>
                    </ul>
                </div>
            </div>
            <hr style={{color: "#FFFFFF"}}/>
            <div className={style.bottom}>
                <div>
                    <span>© 2024  ООО “Ашкола”</span>
                </div>
                <div className={style.bottomLinks}>
                    <a className={style.bottomLink} href="#">Пользовательское соглашение</a>
                    <a className={style.bottomLink} href="#">Политика конфиденциальности</a>
                    <a className={style.bottomLink} href="#">Карта сайта</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;