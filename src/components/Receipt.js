import React from 'react'
import '../styles/receipt.scss'

function Receipt() {
  return (
    <div className="modal modal-receipt">
      <div className="modal-background"></div>
      <div className="modal-card">
        <div className="modal-card-body" ref="print">
          <div className="receipt-head">
            <div className="modal-checkout">
              <p className="checkout-title">Checkout</p>
              <p>Cashier : Pevita Pearce</p>
            </div>
            <div className="receipt-number">
              <p>Receipt no: #010410919</p>
            </div>
          </div>
          <ul className="receipt-detail">
            <li>Cappucino</li>
            <li>Rp. 5000</li>
          </ul>
          <ul className="receipt-detail receipt-total">
            <li>Total</li>
            <li>Rp. 5000</li>
          </ul>
          <ul className="receipt-detail receipt-payment">
            <li>Payment :</li>
            <li>Cash</li>
          </ul>
        </div>
        <div className="button-receipt">
          <button className="button is-medium is-fullwidth bg-pink">Print</button>
          <p>Or</p>
          <button className="button is-medium is-fullwidth bg-blue">
            Send Email</button>
        </div>
      </div>
    </div>

  )
}

export default Receipt