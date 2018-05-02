import React, { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import './App.css';

class ImgUrl extends Component {
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
            <FormGroup controlId="imgurl" autoComplete="off">
              <ControlLabel>Image Url</ControlLabel>
              <FormControl type="text" value={this.state.value} placeholder="Enter shopify image url. (e.g. https://cdn.shopify.com/s/files/1/...)" onChange={this.handleChange}/>
              <FormControl.Feedback />
            </FormGroup>
          </form>
    );
  }
}

export default ImgUrl;
