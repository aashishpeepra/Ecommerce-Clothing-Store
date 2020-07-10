import * as actionTypes from './actions';

const initialState = {
    loggedIn: false,
    userInfo: {},
    cart: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            let temp3=[...state.cart];
            let flag=false;
            let index=0;
            
            for(let i=0;i<temp3.length;i++)
            {
                if(temp3[i].data.id==action.obj.data.id)
                    {
                        
                        flag=true;
                        index=i;
                        break;
                    }
            }
            if(flag)
                temp3[index].qty+=1;
            else
                temp3.push(action.obj);
            
            return {
                ...state,
                cart: [...temp3],
            };
        case actionTypes.DELETE_ITEM_CART:
            return {
                ...state,
                cart: state.cart.filter((_, i) => i !== action.index),
            }
        case actionTypes.AUTH_IN:
            return {
                ...state,
                loggedIn: true,
                userInfo: { ...action.obj }
            }
        case actionTypes.AUTH_OUT:
            return {
                ...state,
                loggedIn: false,
                userInfo: {}
            }
        case actionTypes.EDIT_QTY:
            let temp=[...state.cart];
            temp[action.obj.index].qty=action.obj.q;
            return {
                ...state,
                cart:[...temp]
            }
        case actionTypes.EDIT_SIZE:
            let temp2=[...state.cart];
            temp2[action.obj.index].size=action.obj.size;
            return {
                ...state,
                cart:[...temp2]
            }
        default:
            return state;
    }
};
export default reducer;

