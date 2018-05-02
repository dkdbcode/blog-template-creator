import React, { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import './App.css';

class AmazonLink extends Component {
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
            <FormGroup controlId="amazon" autoComplete="off">
              <ControlLabel>Amazon Link</ControlLabel>
              <FormControl type="text" value={this.state.value} placeholder="Enter Amazon product url. (e.g. https://www.amazon.com/...tag=ashionooditne-20)" onChange={this.handleChange}/>
              <FormControl.Feedback />
            </FormGroup>
          </form>
    );
  }
}

export default AmazonLink;
