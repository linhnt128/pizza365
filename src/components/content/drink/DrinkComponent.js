//Import module css
import cssModule from "../../../App.module.css";


//import react, react-redux 
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//import function fetchDrinks
import { fetchDrinks, selectDrinkList } from "../../actions/FetchActionTypes";


function DrinkComponent () {

    const dispatch = useDispatch();

    const { drinks, drinkSelected } = useSelector((reduxData) => reduxData.DrinkReducers);
    console.log("Drinks state:");
    console.log(drinks);
    console.log("Drinks selected value:");
    console.log(drinkSelected);

    useEffect(() => {
        dispatch(fetchDrinks());
    }, []);

    const handleChange = (event) => {
        dispatch(selectDrinkList(event.target.value));
        console.log(event.target.value);
    };


        return(
            <>
                {/* <!-- Select a drink --> */}
                    <div className="col-sm-12 text-center p-4 mt-4">
                        <h2 className = {cssModule.webText}><b className = "border-bottom border-warning">Chọn đồ uống</b></h2>        
                    </div>
                    <select id="select-drink-list" className="form-control" onChange={handleChange}>
                        <option defaultValue> -- Tất cả loại nước uống -- </option>
                        {
                            drinks.map((element, index) => {
                                return <option key={index} value={element.maNuocUong}>{element.tenNuocUong}</option>
                            })
                        }
                    </select>
            </>
        );
};

export default DrinkComponent;