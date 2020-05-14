import React from 'react'
import Navbar2 from '../components/Navbar2'
import Sidebar from '../components/Sidebar'
import TableOrder from '../components/TableOrder'
import '../styles/history.scss'

class History extends React.Component{
  render () {
    return (
      <div className="history">
        <Navbar2 />
        <div className="columns is-gapless">
          <Sidebar />
          <div className="column menu-lists">
            <div className="display-menu">
              <div className="card-info">
                <div className="card card-history bg-pink">
                  <div className="card-content">
                    <div className="content">
                      <div className="today-title">
                        Today's Income
                      </div>
                      <div className="today-income">
                        Rp. 5000
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-history bg-blue">
                  <div className="card-content">
                    <div className="content">
                      <div className="today-title">
                        Orders
                      </div>
                      <div className="today-income">
                        5000
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-history bg-purple">
                  <div className="card-content">
                    <div className="content">
                      <div className="today-title">
                        This Year's Income
                      </div>
                      <div className="today-income">
                        Rp. 5000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-chart">
                <div className="card charts">
                  <div className="card-content">
                    <div className="card-title">
                      Revenue
                    </div>
                    <div className="content">
                      {/* <area-chart :data="chartData"></area-chart> */}
                    </div>
                  </div>
                </div>
              </div>
              <TableOrder />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default History