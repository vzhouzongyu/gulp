module.exports = function(gulp, plugins) {

    var argv = require('yargs').argv,
        path = require('path'),
        svn = require('svn-push'),
        log = console.log;

    var that = this;
    that.message = argv.m || '初始化项目';
    var pkg = require('../package.json');
    var proj_namespace = [pkg.description, pkg.name, pkg.version+'/'].join('/')
}