angular.module('video-player')
  .controller('appCtrl', function($scope) {
    this.videos = window.exampleVideoData;
    this.selectedVideo = this.videos[0];

    this.selectVideo = (video) => {
      console.log('video clicked', video);
      this.selectedVideo = video;
    };

  })

  .component('app', {


    bindings: {
      data: '<'
    },
    controller: 'appCtrl',
    templateUrl: '/src/templates/app.html'

  });


