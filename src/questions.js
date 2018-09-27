'use strict';

const { compose } = require('lodash/fp');

const getPath = () => require('path').dirname(require.main.filename);
const makeQuestions = currentPath => [
{
    type: 'input'
    , name: 'name'
    , message: 'Enter the module name:'
}
, {
    type: 'input'
    , name: 'path'
    , message: 'Enter the path'
    , default: process.cwd().replace('scaffolding-simple-es6', '')
}
];

module.exports = compose(makeQuestions, getPath,);
