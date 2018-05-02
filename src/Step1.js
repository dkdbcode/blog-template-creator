import React, { Component } from 'react';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import './App.css';

class Step1 extends Component {
  render() {
    return (
      <div className="STEP-1" style={{display: 'block', padding: '20px'}}>
        <div style={{display: 'block'}}>
          <p className="App-intro">1. Select Blog</p>
          <DropdownButton style={{width: '190px'}} bsStyle={'default'} title={this.props.dropDownTitle} key={'1'} id={'dropdown-basic'}>
            <MenuItem eventKey="1" onSelect={() => this.props.selectDropdown(1)}>The Deal Zones</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4" disabled>Add Blog (coming soon)</MenuItem>
          </DropdownButton>
        </div>
      </div>
    );
  }
}

export default Step1;
