import React, {useEffect, useState} from 'react';
import style from './EditProfileStyle.module.css';
import Heading from "../Heading/Heading";

const EditProfile = ({user, ...props}) => {
    const [changedUser, setChangedUser] = useState(user);
    const [emailClicked, setEmailClicked] = useState(true);

    return (
        <div className={style.main}>
            <h3>Основные данные аккаунта</h3>
            <div className={style.topic}>
                <div className={style.topicItem}>
                    <label htmlFor="email">Ваш логин:</label>
                    <div className={style.topicForm}
                         onClick={() => setEmailClicked(true)}
                         style={(emailClicked ? {borderColor: "#9cb968"} : {borderColor: "#d4d4d4"})}>
                        <input type="text" name="email" value={changedUser.email}
                               className={style.topicInput}
                               placeholder="Введите свою почту"
                               onChange={(e) => setChangedUser({...changedUser, email: e.target.value})}/>
                        <button className={style.topicButton}
                                style={(emailClicked ? {background: "#9cb968"} : {background: "#d4d4d4"})}>Изменить</button>
                    </div>
                    <small>введите верную почту</small>
                </div>
                <div className={style.topicItem}>
                    <label htmlFor="password">Ваш пароль:</label>
                    <div className={style.topicForm}
                         onClick={() => setEmailClicked(false)}
                         style={emailClicked ? {borderColor:  "#d4d4d4"} : {borderColor: "#9cb968"}}>
                        <input type="text" name="password" value={changedUser.password}
                               className={style.topicInput}
                               placeholder="Введите свой пароль"
                               onChange={(e) => setChangedUser({...changedUser, password: e.target.value})}/>
                        <button className={style.topicButton}
                                style={(!emailClicked ? {background: "#9cb968"} : {background: "#d4d4d4"})}>Изменить</button>
                    </div>
                    <small>введите верный пароль</small>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;