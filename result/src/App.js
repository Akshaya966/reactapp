import { useState } from 'react';
import './App.css';
function App() {
  const [name,setname]=useState("");
  const [roll,setroll]=useState("");
  const[s1,sets1]=useState("");
  const[s2,sets2]=useState("");
  const[s3,sets3]=useState("");
  const[s4,sets4]=useState("");
  const[s5,sets5]=useState("");
  // const[number,setnumber]=useState("");
  const[arr,setArr]=useState([]);
  
  var result;
  var total=parseInt(s1)+parseInt(s2)+parseInt(s3)+parseInt(s4)+parseInt(s5);
  const btnhandler=()=>{
    const obj={
      'name':name,
      'roll':roll,
      's1':s1,
      's2':s2,
      's3':s3,
      's4':s4,
      's5':s5,
      'total':total,

    }
    setArr([...arr,obj])
    if (s1 > 35) {
      document.getElementById("p1").innerHTML = s1;
    } else {
      document.getElementById("p1").innerHTML = s1;
      document.getElementById("p1").style.color = "red";
    }
    if (s2 > 35) {
      document.getElementById("p2").innerHTML = s2;
    } else {
      document.getElementById("p2").innerHTML = s2;
      document.getElementById("p2").style.color = "red";
    }
    if (s3 > 35) {
      document.getElementById("p3").innerHTML = s3;
    } else {
      document.getElementById("p3").innerHTML = s3;
      document.getElementById("p3").style.color = "red";
    }
    if (s4 > 35) {
      document.getElementById("p4").innerHTML = s4;
    } else {
      document.getElementById("p4").innerHTML = s4;
      document.getElementById("p4").style.color = "red";
    }
    if (s5 > 35) {
      document.getElementById("p5").innerHTML = s5;
    } else {
      document.getElementById("p5").innerHTML = s5;
      document.getElementById("p5").style.color = "red";
    }


  }
  return (
    <div className="">
     name:<input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}/><br/>
     roll no:<input type="text" value={roll} onChange={(e)=>{setroll(e.target.value)}}/><br/>
     s1:<input type="text" value={s1} onChange={(e)=>{sets1(e.target.value)}}/><br/>
     s2:<input type="text" value={s2} onChange={(e)=>{sets2(e.target.value)}}/><br/>
     s3:<input type="text" value={s3} onChange={(e)=>{sets3(e.target.value)}}/><br/>
     s4:<input type="text" value={s4} onChange={(e)=>{sets4(e.target.value)}}/><br/>
     s5:<input type="text" value={s5} onChange={(e)=>{sets5(e.target.value)}}/><br/>
      <input type="button" value={"click here"} onClick={btnhandler} /><br/>
      <table border="2px">
          <tr>
            <th>Name</th>
            <th>roll</th>
            <th>s1</th>
            <th>s2</th>
            <th>s3</th>
            <th>s4</th>
            <th>s5</th>
            <th>total</th>
            <th>result</th>
          </tr>
          
            {
              arr.map((item)=>{
                return(
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.roll}</td>
                    <td>{item.s1}</td>
                    <td>{item.s2}</td>
                    <td>{item.s3}</td>
                    <td>{item.s4}</td>
                    <td>{item.s5}</td>
                    <td>{item.total}</td>
                    <td style="{s1>=34 &&s2>=34 && s3>=34 && s4>=34 && s5>=34?green:red }">
{s1>=34 &&s2>=34 && s3>=34 && s4>=34 && s5>=34?"pass":"fail" }
                    </td>
                    
                    
                  </tr>
                )
              })
            }
          
      </table>
    </div>
  );
}

export default App;
