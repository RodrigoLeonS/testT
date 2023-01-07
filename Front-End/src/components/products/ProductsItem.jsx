import React from 'react';
import { Link } from "react-router-dom";



const ProductsItem = ({products, listproducts}) => {


    return (<>
        <div className="card card--movies">
            <Link to={`${products.id}`} className="card__header">
                <img
                    src={products.img}
                    alt="Img"
                    width="100%"
                    height="auto"
                    className="card__header-img"
                />
            </Link>
            <div className="card__body card__body--movies">
                <h3 className="card__title card__title--movies">{products.nombre_plato}</h3>
            </div>
        </div></>);
}

export default ProductsItem;