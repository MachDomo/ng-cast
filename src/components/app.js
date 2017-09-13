angular.module('video-player')

  .controller('appCtrl', function(youTube) {
    this.selectVideo = (video) => {
      console.log('video clicked', video);
      this.selectedVideo = video;
    };

    this.result = (response) => {
      this.videos = response.data.items;
      this.selectedVideo = this.videos[0];
    };

    this.searchyouTube = (query = 'pizza') => {
      youTube.search(query, (response) => {
        this.result(response);
      });
    };

    this.searchClick = (input) => {
      this.searchyouTube(input);
    };

    this.searchyouTube();
  })

  .component('app', {

    bindings: {
      data: '<'
    },
    controller: 'appCtrl',
    templateUrl: '/src/templates/app.html'

  });


