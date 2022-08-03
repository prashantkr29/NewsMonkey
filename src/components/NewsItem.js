
import React, { Component } from "react";

export default class NewsItem extends Component {

  render() {
    let {title,description,image,source}=this.props
    return (
      <>
        <div className="card" style={{width:'18rem'}}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={source} target="blank" className="btn btn-primary">Know More</a>
            </div>
         </div>
      </>
    );
  }
}
