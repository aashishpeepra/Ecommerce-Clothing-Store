import * as actionTypes from './actions';

const initialState = {
    cart: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.obj],
            };
        case actionTypes.DELETE_ITEM_CART:
            return {
                ...state,
                cart: state.cart.filter((_,i) => i !== action.index),
            }
        default:
            return state;
    }
};
<<<<<<< HEAD
export default reducer;
=======
export {initialState};
export default reducer;
>>>>>>> 9fa47d0b52cddec3d80aa10b5c3286e66647ebe4
