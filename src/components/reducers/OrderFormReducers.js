//import constants
import { 
    FULL_NAME,
    EMAIL,
    PHONE_NUMBER,
    ADDRESS,
    MA_GIAM_GIA,
    MESSAGE
} from "../constants/GetOrderForm";

//khai báo initialState
const initialState = {
    fullname: "",
    email: "",
    phone:"",
    address:"",
    maGiamGia: "",
    message:""
}

export default function OrderFormReducers (state = initialState, action) {
    switch (action.type) {
        case FULL_NAME:
            return{
                ...state,
                fullname: action.payload
            }
        case EMAIL:
            return{
                ...state,
                email: action.payload
            }
        case PHONE_NUMBER:
            return{
                ...state,
                phone: action.payload
            }
        case ADDRESS:
            return{
                ...state,
                address: action.payload
            }
        case MA_GIAM_GIA:
            return{
                ...state,
                maGiamGia: action.payload
            }
        case MESSAGE:
            return{
                ...state,
                message: action.payload
            }
        default:
            return state;
    }
};
