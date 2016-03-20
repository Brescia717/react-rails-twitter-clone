import React from "react"

export default class Tweets extends React.Component {
  render() {
    return (
      <li className="collection-item avatar">
        <img src={this.props.gravatar} className="circle" />
        <span className="title">{ this.props.name }</span>
        <time>{ this.props.formattedDate }</time>
        <p>{ this.props.body }</p>
      </li>
    );
  }
}
