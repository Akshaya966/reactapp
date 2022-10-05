import './App.css';
import { Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Adminpanel from './Adminpanel';
import Login from './Login';
import Register from './Register';
import General from './Forms/General';
import Datatables from './Tables/Datatables';
import Advanced from './Forms/Advanced';
import Productpage from './Productpage';
import Page from './Page';


function App() {
  return ( 
    <div className="">
      <Routes>
        {/* <Route path="/" element={<Page/>} /> */}
        {/* <Route path="/" element={<Productpage/>} /> */}
        <Route path="/" element={<Login/>} />
        <Route path="/Adminpanel" element={<Adminpanel/>} />
        <Route path="/Datatables" element={<Datatables/>} />
        <Route path="/General" element={<General />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Advanced" element={<Advanced />} />
      </Routes>
    </div>
  );
}

export default App;
