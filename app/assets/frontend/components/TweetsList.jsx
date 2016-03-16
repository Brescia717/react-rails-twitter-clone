export default class TweetsList extends React.Component {
  render() {
    return (
      <div>
        <ul className="collection">
          <li className="collection-item avatar">
            <i className="material-icons circle">person_pin</i>
            <span className="title">Paul Brescia</span>
            <p>My #FirstTweet</p>
          </li>
          <li className="collection-item avatar">
            <i className="material-icons circle">person_pin</i>
            <span className="title">Paul Brescia</span>
            <p>My #SecondTweet</p>
          </li>
          <li className="collection-item avatar">
            <i className="material-icons circle">person_pin</i>
            <span className="title">Paul Brescia</span>
            <p>My #ThirdTweet</p>
          </li>
        </ul>
      </div>
    );
  }
}
