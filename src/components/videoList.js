angular.module('video-player')

  .component('videoList', {
    // TODO
    bindings: {
      videos: '<',
      onClick: '<'
    },
    // controller: function($scope) {
    //   console.log($scope);
    // },
    templateUrl: 'src/templates/videoList.html',
  });

// .directive('videoList', {

//   return {
//     scope: '<'
//   },
// })