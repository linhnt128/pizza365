import {
    FETCH_ORDER_PENDING,
    FETCH_ORDER_SUCCESS,
    FETCH_ORDER_ERROR
} from "../constants/BaseUrlApi";

const initialState = {
    newOrder: [],
    pending: false,
    error: null
}

function CreateOrderReducers (state = initialState, action) {
    switch (action.type) {
        case FETCH_ORDER_PENDING:
            return{
                ...state,
                pending: true
            };
        case FETCH_ORDER_SUCCESS:
            return{
                ...state,
                newOrder: action.data
            };
        case FETCH_ORDER_ERROR:
            return{
                ...state,
                error: action.error
            };
        default:
            return state;
    };
};

export default CreateOrderReducers;

