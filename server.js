var zetta = require('zetta');
var Buzzer = require('zetta-buzzer-bonescript-driver');
var Microphone = require('zetta-microphone-bonescript-driver');
var LEDs = require('zetta-led-bonescript-driver');

var app = require('./apps/app');

zetta()
  .use(Buzzer, 'P9_14')
  .use(Microphone, 'P9_36')
  .use(LEDs, 'USR0', 'USR1', 'USR2', 'USR3')
  .use(app)
  .link('http:hello-zetta.herokuapp.com')
  .listen(1338, function(){
   console.log('Zetta is running at http://beaglebone.local:1338');
});