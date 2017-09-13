angular.module('video-player')
  .service('youTube', function($http) {
  // TODO
  // Get request

    this.search = function(query, callback) {
      $http.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          q: query,
          maxResults: 5,
          key: window.YOUTUBE_API_KEY,
          videoEmbeddable: true,
          type: 'video'
        }
      })
        .then(callback, function(err) {
          console.log('error', err);
        });
    };

  });

// $http.get('/someUrl', config).then(successCallback, errorCallback);