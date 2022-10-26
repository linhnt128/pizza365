//Import ảnh tại carousel slide
import slide_1 from "../../../assets/images/1.jpg";
import slide_2 from "../../../assets/images/2.jpg";
import slide_3 from "../../../assets/images/3.jpg";
import slide_4 from "../../../assets/images/4.jpg";

//Import module css
import cssModule from "../../../App.module.css";

function IntroduceComponent () {




    return(
            <>
                {/* Title */}
                <div className="col-sm-12 text-left mt-5 pt-5 pb-3">
                    <h1 className = {`font-weight-bold text-center ${cssModule.webText}`}>PIZZA 365</h1>
                    <h3 className = {`font-italic text-center ${cssModule.webText}`}>Truly italian!!!</h3>
                </div>
                {/* Carousel */}
                <div className = "col-sm-12">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={slide_1} alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={slide_2} alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={slide_3} alt="Third slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={slide_4} alt="Fourth slide" />
                            </div>
                        </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                    </div>
                </div>
                {/* <!-- Title Tại sao lại pizza 365 --> */}
                <div className="col-sm-12 text-center p-4 mt-4">
                    <h2 className = {cssModule.webText}><b className="p-2 border-bottom border-warning">Tại sao lại Pizza 365</b></h2>
                </div>
                {/* <!-- Content  --> */}
                <div className="col-sm-12">
                    <div className="row">
                    <div className="col-sm-3 p-4 border-warning" style = {{backgroundColor: "lightgoldenrodyellow"}}>
                        <h3 className="p-2">Đa dạng</h3>
                        <p className="p-2">Số lượng pizza đa dạng, có đầy đủ các loại pizza đang hot nhất hiện nay.</p>
                    </div>
                    <div className="col-sm-3 p-4 border-warning" style = {{backgroundColor: "yellow"}}>
                        <h3 className="p-2">Chất lượng</h3>
                        <p className="p-2">Nguyên liệu sạch 100% rõ nguồn gốc, quy trình chế biến đảm bảo vệ sinh an toàn thực phẩm.</p>
                    </div>
                    <div className="col-sm-3 p-4 border-warning" style = {{backgroundColor: "lightsalmon"}}>
                        <h3 className="p-2">Hương vị</h3>
                        <p className="p-2">Đảm bảo hương vị ngon, độc, lạ mà bạn chỉ có thể trải nghiệm từ Pizza 365.</p>
                    </div>
                    <div className="col-sm-3 p-4 border-warning" style = {{backgroundColor: "orange"}}>
                        <h3 className="p-2">Dịch vụ</h3>
                        <p className="p-2">Nhân viên thân thiện, nhà hàng hiện đại. Dịch vụ giao hàng nhanh chất lượng, tân tiến.</p>
                    </div>
                    </div>
                </div>
            </>
        );
};

export default IntroduceComponent;