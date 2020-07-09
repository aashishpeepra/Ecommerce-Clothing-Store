import * as actionTypes from './actions';

const initialState = {
    cart: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            console.log(state.cart);
            return {
                ...state,
                cart: [...state.cart, action.obj],
            };
        default:
            return state;
    }
};
export {initialState};
export default reducer;
