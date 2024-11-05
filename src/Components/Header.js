import React, { Component } from 'react'
import './Style/header.css'
 class Header extends Component {
  render() {
    return (
      <div>
        <div className='Header'>
          <div>
            <img src="./images/logo.png" alt=''/>
          </div>
        <h1>AMAKURU AGEZWEHO RUGALIKA</h1>
        </div>
        <div className='subHeader' style={{
          height:`151px`,
          backgroundSize: `cover`,
          backgroundImage:`url("./images/Sectorim.jpg")`
        }}>
          <h1>WELCOME TO RUGALIKA SECTOR</h1>
        </div>
      </div>
    )
  }
}

export default Header
