import {
    SEAFOOD,
    HAWAIIAN,
    BACON
} from "../constants/PizzaType";


//Khai báo initialState
const initialState = {
    pizzaType: ""
};

export default function SelectPizzaTypeReducers (state = initialState, action) {
    switch (action.type) {
        case SEAFOOD:
            return {
                ...state,
                pizzaType: action.payload
            };
        case HAWAIIAN:
            return {
                ...state,
                pizzaType: action.payload
            };
        case BACON:
            return {
                ...state,
                pizzaType: action.payload
            };
        default: 
            return state;
    };
};


