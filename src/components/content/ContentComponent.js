//import components
import IntroduceComponent from "./introduce/IntroduceComponent";
import SizeComponent from "./size/SizeComponent";
import TypeComponent from "./type/TypeComponent";
import DrinkComponent from "./drink/DrinkComponent";
import FormComponent from "./form/FormComponent";

//import react, react-redux 
import { useState } from "react";



function ContentComponent () {
    //Xử lý reload page
    const [reloadPage, setReloadPage] = useState(0);

    //Khai báo hàm xử lý reload page
    const refreshPage = () => {
        setReloadPage (reloadPage + 1);
    };

        return (
            <>
                <IntroduceComponent/>
                <SizeComponent/>
                <TypeComponent/>
                <DrinkComponent/>
                <FormComponent refreshPageProps={refreshPage}/>
            </>
        );
};

export default ContentComponent;