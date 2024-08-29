import React, {useEffect, useState} from 'react';
import style from './RegistrationStyle.module.css';
const Registration = ({user, setUser, token, ...props}) => {

    const [changedUser, setChangedUser] = useState(user);
    const [inputClicked, setInputClicked] = useState(0);

    const [errorMessages, setErrorMessages] = useState({
        email: "",
        password: "",
        confirmPassword: "",
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
        setErrorMessages({...errorMessages, email: ""});
        if (!e.target.value) {
            setErrorMessages({...errorMessages, email: "логин не должен быть пустым"})
        }
        if (!validateEmail(e.target.value)) {
            setErrorMessages({...errorMessages, email: "почта должна быть формата mail@mail.ru"})
        }
        setChangedUser({...changedUser, email: e.target.value});
    }

    const setPassword = (e) => {
        setErrorMessages({...errorMessages, password: ""})
        if (!e.target.value) {
            setErrorMessages({...errorMessages, password: "пароль не должен быть пустым"})
        }
        if (e.target.value.length < 8) {
            setErrorMessages({...errorMessages, password: "длина пароля должна быть более 8 символов"})
        }
        setChangedUser({...changedUser, password: e.target.value});
    }

    const setConfirmPassword = (e) => {
        setErrorMessages({...errorMessages, confirmPassword: ""})
        if (!e.target.value) {
            setErrorMessages({...errorMessages, confirmPassword: "пароль не должен быть пустым"})
        }
        if (e.target.value.length < 8) {
            setErrorMessages({...errorMessages, confirmPassword: "длина пароля должна быть более 8 символов"})
        }
        // if (e.target.value !== changedUser.password) {
        //     setErrorMessages({...errorMessages, confirmPassword: "пароли не совпадают"})
        // }
        setChangedUser({...changedUser, confirmPassword: e.target.value});
    }

    const setSecondName = (e) => {
        setErrorMessages({...errorMessages, secondName: ""});
        if (!e.target.value) {
            setErrorMessages({...errorMessages, secondName: "фамилия не должна быть пустой"})
        }
        setChangedUser({...changedUser, secondName: e.target.value});
    }
    const setFirstName = (e) => {
        setErrorMessages({...errorMessages, firstName: ""});
        if (!e.target.value) {
            setErrorMessages({...errorMessages, firstName: "имя не должно быть пустым"})
        }
        setChangedUser({...changedUser, firstName: e.target.value});
    }
    const setPatronic = (e) => {
        setErrorMessages({...errorMessages, patronic: ""});
        if (!e.target.value) {
            setErrorMessages({...errorMessages, patronic: "отчество не должно быть пустым"})
        }
        setChangedUser({...changedUser, patronic: e.target.value});
    }
    const setPhone = (e) => {
        setErrorMessages({...errorMessages, phone: ""});
        if (!e.target.value) {
            setErrorMessages({...errorMessages, phone: "номер телефона не должен быть пустым"})
        }
        setChangedUser({...changedUser, phone: e.target.value});
    }

    const formValidate = () => {
        setErrorMessages({...errorMessages, email: ""});
        if (!changedUser.email) {
            setErrorMessages({...errorMessages, email: "логин не должен быть пустым"})
        }
        if (!validateEmail(changedUser.email)) {
            setErrorMessages({...errorMessages, email: "почта должна быть формата mail@mail.ru"})
        }

        setErrorMessages({...errorMessages, password: ""})
        if (!changedUser.password) {
            setErrorMessages({...errorMessages, password: "пароль не должен быть пустым"})
        }
        if (changedUser.password.length < 8) {
            setErrorMessages({...errorMessages, password: "длина пароля должна быть более 8 символов"})
        }


        setErrorMessages({...errorMessages, confirmPassword: ""})
        if (!changedUser.confirmPassword) {
            setErrorMessages({...errorMessages, confirmPassword: "пароль не должен быть пустым"})
        }
        if (changedUser.confirmPassword.length < 8) {
            setErrorMessages({...errorMessages, confirmPassword: "длина пароля должна быть более 8 символов"})
        }
        if (changedUser.confirmPassword !== changedUser.password) {
            setErrorMessages({...errorMessages, confirmPassword: "пароли не совпадают"})
        }

        setErrorMessages({...errorMessages, secondName: ""});
        if (!changedUser.secondName) {
            setErrorMessages({...errorMessages, secondName: "фамилия не должна быть пустой"})
        }

        setErrorMessages({...errorMessages, firstName: ""});
        if (!changedUser.firstName) {
            setErrorMessages({...errorMessages, firstName: "имя не должно быть пустым"})
        }

        setErrorMessages({...errorMessages, patronic: ""});
        if (!changedUser.patronic) {
            setErrorMessages({...errorMessages, patronic: "отчество не должно быть пустым"})
        }

        setErrorMessages({...errorMessages, phone: ""});
        if (!changedUser.phone) {
            setErrorMessages({...errorMessages, phone: "номер телефона не должен быть пустым"})
        }
    }

    const createAccount = async () => {
        if (changedUser.password === changedUser.confirmPassword) {
            setErrorMessages({...errorMessages, confirmPassword: ""});
        } else {
            setErrorMessages({...errorMessages, confirmPassword: "пароли не совпадают"});
            return;
        }
        if (!errorMessages.email && !errorMessages.password && changedUser.password === changedUser.confirmPassword && !errorMessages.firstName && !errorMessages.secondName && !errorMessages.patronic && !errorMessages.phone)
            alert("good");
        else
            alert("bad");
    }

    useEffect(() => {
        formValidate();
    }, [{...changedUser}]);

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
                    </div>
                    <small className={style.error}>{errorMessages.email}</small>
                </div>
                <div className={style.topicItem}>
                    <label className={style.label} htmlFor="password">Придумайте пароль:</label>
                    <div className={style.topicForm}
                         onClick={() => setInputClicked(2)}
                         style={(inputClicked === 2) ? {borderColor: "#9cb968"} : {borderColor: "#d4d4d4"}}>
                        <input type="text" name="password" value={changedUser.password}
                               className={style.topicInput}
                               placeholder="Введите свой пароль"
                               onChange={(e) => setPassword(e)}/>
                    </div>
                    <small className={style.error}>{errorMessages.password}</small>
                </div>
                <div className={style.topicItem}>
                    <label className={style.label} htmlFor="confirmPassword">Подтвердите пароль:</label>
                    <div className={style.topicForm}
                         onClick={() => setInputClicked(2)}
                         style={(inputClicked === 2) ? {borderColor: "#9cb968"} : {borderColor: "#d4d4d4"}}>
                        <input type="text" name="confirmPassword" value={changedUser.confirmPassword}
                               className={style.topicInput}
                               placeholder="Введите свой пароль"
                               onChange={(e) => setConfirmPassword(e)}/>
                    </div>
                    <small className={style.error}>{errorMessages.confirmPassword}</small>
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
                    onClick={createAccount}
            >
                Создать аккаунт
            </button>
        </div>
    );
};

export default Registration;