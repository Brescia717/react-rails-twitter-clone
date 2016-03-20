import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"
import AppEventEmitter from "./AppEventEmitter"

let _tweets = [];

class TweetEventEmitter extends AppEventEmitter {
  getAll() {
    return _tweets.map(tweet => {
      tweet.formattedDate = moment(tweet.created_at).fromNow();
      return tweet;
    })
    return _tweets;
  }
}

let TweetStore = new TweetEventEmitter();

AppDispatcher.register( action => {
  switch(action.actionType) {
    case ActionTypes.RECEIVED_TWEETS:
      _tweets = action.rawTweets;  // acknowledge tweets
      TweetStore.emitChange();  // emit a change event
      break;
    case ActionTypes.RECEIVED_ONE_TWEET:
      _tweets.unshift(action.rawTweet);
      TweetStore.emitChange();
    default:
      // no op
  }
});

export default TweetStore;
