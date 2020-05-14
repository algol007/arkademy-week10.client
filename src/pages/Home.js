import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import CardItem from '../components/CardItem'
// import OrderDetail from '../components/OrderDetail'
// import Receipt from '../components/Receipt'
import '../styles/home.scss'

class Home extends React.Component{
  render () {
    return (
      <div className="home">
        <Navbar />
        <div className="columns is-gapless">
          <Sidebar />
          <div className="column menu-lists">
            <div className="display-menu">
              <CardItem />
            </div>
          </div>
        </div>
        {/* <Receipt /> */}
      </div>
    )
  }
}

export default Home