import React, {useEffect, useState} from 'react';
import style from './EditProfileStyle.module.css';
import Heading from "../Heading/Heading";

const EditProfile = ({user, ...props}) => {
    const [changedUser, setChangedUser] = useState(user);
    const [inputClicked, setInputClicked] = useState(0);

    const [errorMessages, setErrorMessages] = useState({
        email: "",
        password: "",
        secondName: "",
        firstName: "",
        patronic: "",
        phone: "",
    });

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const setEmail = (e) => {
        (!e.target.value) ? setErrorMessages({...errorMessages, email: "логин не должен быть пустым"}) : setErrorMessages({...errorMessages, email: ""});
        (!validateEmail(e.target.value)) ? setErrorMessages({...errorMessages, email: "почта должна быть формата mail@mail.ru"}) : setErrorMessages({...errorMessages, email: ""});
        setChangedUser({...changedUser, email: e.target.value});
    }

    const setPassword = (e) => {
        (!e.target.value) ? setErrorMessages({...errorMessages, password: "пароль не должен быть пустым"}) : setErrorMessages({...errorMessages, password: ""});
        (e.target.value.length < 8) ? setErrorMessages({...errorMessages, password: "длина пароля должна быть более 8 символов"}) : setErrorMessages({...errorMessages, password: ""});
        setChangedUser({...changedUser, password: e.target.value});
    }

    const setSecondName = (e) => {
        (!e.target.value) ? setErrorMessages({...errorMessages, secondName: "фамилия не должна быть пустой"}) : setErrorMessages({...errorMessages, secondName: ""});
        setChangedUser({...changedUser, secondName: e.target.value});
    }
    const setFirstName = (e) => {
        (!e.target.value) ? setErrorMessages({...errorMessages, firstName: "имя не должно быть пустым"}) : setErrorMessages({...errorMessages, firstName: ""});
        setChangedUser({...changedUser, firstName: e.target.value});
    }
    const setPatronic = (e) => {
        (!e.target.value) ? setErrorMessages({...errorMessages, patronic: "отчество не должно быть пустым"}) : setErrorMessages({...errorMessages, patronic: ""});
        setChangedUser({...changedUser, patronic: e.target.value});
    }
    const setPhone = (e) => {
        (!e.target.value) ? setErrorMessages({...errorMessages, phone: "номер телефона не должен быть пустым"}) : setErrorMessages({...errorMessages, phone: ""});
        setChangedUser({...changedUser, phone: e.target.value});
    }

    const updateEmail = () => {
        if (!errorMessages.email) {
            props.setUser({...user, email: changedUser.email})
        }
    }
    const updatePassword = () => {
        if (!errorMessages.password) {
             props.setUser({...user, password: changedUser.password})
        }
    }

    const formValidate = () => {
        console.log(changedUser);
        (!changedUser.email) ? setErrorMessages({...errorMessages, email: "логин не должен быть пустым"}) : setErrorMessages({...errorMessages, email: ""});
        (!validateEmail(changedUser.email)) ? setErrorMessages({...errorMessages, email: "почта должна быть формата mail@mail.ru"}) : setErrorMessages({...errorMessages, email: ""});

        (!changedUser.password) ? setErrorMessages({...errorMessages, password: "пароль не должен быть пустым"}) : setErrorMessages({...errorMessages, password: ""});
        (changedUser.password.length < 8) ? setErrorMessages({...errorMessages, password: "длина пароля должна быть более 8 символов"}) : setErrorMessages({...errorMessages, password: ""});

        (!changedUser.secondName) ? setErrorMessages({...errorMessages, secondName: "фамилия не должна быть пустой"}) : setErrorMessages({...errorMessages, secondName: ""});

        (!changedUser.firstName) ? setErrorMessages({...errorMessages, firstName: "имя не должно быть пустым"}) : setErrorMessages({...errorMessages, firstName: ""});

        (!changedUser.patronic) ? setErrorMessages({...errorMessages, patronic: "отчество не должно быть пустым"}) : setErrorMessages({...errorMessages, patronic: ""});

        (!changedUser.phone) ? setErrorMessages({...errorMessages, phone: "номер телефона не должен быть пустым"}) : setErrorMessages({...errorMessages, phone: ""});
    }

    useEffect(() => {
        formValidate();
    }, [changedUser]);

    return (
        <div className={style.main}>
            <h3 className={style.title}>Основные данные аккаунта:</h3>
            <div className={style.topic}>
                <div className={style.topicItem}>
                    <label className={style.label} htmlFor="email">Ваш логин:</label>
                    <div className={style.topicForm}
                         onClick={() => setInputClicked(1)}
                         style={((inputClicked === 1) ? {borderColor: "#9cb968"} : {borderColor: "#d4d4d4"})}>
                        <input type="text" name="email" value={changedUser.email}
                               className={style.topicInput}
                               placeholder="Введите свою почту"
                               onChange={(e) => setEmail(e)}/>
                        <button className={style.topicButton}
                                style={((inputClicked === 1) ? {background: "#9cb968"} : {background: "#d4d4d4", color: "#000"})}
                                onClick={updateEmail}
                                disabled={(errorMessages.email)}
                        >
                            Сохранить
                        </button>
                    </div>
                    <small className={style.error}>{errorMessages.email}</small>
                </div>
                <div className={style.topicItem}>
                    <label className={style.label} htmlFor="password">Ваш пароль:</label>
                    <div className={style.topicForm}
                         onClick={() => setInputClicked(2)}
                         style={(inputClicked === 2) ? {borderColor: "#9cb968"} : {borderColor: "#d4d4d4"}}>
                        <input type="text" name="password" value={changedUser.password}
                               className={style.topicInput}
                               placeholder="Введите свой пароль"
                               onChange={(e) => setPassword(e)}/>
                        <button className={style.topicButton}
                                style={((inputClicked === 2) ? {background: "#9cb968"} : {background: "#d4d4d4", color: "#000"})}
                                onClick={updatePassword}
                                disabled={(errorMessages.password)}
                        >Сохранить
                        </button>
                    </div>
                    <small className={style.error}>{errorMessages.password}</small>
                </div>
            </div>

            <h3 className={style.title}>Информация об ученике:</h3>
            <div className={style.topic}>
                <div className={style.bottomItem}>
                    <label className={style.label} htmlFor="secondName">Фамилия:</label>
                    <div className={style.topicForm}
                         onClick={() => setInputClicked(3)}
                         style={((inputClicked === 3) ? {borderColor: "#9cb968"} : {borderColor: "#d4d4d4"})}>
                        <input type="text" name="secondName" value={changedUser.secondName}
                               className={style.bottomInput}
                               placeholder="Введите свою фамилию"
                               onChange={(e) => setSecondName(e)}/>
                    </div>
                    <small className={style.error}>{errorMessages.secondName}</small>
                </div>
                <div className={style.bottomItem}>
                    <label className={style.label} htmlFor="firstName">Имя:</label>
                    <div className={style.topicForm}
                         onClick={() => setInputClicked(4)}
                         style={((inputClicked === 4) ? {borderColor: "#9cb968"} : {borderColor: "#d4d4d4"})}>
                        <input type="text" name="firstName" value={changedUser.firstName}
                               className={style.bottomInput}
                               placeholder="Введите своё имя"
                               onChange={(e) => setFirstName(e)}/>
                    </div>
                    <small className={style.error}>{errorMessages.firstName}</small>
                </div>
                <div className={style.bottomItem}>
                    <label className={style.label} htmlFor="patronic">Отчество:</label>
                    <div className={style.topicForm}
                         onClick={() => setInputClicked(5)}
                         style={((inputClicked === 5) ? {borderColor: "#9cb968"} : {borderColor: "#d4d4d4"})}>
                        <input type="text" name="email" value={changedUser.patronic}
                               className={style.bottomInput}
                               placeholder="Введите своё отчество"
                               onChange={(e) => setPatronic(e)}/>
                    </div>
                    <small className={style.error}>{errorMessages.patronic}</small>
                </div>
                <div className={style.bottomItem}>
                    <label className={style.label} htmlFor="phone">Контактный телефон:</label>
                    <div className={style.topicForm}
                         onClick={() => setInputClicked(6)}
                         style={((inputClicked === 6) ? {borderColor: "#9cb968"} : {borderColor: "#d4d4d4"})}>
                        <input type="text" name="phone" value={changedUser.phone}
                               className={style.bottomInput}
                               placeholder="Введите свой номер телефона"
                               onChange={(e) => setPhone(e)}/>
                    </div>
                    <small className={style.error}>{errorMessages.phone}</small>
                </div>
            </div>
            <button className={style.topicButton}
                    style={{background: "#9cb968", marginTop: "15px"}}
                    onClick={() => {
                        if (!errorMessages.secondName && !errorMessages.firstName && !errorMessages.patronic && !errorMessages.phone) {
                            props.setUser({...user,
                                            secondName: changedUser.secondName,
                                            firstName: changedUser.firstName,
                                            patronic: changedUser.patronic,
                                            phone: changedUser.phone,
                                            });
                        }
                    }}
            >
                Сохранить изменения</button>
            <button className={style.topicButton}
                    style={{background: "#d4d4d4", color: "#000", marginTop: "15px", marginLeft: "15px"}}
                    onClick={() => {
                        setChangedUser(user);
                        setErrorMessages({
                            email: "",
                            password: "",
                            secondName: "",
                            firstName: "",
                            patronic: "",
                            phone: "",
                        });
                        // formValidate();
                    }}
            >
                Отменить
            </button>
        </div>
    );
};

export default EditProfile;