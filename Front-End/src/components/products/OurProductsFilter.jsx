import ProductsCardsFilter from "../../components/products/ProductsCardsFilter";
import React from 'react';
import { useNavigate } from "react-router-dom";

const OurProductsFilter = () => {
    // const [categories, setCategories] = useState([]);
    const navigate=useNavigate()
    // const listcategories = async () => {
    //     try {
    //         const res = await ProductServer.listcategories();
    //         const data = await res.json();
    //         setCategories(data);
    //         console.log(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // useEffect(() => {
    //     listcategories();
    // }, [])

    const logout = () => {
        navigate('/products');
    }

    return (
        <section className="section">
            <div className="container elements">
                <h2 className="section__title">Nuestros Productos</h2>
                <button className="button button--primary" onClick={logout}>Quitar Filtro</button>
                <ProductsCardsFilter />
            </div>
        </section>
    );
}

export default OurProductsFilter;