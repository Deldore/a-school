import React from 'react';
import style from './AuthStyle.module.css';

const Auth = () => {
    return (
        <div className={style.main}>
            <div className={style.auth}>
                <div className={style.top}>
                    <h2 className={style.title}>Войти в аккаунт</h2>
                    <a className={style.close} href="/">×</a>
                </div>
                <input type="text" className={style.input} placeholder="Введите логин (email)"/>
                <input type="password" className={style.input} placeholder="Введите пароль"/>
                <div className={style.bottom}>
                    <button className={style.button}>
                        Войти →
                    </button>
                    <div style={{alignSelf: "center"}}>
                        <input className={style.checkbox} type="checkbox"/>
                        <span className={style.secondary}>запомнить</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;