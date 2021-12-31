// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

/* global $*/
// $(function(){
//   $('h1').mouseover(function(){
//     $('h1').css({'background-color': '#0000FF'});
//   });
// });
$(function() {
    // hideボタン
    $('#tab1').click(function() {
      $('.tab[id = "tab1"]').show();
        $('.tab[id != "tab1"]').hide();
    });
});

$(function() {
    // hideボタン
    $('#tab2').click(function() {
      $('.tab[id = "tab2"]').show();
        $('.tab[id != "tab2"]').hide();
    });
});



$(function() {
    // showボタン
    $('#btn-show-01').click(function() {
        $('#demo-01').show();
    });

    // resetボタン
    $('#btn-reset-01').click(function() {
        $('#demo-01').hide();
    });
});

$(function() {
    // hideボタン
    $('#btn-hide-02').click(function() {
        $('#demo-02').hide();
    });

    // resetボタン
    $('#btn-reset-02').click(function() {
        $('#demo-02').show();
    });
});