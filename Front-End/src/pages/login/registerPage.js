import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RegisterPage = () => {
    const navigate= useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");

    const registerUser = async (username, password, password2) => {
        const response = await fetch("http://127.0.0.1:8000/api/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
                password2,
                email,
                first_name,
                last_name
            })
        });
        if (response.status === 201) {
            navigate("/login");
        } else {
            alert("Something went wrong!");
        }
    };
    const handleSubmit = async e => {
        e.preventDefault();
        registerUser(username, password, password2,email,first_name,last_name);
    };
    return (
        <section className="section">
            <div className="container elements">
                <h2 className="section__title">RestauranteApp</h2>
                <form className="form" onSubmit={handleSubmit} >
                    <div className="form__container">
                        <h1 className="card__title">Registrate</h1>
                        <p>Por favor ingresa tus credenciales</p>
                        <hr />
                        <label htmlFor="username"><b>Usuario</b></label>
                        <input type="text"
                            placeholder="Ingresa tu correo"
                            name="username"
                            id="username"
                            onChange={e => setUsername(e.target.value)}
                            required />

                        <label htmlFor="first_name"><b>Nombres</b></label>
                        <input type="text"
                            placeholder="Ingresa tus nombres"
                            name="first_name"
                            id="first_name"
                            onChange={e => setFirst_name(e.target.value)}
                            required />
                        <label htmlFor="last_name"><b>Apellidos</b></label>
                        <input type="text"
                            placeholder="Ingresa tus apellidos"
                            name="last_name"
                            id="last_name"
                            onChange={e => setLast_name(e.target.value)}
                            required />

                        <label htmlFor="email"><b>Correo</b></label>
                        <input type="email"
                            placeholder="Ingresa tu correo"
                            name="email"
                            id="email"
                            onChange={e => setEmail(e.target.value)}
                            required />

                        <label htmlFor="password"><b>Contraseña</b></label>
                        <input type="password"
                            placeholder=" Ingresa tu contraseña"
                            name="password"
                            id="password"
                            onChange={e => setPassword(e.target.value)}
                            required />

                        <label htmlFor="password2"><b>Repita Contraseña</b></label>
                        <input type="password"
                            placeholder="Repita la contraseña"
                            name="password2"
                            id="password2"
                            onChange={e => setPassword2(e.target.value)}
                            required />
                        <hr />
                        <p>{password2 !== password ? "Passwords do not match" : ""}</p>
                        <p>Al crear tu cuenta estas de acuerdo con: <a href="/register" className="menu__link">Terminos & Condiciones</a>.</p>

                        <button type="submit" className="button button--primary">Registrate</button>
                    </div>
                </form>
            </div>
        </section >
    );
}

export default RegisterPage;