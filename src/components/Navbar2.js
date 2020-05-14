import React from 'react'
import { FaBars } from 'react-icons/fa'
import '../styles/navbar.scss'

function Navbar2 () {
  return (
    <div className=" navbar columns is-gapless">
      <div className="column panels">
        <FaBars />
      </div>
      <div className="column lists">
        <div className="title-page">
          History Order
        </div>
      </div>
    </div>

  )
}

export default Navbar2