const API_URL="http://127.0.0.1:8000/api/listproducts/";
const API_URL_CATEGORIES="http://127.0.0.1:8000/api/listcategories/";
const API_URL_CATEGORIESF="http://127.0.0.1:8000/api/categoriefilter/";

export const listproducts = async () => {
    return await fetch(API_URL)
}

export const getproducts = async (productId) => {
    return await fetch(`${API_URL}${productId}`);
};

export const listcategories = async () => {
    return await fetch(API_URL_CATEGORIES)
}

export const categoriefilter = async (categorieId) => {
    return await fetch(`${API_URL_CATEGORIESF}${categorieId}`)
}