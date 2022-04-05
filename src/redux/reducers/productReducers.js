const initialState = {
    products: [],
}

export const allProducts = (state = initialState, action) => {
    switch(action.type){
        case 'SET_PRODUCT':
            return {...state, products: action.payload};
        default:
            return state;
    }
}
export const product = (state = initialState, action) => {
    switch(action.type){
        case 'SELECTED_PRODUCTS':
            return {...state,...action.payload};
        case 'REMOVE_SELECTED_PRODUCTS':
            return {};
        default:
            return state;
    }
}
