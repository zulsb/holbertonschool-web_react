import $ from 'jquery';
import _ from 'lodash';
import '../css/body.css';

$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
let track = 0;
function updateCounter() {
  track++;
  $('#count').html(`${track} clicks on the button`);
};
$('button').on('click', _.debounce(updateCounter, 500));
