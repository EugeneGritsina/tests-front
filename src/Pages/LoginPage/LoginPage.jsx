import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { useDispatch, } from 'react-redux';


import './LoginPage.scss';
import './LoginPage.css';
import * as SharedActions from '../../redux/SharedActions.js';
import TitleOfOrganization from '../../Components/TitleOfOrganization/TitleOfOrganization';

function LoginPage(props) {
    const dispatch = useDispatch();
    
    dispatch(SharedActions.hideHeader());

    const redirectToTestsPage = () => {
        const { history } = props;
        dispatch(SharedActions.showHeader());
        history.push("/tests");
    }

    return (
        <>
            <div className="app__main-container">
                <div className="app__login-image"/>
            </div>
            <TitleOfOrganization />
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
                    onClick={redirectToTestsPage}>
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