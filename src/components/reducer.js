export const initialState = {
    basket : [],
    total : 0,
    item : 0,
    user : null,
}

export const getBasketTotal = (basket) =>
     basket.reduce((amount, item) => item.price + amount, 0);



const reducer = (state , action) => {
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user : action.user,
            }
        case "ADD_TO_BASKET":
            if (state.basket.includes(action.item)){
                return
            }
            else {
            return {
                ...state,
                basket: [...state.basket, action.item],
                total : state.total + action.item.price,
                item : state.item + 1
            }}
        case "INCREASE_TOTAL":
            return {
                ...state,
                total : state.total + action.price,
                item : action.item + 1
            }
        case "DECREASE_TOTAL":
                return {
                    ...state,
                    total : state.total - action.price,
                    item : action.item - 1
                }
        case "DISELECT":                
                return {
                    ...state,
                    total : state.total - (action.price * action.quantity),
                    item : state.item - action.quantity   ,
                }
        case "SELECT":
                return {
                    ...state,
                    total : state.total + (action.price * action.quantity),
                    item : state.item + action.quantity
                }
        case "REMOVE_FROM_BASKET":
            // we cloned the basket
            
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            if (index >= 0) {
                // item exists in basket, remove it...
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    'Cant remove product (id: ${action.id})'
                )
            }

        
            return{ 
                basket:newBasket,
                total : state.total - (action.price * action.quantity),
                item : state.item - action.quantity
                }
        default:
            return {state};
    }
} 

export default reducer;