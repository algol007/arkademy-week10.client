import React from "react"
import '../styles/addItem.scss'
 
class AddItem extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      image: '',
      price: '',
      categoryId: ''
    }

    this.uploadImage = this.uploadImage.bind(this)
  }

  addProduct() {
    const add = document.querySelector('.modal-item')
    add.classList.toggle('is-active')
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  uploadImage(e) {
    console.log(e.target.files[0])
    this.setState({
      image: e.target.files[0]
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <div className="modal modal-item">
        <div className="modal-background"></div>
        <div className="modal-card">
          <form className="modal-card-body" onSubmit={(e) => this.handleSubmit(e)}>
            <div className="modal-item-header">
              Add Item
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Name</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input className="input" type="text" placeholder="Product Name" value={this.state.name} name="name" onChange={(e) => this.handleChange(e)} required />
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Image</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input className="input" type="file" name="image" onChange={this.uploadImage} />
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Price</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input className="input" type="text" placeholder="Product Price" value={this.state.value} name="price" onChange={(e) => this.handleChange(e)} required />
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Category</label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <div className="select is-fullwidth">
                      <select name="categoryId" value={this.state.categoryId} onChange={(e) => this.handleChange(e)} required>
                        <option value="1">Food</option>
                        <option value="2">Drink</option>
                        <option value="3">Desert</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-item-button">
              <button className="button button-item bg-pink" onClick={() => this.addProduct()}>Cancel</button>
              <button className="button button-item bg-blue" type="submit">Add</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default AddItem