var WebMByteStream = require('webm-byte-stream'),
    path = require('path'),
    fs = require('fs');

// Media Segment durations not included by default
var webmstream = new WebMByteStream({durations: true});

webmstream.on('Initialization Segment', function(data) {
  var initseg = data;
  // ...

});

webmstream.on('Media Segment', function(data) {
    
  var cluster = data.cluster,
      timecode = data.timecode,
      duration = data.duration;
  // ...

    console.log(data)
});

let webm = path.resolve(__dirname,'small.webm');

var file = fs.createReadStream(webm, {flags: 'r'});


// 
file.on('data', function(data) {
  webmstream.write(data);
});