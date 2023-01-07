import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as ProductServer from '../../config/ProductsServer';
import ProductsItem from "./ProductsItem";


const ProductsCardsFilter = () => {
    const  {id} = useParams();
    const [products, setProducts] = useState([]);
    const getproducts = async () => {
        try {
            const res = await ProductServer.categoriefilter(id);
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
            <div className="cards">
                {products?.map((products) => (
                    <ProductsItem key={products.id} products={products} />
                ))}
            </div>
        </>
    );
}

export default ProductsCardsFilter;