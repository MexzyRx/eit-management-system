import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Tasks } from '../api/tasks.js';
 
import './body.html';
 
Template.body.helpers({
  tasks() {
    return Tasks.find({});
  },
});

Template.body.events({
  'submit .new-task'(event) {
    console.log('Go EFF yourself')
    // Prevent default browser form submit
    // event.preventDefault();
 
    // Get value from form element
    const target = event.target;
    const firstname = target.firstname.value;
    const lastname = target.lastname.value;
    const gender = target.gender.value;
    const dob = target.dob.value;
 
    Meteor.call('tasks.insert', firstname, lastname, gender, dob);

 
    // Clear form
    target.firstname.value = '';
    target.lastname.value = '';
    target.gender.value = '';
    target.dob.value = '';
  },
});