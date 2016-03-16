// This file uses jsx syntax
import Greet from './greet';
import TweetBox from "./components/TweetBox"

class Main extends React.Component {
  render() {
    return (
      <TweetBox />
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
