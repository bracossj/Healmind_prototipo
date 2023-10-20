import { useForm } from 'react-hook-form';
import '../styles/form.css'

function RegisterPage() {

    const { register, handleSubmit } = useForm();

    return (
        <div className="register">
            <div className="formpage">
                <form className="form" onSubmit={handleSubmit((values) => {
                    console.log(values);
                })}>
                    <h1 className="titleform">Registro</h1>

                    <div className="inputform">
                        <input  {...register("name", { required: true })} className="input" placeholder='a' />
                        <label className="labelform">Nombre</label>
                    </div>

                    <div className="inputform">
                        <input  {...register("lastname", { required: true })} className="input" placeholder='a' />
                        <label className="labelform">Apellido</label>
                    </div>

                    <div className="inputform">
                        <input  {...register("edad", { required: true })} className="input" placeholder='a' />
                        <label className="labelform">Edad</label>
                    </div>

                    <div className="inputform">
                        <input  {...register("email", { required: true })} className="input" placeholder='a' />
                        <label className="labelform">Correo electrónico</label>
                    </div>

                    <div className="inputform">
                        <input  {...register("password", { required: true })} className="input" placeholder='a' type="password" />
                        <label className="labelform">Contraseña</label>
                    </div>

                    <div className="buttons">
                        <a href="/login" className='button'>Ya tienes cuenta?</a>

                        <button type="submit" className="button">Registrarse</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage
