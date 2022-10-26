//import @mui
import {
    Modal,
    Container,
    Grid,
    TextField, 
    Typography,
    Box,
    Button,
    FormLabel,
    Snackbar,
    Alert
} from "@mui/material";

//import react
import { useState } from "react";

//Import react, redux
import { useSelector } from "react-redux";

//import constants
import { BASE_URL_ORDERS, BASE_URL_VOUCHERS } from "../../constants/BaseUrlApi";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


function SendOrderComponent ({fullnameProps, emailProps, phoneNumberProps, addressProps, maGiamGiaProps, messageProps, refreshPageProps}) {

    // const dispatch = useDispatch();

    //Lấy giá trị state của pizzaSize, pizzaType, drinkSelected, creat new order
    const { kichCo, duongKinh, suon, salad, soLuongNuoc, thanhTien } = useSelector((reduxData) => reduxData.SelectPizzaSizeReducers);
    const { pizzaType } = useSelector((reduxData) => reduxData.SelectPizzaTypeReducers);
    const { drinkSelected } = useSelector((reduxData) => reduxData.DrinkReducers);
    const { voucher } = useSelector((reduxData) => reduxData.VoucherReducers);
    // const { newOrder } = useSelector((reduxData) => reduxData.CreateOrderReducers);
    
    console.log("voucher state:");
    console.log(voucher);

    //Xử lý modal hiển thị thông tin đơn hàng
    const [openOrderInfoModal, setOpenOrderInfoModal] = useState(false);
    //Xử lý đóng modal
    const closeOrderInfoModal = () => setOpenOrderInfoModal(false);

    //Xử lý modal hiển thị xác nhận đơn hàng
    const [confirmOrderModal, setConfirmOrderModal] = useState(false);
    //Xử lý đóng modal
    const closeConfirmOrderModal = () => setConfirmOrderModal(false);

    //Khai báo state, useState cho alert
    const [alert, setAlert] = useState(false);
    const [textAlert, setTextAlert] = useState("");
    const [statusAlert, setStatusAlert] = useState("");

    //Khai báo state, useState cho orderCode
    const [orderCodeInput, setOrderCodeInput] = useState("");

    //Khai báo hàm đóng alert
    const handleCloseAlert = () => {
        setAlert(false);
    };

    const fetchApiVoucher = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    };

    const fetchApiConfirmOrder = async (url, body) => {
        const res = await fetch(url, body);
        const data = await res.json();
        return data;
    };


    //Khai báo hàm xử lý sự kiện cho nút gửi đơn
    const onBtnSendOrder = () => {
        console.log("Nút gửi đơn được click!");

        //B1: Khai báo đối tượng chứa dữ liệu
        var orderObject = {
                fullname: fullnameProps,
                email: emailProps,
                phone: phoneNumberProps,
                address: addressProps,
                maGiamGia: maGiamGiaProps,
                message: messageProps,
                thanhTien: thanhTien,
                soLuongNuoc: soLuongNuoc,
                kichCo: kichCo,
                duongKinh: duongKinh,
                suon: suon,
                salad: salad,
                loaiPizza: pizzaType,
                loaiNuocUong: drinkSelected,
                phanTramGiamGia: -1,
                phaiThanhToan: -1
        };

        
        //B2: Validate dữ liệu
        var validateOrder = checkOrder(orderObject);
        if(validateOrder) {
            console.log(validateOrder);
            // Kiểm tra thông tin đơn hàng trên console log
            console.log("Thông tin input:");
            console.log(orderObject);

            //B3: Gọi API lấy thông tin mã voucher theo maGiamGia nếu user có nhập
            if(orderObject.maGiamGia !== "") {
                fetchApiVoucher(BASE_URL_VOUCHERS + orderObject.maGiamGia)
                    .then((data) => {
                        console.log(data);
                        //Tính số tiền phải thanh toán sau khi nhập maGiamGia
                        orderObject.phanTramGiamGia = data.phanTramGiamGia;
                        orderObject.phaiThanhToan = orderObject.thanhTien * (1 - orderObject.phanTramGiamGia / 100);
                        console.log("Thông tin order:");
                        console.log(orderObject);
                        setStatusAlert("success");
                        setAlert(true);
                        setTextAlert("Thông tin đơn hàng hợp lệ!");
                        setOpenOrderInfoModal(true); //hiển thị modal
                    })
                    .catch((error) => console.error(error.message))
            } else {
                //Phần trăm giảm giá = 0
                orderObject.phanTramGiamGia = 0;
                orderObject.phaiThanhToan = orderObject.thanhTien * (1 - orderObject.phanTramGiamGia / 100);
                console.log("Thông tin order:");
                console.log(orderObject);
                setStatusAlert("success");
                setAlert(true);
                setTextAlert("Thông tin đơn hàng hợp lệ!");
                setOpenOrderInfoModal(true); //hiển thị modal    
            }
        };
    };

    //Khai báo hàm validate thông tin đơn hàng
    const checkOrder = paramOrderObject => {
        if(paramOrderObject.kichCo === "") {
            setStatusAlert("error");
            setAlert(true);
            setTextAlert("Bạn chưa chọn kích cỡ pizza!");
            return false;
        }
        if(paramOrderObject.loaiPizza === "") {
            setStatusAlert("error");
            setAlert(true);
            setTextAlert("Bạn chưa chọn loại pizza!");
            return false;
        }
        if(paramOrderObject.loaiNuocUong === "") {
            setStatusAlert("error");
            setAlert(true);
            setTextAlert("Bạn chưa chọn loại nước uống!");
            return false;
        }
        if(paramOrderObject.fullname === "") {
            setStatusAlert("error");
            setAlert(true);
            setTextAlert("Bạn chưa nhập tên!");
            return false;
        }
        if(paramOrderObject.email === "") {
            setStatusAlert("error");
            setAlert(true);
            setTextAlert("Bạn chưa nhập email!");
            return false;
        }
        if(paramOrderObject.phone === "") {
            setStatusAlert("error");
            setAlert(true);
            setTextAlert("Bạn chưa nhập số điện thoại!");
            return false;
        }
        if(paramOrderObject.address === "") {
            setStatusAlert("error");
            setAlert(true);
            setTextAlert("Bạn chưa nhập địa chỉ!");
            return false;
        }

        return true;
    }


    //Khai báo hàm xử lý khi ấn xác nhận đơn, gọi API tạo đơn hàng mới
    const onBtnConfirmOrder = () => {
        //Đóng modal thông tin đơn hàng
        closeOrderInfoModal();

        //Hiển thị modal xác nhận đơn hàng
        setConfirmOrderModal(true);

        // var confirmOrderObject = {
        //         fullname: fullnameProps,
        //         email: emailProps,
        //         phone: phoneNumberProps,
        //         address: addressProps,
        //         maGiamGia: maGiamGiaProps,
        //         message: messageProps,
        //         thanhTien: thanhTien,
        //         soLuongNuoc: soLuongNuoc,
        //         kichCo: kichCo,
        //         duongKinh: duongKinh,
        //         suon: suon,
        //         salad: salad,
        //         loaiPizza: pizzaType,
        //         loaiNuocUong: drinkSelected
        // };

        const body = {
            method: "POST",
            body: JSON.stringify({
                fullname: fullnameProps,
                email: emailProps,
                phone: phoneNumberProps,
                address: addressProps,
                maGiamGia: maGiamGiaProps,
                message: messageProps,
                thanhTien: thanhTien,
                soLuongNuoc: soLuongNuoc,
                kichCo: kichCo,
                duongKinh: duongKinh,
                suon: suon,
                salad: salad,
                loaiPizza: pizzaType,
                loaiNuocUong: drinkSelected
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }
        fetchApiConfirmOrder(BASE_URL_ORDERS, body)
            .then((data) => {
                console.log(data);
                setOrderCodeInput(data.orderCode);
                setStatusAlert("success");
                setAlert(true);
                setTextAlert("Tạo đơn hàng thành công!");
                refreshPageProps();
            })
            .catch((error) => console.error(error.message))
    }

    return(
        <>
            <button className="btn w-100" style = {{backgroundColor: "orange", fontWeight: "bold"}} id = "btn-gui-don" onClick={onBtnSendOrder}>Gửi</button>
            
            {/* Alert */}
            <Snackbar
                open={alert}
                autoHideDuration={3000}
                onClose={handleCloseAlert} 
            >
            <Alert onClose={handleCloseAlert} severity={statusAlert}>{textAlert}</Alert>
            </Snackbar>
            
            {/* Modal Thông tin đơn hàng*/}
            <Modal
            open={openOrderInfoModal}
            onClose={closeOrderInfoModal}
            aria-labelledby="modal-modal-order"
            aria-describedby="modal-modal-create-order"
            >
                <Container fullWidth>
                        <Box sx={style}>
                            <Typography variant="h5" component="h2">
                                <b>Thông Tin Đơn Hàng</b>
                            </Typography>
                            <Grid container mt={2}>
                                <Grid item xs={3} sm={3} md={3} lg={3}>
                                    <FormLabel>Họ và tên</FormLabel>
                                </Grid>
                                <Grid item xs={3} sm={3} md={3} lg={3}>
                                    <TextField fullWidth variant="outlined" label="Họ và tên" value={fullnameProps} disabled></TextField>
                                </Grid>
                                <Grid item xs={2} sm={2} md={2} lg={2} textAlign="center">
                                    <FormLabel>Email</FormLabel>
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <TextField fullWidth variant="outlined" label="Email" value={emailProps} disabled></TextField>
                                </Grid>
                            </Grid>
                            <Grid container mt={1}>
                                <Grid item xs={3} sm={3} md={3} lg={3}>
                                    <FormLabel>Số Điện Thoại</FormLabel>
                                </Grid>
                                <Grid item xs={9} sm={9} md={9} lg={9}>
                                    <TextField fullWidth variant="outlined" label="Số Điện Thoại" value={phoneNumberProps} disabled></TextField>
                                </Grid>
                            </Grid>
                            <Grid container mt={1}>
                                <Grid item xs={3} sm={3} md={3} lg={3}>
                                    <FormLabel>Địa Chỉ</FormLabel>
                                </Grid>
                                <Grid item xs={9} sm={9} md={9} lg={9}>
                                    <TextField fullWidth variant="outlined" label="Địa Chỉ" value={addressProps} disabled></TextField>
                                </Grid>
                            </Grid>
                            <Grid container mt={1}>
                                <Grid item xs={3} sm={3} md={3} lg={3}>
                                    <FormLabel>Mã Giảm Giá</FormLabel>
                                </Grid>
                                <Grid item xs={3} sm={3} md={3} lg={3}>
                                    <TextField fullWidth variant="outlined" label="Mã Giảm Giá" value={maGiamGiaProps} disabled></TextField>
                                </Grid>
                                <Grid item xs={2} sm={2} md={2} lg={2} textAlign="center">
                                    <FormLabel>Thành Tiền</FormLabel>
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <TextField fullWidth variant="outlined" label="Thành Tiền" value={thanhTien} disabled></TextField>
                                </Grid>
                            </Grid>
                            <Grid container mt={1}>
                                <Grid item xs={3} sm={3} md={3} lg={3}>
                                    <FormLabel>Kích cỡ</FormLabel>
                                </Grid>
                                <Grid item xs={3} sm={3} md={3} lg={3}>
                                    <TextField fullWidth variant="outlined" label="Combo" value={kichCo} disabled></TextField>
                                </Grid>
                                <Grid item xs={2} sm={2} md={2} lg={2} textAlign="center">
                                    <FormLabel>Đồ Uống</FormLabel>
                                </Grid>
                                <Grid item xs={4} sm={4} md={4} lg={4}>
                                    <TextField fullWidth variant="outlined" label="Đồ Uống" value={drinkSelected} disabled></TextField>
                                </Grid>
                            </Grid>
                            <Grid container mt={1}>
                                <Grid item xs={3} sm={3} md={3} lg={3}>
                                    <FormLabel>Loại Pizza</FormLabel>
                                </Grid>
                                <Grid item xs={9} sm={9} md={9} lg={9}>
                                    <TextField fullWidth variant="outlined" label="Loại Pizza" value={pizzaType} disabled></TextField>
                                </Grid>
                            </Grid>
                            <Grid container mt={2}>
                                <Grid item xs={3} sm={3} md={3} lg={3}>
                                    <FormLabel>Lời Nhắn</FormLabel>
                                </Grid>
                                <Grid item xs={9} sm={9} md={9} lg={9}>
                                    <TextField fullWidth variant="outlined" label="Lời Nhắn" value={messageProps} disabled></TextField>
                                </Grid>
                            </Grid>
                            <Grid container mt={1}>
                                <Grid item xs={12} textAlign="end">
                                    <Button color="success" variant="contained" className="me-1" onClick={onBtnConfirmOrder}>Xác nhận</Button>
                                    <Button color="error" variant="contained" onClick={closeOrderInfoModal}>Cancel</Button>
                                </Grid>
                            </Grid>
                        </Box>
                </Container>
            </Modal>

            {/* Modal xác nhận tạo đơn hàng */}
            <Modal
                open={confirmOrderModal}
                onClose={closeConfirmOrderModal}
                aria-labelledby="modal-modal-confirm-order"
                aria-describedby="modal-modal-confirm-order"
                autoHideDuration={3000}
            >
                <Box sx={style}>
                        <Typography variant="h6" component="h2">
                            <b>Cảm ơn bạn đã đặt hàng tại Pizza 365. Mã đơn hàng của bạn là:</b>
                        </Typography>
                        <Grid container mt={2}>
                            <Grid item xs={4} sm={4} md={4} lg={4}>
                                <FormLabel>Mã đơn hàng:</FormLabel>
                            </Grid>
                            <Grid item xs={8} sm={8} md={8} lg={8}>
                                <TextField fullWidth variant="outlined" value={orderCodeInput} disabled></TextField>
                                
                            </Grid>
                        </Grid>
                </Box>
            </Modal>
        </>
    );
};


export default SendOrderComponent;