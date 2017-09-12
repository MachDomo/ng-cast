var app = angular.module('video-player')

  .component('app', {

    controller: function($scope){
      this.videos = window.exampleVideoData;
    },
    bindings: {
      data: '<'
    },
    templateUrl: '/src/templates/app.html'

  });


