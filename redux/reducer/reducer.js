
import { combineReducers } from 'redux';
import { GET_ALL_PRODUCT, GET_NUMBER_CART, ADD_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, DELETE_CART } from '../actions/actions';
import { getAllProductsData } from '@/services/productsService';

const initProduct = {
    numberCart: 0,
    Carts: [],
    _products: null
};

const response = getAllProductsData();
response.then(res => {
    initProduct._products = res
});

function todoProduct(state = initProduct, action) {
    switch (action.type) {
        case GET_ALL_PRODUCT:
            return {
                ...state,
                _products: action.payload
            }
        case GET_NUMBER_CART:
            return {
                ...state
            }
        case ADD_CART:
            const existingCartItemIndex = state.Carts.findIndex(
                (item) => item.id === action.payload?.id
            );
            if (existingCartItemIndex !== -1) {
                // If the product is already in the cart, increase its quantity
                state.Carts[existingCartItemIndex].quantity++;
            } else {
                // If the product is not in the cart, add it as a new item
                const newCartItem = {
                    id: action.payload?.id,
                    quantity: 1,
                    name: action.payload?.p_name,
                    image: action.payload?.p_image,
                    price: action.payload?.price,
                };
                state.Carts.push(newCartItem);
            }

            return {
                ...state,
                numberCart: state.numberCart + 1,
            };

        case INCREASE_QUANTITY:
            state.numberCart++
            state.Carts[action.payload].quantity++;

            return {
                ...state
            }
        case DECREASE_QUANTITY:
            let quantity = state.Carts[action.payload].quantity;
            if (quantity > 1) {
                state.numberCart--;
                state.Carts[action.payload].quantity--;
            }

            return {
                ...state
            }
        case DELETE_CART:
            let quantity_ = state.Carts[action.payload].quantity;
            return {
                ...state,
                numberCart: state.numberCart - quantity_,
                Carts: state.Carts.filter(item => {
                    return item.id != state.Carts[action.payload].id
                })

            }
        default:
            return state;
    }
};

const ShopApp = combineReducers({
    _todoProduct: todoProduct
});
export default ShopApp;