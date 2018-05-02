import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.copyBlogCode = this.copyBlogCode.bind(this);
    this.createHTML = this.createHTML.bind(this);
    this.searchForLinks = this.searchForLinks.bind(this);
    this.returnStyle = this.returnStyle.bind(this);
    this.state = {
      value: ''
    };
  }
  copyBlogCode(){
    var copyToClipboard = (t) => {
      var x = document.createElement("input");
      document.body.appendChild(x);
      x.setAttribute('value', t);
      x.select();
      document.execCommand("copy");
      document.body.removeChild(x);
    }
    copyToClipboard(this.createHTML());
  }
  createHTML(){
    var p = this.props
    var style = this.returnStyle(p.dropDownTitle) //determines style based on dropdown blog selector
    console.log("props", this.props)
    var title = '<div class="blog-title"><p>' + p.blogTitle + '</p></div>';
    var listItemsHTML = '';
    p.blogItemArray.forEach((item, index) => {
      console.log("item", item);
      var number = p.blogItemArray.length - index;
      var itemTitle = '<a class="list-item-title" href="' + item.shopifyProductURL + '" onclick="window.open(\'' + item.amazonProductLink + '\')">' + number + ". "  + item.title + '</a>';
      var text = '<p class="list-item-text">' + this.searchForLinks(item.text, item.shopifyProductURL, item.amazonProductLink ) + '</p>';
      var img = '<a class="list-item-image-link" href="' + item.shopifyProductURL + '" onclick="window.open(\'' + item.amazonProductLink + '\')"><img class="blog-image" src="' + item.photoUrl + '" alt="' + item.title + '" />';
      console.log("number",  number, "itemTitle", itemTitle, "text", text, "img", img)
      var listItemHTML = '<div class="list-item-container">' + itemTitle + text + img + '</div>';
      listItemsHTML += listItemHTML;
    })
    console.log("listItemsHTML", listItemsHTML);
    var finalString = listItemsHTML;
    return finalString;
    //blogcontent
    // var style = {fontSize: '14px', color: 'blue'}
    // var c = (x) => {return style[x] + '; '}
    // var listItemsHTML = '';
    // var listicleItems = blogcontent[0].listicleItems.map((item, index) => {
    //   var number = blogcontent[0].length - index;
    //   var itemTitle = '<a class="list-item-title" href="' + item.shopifyProductURL + '" onclick="window.open(' + item.amazonProductLink + ', _blank">' + number + ". "  + item.title + '</a>';
    //   var text = '<p class="list-item-text">' + this.searchForLinks(item.text) + '</p>';
    //   var img = '<img class="blog-image" src="' + item.photoUrl + '" alt="' + {} + '" />';
    //   var listItemHTML = '<div class="list-item-container">' + itemTitle + text + img + '</div>';
    // })
    // var style = '<style> .blog-title { font-size: 14px; color: black;} </style>'
    // var finalString = '<div>' + title + listItemsHTML + '</div>' + style;
  }
  searchForLinks(x, y, z){
    var newStr = x.replace(/\^&/g, '<a class="list-item-text-link" href="' + y + '" onclick="window.open(\'' + z + '\')">');
    newStr = newStr.replace(/&\^/g, '</a>');
    return newStr;
  }
  returnStyle(x){
    console.log("x", x)
    // x = state.dropDownTitle from App.js passed down via props
    var style = '<style></style>';
    switch(x){
        case 'The Deal Zones':
          style = dealZoneStyles;
          break;
        default:
          style = '<style></style>';
    }
    return style;
  }
  render() {
    var p = this.props, blogContent = this.props.blogItemArray;
    console.log("blogContent", blogContent)
    return (
      <div style={{display: 'block', padding: '20px'}}>
        <p className="App-intro">4. Copy Blog Code</p>
        <Button onClick={this.copyBlogCode}>Copy Code</Button>
        <div>{/*this.props.blogTitle*/}</div>
        {blogContent.map((item, index) => {
          console.log("item", item)
          return (
            <div>
              <div>{blogContent.length - index}. {item.title}</div>
              <p>{item.text}</p>
              <a href={item.shopifyProductURL}><img style={{height: '100px'}} alt={item.title} onClick={() => window.open(item.amazonProductLink, '_blank')} src={item.photoUrl}></img></a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BlogPost;

var dealZoneStyles = '<style> .blog-title {} .list-item-title{} .list-item-text{} .list-item-container{} .blog-image{} </style>';
