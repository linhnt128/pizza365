//Import module css
import cssModule from "../App.module.css";

function HeaderComponent () {



        return (
            <>
                <nav className={`navbar fixed-top navbar-expand-lg navbar-light mb-2 ${cssModule.navBar}`}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav nav-fill w-100">
                            <li className="nav-item active">
                                <a className="nav-link active" href="#home"> Trang chủ <span className="sr-only"></span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#combo"> Combo </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#pizza-type"> Loại pizza </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#send-order"> Gửi đơn hàng </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </>
        );
};

export default HeaderComponent;