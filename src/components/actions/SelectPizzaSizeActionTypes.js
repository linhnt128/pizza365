//Action creators
//** --------- */

import {
    PIZZA_SMALL,
    PIZZA_MEDIUM,
    PIZZA_LARGE
} from "../constants/PizzaSize";

export function selectPizzaSmall () {
    return {
        type: PIZZA_SMALL,
        payload: {
            kichCo: "Small",
            duongKinh: 20,
            suon: 2,
            salad: 200,
            soLuongNuoc: 2,
            thanhTien: 150000
        }
    };
};


export function selectPizzaMedium () {
    return {
        type: PIZZA_MEDIUM,
        payload: {
            kichCo: "Medium",
            duongKinh: 25,
            suon: 4,
            salad: 300,
            soLuongNuoc: 3,
            thanhTien: 200000
        }
    };
};

export function selectPizzaLarge () {
    return {
        type: PIZZA_LARGE,
        payload: {
            kichCo: "Large",
            duongKinh: 30,
            suon: 8,
            salad: 500,
            soLuongNuoc: 4,
            thanhTien: 250000
        }
    };
};

