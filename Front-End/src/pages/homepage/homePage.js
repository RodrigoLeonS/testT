import * as ProductServer from '../../config/ProductsServer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Navigation, Pagination } from 'swiper';
import { Link } from 'react-router-dom';
import React,{useEffect, useState} from 'react';

const HomePage = () => {
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
            <Swiper
                tag="section"
                modules={[A11y, Autoplay, Navigation, Pagination]}
                autoplay={{ delay: 5000 }}
                loop
                navigation
                pagination={{ clickable: true }}>
                {products?.map((products) => (
                <SwiperSlide key={products.id} products={products} 
                    tag="section"
                    className="section section--hero"
                    style={{
                        backgroundImage: `url(${products.img})`
                    }}
                >
                    <div className="container container--hero">
                        <div className="card card--hero">
                            <h2 className="card__title card__title--hero">{products.nombre_plato}</h2>
                            <h4 className="card__text card__text--hero">{products.ingredientes}</h4>
                            <Link to="/products" className="button button--primary">Ver más</Link>
                        </div>
                    </div>
                </SwiperSlide>
                ))}

            </Swiper>

    );
}

export default HomePage;