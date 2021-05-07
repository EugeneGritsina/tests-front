import React from 'react';
import { withRouter } from 'react-router';

import './LoginPage.scss';
import './LoginPage.css';

function LoginPage() {
    return (
        <>
            <div className="app__main-container">
                <div className="app__login-image"/>
            </div>
            <div className="app__bsu">БЕЛОРУССКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ</div>
            <form className="app__loginform" /*[formGroup]="loginForm"*/>
                <div className="enter-label">Вход</div>
                <input 
                    type="text" 
                    id="app__loginform-input-login" 
                    placeholder="Логин" 
                    pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" 
                    /*formControlName="email" */
                    required/>
                <input 
                    type="password" 
                    /*formControlName="password" */
                    /*[type]="hide ? 'password' :'text' "*/
                    id="app__loginform-input-password" 
                    placeholder="Пароль"/>
                <button 
                    type="submit" 
                    className="app__loginform-button-sign-in" 
                    /*(click)="sendLoginData()"*/>
                    Войти
                </button>
                <div className="checker-box">
                <input type="checkbox" id="cb1"/><label className = "checkbox_label" htmlFor="cb1">Запомнить меня</label>
                </div>
                <a className="app__href">Забыли логин или пароль?</a>
            </form>
        </>
    )
}

export default withRouter(LoginPage);