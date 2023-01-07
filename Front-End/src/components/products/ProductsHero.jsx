import * as ProductServer from '../../config/ProductsServer';
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";


const ProductsHero = () => {
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
            <section
                className="section section--hero section--movie-hero"
                style={{
                    backgroundImage: `url(${products.img})`
                }}
            />
        </>
    );
}

export default ProductsHero;