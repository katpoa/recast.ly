// babel --watch . --out-dir compiled --presets=react --ignore=node_modules,compiled --source-maps inline

// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import searchYouTube from './lib/searchYoutube.js';

ReactDOM.render(<App search={searchYouTube}/>, document.getElementById('app'));


