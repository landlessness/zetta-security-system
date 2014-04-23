module.exports = function(server) {
  var buzzerQuery = server.where({type: 'buzzer'});
  var microphoneQuery = server.where({type: 'microphone'});
  server.observe([buzzerQuery, microphoneQuery], function(buzzer, microphone){
    microphone.streams.volume.on('data', function(msg){
      if (buzzer.state === 'off' && msg.data > 30) {
        buzzer.call('turn-on-pulse', function() {});
        setTimeout(function(buzzer) {
            buzzer.call('turn-off', function(err) {})
          }, 3000, buzzer);
      }
    });
  });
}