
var events = require('events');
var util = require('util');

var AudioDevice = {
  play: function(track) {
    console.log('Playing track ', track);
  },

  stop: function() {
    console.log('Audio Device stopped');
  },
};

function MusicBox() {
  var playing = false;
  events.EventEmitter(this);
}

util.inherits(MusicBox, events);

var myMusic = new MusicBox();

myMusic.on('play', function(track) {
  this.playing = true;
  this.emit('error', 'untable to play track ' + track);
});

myMusic.on('stop', function() {
  this.playing = false;
  AudioDevice.stop();
});

myMusic.on('error', function(error) {
  console.log(error);
});

setTimeout(function() {
  myMusic.emit('play', 'Moments like this - Charlie Byrd');
}, 2000);
