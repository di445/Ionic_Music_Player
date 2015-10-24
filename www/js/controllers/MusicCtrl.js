/**
 * Created by Anthony on 10/22/2015.
 */
'use strict';

angular.module('musicPlayer')
  .controller('MusicCtrl', ['$scope', '$cordovaMedia', '$ionicLoading', function($scope, $cordovaMedia, $ionicLoading) {

    document.addEventListener("deviceready", onDeviceReady, false);

    $scope.playlist = [
      {
        songSrc: 'http://www.stephaniequinn.com/Music/Commercial%20DEMO%20-%2013.mp3',
        songName: 'Commercial Demo',
        songArtist: 'Commercial'
      }, {
        songSrc: 'http://www.stephaniequinn.com/Music/Vivaldi%20-%20Spring%20from%20Four%20Seasons.mp3',
        songName: 'Spring from Four Seasons',
        songArtist: 'Vivaldi'
      }, {
        songSrc: 'android_assets/www/mp3/Tongues_Remix.mp3',
        songName: 'Tongues (Remix)',
        songArtist: 'Joywave'
      }
    ];

    /*
     * temps
     */
    var tmpSrc = 'mp3/Tongues_Remix.mp3';
    var tmpMedia = null;

    $scope.ppButt = 'play';
    $scope.media = ''/*new Media($scope.playlist[0].songSrc, function() {
      console.log('init success');
    }, function(err) {
      console.log('init err: %o', err);
    }, mediaStatusCallback)*/;

    /**
     * play the song
     * @param src url for song to be played
     */
    $scope.playSong = function(src) {
      console.log('playing from: %o', src);
      if (tmpMedia === null) {
        tmpMedia = new Media(tmpSrc, function() {//$cordovaMedia.newMedia(tmpSrc, function () {
          console.log('tmpMedia success!');
        }, function (err) {
          console.log('tmpMedia err: %o', err);
        }, mediaStatusCallback);
      }
      tmpMedia.play();
      /*
      $scope.media = new Media(src, function() {
        // success callback
        console.log('success');
      }, function(err) {
        // error
        console.log('err: %o', err);
      }, mediaStatusCallback);

      media.setVolume(1.0);
      $scope.media = media;

      $cordovaMedia.play(media);
      */
    };

    /**
     * stop current song
     */
    $scope.stopSong = function() {
      $scope.media.getCurrentPosition();
      $scope.media.stop();
    };

    /**
     * resume or pause the song
     */
    $scope.toggleSong = function() {
      // if not playing, play it
      if($scope.ppButt !== 'play') {
        $scope.media.play();
      } else { // else it's playing, pause it
        $scope.media.pause();
      }
      // toggle text
      togglePPButt();
    };

    /*
     * Media.MEDIA_NONE = 0
     * Media.MEDIA_STARTING = 1
     * Media.MEDIA_RUNNING = 2
     * Media.MEDIA_PAUSED = 3
     * Media.MEDIA_STOPPED = 4
     */
    var mediaStatusCallback = function(status) {
      console.log('mediaSatusCallback...');
      if(status === Media.MEDIA_STARTING) {
        $ionicLoading.show({ template: 'Loading...' });
      } else {
        $ionicLoading.hide();
      }
    };


    function togglePPButt() {
      console.log('togglePPButt...');
      return ($scope.ppButt === 'play') ? 'pause' : 'play';
    }

    function onDeviceReady() {
      console.log('onDeviceReady...');

      //console.log(Media);
    }

}]);
