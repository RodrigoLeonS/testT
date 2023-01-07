import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as ProductServer from '../../config/ProductsServer';



const ProductsDetail = () => {
    const  {id} = useParams();
    const [products, setProducts] = useState([]);
    const getproducts = async () => {
        try {
            const res = await ProductServer.getproducts(id);
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getproducts(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
        <header className="section">
            <div className="container">
                <div className="elements">
                    <h2 className="section__title">{products.nombre_plato}</h2>
                    <div className="elements elements--header-nav">
                        <a
                            href="/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button button--primary"
                        >
                            Solicita Aquí
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <section className="section">
            <div className="container">
                <div className="card card--movie">
                    <div className="card__body card__body--movie">
                        <img
                            src={products.img_detail}
                            alt="img_test"
                            width="50%"
                            height="auto"
                            className="card__img"
                        />
                        <div>
                            <h3 className="card__title">Ingredientes: {products.ingredientes}</h3>
                            <p className="card__text">{products.preparacion}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
    

}

export default ProductsDetail;