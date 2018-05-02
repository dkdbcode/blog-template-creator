import React, { Component } from 'react';
import { FormGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { HelpBlock } from 'react-bootstrap';
import ImgUrl from './ImgUrl.js';
import AmazonLink from './AmazonLink.js';
import ShopifyProductLink from './ShopifyProductLink.js';
import './App.css';


class Step3 extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.state = {
      value: ''
    };
  }
  addItem(){
    var itemObj =  {
        title: document.getElementById('formBasicText').value,
        text: document.getElementById('formControlsTextarea').value,
        photoUrl: document.getElementById('imgurl').value,
        amazonProductLink: document.getElementById('shopify').value,
        shopifyProductURL: document.getElementById('amazon').value
      }
    this.props.addListicleItem(itemObj);
  }
  getValidationState() {
    const length = this.state.value.length;
    if (length < 70 && length > 0) return 'success';
    else if (length > 70) return 'error';
    return null;
  }
  handleChange(e, val) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <div className="step-2" style={{display: 'block', padding: '20px'}}>
        <div style={{display: 'block'}}>
          <p className="App-intro">2. Add Listicle Item</p>

          <form>
            <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
              <ControlLabel>Item Title</ControlLabel>
              <FormControl type="text" value={this.state.value} placeholder="Enter listicle item title" onChange={this.handleChange}/>
              <FormControl.Feedback />
              <HelpBlock>Currently: {this.state.value.length} characters.</HelpBlock>
            </FormGroup>
          </form>

          <form>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Item Paragraph Text</ControlLabel>
            <FormControl componentClass="textarea" placeholder="Enter listcle item paragraph text" />
          </FormGroup>
          </form>

          <ImgUrl/>

          <AmazonLink />

          <ShopifyProductLink />

          <Button onClick={this.addItem}>Add Item</Button>

        </div>
      </div>
    );
  }
}

export default Step3;
