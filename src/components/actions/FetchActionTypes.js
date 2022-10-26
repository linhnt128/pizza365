//Action creators
//** --------- */
//import constants
import {
    FETCH_DRINKS_PENDING,
    FETCH_DRINKS_SUCCESS,
    FETCH_DRINKS_ERROR,
    BASE_URL_DRINKS,
    BASE_URL_ORDERS,
    BASE_URL_VOUCHERS,
    SELECT_DRINK,
    FETCH_VOUCHER_PENDING,
    FETCH_VOUCHER_SUCCESS,
    FETCH_VOUCHER_ERROR,
    FETCH_ORDER_PENDING,
    FETCH_ORDER_SUCCESS,
    FETCH_ORDER_ERROR
} from "../constants/BaseUrlApi";



//Lấy dữ liệu drinks từ API
const fetchDrinks = () => async dispatch => {

    var requestOptions = {
        method: "GET",
        redirect: "follow"
    }

    await dispatch({
        type: FETCH_DRINKS_PENDING
    });

    try {
        const response = await fetch(
            BASE_URL_DRINKS, requestOptions
        );

        const data = await response.json();

        return dispatch({
            type: FETCH_DRINKS_SUCCESS,
            data: data
        });
    } catch (err) {
        return dispatch({
            type: FETCH_DRINKS_ERROR,
            error: err
        });
    }
};

//Chọn drink
const selectDrinkList = (value) => {
    return {
        type: SELECT_DRINK,
        payload: value
    };
};

//Lấy thông tin về voucher theo maGiamGia từ API
const fetchVoucher = () => async dispatch => {
    var requestOptions = {
        method: "GET",
        redirect: "follow"
    }

    await dispatch({
        type: FETCH_VOUCHER_PENDING
    });

    try {
        const response = await fetch(
            BASE_URL_VOUCHERS, requestOptions
        );

        const data = await response.json();

        return dispatch({
            type: FETCH_VOUCHER_SUCCESS,
            data: data
        });
    } catch (err) {
        return dispatch({
            type: FETCH_VOUCHER_ERROR,
            error: err
        });
    }
}

//Gọi API tạo order mới
const createOrder = () => async dispatch => {

    var requestOptions = {
        method: "POST",
        redirect: "follow"
    }

    await dispatch({
        type: FETCH_ORDER_PENDING
    });

    try {
        const response = await fetch(
            BASE_URL_ORDERS, requestOptions
        );

        const data = await response.json();

        return dispatch({
            type: FETCH_ORDER_SUCCESS,
            data: data
        });
    } catch (err) {
        return dispatch({
            type: FETCH_ORDER_ERROR,
            error: err
        });
    }
};



export {
    fetchDrinks, //load dữ liệu drinks lên select
    selectDrinkList, // lưu lại value khi user chọn loại nước uống
    fetchVoucher, //lấy thông tin về voucher theo maGiamGia
    createOrder // gọi API, tạo mới 1 order
};

