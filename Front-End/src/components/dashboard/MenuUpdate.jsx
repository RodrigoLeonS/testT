import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MenuUpdate = () => {

    const navigate= useNavigate()
    const [nombre_plato, setNombre_plato] = useState("");
    const [ingredientes, setIngredientes] = useState("");
    const [preparacion, setPreparacion] = useState("");
    const [img, setImg] = useState("");
    const [categoria, setCategoria] = useState("");
    const [img_detail, setImg_detail] = useState("");



    const registerUser = async (nombre_plato, ingredientes, preparacion,img,categoria,img_detail) => {
    const response = await fetch("http://127.0.0.1:8000/api/listproducts/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre_plato,
            ingredientes,
            preparacion,
            img,
            categoria,
            img_detail
        })
    });
    if (response.status === 200) {
        navigate("/products");
    } else {
        alert("Something went wrong!");
    }
};
const handleSubmit = async e => {
    e.preventDefault();
    registerUser(nombre_plato, ingredientes, preparacion,img,categoria,img_detail);
};
    return (<section className="section">
        <div className="container elements">
            <h2 className="section__title">Actualiza tu reserva</h2>
            <form className="form"  onSubmit={handleSubmit} >
                <div className="form__container">
                    <h1 className="card__title">Completa los datos</h1>
                    <hr />
                    <label htmlFor="descripcion"><b>Nombre de platos</b></label>
                    <input type="text"
                        placeholder="Ingresa una descripcion"
                        name="descripcion"
                        id="descripcion"
                        onChange={e => setNombre_plato(e.target.value)}
                        required />
                    <label htmlFor="descripcion"><b>Ingredientes</b></label>
                    <input type="text"
                        placeholder="Ingrese Ingredientes"
                        name="descripcion"
                        id="descripcion"
                        onChange={e => setIngredientes(e.target.value)}
                        required />
                    <label htmlFor="descripcion"><b>Preparación</b></label>
                    <input type="text"
                        placeholder="Ingresa la preparación"
                        name="descripcion"
                        id="descripcion"
                        onChange={e => setPreparacion(e.target.value)}
                        required />
                    <label htmlFor="descripcion"><b>Imagen Principal</b></label>
                    <input type="text"
                        placeholder="URL Imagen Principal"
                        name="descripcion"
                        id="descripcion"
                        onChange={e => setImg(e.target.value)}
                        required />
                    <label htmlFor="descripcion"><b>Imagen Secundaria</b></label>
                    <input type="text"
                        placeholder="URL Imagen Secundaria"
                        name="descripcion"
                        id="descripcion"
                        onChange={e => setImg_detail(e.target.value)}
                        required />
                    <label htmlFor="descripcion"><b>Categoria</b></label>
                    <input type="number"
                        placeholder="Ingresa su categoria"
                        name="descripcion"
                        id="descripcion"
                        onChange={e => setCategoria(e.target.value)}
                        required />
                    <hr />
                    <button type="submit" className="button button--primary">Registrar plato</button>
                </div>
            </form>
        </div>
    </section >);
}

export default MenuUpdate;