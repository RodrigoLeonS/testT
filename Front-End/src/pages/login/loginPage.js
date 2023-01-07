import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
    const loginAPI = 'http://127.0.0.1:8000/api/api-token-auth/';
    const navigate = useNavigate();

    const submitLoginForm = (event) => {
        event.preventDefault();
        const formElement = document.querySelector('#loginForm');
        const formData = new FormData(formElement);
        const formDataJSON = Object.fromEntries(formData);
        const btnPointer = document.querySelector('#login-btn');
        btnPointer.innerHTML = 'Please wait..';
        btnPointer.setAttribute('disabled', true);
        axios.post(loginAPI, formDataJSON).then((response) => {
            btnPointer.innerHTML = 'Login';
            btnPointer.removeAttribute('disabled');
            const data = response.data;
            const token = data.token;
            if (!token) {
                alert('Unable to login. Please try after some time.');
                return;
            }
            localStorage.clear();
            localStorage.setItem('user-token', token);
            setTimeout(() => {
                navigate('/dashboard');
            }, 500);

        }).catch((error) => {
            btnPointer.innerHTML = 'Login';
            btnPointer.removeAttribute('disabled');
            alert("Ups! Las credenciales no son correctas.");
        });
    }

    return (
        <section className="section">
            <div className="container elements">
                <h2 className="section__title">RestauranteApp</h2>
                <form className="form" id="loginForm" onSubmit={submitLoginForm}>
                    <div className="form__container">
                        <h1 className="card__title">Iniciar Sesión</h1>
                        <p>Por favor ingresa tus credenciales</p>
                        <hr />
                        <label htmlFor={'login-username'}><b>Usario</b></label>
                        <input type={'text'} placeholder="Ingresa tu usuario" name="username" id={'login-username'} required />

                        <label htmlFor={'login-password'}><b>Contraseña</b></label>
                        <input type={'password'} placeholder="Ingresa tu contraseña" name="password" id={'password'} required />
                        <hr />

                        <p>¿No tienes un cuenta? <a href="/register" className="menu__link">Registrate Aquí!</a>.</p>
                        <p>¿Olvidaste tu contraseña? <a href="/forgotpass" className="menu__link">Haz Click Aquí</a>.</p>

                        <button type="submit" className="button button--primary" id="login-btn">Iniciar Sesión</button>
                    </div>
                </form>
            </div>
        </section >
    );
}

export default LoginPage;