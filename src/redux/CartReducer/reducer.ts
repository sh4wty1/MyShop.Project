import { Product } from "../../services/products";

interface CartState {
    cart: Product[];
}

const initialState: CartState = {
    cart: [],
}

interface CartAction {
    type: string,
    payload: Product
}

export const cartReducer = (state = initialState, action: CartAction) => {
    switch (action.type) {
        case "cart/add-product":
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.payload
                ]
            }
            case "cart/remove-product": {
                const productToRemove = action.payload;
                const newCart = [...state.cart];
                const indexToRemove = newCart.findIndex(
                    (product) => product.id === productToRemove.id
                );
                if (indexToRemove !== -1) {
                    newCart.splice(indexToRemove, 1);
                }
            
                return {
                    ...state,
                    cart: newCart,
                };
            }
        default:
            return state;
    }
}