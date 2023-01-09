import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DashboardUpdate = () => {

    const navigate= useNavigate()
    const [fecha, setFecha] = useState("");
    const [hora, setHora] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [id_user, setId_user] = useState("");
    const [mesa, setMesa] = useState("");


    const registerUser = async (fecha, hora, descripcion,id_user,mesa) => {
    const response = await fetch("http://127.0.0.1:8000/api/listdate/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fecha,
            hora,
            descripcion,
            id_user,
            mesa

        })
    });
    if (response.status === 200) {
        navigate("/dashboard");
    } else {
        alert("Something went wrong!");
    }
};
const handleSubmit = async e => {
    e.preventDefault();
    registerUser(fecha, hora, descripcion,id_user,mesa);
};
    return (<section className="section">
        <div className="container elements">
            <h2 className="section__title">Actualiza tu reserva</h2>
            <form className="form"  onSubmit={handleSubmit} >
                <div className="form__container">
                    <h1 className="card__title">Completa los datos</h1>
                    <hr />
                    <label htmlFor="fecha"><b>Fecha</b></label>
                    <input type="date"
                        name="fecha"
                        id="fecha"
                        onChange={e => setFecha(e.target.value)}
                        required />
                    <label htmlFor="first_name"><b>Hora</b></label>
                    <input type="time"
                        name="first_name"
                        id="first_name"
                        onChange={e => setHora(e.target.value)}
                        required />
                    <label htmlFor="descripcion"><b>Descripcion</b></label>
                    <input type="text"
                        placeholder="Ingresa una descripcion"
                        name="descripcion"
                        id="descripcion"
                        onChange={e => setDescripcion(e.target.value)}
                        required />
                    <label htmlFor="id_user"><b>Usuario</b></label>
                    <input type="number"
                        name="id_user"
                        id="id_user"
                        onChange={e => setId_user(e.target.value)}
                        required />
                    <label htmlFor="mesa"><b>mesa</b></label>
                    <input type="number"
                        name="mesa"
                        id="mesa"
                        onChange={e => setMesa(e.target.value)}
                        required />
                    <hr />
                    <button type="submit" className="button button--primary">Reserva</button>
                </div>
            </form>
        </div>
    </section >);
}

export default DashboardUpdate;