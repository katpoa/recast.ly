import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback = ()=>{}) => {
  $.get({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    // contentType: searchQuery,
    success: callback,
    error: function(error) {
      console.error('searchYouTube: Failed to fetch videos', error);
    }
  });
};
console.log(searchYouTube({key: YOUTUBE_API_KEY, query: 'cat', max: 5}, console.log('')));

export default searchYouTube;

// data: $.extend({
//   key: 'API_KEY',
//   q: $('#hyv-search').val(),
//   part: 'snippet'
// },
// $.get( 'https://www.googleapis.com/youtube/v3/search', options, callback)
