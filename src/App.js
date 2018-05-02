import React, { Component } from 'react';
import './App.css';
import Header from './Header.js';
import Step1 from './Step1.js';
import Step2 from './Step2.js';
import Step3 from './Step3.js';
import BlogPost from './BlogPost.js';

class App extends Component {
  constructor(){
    super()
    this.selectDropdown = this.selectDropdown.bind(this)
    this.addListicleItem = this.addListicleItem.bind(this)
    this.state = {
        dropDownTitle: 'The Deal Zones',
        blogItemArray: []
    }
  }
  addListicleItem(x){
    var s = this.state;
    console.log("x", x)
    var newArray = s.blogItemArray;
    newArray.push(x);
    this.setState({blogItemArray: newArray})
  }
  selectDropdown(x){
    var selected = 'Select Blog Template';
    switch(x){
        case 1:
          selected = 'The Deal Zones';
          break;
        default:
          selected = 'Select Blog Template';
    }
    // This sets the blog which should trigger different css styles for the html that the blog creator spits out
    this.setState({dropDownTitle: selected});
  }
  render(){
    var s = this.state;
    console.log("blogItemArray", s.blogItemArray)
    return (
      <div className="App">
        <Header />
        <Step1 dropDownTitle={s.dropDownTitle} selectDropdown={this.selectDropdown}/>
        {/*<Step2 />*/}
        <Step3 addListicleItem={this.addListicleItem} />
        <BlogPost dropDownTitle={s.dropDownTitle} blogTitle={s.blogTitle} blogItemArray={s.blogItemArray}/>
      </div>
    );
  }
}

export default App;


/*
blogTitle: '19 Cute and Fun Floral Spring Dresses for Less Than $30 Found on Amazon!',
blogItemArray: [{title: 'Sunflower Floral Print Bohemian Spaghetti Strap Button Down Swing Midi Dress With Pockets', text: 'A ^&backless dress&^ is a warm weather essential. This sexy, floral, spaghetti strap is perfect for a Spring or Summertime occasion, or just a casual stroll on the beach. It’s mid-length and flowy, so it’s long enough to dress up yet short enough to still be fun! It’s comfy, stretchy, light and airy.', shopifyProductURL: 'https://www.thedealzones.com/products/angashion-sunflower-floral-bohemian-button-pocket-dress', amazonProductLink: 'https://www.amazon.com/Angashion-Dresses-Summer-Bohemian-Spaghetti-Pockets/dp/B078XC3G1Q/ref=as_li_ss_tl?tag=ashionooditne-20', photoUrl: 'https://cdn.shopify.com/s/files/1/2507/7762/files/d20_1024x1024.jpg?v=1521577348'}]

Sunflower Floral Print Bohemian Spaghetti Strap Button Down Swing Midi Dress With Pockets
A ^&backless dress&^ is a warm weather essential. This sexy, floral, spaghetti strap is perfect for a Spring
https://www.thedealzones.com/products/angashion-sunflower-floral-bohemian-button-pocket-dress
https://www.amazon.com/Angashion-Dresses-Summer-Bohemian-Spaghetti-Pockets/dp/B078XC3G1Q/ref=as_li_ss_tl?tag=ashionooditne-20
https://cdn.shopify.com/s/files/1/2507/7762/files/d20_1024x1024.jpg?v=1521577348


*/
