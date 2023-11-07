import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import style from '../components/auth.module.css';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/authContext.jsx';

function LoginPage({ switchToRegister }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signin, isAuthenticated, errors: loginErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/principal#inicio")
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        signin(values);
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
                {
                    errors.email && (
                        <p className={style.errors}>Te falto este campo</p>
                    )
                }

                <div className={style.inputform}>
                    <input {...register("password", { required: true })} className={style.input} placeholder='a' type="password" />
                    <label className={style.labelform}>Contraseña</label>
                </div>
                {
                    errors.password && (
                        <p className={style.errors}>Te falto este campo</p>
                    )
                }

                {
                    loginErrors.map((error, i) => (
                        <p className={style.errors}>{error}</p>
                    ))
                }

                <div className={style.buttons}>
                    <a className={style.button} href="/"><ion-icon name="arrow-back"></ion-icon></a>

                    <a href="#" onClick={switchToRegister} className={style.button}>No tienes cuenta?</a>

                    <button type="submit" className={style.button}>Iniciar sesión</button>
                </div>
            </form>
        </div>
    );
}

function RegisterPage({ switchToLogin }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/principal#inicio")
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    });

    return (
        <div className={style.auth}>
            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                <h1 className={style.titleform}>Registro</h1>

                <div className={style.inputform}>
                    <input {...register("name", { required: true })} className={style.input} placeholder='a' />
                    <label className={style.labelform}>Nombre</label>
                </div>
                {
                    errors.name && (
                        <p className={style.errors}>Te falto este campo</p>
                    )
                }

                <div className={style.inputform}>
                    <input {...register("lastname", { required: true })} className={style.input} placeholder='a' />
                    <label className={style.labelform}>Apellido</label>
                </div>
                {
                    errors.lastname && (
                        <p className={style.errors}>Te falto este campo</p>
                    )
                }

                <div className={style.inputform}>
                    <input {...register("age", { required: true })} className={style.input} placeholder='a' />
                    <label className={style.labelform}>Edad</label>
                </div>
                {
                    errors.age && (
                        <p className={style.errors}>Te falto este campo</p>
                    )
                }

                <div className={style.inputform}>
                    <input {...register("email", { required: true })} className={style.input} placeholder='a' />
                    <label className={style.labelform}>Correo electrónico</label>
                </div>
                {
                    errors.email && (
                        <p className={style.errors}>Te falto este campo</p>
                    )
                }

                <div className={style.inputform}>
                    <input {...register("password", { required: true })} className={style.input} placeholder='a' type="password" />
                    <label className={style.labelform}>Contraseña</label>
                </div>
                {
                    errors.password && (
                        <p className={style.errors}>Te falto este campo</p>
                    )
                }

                {
                    registerErrors.map((error, i) => (
                        <p className={style.errors}>{error}</p>
                    ))
                }

                <div className={style.buttons}>
                    <a className={style.button} href="/"><ion-icon name="arrow-back"></ion-icon></a>

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