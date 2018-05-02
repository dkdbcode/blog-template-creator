import React, { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { HelpBlock } from 'react-bootstrap';
import './App.css';


class Step2 extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    };
  }
  getValidationState() {
    const length = this.state.value.length;
    if (length < 70 && length > 0) return 'success';
    else if (length > 70) return 'error';
    return null;
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div className="step-2" style={{display: 'block', padding: '20px'}}>
        <div style={{display: 'block'}}>
          <p className="App-intro">2. Title</p>
          <form>
            <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
              <FormControl type="text" value={this.state.value} placeholder="Enter blog title" onChange={this.handleChange}/>
              <FormControl.Feedback />
              <HelpBlock>Currently: {this.state.value.length} characters.</HelpBlock>
            </FormGroup>
          </form>
        </div>
      </div>
    );
  }
}

export default Step2;
