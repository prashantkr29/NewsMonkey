import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1,
            pageSize:6
        }
    }

    async componentDidMount(){ 
        let url = `https://newsapi.org/v2/top-headlines?country='in'&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=1pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData); 
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }

     handlePrevClick = async ()=>{
        
        let url = `https://newsapi.org/v2/top-headlines?country='in'&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);  
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })

    }
    
     handleNextClick = async ()=>{
        
        if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.pageSize)){

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country='in'&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);  
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
    }
    }

    render() { 
   
        return (
          
            <div className="container my-3">
                <h1 style={{textAlign:'center'}}>NewsMonkey - Top Headlines</h1> 
                <div className="row"> 
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div> 
                })} 
                </div> 
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News