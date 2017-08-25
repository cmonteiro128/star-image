import { ADD_TO_CART } from '../actions/cart';

export default(state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.item];
        default:
            return state;
    }
};