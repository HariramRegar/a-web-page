import React, { Component, Fragment, useEffect, useState } from "react";
import axios from "../utilities/axios";


class NewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pk: 0,
      product: "",
      category: "",
      subcategory:"",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

//  const [products, setProducts]= useState([]);

  handleSubmit(event){
       event.preventDefault();
       const name=document.querySelector(".product__name");
       const subcategory = document.querySelector('.subcategory');
       console.log(name);
       console.log(subcategory);
       const response = axios.post("/products/", {
            name:name.value,
            subcategory:Number(subcategory.value),
         }
       );

  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
      <table class="table table-bordered">
        <tbody>
        <tr> <td><input type="submit" onClick={this.handleSubmit}/></td>
              <td><label>
                    <input
                      className="product__name"
                      name="product"
                      type="text"
                      placeholder="Product Name"
                      value={this.state.product}
                      onChange={this.handleInputChange} />
                   </label>
              </td>

              <td>
                  <label>
                   <select className="subcategory" name="subcategory" value={this.state.value} onChange={this.handleChange}>
                       <option value="1">subcategory 1</option>
                       <option value="2">subcategory 2</option>
                       <option value="3">subcategory 3</option>
                       <option value="4">subcategory 4</option>
                       <option value="5">subcategory 5</option>
                       <option value="6">subcategory 6</option>
                       <option value="7">subcategory 7</option>
                       <option value="8">subcategory 8</option>
                   </select>
                  </label>
               </td>
             </tr>
         </tbody>
         </table>
      </form>
    );
  }
}

export default NewItem;
