//Action creators
//** --------- */

import {
    SEAFOOD,
    HAWAIIAN,
    BACON
} from "../constants/PizzaType";



function selectSeafood () {
    return {
        type: SEAFOOD,
        payload: "Seafood"
    }
};
function selectHawaiian () {
    return {
        type: HAWAIIAN,
        payload: "Hawaiian"
    }
};
function selectBacon () {
    return {
        type: BACON,
        payload: "Bacon"
    }
};

export {
    selectSeafood,
    selectHawaiian,
    selectBacon
};