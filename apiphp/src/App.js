import "./App.css";
import React, { useEffect, useState } from "react";
const axios = require("axios");

function App() {
  const [value, setvalue] = useState([]);

  function del(i) {
    setvalue(value.filter((item)=>{return(item.id!==i)}))
  }

  useEffect(() => {
    axios
      .post("http://localhost/php/reactapi.php")
      .then(function (response) {
        console.log(response);
        setvalue(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="container">
        <table border='1'>
          <tr>
            <th>sr.no</th>
            <th>name</th>
            <th>email</th>
            <th>password</th>
            <th>Delete</th>
          </tr>
          {value.map((item) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.pass}</td>
                {/* <td><input type="button" value="Delete" onClick={()=>{del(item.id)}} /></td> */}
                <td><input type="button" value="Delete" onClick={()=>{del(item.id)}} /></td>

              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default App;
