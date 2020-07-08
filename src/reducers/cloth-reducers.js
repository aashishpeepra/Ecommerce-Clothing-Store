export default function(state={},action){
    switch(action.type)
    {
        case 'GET_CLOTH':
            return {...state,getAllData:action.payload}
        case 'GET_TRENDING':
            return {...state}
        case "GET_TOP":
            return {...state}
        case "CLEAR_DATA":
            return {...state}
        default:
            return state
    }
}