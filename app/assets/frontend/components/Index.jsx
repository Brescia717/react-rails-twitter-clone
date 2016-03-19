import React from "react"
import TweetBox from "./TweetBox"
import TweetsList from "./TweetsList"
import TweetStore from "../stores/TweetStore"
import TweetActions from "../actions/TweetActions"

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() };
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    TweetActions.getAllTweets();
    TweetStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    this.setState(getAppState());
  }
  render() {
    return (
      <div className="container">
        <TweetBox />
        <TweetsList tweets={ this.state.tweetsList }/>
      </div>
    );
  }
}
