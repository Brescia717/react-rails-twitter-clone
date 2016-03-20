import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"

export default {

  receivedTweets(rawTweets) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
      rawTweets // shorthand for `rawTweets: rawTweets`; ES6 syntax
    })
  },
  receivedOneTweet(rawTweet) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_TWEET,
      rawTweet
    })
  },
  receivedUsers(rawUsers) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_USERS,
      rawUsers
    })
  }

}
