import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "./image/image1.png"
import img2 from "./image/image2.png"
import img3 from "./image/Asset2.png"
import { HiSearch } from "react-icons/hi";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
const Page = () => {
  return (
    <div className='App'>
<div className='row'>
  <div className='col' >
  <AiOutlineMail/>info@gmail.com
  </div>
  <div className='col'>
    <img src={img3} alt="" />
  </div>
  <div className='col'>
  <AiOutlineShopping/>Shopping cart
  </div>
</div>

      <div className='container'>
          <Navbar bg="light" expand="lg">
      <Container fluid>
        <div>
        {/* <Navbar.Brand href="#"> </Navbar.Brand> */}
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Jwellary</Nav.Link>
            <Nav.Link href="#action2">Accesories</Nav.Link>
            <Nav.Link href="#action3">Collection</Nav.Link>
            <Nav.Link href="#action4">Components</Nav.Link>
            <Nav.Link href="#action5">Outfit</Nav.Link>
            <Nav.Link href="#action6">Brands</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Our Catalog"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success"><HiSearch/></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>



  )
}

export default Page