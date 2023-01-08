const API_URL="http://127.0.0.1:8000/api/listproducts/";
const API_URL_CATEGORIES="http://127.0.0.1:8000/api/listcategories/";
const API_URL_CATEGORIESF="http://127.0.0.1:8000/api/categoriefilter/";
const API_URL_LISTDATE="http://127.0.0.1:8000/api/listdate/";

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

export const deletedate = async (dateId) => {
    return await fetch(`${API_URL_LISTDATE}${dateId}`,{
        method:'DELETE',
        })
}
export const modifydate = async (dateId) => {
    return await fetch(`${API_URL_LISTDATE}${dateId}`,{
        method:'PUT',
        })
}

export const listdate = async()=> {
    return await fetch(API_URL_LISTDATE)
}