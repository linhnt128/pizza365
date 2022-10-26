import { combineReducers } from "redux";
import SelectPizzaSizeReducers from "./SelectPizzaSizeReducers";
import SelectPizzaTypeReducers from "./SelectPizzaTypeReducers";
import DrinkReducers from "./DrinkReducers";
import OrderFormReducers from "./OrderFormReducers";
import CreateOrderReducers from "./CreateOrderReducers";
import VoucherReducers from "./VoucherReducers";

const rootReducer = combineReducers({
    SelectPizzaSizeReducers,
    SelectPizzaTypeReducers,
    DrinkReducers,
    OrderFormReducers,
    VoucherReducers,
    CreateOrderReducers
});

export default rootReducer;