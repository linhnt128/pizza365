//Import module css
import cssModule from "../../../App.module.css";
//Import ảnh chọn loại pizza
import seafoodImage from "../../../assets/images/seafood.jpg";
import hawaiiImage from "../../../assets/images/hawaiian.jpg";
import baconImage from "../../../assets/images/bacon.jpg";


//Import react, redux
import { useDispatch, useSelector } from "react-redux";


//Import action types
import { selectSeafood, selectHawaiian, selectBacon } from "../../actions/SelectPizzaTypeActionTypes";

function TypeComponent () {

    const dispatch = useDispatch();

    const { pizzaType } = useSelector((reduxData) => reduxData.SelectPizzaTypeReducers);
    console.log("pizzaType state:");
    console.log(pizzaType);


    //Khai báo hàm cho nút chọn pizza type
    //Seafood
    const onBtnSeafoodClick = () => {
        console.log("Nút chọn pizza type seafood được click!");
        dispatch(selectSeafood());
        console.log(selectSeafood());
    };
    //Hawaiian
    const onBtnHawaiianClick = () => {
        console.log("Nút chọn pizza type hawaiian được click!");
        dispatch(selectHawaiian());
        console.log(selectHawaiian());
    };
    //Bacon
    const onBtnBaconClick = () => {
        console.log("Nút chọn pizza type bacon được click!");
        dispatch(selectBacon());
        console.log(selectBacon());
    };



        return(
            <>
                    {/* <!-- Title Pizza Type --> */}
                    <div id="about" className="row">
                        <div className="col-sm-12 text-center p-4 mt-4">
                            <h2 className = {cssModule.webText}><b className="p-2 border-bottom border-warning">Chọn loại Pizza</b></h2>
                        </div>              
                        {/* <!-- Content Chọn loại Pizza --> */}
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="card w-100" style={{width: "18rem"}}>
                                    <img src = {seafoodImage} alt = "seafood" className="card-img-top"/>
                                        <div className="card-body">
                                            <h3>OCEAN MANIA</h3>
                                            <p>PIZZA HẢI SẢN XỐT MAYONNAISE</p>
                                            <p>Xốt Cà Chua, Phô Mai Mozzaella, Tôm, Mực, Thanh Cua, Hành Tây.
                                            </p>
                                        </div>
                                        <div className="card-footer text-center">
                                            <button className="btn w-100" style = {{backgroundColor: "orange", fontWeight: "bold"}} id = "btn-chon-seafood" onClick={onBtnSeafoodClick}>Chọn</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="card w-100" style={{width: "18rem"}}>
                                        <img src={hawaiiImage} alt = "hawaii" className="card-img-top"/>
                                            <div className="card-body">
                                                <h3>HAWAIIAN</h3>
                                                <p>PIZZA DĂM BÔNG DỨA KIỂU HAWAII</p>
                                                <p>Xốt Cà Chua, Phô Mai Mozzaella, Thịt Dăm Bông, Thơm.
                                                </p>
                                            </div>
                                            <div className="card-footer text-center">
                                                <button className="btn w-100" style = {{backgroundColor: "orange", fontWeight: "bold"}} id = "btn-chon-hawaii" onClick={onBtnHawaiianClick}>Chọn</button>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="card w-100" style={{width: "18rem"}}>
                                        <img src={baconImage} alt = "bacon" className="card-img-top"/>
                                        <div className="card-body">
                                            <h3>CHEESY CHICKEN BACON</h3>
                                            <p>PIZZA GÀ PHÔ MAI THỊT HEO XÔNG KHÓI</p>
                                            <p>Xốt Phô Mai, Thịt Gà, Thịt Heo Muối, Phô Mai Mozzaella, Cà Chua.
                                            </p>
                                        </div>
                                        <div className="card-footer text-center">
                                            <button className="btn w-100" style = {{backgroundColor: "orange", fontWeight: "bold"}} id = "btn-chon-bacon" onClick={onBtnBaconClick}>Chọn</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
};

export default TypeComponent;