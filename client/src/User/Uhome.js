import React from 'react'
import Unavbar from './Unavbar'
import "./uhome.css"
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

const Uhome = () => {
  const navigate=useNavigate()
  const  products=()=>{
 navigate('/uproducts')
  }
  return (
    <div>
      <Unavbar/>
      <div id='uhome'>
        <p style={{color:"rgb(88,79,70)"}}>ss</p>
        <div id='hh'  >
        <h1 className='text-center' style={{fontSize:"70px"}}>A-Z Furnitures</h1>
  <div  style={{display:"flex",justifyContent:"center"}}>
  <hr style={{ height: "5px", width:"250px",color:"rgb(167,149,125)", backgroundColor:"rgb(167,149,125)"}} />
  </div>
              <p className='text-center' style={{fontSize:"30px"}}>Deluxe Furniture At Best Price</p>
        <div style={{display:"flex",justifyContent:"center"}}>
        <button id='bt' className='item-center' onClick={products}>Our Products</button>
        </div>
      </div>
      </div>

      <div>
      <h1 className='text-center' style={{fontSize:"50px"}}>Products</h1>
      <div  style={{display:"flex",justifyContent:"center"}}>
  {/* <hr style={{ height: "px", width:"250px",color:"black", backgroundColor:"black"}} /> */}
  <br/>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <Card style={{ width: '18rem' ,marginRight:"80px"}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://www.at-home.co.in/cdn/shop/products/NewProject.jpg?v=1665487026" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>Sofa</Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' ,marginRight:"80px"}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://i.pinimg.com/1200x/96/38/3d/96383dd834b7806bf345a805c670f7bc.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>Beds</Card.Title>
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem',marginRight:"80px" }}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://cdn.decornation.in/wp-content/uploads/2022/11/02_03_01.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'>Tables</Card.Title>
     
    
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem'}}>
  <Link to='/uproducts'>
    <Card.Img variant="top" src="https://5.imimg.com/data5/ANDROID/Default/2022/4/WC/WM/BY/80466078/product-jpeg.jpg" />
    </Link>
    <Card.Body>
      <Card.Title className='text-center'> Chairs</Card.Title>
    </Card.Body>
  </Card>
</div>

  </div>
      </div>
      <br/>
      <Footer/>
          </div>
  )
}

export default Uhome