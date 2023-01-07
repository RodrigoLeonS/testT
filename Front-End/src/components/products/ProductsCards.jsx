import * as ProductServer from '../../config/ProductsServer';
import ProductsItem from "./ProductsItem";
import React,{useEffect, useState} from 'react';

const ProductsCards = () => {
    const [products, setProducts] = useState([]);

    const listproducts = async () => {
        try {
            const res = await ProductServer.listproducts();
            const data = await res.json();
            setProducts(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listproducts();
    }, [])
    return (
        <>
            <div className="cards">
                {products?.map((products) => (
                    <ProductsItem key={products.id} products={products} listproducts={listproducts} />
                ))}
            </div>
        </>
    );
}

export default ProductsCards;