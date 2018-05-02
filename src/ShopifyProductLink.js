import React, { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import './App.css';

class ShopifyProductLink extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    };
  }
  handleChange(e, val) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
          <form>
            <FormGroup controlId="shopify">
              <ControlLabel>Shopify Product Link</ControlLabel>
              <FormControl type="text" value={this.state.value} placeholder="Enter shopify product url. (e.g. https://www.thedealzones.com/products/...)" onChange={this.handleChange}/>
              <FormControl.Feedback />
            </FormGroup>
          </form>
    );
  }
}

export default ShopifyProductLink;
