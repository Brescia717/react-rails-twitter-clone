export default class TweetBox extends React.Component {
  sendTweet(event) {
    event.preventDefault();
    this.props.sendTweet(React.findDOMNode(this.refs.tweetTextArea).value);
    React.findDOMNode(this.refs.tweetTextArea).value = '';
  }
  render() {
    return (
      <div className="row">
        <form onSubmit={ this.sendTweet.bind(this) }>
          <div className="input-field">
            <textarea ref="tweetTextArea" className="materialize-textarea" />
            <label>What's happening?</label>
            <button type="submit" className="btn right">Tweet</button>
          </div>
        </form>
      </div>
    );
  }
}
