'use strict';

const { mkDir, createIndex, createReadme } = require('./fs');
const npmInit = require('./npmInit');

const execute = ({ name, path }) => {
    const newPath = `${path}\/${name}`;

    mkDir(newPath);

    createIndex(newPath);

    createReadme({ path: newPath, name });

    npmInit(newPath);

};

module.exports.execute = execute;