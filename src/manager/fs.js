'use strict';

const fs = require('fs');
const { indexJsTemplate, readmeTemplate } = require('./data');

const mkDir = path =>
{
    try {
        fs.mkdirSync(path)
    } catch (err) {
        if (err.code !== 'EEXIST') throw err
    }
};

const createIndex = path =>
    fs.writeFileSync( `${path}/index.js`, indexJsTemplate);

const createReadme = ({ path, name }) =>
    fs.writeFileSync( `${path}/README.md`, readmeTemplate(name));

module.exports = {
    mkDir
    , createIndex
    , createReadme
}