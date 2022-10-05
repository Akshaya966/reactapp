import Adminpanel from './Adminpanel';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Login from './Login';
import Register from './Register';
import General from './Forms/General';
import Datatables from './Tables/Datatables';
import Advanced from './Forms/Advanced';
function App() {
  return (
    <div className="App">
      <>

      <Routes>
        <Route path="/" element={<Login/>} />
         <Route path="/Adminpanel" element={<Adminpanel/>} />
         <Route path="/General" element={<General/>} />
         <Route path="/Datatables" element={<Datatables/>} />
         <Route path="/Advanced" element={<Advanced/>} />
         <Route path="/Register" element={<Register/>} />
      </Routes>
      {/* <Adminpanel/> */}
      {/* <Login/> */}
      {/* <General/> */}
      {/* <Datatables/> */}
      {/* <Advanced/> */}
    
     </>
    </div>
  );
}

export default App;
