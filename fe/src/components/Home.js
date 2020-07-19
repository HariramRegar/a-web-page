import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ItemList from "./ItemList";
import NewItem from "./NewItem";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.resetState();
  }

  getProduct = () => {
    axios.get(API_URL).then(res => this.setState({ products: res.data }));
  };

  resetState = () => {
    this.getProduct();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <ItemList
              products={this.state.products}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewItem create={true} resetState={this.resetState} />
          </Col>
        </Row>
        <p>This page is developed by Hariram Regar.</p>
      </Container>
    );
  }
}

export default Home;