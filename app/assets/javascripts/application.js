// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .
$( document ).ready(function() {
  console.log('im working')
  var msg =
  [
    "don't click me",
    "ouch, why did you click me?",
    "stahp it",
    "whyyy",
    "noooo",
    "no more please",
    "argghh",
    "please, i have family...",
    ":( pretty please",
    "once more and im done for",
    "*DEAD*"
  ];

  var c = 0;

  $('#special').on("click", function(e){
    $('#special').html(msg[c]);
    c += 1;

    if(c == 10) {
      $('#special').attr('data-toggle', "modal")
    }

    if(c == 11) {
      $('#special').attr('disabled','disabled');
    }

  });
});


