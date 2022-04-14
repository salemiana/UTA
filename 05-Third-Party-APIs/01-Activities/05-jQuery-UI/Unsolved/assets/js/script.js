var formEl = $('#skills-form');
var nameInputEl = $('#skill-name');
var dateInputEl = $('#datepicker');
var skillsListEl = $('#skills-list');

var printSkills = function(name, date) {
  var listEl = $('<li>');
  var listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(skillsListEl);
};

var handleFormSubmit = function(event) {
  event.preventDefault();

  var nameInput = nameInputEl.val();
  var dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput);

  nameInputEl.val('');
  dateInputEl.val('');
};

formEl.on('submit', handleFormSubmit);

// TODO: Add comments to describe the functionality of this jQuery UI interaction

$(function() {
  var skillNames = [
    'Bootstrap',
    'C',
    'C++',
    'CSS',
    'Express.js',
    'Git',
    'HTML',
    'Java',
    'JavaScript',
    'jQuery',
    'JSON',
    'MySQL',
    'Node.js',
    'NoSQL',
    'PHP',
    'Python',
    'React',
    'Ruby'
  ];
  //Enables users to quickly find and select from a pre-populated list
  // of values as they type, leveraging searching and filtering.
  $('#skill-name').autocomplete({
    source: skillNames
  });
});

// TODO: Add comments to describe the functionality of this jQuery UI interaction
$(function() {
  //Select a date from a popup or inline calendar
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true
  });
});

// TODO: Add comments to describe the functionality of this jQuery UI interaction

$(function() {
  //sortable-Reorder elements in a list or grid using the mouse.
  $('#skills-list').sortable({
    placeholder: 'ui-state-highlight'
  });
  //Disable selection of text content within the set of matched elements.
  $('#skills-list').disableSelection();
});
