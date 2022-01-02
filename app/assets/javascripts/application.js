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
    // hideボタン
    $('#tab3').click(function() {
      $('.tab[id = "tab3"]').show();
        $('.tab[id != "tab3"]').hide();
    });
});

$(function() {
    // hideボタン
    $('#tab4').click(function() {
      $('.tab[id = "tab4"]').show();
        $('.tab[id != "tab4"]').hide();
    });
});

$(function() {
    // hideボタン
    $('#tab5').click(function() {
      $('.tab[id = "tab5"]').show();
        $('.tab[id != "tab5"]').hide();
    });
});

$(function() {
    $('.tora1').click(function() {
     $('.tora1').addClass('tora1-a');
  });
});

$(function() {
    $('.tora2').click(function() {
     $('.tora2').addClass('tora2-a');
  });
});

$(function() {
    $('.tora3').click(function() {
     $('.tora3').addClass('tora3-a');
  });
});

$(function() {
    $('.tora4').click(function() {
     $('.tora4').addClass('tora4-a');
  });
});

$(function() {
    $('.tora5').click(function() {
     $('.tora5').addClass('tora5-a');
  });
});

$(function() {
    $('.tora6').click(function() {
     $('.tora6').addClass('tora6-a');
  });
});

$(function() {
    $('.tora7').click(function() {
     $('.tora7').addClass('tora7-a');
  });
});

$(function (){
  $('.document').slideDown(function (){
    $('.document').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp(1000);
  });
});
