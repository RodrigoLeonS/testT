import ProductsCards from "../../components/products/ProductsCards";
import * as ProductServer from '../../config/ProductsServer';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { GiFoodTruck  } from 'react-icons/gi';
import { MdFastfood  } from 'react-icons/md';

const OurProductsPage = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    const listcategories = async () => {
        try {
            const res = await ProductServer.listcategories();
            const data = await res.json();
            setCategories(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listcategories();
    }, [])

    const [selected, setSelected] = useState(null);
    const handleChange = (selectedOption) => {
        setSelected(selectedOption.target.value);
        console.log(`Option selected:`, selectedOption.target.value);
    };
    if (selected != null) {
            navigate(`/products/categoria/${selected}`)  
    }
    return (
        <section className="section">
            <div className="container elements">
                <h2 className="section__title"><GiFoodTruck/> Nuestros Platos  </h2>
                <label htmlFor="categories" className="section__subtitle"> <MdFastfood/> Categorias </label>

                <select name="categories" id="categorieslist" onChange={handleChange} className="button button--primary test"> 
                        <option className="button--primary" value="todo">Todo</option>

                    {categories?.map((categories) => (
                        <option className="button--primary" key={categories.id} value={categories.id}>{categories.descripcion}</option>
                    ))}
                </select>
                {selected && <>You've selected {selected}</>}
                <ProductsCards />
            </div>
        </section>
    );
}

export default OurProductsPage;