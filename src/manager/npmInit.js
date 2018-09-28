'use strict';

module.exports = dir => {

    const init = require('init-package-json')
    const path = require('path')
    const initFile = path.resolve(process.env.HOME, '.npm-init')
    const configData = { some: 'extra stuff' }
    init(dir, initFile, configData, (er, data) => console.log(data));
};