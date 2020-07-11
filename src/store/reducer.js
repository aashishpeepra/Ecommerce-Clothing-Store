import * as actionTypes from './actions';

const initialState = {
    loggedIn:false,
    userInfo:{},
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
        case actionTypes.AUTH_IN:
            return {
                ...state,
                loggedIn:true,
                userInfo:{...action.obj}
            }
            case actionTypes.AUTH_OUT:
                return {
                    ...state,
                    loggedIn:false,
                    userInfo:{}
                }
        default:
            return state;
    }
};

export default reducer;