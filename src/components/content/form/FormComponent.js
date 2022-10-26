//Import module css
import cssModule from "../../../App.module.css";
import SendOrderComponent from "./ButtonSendOrderComponent";

//Import action types
import { 
    fullNameInput,
    emailInput,
    phoneNumberInput, 
    addressInput, 
    maGiamGiaInput, 
    messageInput 
} from "../../actions/OrderFormActionTypes";

//Import react, redux
import { useDispatch, useSelector } from "react-redux";



function FormComponent ({refreshPageProps}) {

    const dispatch = useDispatch();

    //Lấy giá trị state của order form
    const { fullname, email, phone, address, maGiamGia, message } = useSelector((reduxData) => reduxData.OrderFormReducers);


    //Khai báo hàm hiển thị khi users nhập thông tin
    const fullNameChangeHandler = (event) => {
        dispatch(fullNameInput(event.target.value));
    };

    const emailChangeHandler = (event) => {
        dispatch(emailInput(event.target.value));
    };

    const phoneChangeHandler = (event) => {
        dispatch(phoneNumberInput(event.target.value));
    };

    const addressChangeHandler = (event) => {
        dispatch(addressInput(event.target.value));
    };

    const maGiamGiaChangeHandler = (event) => {
        dispatch(maGiamGiaInput(event.target.value));
    };

    const messageChangeHandler = (event) => {
        dispatch(messageInput(event.target.value));
    };



    return(
            <>
                {/* <!-- Title Gửi đơn hàng --> */}
                    <div className="col-sm-12 text-center p-4 mt-4">
                        <h2 className = {cssModule.webText}><b className="p-2 border-bottom border-warning">Gửi đơn hàng</b></h2>
                    </div>    
                    {/* <!-- Content Input form gửi đơn hàng --> */}
                    <div className="col-sm-12 mb-5">
                            <div className="form-group">
                                <label htmlFor = "name" className="pb-2">Tên</label>
                                <input className = "form-control" type = "text" id = "inp-name" placeholder = "Nhập tên" value={fullname} onChange={fullNameChangeHandler}/>
                            </div>
                            <div className="form-group py-4">
                                <label htmlFor = "email" className="pb-2">Email</label>
                                <input className = "form-control" type = "text" id = "inp-email" placeholder = "Nhập email" value={email} onChange={emailChangeHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor = "phone-number" className="pb-2">Số điện thoại</label>
                                <input className = "form-control" type = "text" id = "inp-phone" placeholder = "Nhập số điện thoại" value={phone} onChange={phoneChangeHandler}/>
                            </div>
                            <div className="form-group py-4">
                                <label htmlFor = "address" className="pb-2">Địa chỉ</label>
                                <input className = "form-control" type = "text" id = "inp-address" placeholder = "Nhập địa chỉ" value={address} onChange={addressChangeHandler}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor = "voucher-id" className="pb-2">Mã giảm giá</label>
                                <input className = "form-control" type = "text" id = "inp-voucher-id" placeholder = "Nhập mã giảm giá" value={maGiamGia} onChange={maGiamGiaChangeHandler}/>
                            </div>
                            <div className="form-group py-4">
                                <label htmlFor = "message" className="pb-2">Lời nhắn</label>
                                <input className = "form-control" type = "text" id = "inp-message" placeholder = "Nhập lời nhắn" value={message} onChange={messageChangeHandler}/>
                            </div>
                            {/* Submit button */}
                            <SendOrderComponent fullnameProps={fullname} emailProps={email} phoneNumberProps={phone} 
                            addressProps={address} maGiamGiaProps={maGiamGia} messageProps={message} refreshPageProps={refreshPageProps}
                            />
                    </div>     
            </>
        );
};

export default FormComponent;