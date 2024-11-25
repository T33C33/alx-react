import $ from 'jquery';
import _ from 'lodash';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');
// $('<div>', {
//   id: 'logo',
//   css: {
//     width: '200px',
//     height: '200px',
//   },
// }).prependTo('body');

// document.getElementById('logo').style.backgroundImage =
//   'url("task_2/assets/holberton-logo.jpg")';

// document.getElementById('logo').style.width = '200px';
// document.getElementById('logo').style.height = '200px';

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));
