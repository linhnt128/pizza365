import "@fortawesome/fontawesome-free/css/all.min.css";



function FooterComponent () {



        return(
            <>
                    <div className="container-fluid p-5" style = {{backgroundColor: "orange", width: "100%"}}>
                        <div className="row text-center">
                            <div className="col-sm-12">
                                <h4 className="m-2 font-weight-bold">Footer</h4>
                                <a href="#home" className="btn btn-dark m-3"><i className="fa fa-arrow-up"></i>&nbsp; To the top</a>
                                <div className="m-2">
                                    <i className="fab fa-facebook w3-hover-opacity" type = "button"></i>
                                    <i className="fab fa-instagram w3-hover-opacity px-1" type = "button"></i>
                                    <i className="fab fa-snapchat w3-hover-opacity" type = "button"></i>
                                    <i className="fab fa-pinterest w3-hover-opacity px-1" type = "button"></i>
                                    <i className="fab fa-snapchat w3-hover-opacity px-1" type = "button"></i>
                                    <i className="fab fa-linkedin w3-hover-opacity px-1" type = "button"></i>
                                </div>
                                <h5 className = "font-weight-bold">Powered by DEVCAMP</h5>
                            </div>
                        </div>
                    </div>
            </>
        );
};

export default FooterComponent;