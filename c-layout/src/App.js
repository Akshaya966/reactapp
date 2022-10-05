import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './Container';
import Footer from './Footer';
import Header from './Header';
import Slider from './Slider';
import {Route,Routes} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Header/>} />
      <Route path="/about" element={<Footer/>}/>
      
     <Route path="/contact" element={<Slider/>}/>
      </Routes>
      {/* <Header/>
      <Slider/>
      <Container/>
      <Footer/> */}
      <div class="container">
                <nav class="d-flex justify-between align-items-center">
                    <ul class="main_menu">
                        <li class="active"><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Page</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div class="search">
                        <i class="fa-solid fa-search"></i>
                    </div>
                </nav>
            </div>
            <div>
              <img src={require("./image/logo.png")} alt="" className='logo'/>
            </div>

    </div>
  );
}

export default App;
