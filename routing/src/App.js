import './App.css';
import About from "./About";
import Home from "./Home";
import { Routes, Route} from "react-router-dom";

function App() {
  return (

    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
