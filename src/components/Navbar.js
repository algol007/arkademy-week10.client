import React from 'react'
import { FaBars, FaSearch, FaShoppingCart } from 'react-icons/fa'
import '../styles/navbar.scss'

function Navbar () {
  return (
    <div className=" navbar columns is-gapless">
      <div className="column panels">
        <FaBars />
      </div>
      <div className="column lists">
        <div className="title-page">
          Food Items
        </div>
        <div className="search">
          <div className="search-icon">
            <FaSearch />
          </div>
          <div className="search-item">
            <input type="text" className="search-input" />
          </div>
        </div>
      </div>
      <div className="column is-4 order">
        <FaShoppingCart />
      </div>
    </div>

  )
}

export default Navbar