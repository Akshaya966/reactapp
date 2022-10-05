import react,{ useState } from 'react';
import './App.css';

function App() {
  const[result,setresult]=useState("");
  const clickhandler =(event)=> {
    setresult(result.concat(event.target.value))
  }
  const clrscr  =()=>{
    setresult("");
  }
  const total=()=>{
    setresult(eval(result).toString())
  }
  return (
    <div className="calc">
      <input type="text" placeholder='0' id="answer" value={result}/>
      <input type="button" value="9" className="button" onClick={clickhandler}/>
      <input type="button" value="8" className="button" onClick={clickhandler}/>
      <input type="button" value="7" className="button" onClick={clickhandler}/>
      <input type="button" value="6" className="button" onClick={clickhandler}/>
      <input type="button" value="5" className="button" onClick={clickhandler}/>
      <input type="button" value="4" className="button" onClick={clickhandler}/>
      <input type="button" value="3" className="button" onClick={clickhandler}/>
      <input type="button" value="2" className="button" onClick={clickhandler}/>
      <input type="button" value="1" className="button" onClick={clickhandler}/>
      <input type="button" value="0" className="button" onClick={clickhandler}/>
      <input type="button" value="." className="button" onClick={clickhandler}/>
      <input type="button" value="+" className="button" onClick={clickhandler}/>
      <input type="button" value="-" className="button" onClick={clickhandler}/>
      <input type="button" value="*" className="button" onClick={clickhandler}/>
      <input type="button" value="/" className="button" onClick={clickhandler}/>
      <input type="button" value="%" className="button" onClick={clickhandler}/>
      <input type="button" value="clear" className="button btn" onClick={clrscr}/>
      <input type="button" value="=" className="button btn" onClick={total}/>

    </div>
  );
}

export default App;
