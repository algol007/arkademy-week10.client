import React from 'react'
import '../styles/orderDetail.scss'

function OrderDetail() {
  return (
    <div className="column is-4 menu-order">
      <div className="no-order">
        <div className="image-no-order">
        </div>
        <div className="text-no-order">
          <p className="no-order-title">Your cart is empty</p>
          <p>Please add some items from the menu</p>
        </div>
      </div>
      <div className="ordered">
        <div className="is-order">
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
          <div className="column checkout">
            <div className="total-price">
              <p>Total Price</p>
              <p>Rp. 5000</p>
            </div>
            <div className="ppn">
              <p>*Belum termasuk PPN</p>
            </div>
            <button className="button is-fullwidth button-checkout bg-blue">
              Checkout</button>
            <button className="button is-fullwidth button-checkout bg-pink">
              Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetail