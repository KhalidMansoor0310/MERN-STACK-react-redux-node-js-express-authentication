export const setProduct = (products) =>{
    return{
        type: 'SET_PRODUCT',
        payload: products
    }
}
export const selectedProducts = (products)=>{
    return {
        type: 'SELECTED_PRODUCTS',
        payload: products
    }
}
export const removeselectedProducts = (products)=>{
    return {
        type: 'REMOVE_SELECTED_PRODUCTS',
        payload: products
    }
}