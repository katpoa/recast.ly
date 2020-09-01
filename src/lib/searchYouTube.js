var searchYouTube = (options, callback = ()=>{}) => {
  $.get({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    // contentType: '',
    success: callback,
    error: function(error) {
      console.error('searchYouTube: Failed to fetch videos', error);
    }
  });
};

export default searchYouTube;

// readAll: function(successCB, errorCB = null) {
//   $.ajax({
//     url: Parse.server,
//     type: 'GET',
//     data: { order: '-createdAt' },
//     contentType: 'application/json',
//     success: successCB,
//     error: errorCB || function(error) {
//       console.error('chatterbox: Failed to fetch messages', error);
//     }
//   });
// }