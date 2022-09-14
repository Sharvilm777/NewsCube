import { Component } from "react";
import NewsItem from "./NewsItems";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

class NewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }
  async updateNews() {
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6d519730d4184499b8aac7f896d32558&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(30);
    let data = await fetch(url);
    this.props.setProgress(60);
    let jsonData = await data.json();
    this.props.setProgress(80);
    this.setState({
      articles: jsonData.articles,
      totalResults: jsonData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  componentDidMount() {
    this.updateNews();
  }

  // gotoPrev = async () => {
  //   this.setState({
  //     page: this.state.page - 1,
  //   });
  //   this.updateNews();
  // };

  // gotoNext = async () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //   });
  //   this.updateNews();
  // };
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=6d519730d4184499b8aac7f896d32558&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let jsonData = await data.json();
    this.setState({
      articles: this.state.articles.concat(jsonData.articles),
      totalResults: jsonData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center my-5">NewsCube-Top headlines</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg"
                    }
                    newsUrl={element.url}
                    publishAt={element.publishedAt}
                    source={element.source}
                    author={element.author}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
export default NewsContainer;
