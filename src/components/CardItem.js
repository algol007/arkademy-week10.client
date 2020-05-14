import React from 'react'
import '../styles/card.scss'
import axios from 'axios'

class CardItem extends React.Component {
  constructor() {
    super()
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts() {
    axios
      .get('http://localhost:5000/api/pos/product')
      .then(res => {
        // console.log(res.data.products.rows)
        this.setState({
          products: res.data.products.rows
        })
      })
  }

  render() {
    return (
      <div className="item">
        {this.state.products.map((product, index) =>
          <div className="card card-item" key={ index }>
            <div className="card-overlay"><i className="far fa-check-circle"></i></div>
            <div className="card-image">
              <img src={ product.image } alt="makanan" />
            </div>
            <div className="card-content">
              <div className="media-content">
                <p>{ product.name }</p>
                <p><strong>Rp. { product.price }</strong></p>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CardItem