import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/form.css';
import 'animate.css';

function LoginPage({ switchToRegister }) {
    const { register, handleSubmit } = useForm();

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <div className='auth'>

            <form className="form animate__animated animate__backInDown" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="titleform">Iniciar sesión</h1>

                <div className="inputform">
                    <input {...register("email", { required: true })} className="input" placeholder='a' />
                    <label className="labelform">Correo electrónico</label>
                </div>

                <div className="inputform">
                    <input {...register("password", { required: true })} className="input" placeholder='a' type="password" />
                    <label className="labelform">Contraseña</label>
                </div>

                <div className="buttons">
                    <a href="#" onClick={switchToRegister} className='button'>No tienes cuenta?</a>

                    <button type="submit" className="button">Iniciar sesión</button>
                </div>
            </form>
        </div>

    );
}

function RegisterPage({ switchToLogin }) {
    const { register, handleSubmit } = useForm();

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <div className="auth">
            <form className="form animate__animated animate__backInDown" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="titleform">Registro</h1>

                <div className="inputform">
                    <input {...register("name", { required: true })} className="input" placeholder='a' />
                    <label className="labelform">Nombre</label>
                </div>

                <div className="inputform">
                    <input {...register("lastname", { required: true })} className="input" placeholder='a' />
                    <label className="labelform">Apellido</label>
                </div>

                <div className="inputform">
                    <input {...register("edad", { required: true })} className="input" placeholder='a' />
                    <label className="labelform">Edad</label>
                </div>

                <div className="inputform">
                    <input {...register("email", { required: true })} className="input" placeholder='a' />
                    <label className="labelform">Correo electrónico</label>
                </div>

                <div className="inputform">
                    <input {...register("password", { required: true })} className="input" placeholder='a' type="password" />
                    <label className="labelform">Contraseña</label>
                </div>

                <div className="buttons">
                    <a href="#" onClick={switchToLogin} className='button'>Tienes cuenta?</a>

                    <button type="submit" className="button">Registrarse</button>
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