import $ from 'jquery';
import _ from 'lodash';

// Add elements to the DOM
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Initialize counter
let count = 0;

// Function to update the counter
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

const debouncedUpdateCounter = _.debounce(updateCounter, 500);

$('button').on('click', debouncedUpdateCounter);
