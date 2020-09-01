import VideoList from './VideoList.js';
// import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      currentVid: exampleVideoData[0] //this.props[0]
    };
  }

  onVideoClick(video) {
    this.setState({
      currentVid: video
    });
    console.log('click', video);
  }

  onSearchClick(searchQuery) {

  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>{/*<Search /> add search query to state*/}</div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVid}/></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={exampleVideoData} onVideoClick={this.onVideoClick.bind(this)}/></div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
