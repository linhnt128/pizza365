import {
    FETCH_VOUCHER_PENDING,
    FETCH_VOUCHER_SUCCESS,
    FETCH_VOUCHER_ERROR,
} from "../constants/BaseUrlApi";


//Khai báo initial state
const initialState = {
    voucher: [],
    pending: false,
    error: null
};

function VoucherReducers (state = initialState, action) {
    switch (action.type) {
        case FETCH_VOUCHER_PENDING:
            return{
                ...state,
                pending: true
            };
        case FETCH_VOUCHER_SUCCESS:
            return{
                ...state,
                voucher: action.data
            };
        case FETCH_VOUCHER_ERROR:
            return{
                ...state,
                error: action.error
            };
        default:
            return state;
    };
};

export default VoucherReducers;