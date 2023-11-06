import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer style={{ backgroundColor: 'black', padding: '20px', textAlign: 'center' }}>
        <div style={{display:"flex",justifyContent:"center"}}>
        <button id='bt' className='item-center' style={{height:"50px"}} >Contact us</button>
        </div>
        <p style={{color:"white"}}>It is a platform where u meet your taste and Standars,we beleive in Quality.</p>
            <p  style={{ color: 'white', marginBottom: '0' }}>Call At: XXXXXXXXXX</p>
      <p style={{ color: 'white', marginBottom: '0' }}>
      Copyright  &copy; {new Date().getFullYear()} By A-Z Furnitures. <br/>All Rights Reserved.
      </p>
    </footer>
    </div>
  )
}

export default Footer