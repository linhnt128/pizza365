import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

//import components
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import ContentComponent from "./components/content/ContentComponent";




function App() {
  alert("123");
  alert("999")
  return (
    <div>
        <div className="container-fluid">
          <div className="row">
              <div className="col-12">
                {/* <!-- Header */}
                {/* Navbar menu */}
                <HeaderComponent/>
              </div>
          </div>
        </div>
        {/* Body */}
        <div className = "container">
          <div className = "row">
            <div className = "col-sm-12">
              <div className = "row">
                {/* Content */}
                <ContentComponent/>
              </div>
            </div>
          </div>
      </div>
        {/* <!-- Footer --> */}
        <FooterComponent/>
    </div>
  );
}

export default App;
