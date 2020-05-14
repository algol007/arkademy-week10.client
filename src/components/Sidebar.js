import React from 'react'
import { FaPlus, FaUtensils, FaClipboardList, FaSignOutAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AddItem from '../components/AddItem'
import '../styles/sidebar.scss'

class Sidebar extends React.Component{
  addProduct() {
    const add = document.querySelector('.modal-item')
    add.classList.toggle('is-active')
  }

  render() {
    return (
      <div className="column menu-panel">
        <Link to="/">
          <div className="menu-home"><FaUtensils /></div>
        </Link>
        <Link to="/history">
          <div className="menu-history"><FaClipboardList /></div></Link>
        <div className="add-menu" onClick={() => this.addProduct()}>
          <FaPlus />
        </div>
        <Link to="/auth/login">
          <div className="sign-out"><FaSignOutAlt /></div>
        </Link>
        <AddItem />
      </div>
    )
  }
}

// class Sidebar extends React.Component{
//   render() {
//     return (
//       <h1>Sidebar</h1>
//     )
//   }
// }

export default Sidebar