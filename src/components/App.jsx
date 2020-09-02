import VideoList from './VideoList.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      videoList: exampleVideoData,
      currentVid: exampleVideoData[0],
      query: ''
    };
  }

  componentDidMount() {
    this.props.searchYouTube({key: YOUTUBE_API_KEY, query: 'league of legends', max: 5}, (data) => {
      this.setState({
        // query: 'league of legends',
        videoList: data,
        currentVid: data[0]
      });
    });
  }

  onVideoClick(video) {
    this.setState({
      currentVid: video
    });
  }

  onSearchClick(searchQuery) {
    var debounced = _.debounce(this.props.searchYouTube, 1000);
    debounced({key: YOUTUBE_API_KEY, query: searchQuery, max: 5}, (data) => {
      this.setState({
        query: searchQuery,
        videoList: data,
        currentVid: data[0]
      });
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar" >
          <div className="col-md-6 offset-md-3">
            <div><Search onSearchClick={this.onSearchClick.bind(this)} /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVid}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.videoList} onVideoClick={this.onVideoClick.bind(this)}/></div>
          </div>
        </div>
      </div>
    );
  }

}

// liveSearch={this.props.searchYouTube.bind(this)}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
