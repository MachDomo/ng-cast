angular.module('video-player')
  .controller('videoCtrl', function() {

  })

  .component('videoPlayer', {
    // TODO
    bindings: {
      video: '<'
    },

    controller: 'videoCtrl',


    templateUrl: 'src/templates/videoPlayer.html'
  });
