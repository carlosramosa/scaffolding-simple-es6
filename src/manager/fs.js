'use strict';

const fs = require('fs');

const mkDir = path =>
{
    try {
        fs.mkdirSync(path)
    } catch (err) {
        if (err.code !== 'EEXIST') throw err
    }
};

const createIndex = path =>
    fs.writeFileSync( `${path}/index.js`, `'use strict';`);

module.exports = {
    mkDir
    , createIndex
}