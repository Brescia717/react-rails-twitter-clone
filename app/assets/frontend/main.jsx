// This file uses jsx syntax
import TweetBox from "./components/TweetBox"
import TweetsList from "./components/TweetsList"
import TweetStore from "./stores/TweetStore"
import TweetActions from "./actions/TweetActions"

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() };
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }
  addTweet(tweetToAdd) {
    // Tweet is added to the backend, before changes are made on the frontend.
    // $.post("/tweets", { body: tweetToAdd })
    // .success( savedTweet => {
    //   let newTweetsList = this.state.tweetsList;
    //   newTweetsList.unshift(savedTweet);
    //
    //   this.setState(this.formattedTweets(newTweetsList));
    // })
    // .error( error => console.log(error));
  }
  componentDidMount() {
    TweetActions.getAllTweets();
    TweetStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    console.log(5, "Main._onChange");
    this.setState(getAppState());
  }
  render() {
    return (
      <div className="container">
        <TweetBox sendTweet={ this.addTweet.bind(this) }/>
        <TweetsList tweets={ this.state.tweetsList }/>
      </div>
    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    React.render(<Main />, reactNode);
  }
};

$(documentReady);
