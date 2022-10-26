import {
    PIZZA_SMALL,
    PIZZA_MEDIUM,
    PIZZA_LARGE
} from "../constants/PizzaSize";

//Khai báo initialState
const initialState = {
        kichCo: "",
        duongKinh: "",
        suon: "",
        salad: "",
        soLuongNuoc: "",
        thanhTien: "",
};

function SelectPizzaSizeReducers (state = initialState, action) {
    switch (action.type) {
        case PIZZA_SMALL:
            return {
                ...state,
                kichCo: action.payload.kichCo,
                duongKinh: action.payload.duongKinh,
                suon: action.payload.suon,
                salad: action.payload.salad,
                soLuongNuoc: action.payload.soLuongNuoc,
                thanhTien: action.payload.thanhTien
            };
        case PIZZA_MEDIUM:
            return {
                ...state,
                kichCo: action.payload.kichCo,
                duongKinh: action.payload.duongKinh,
                suon: action.payload.suon,
                salad: action.payload.salad,
                soLuongNuoc: action.payload.soLuongNuoc,
                thanhTien: action.payload.thanhTien
            };
        case PIZZA_LARGE:
            return {
                ...state,
                kichCo: action.payload.kichCo,
                duongKinh: action.payload.duongKinh,
                suon: action.payload.suon,
                salad: action.payload.salad,
                soLuongNuoc: action.payload.soLuongNuoc,
                thanhTien: action.payload.thanhTien
            };
        default:
            return state;
    };
};

export default SelectPizzaSizeReducers;