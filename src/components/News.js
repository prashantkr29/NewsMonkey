import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      news: [],
      loading: false,
    };
  }
  async componentDidMount() {
    let url ="https://newsapi.org/v2/top-headlines?country=in&apiKey=61fac94678434711ae1bec40ebd4aa03";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.state = {
      news: parsedData.articles,
      loading: true,
    };
  }

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 style={{ textAlign: "center" }}>News Headlines</h2>
          <div className="row">
            {this.state.news.map((element) => {
              return (
                <div className="col md-3">
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    image={element.urlToImage}
                    source={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
