angular.module('video-player')
  .controller('appCtrl', function(youTube) {
    this.videos = window.exampleVideoData;
    this.selectedVideo = this.videos[0];

    this.selectVideo = (video) => {
      console.log('video clicked', video);
      this.selectedVideo = video;
    };

    this.updateVideos = function(response) {
      this.videos = response.data.items;
      this.selectedVideo = this.videos[0];
    };

    this.searchyouTube = youTube.search('Surfboards', (response) => {
      console.log('response', response);
      this.updateVideos(response);
    });



    // this.search('string', updateVideos)

    // this.updateVideos = (data.items) => {this.videos = data.items};



  })

  .component('app', {


    bindings: {
      data: '<'
    },
    controller: 'appCtrl',
    templateUrl: '/src/templates/app.html'

  });


