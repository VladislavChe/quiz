import React from 'react';
import styles from './AuthPage.module.scss'
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";

const AuthPage:React.FC = () => {
    const [loginForm, setLoginForm] = React.useState<boolean>(true)

    return (
        <div className={styles.authPage}>
            <div id="components-form-demo-normal-login" className={styles.authCard}>
                {
                    loginForm ?
                        <LoginForm setLoginForm={setLoginForm} /> :
                        <RegisterForm setLoginForm={setLoginForm} />
                }
            </div>
        </div>
    );
}

export default AuthPage