'use strict';

const { mkDir, createIndex } = require('./fs');
const npmInit = require('./npmInit');

const execute = ({ name, path }) => {
    let newPath = `${path}\/${name}`;

    mkDir(newPath);

    createIndex(newPath);

    npmInit(newPath);

};

module.exports.execute = execute;