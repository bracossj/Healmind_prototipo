import { useForm } from 'react-hook-form';
import '../styles/form.css'

function LoginPage() {

    const { register, handleSubmit } = useForm();

    return (
        <div className='login'>
            <div className="formpage">
                <form className="form" onSubmit={handleSubmit((values) => {
                    console.log(values);
                })}>
                    <h1 className="titleform">Iniciar sesion</h1>

                    <div className="inputform">
                        <input  {...register("email", { required: true })} className="input" placeholder='a' />
                        <label className="labelform">Correo electrónico</label>
                    </div>

                    <div className="inputform">
                        <input  {...register("password", { required: true })} className="input" placeholder='a' />
                        <label className="labelform">Contraseña</label>
                    </div>

                    <div className="buttons">
                        <a href="/register" className='button'>No tienes cuenta?</a>

                        <button type="submit" className="button">Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage