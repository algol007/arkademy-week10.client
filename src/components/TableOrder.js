import React from 'react'
import axios from 'axios'

class TableOrder extends React.Component {
  constructor() {
    super()
    this.state = {
      orders: []
    }   
  }

  componentDidMount() {
    this.getOrders()
  }

  getOrders() {
    axios
      .get('http://localhost:5000/api/pos/order')
      .then(res => {
        // console.log(res.data.orders.rows)
        this.setState({
          orders: res.data.orders.rows
        })
      })
  }

  render() {
    // console.log(this.state.orders)
    return (
      <div className="card-recent-order">
        <div className="card recent-order">
          <div className="card-content">
            <div className="card-title">
              Recent Order
            </div>
            <div className="content table-container">
              <table className="table">
                <thead>
                  <tr>
                    <th>INVOICES</th>
                    <th>CASHIER</th>
                    <th>DATE</th>
                    <th>AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  { this.state.orders.map((order, index) =>                   
                    <tr key={ index }>
                      <td>{ order.invoice }</td>
                      <td>{ order.userOrder.name }</td>
                      <td>{ order.createdAt.slice(0, 10) }</td>
                      <td>Rp. { order.total }</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TableOrder