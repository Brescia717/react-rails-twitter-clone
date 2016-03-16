// This file uses jsx syntax
import Greet from './greet';
import TweetBox from "./components/TweetBox"
import TweetsList from "./components/TweetsList"

let mockTweets = [
  { id: 1, name: 'Paul Brescia', body: 'My #FirstTweet' },
  { id: 2, name: 'Paul Brescia', body: 'My #SecondTweet' },
  { id: 3, name: 'Paul Brescia', body: 'My #ThirdTweet' }
];

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <TweetBox />
        <TweetsList tweets={ mockTweets }/>
      </div>
    );
  }
}

let documentReady = () => {
  React.render(
    <Main />,
    document.getElementById('react')
  );
};

$(documentReady);
