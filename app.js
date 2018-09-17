'use strict';

$('.checkbox').on('click', function() {
  $(this).toggleClass('checked unchecked');
});

$('.radio-buttons').on('click', function() {
  if ($(this).hasClass('inactive')) {
    $(this).toggleClass('active inactive');
    $(this).siblings().toggleClass('active inactive');
  }
});