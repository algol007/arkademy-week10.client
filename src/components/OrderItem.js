import React from 'react'
import '../styles/orderItem.scss'

function OrderItem() {
  return (
    <div className="order-item">
      <div className="column card-order">
        <div className="image-order">
          <img src="" alt="" />
        </div>
        <div className="desc-order">
          <div className="name-order">
            <b>Cappucino</b>
          </div>
          <div className="qty-order">
            <ul>
              <li>-</li>
              <li>1</li>
              <li>+</li>
            </ul>
            <p>Rp. 5000</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderItem