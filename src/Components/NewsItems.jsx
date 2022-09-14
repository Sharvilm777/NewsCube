import { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let { title, description, newsUrl, imageUrl, author, source, publishAt } =
      this.props;
    return (
      <div className="card my-2 mx-2">
        <img src={imageUrl} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">
            {title ? title.slice(0, 45) : "Title are there"}
          </h5>
          <p className="card-text">
            {description ? description.slice(0, 88) : "Description are here"}
          </p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
            Read More
          </a>
          <p>
            By {this.props.author} on
            {new Date(this.props.publishAt).toGMTString()}
          </p>
          Source:{this.props.source.id}
        </div>
      </div>
    );
  }
}
