export default class Tweets extends React.Component {
  render() {
    return (
      <li className="collection-item avatar">
        <i className="material-icons circle">person_pin</i>
        <span className="title">{ this.props.name }</span>
        <time>{ this.props.formattedDate }</time>
        <p>{ this.props.body }</p>
      </li>
    );
  }
}
