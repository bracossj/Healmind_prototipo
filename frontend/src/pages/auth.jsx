import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import style from '../components/auth.module.css';
import { registerRequest, loginRequest } from '../api/auth';
import { useNavigate } from "react-router-dom";

function LoginPage({ switchToRegister }) {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (async (values) => {
        const res = await loginRequest(values);
        navigate("/principal")
    });

    return (
        <div className={style.auth}>
            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <a href="/"></a>
                <h1 className={style.titleform}>Iniciar sesión</h1>

                <div className={style.inputform}>
                    <input {...register("email", { required: true })} className={style.input} placeholder='a' />
                    <label className={style.labelform}>Correo electrónico</label>
                </div>

                <div className={style.inputform}>
                    <input {...register("password", { required: true })} className={style.input} placeholder='a' type="password" />
                    <label className={style.labelform}>Contraseña</label>
                </div>

                <div className={style.buttons}>
                    <a className={style.button} href="/">a</a>

                    <a href="#" onClick={switchToRegister} className={style.button}>No tienes cuenta?</a>

                    <button type="submit" className={style.button}>Iniciar sesión</button>
                </div>
            </form>
        </div>
    );
}

function RegisterPage({ switchToLogin }) {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (async (values) => {
        const res = await registerRequest(values);
        navigate("/principal")
    });

    return (
        <div className={style.auth}>
            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <h1 className={style.titleform}>Registro</h1>

                <div className={style.inputform}>
                    <input {...register("name", { required: true })} className={style.input} placeholder='a' />
                    <label className={style.labelform}>Nombre</label>
                </div>

                <div className={style.inputform}>
                    <input {...register("lastname", { required: true })} className={style.input} placeholder='a' />
                    <label className={style.labelform}>Apellido</label>
                </div>

                <div className={style.inputform}>
                    <input {...register("age", { required: true })} className={style.input} placeholder='a' />
                    <label className={style.labelform}>Edad</label>
                </div>

                <div className={style.inputform}>
                    <input {...register("email", { required: true })} className={style.input} placeholder='a' />
                    <label className={style.labelform}>Correo electrónico</label>
                </div>

                <div className={style.inputform}>
                    <input {...register("password", { required: true })} className={style.input} placeholder='a' type="password" />
                    <label className={style.labelform}>Contraseña</label>
                </div>

                <div className={style.buttons}>
                    <a className={style.button} href="/">a</a>

                    <a href="#" onClick={switchToLogin} className={style.button}>Tienes cuenta?</a>

                    <button type="submit" className={style.button}>Registrarse</button>
                </div>
            </form>
        </div>
    );
}

function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);

    const switchForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div>
            {isLogin ? <LoginPage switchToRegister={switchForm} /> : <RegisterPage switchToLogin={switchForm} />}
        </div>
    );
}

export default AuthPage;