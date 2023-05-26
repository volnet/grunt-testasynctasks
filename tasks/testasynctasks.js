/*
 * grunt-testasynctasks
 * https://github.com/volnet/grunt-testasynctasks
 *
 * Copyright (c) 2023 volnet
 * Licensed under the MIT license.
 */
const path = require("path");

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('testasynctasks', 'Test the long-time tasks in MultiTasks', function() {
    grunt.log.writeln(this.name + ":" + this.target + ' starting');

    let self = this;
    let done = this.async();

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      grunt.log.writeln("this.files.forEach:" + self.target + ":" + f.dest + " starting");

      // https://gruntjs.com/frequently-asked-questions#why-doesn-t-my-asynchronous-task-complete
      // forget invoke `done()`.
      done();

      grunt.log.writeln("this.files.forEach:" + self.target + ":" + f.dest + " end");
    });

    grunt.log.writeln(self.name + ":" + self.target + ' end');
  });

};
