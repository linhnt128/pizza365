//Action creators
//** --------- */

//import constants
import { 
    FULL_NAME,
    EMAIL,
    PHONE_NUMBER,
    ADDRESS,
    MA_GIAM_GIA,
    MESSAGE
} from "../constants/GetOrderForm";

function fullNameInput (value) {
    return {
        type: FULL_NAME,
        payload: value
    }
};

function emailInput (value) {
    return {
        type: EMAIL,
        payload: value
    }
};

function phoneNumberInput (value) {
    return {
        type: PHONE_NUMBER,
        payload: value
    }
};

function addressInput (value) {
    return {
        type: ADDRESS,
        payload: value
    }
};

function maGiamGiaInput (value) {
    return {
        type: MA_GIAM_GIA,
        payload: value
    }
};

function messageInput (value) {
    return {
        type: MESSAGE,
        payload: value
    }
};

export {
    fullNameInput,
    emailInput,
    phoneNumberInput,
    addressInput,
    maGiamGiaInput,
    messageInput
};
