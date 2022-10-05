import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Card from "react-bootstrap/Card";
// import CardGroup from "react-bootstrap/CardGroup";
import axios from "axios";
import Crd from "./Crd";

function App() {
  
  const [main, setMain] = useState([]);
  // console.log(main);
  useEffect(() => {
    // const axios = require("axios");
    axios.get("https://dummyjson.com/products").then(function (response) {
      // console.log(response.data.products);
      setMain(response.data.products);
    });
  }, []);



  return (
    <div className="">
      <div className="App-header">
        <div className="container">
          <div className="row justify-content-center">
            {
            main.map((val, i) => {

            return <Crd value={val} />


              
              // <div className="col-lg-4 col-md-6 col-12" key={i}>

              //   {/* <Card style={{ width: "18rem" }} className="f">
              //     <Card.Img variant="top" src={item.images} />
              //     <Card.Body>
              //       <Card.Title>
              //         <div className="text-white text-bg-dark p-3">
              //           {item.title}
              //         </div>
              //       </Card.Title>
              //       <Card.Text>
              //         <div className="text-bg-secondary p-2">
              //           <h2 className="text-light bg-dark">
              //             category:-{item.category}
              //           </h2>
              //           <hr />
              //           <h2 className="text-light bg-dark">
              //             {item.description}
              //           </h2>
              //           <hr />
              //           <h2 className="text-light bg-dark">{item.title}</h2>
              //           <hr />
              //           <h2 className="text-light bg-dark">
              //             {item.price}$Only
              //           </h2>
              //           <hr />
              //           <h2 className="text-light bg-dark">
              //             discount:-{item.discountPercentage}%Off
              //           </h2>
              //           <hr />
              //           <h2 className="text-light bg-dark">
              //             stock:-{item.stock}
              //           </h2>
              //           <hr />
              //           <h2 className="text-light bg-dark">
              //             rating:-{item.rating}
              //           </h2>
              //         </div>
              //       </Card.Text>
              //     </Card.Body>
              //     <Card.Footer>
              //       <small className="text-muted ">
              //         Last updated 3 mins ago
              //       </small>
              //     </Card.Footer>
              //   </Card> */}


              // </div>;
            })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
