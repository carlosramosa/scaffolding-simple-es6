'use strict';

const inquirer = require ('inquirer');
const questions = require('./questions');
const { execute } = require('./manager');

module.exports = () =>
    inquirer
        .prompt(questions())
        .then(execute);


