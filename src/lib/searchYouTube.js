import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = ({key = YOUTUBE_API_KEY, query, max = 5}, callback = ()=>{}) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: key,
      q: query,
      maxResults: max,
      part: 'snippet',
      type: 'video'
    }
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    });
};

export default searchYouTube;
