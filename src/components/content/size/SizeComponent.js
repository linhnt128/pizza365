//Import module css
import cssModule from "../../../App.module.css";

//Import react, redux
import { useDispatch, useSelector } from "react-redux";


//Import action types
import { selectPizzaSmall, selectPizzaMedium, selectPizzaLarge } from "../../actions/SelectPizzaSizeActionTypes";


function SizeComponent () {

    const dispatch = useDispatch();

    //Lấy giá trị state của pizza size
    const { kichCo, duongKinh, suon, salad, soLuongNuoc, thanhTien } = useSelector((reduxData) => reduxData.SelectPizzaSizeReducers);
    console.log("kichCo state: ")
    console.log(kichCo);
    console.log(duongKinh);
    console.log(suon);
    console.log(salad);
    console.log(soLuongNuoc);
    console.log(thanhTien);

    //Khai báo hàm cho nút chọn pizza size
    //Small
    const onBtnSmallClick = () => {
        console.log("Nút chọn pizza size small được click!");
        dispatch(selectPizzaSmall());
        console.log(selectPizzaSmall());
    };
    //Medium
    const onBtnMediumClick = () => {
        console.log("Nút chọn pizza size medium được click!");
        dispatch(selectPizzaMedium());
        console.log(selectPizzaMedium());
    };
    //Large
    const onBtnLargeClick = () => {
        console.log("Nút chọn pizza size large được click!");
        dispatch(selectPizzaLarge());
        console.log(selectPizzaLarge());
    };

    

        return(
            <>
                {/* <!-- Title Pizza Plans --> */}
                    <div id="plans" className="row">
                        {/* <!-- Title  --> */}
                        <div className="col-sm-12 text-center p-4 mt-4">
                            <h2 className = {cssModule.webText}><b className="p-1 border-bottom border-warning">Chọn size pizza</b></h2>
                            <p><span className="p-2 text-warning">Chọn combo pizza phù hợp với nhu cầu của bạn!</span></p>
                        </div>
                        {/* <!-- Plans --> */}
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="card">
                                        <div className="card-header text-dark text-center" style = {{backgroundColor: "orange"}}>
                                            <h3>S (small)</h3>
                                        </div>
                                        <div className="card-body text-center">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">Đường kính: <b>20cm</b></li>
                                                <li className="list-group-item">Sườn nướng: <b>2</b></li>
                                                <li className="list-group-item">Salad: <b>200g</b></li>
                                                <li className="list-group-item">Nước ngọt: <b>2</b></li>
                                                <li className="list-group-item">
                                                <h1><b>150.000</b></h1> VNĐ
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="card-footer text-center">
                                            <button className="btn w-100" style = {{backgroundColor: "orange", fontWeight: "bold"}} id = "btn-small-click" onClick={onBtnSmallClick}>Chọn</button>
                                        </div>
                                    </div>
                                </div>
                            <div className="col-sm-4">
                                <div className="card">
                                    <div className="card-header text-dark text-center" style = {{backgroundColor: "orange"}}>
                                        <h3>M (medium)</h3>
                                </div>
                                <div className="card-body text-center">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Đường kính: <b>25cm</b></li>
                                        <li className="list-group-item">Sườn nướng: <b>4</b></li>
                                        <li className="list-group-item">Salad: <b>300g</b></li>
                                        <li className="list-group-item">Nước ngọt: <b>3</b></li>
                                        <li className="list-group-item">
                                            <h1><b>200.000</b></h1> VNĐ
                                        </li>
                                    </ul>
                                </div>
                                    <div className="card-footer text-center">
                                        <button className="btn w-100" style = {{backgroundColor: "orange", fontWeight: "bold"}} id = "btn-medium-click" onClick={onBtnMediumClick}>Chọn</button>
                                    </div>
                                </div>
                            </div>
                                <div className="col-sm-4">
                                    <div className="card">
                                        <div className="card-header text-dark text-center" style = {{backgroundColor: "orange"}}>
                                            <h3>L (large)</h3>
                                        </div>
                                    <div className="card-body text-center">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Đường kính: <b>30cm</b></li>
                                            <li className="list-group-item">Sườn nướng: <b>8</b></li>
                                            <li className="list-group-item">Salad: <b>500g</b></li>
                                            <li className="list-group-item">Nước ngọt: <b>4</b></li>
                                            <li className="list-group-item">
                                                <h1><b>250.000</b></h1> VNĐ
                                            </li>
                                        </ul>
                                    </div>
                                        <div className="card-footer text-center">
                                            <button className="btn w-100" style = {{backgroundColor: "orange", fontWeight: "bold"}} id = "btn-large-click" onClick={onBtnLargeClick}>Chọn</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <button className="btn w-100" style = {{backgroundColor: "orange", fontWeight: "bold"}} onClick={() => console.log(kickCo)}>Test</button>         */}
            </>
        );
};

export default SizeComponent;