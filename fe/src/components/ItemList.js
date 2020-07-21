import React, { Component } from "react";
import { table } from "reactstrap";

class ItemList extends Component {
  render() {
    const products = this.props.products;
    return (
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Subcategory</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          {!products || products.length <= 0 ? (
            <tr>
              <td  colSpan="6" align="center">
                <b>Oooo, No Product Here...</b>
              </td>
            </tr>
          ) : (
            products.map(product => (
              <tr key={product.pk}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.subcategory_name}</td>
                <td>{product.category}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    );
  }
}

export default ItemList;