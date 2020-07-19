import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "../utilities/axios";

import { API_URL } from "../constants";

class NewItemForm extends React.Component {
  state = {
    pk: 0,
    product: "",
    sub_category: "",
    name: ""
  };

  componentDidMount() {
    if (this.props.product) {
      const { pk, product, sub_category, name } = this.props.product;
      this.setState({ pk, product, sub_category, name });
    }
  }

  onChange = e => {
    this.setState({ [e.target.product]: e.target.value });
  };

  createProduct = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editProduct = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.products ? this.editProduct : this.createProduct}>
        <FormGroup>
          <Label for="name">Product:</Label>
          <Input
            type="text"
            name="product"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.product)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Subcategory:</Label>
          <Input
            type="email"
            name="sub_category"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.sub_category)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="document">Category:</Label>
          <Input
            type="text"
            name="category"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewItemForm;