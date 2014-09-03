Departments = new Meteor.Collection('Departments');
Agents = new Meteor.Collection('Agents');

var Schemas = {};

Schemas.Department = new SimpleSchema({
    name : {
        type : String,
        label : 'Department Name',
        max : 200
    }
});

Departments.attachSchema(Schemas.Department);