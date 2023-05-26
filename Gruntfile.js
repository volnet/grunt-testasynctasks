/*
 * grunt-testx
 * https://github.com/volnet/grunt-testx
 *
 * Copyright (c) 2023 volnet
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    testx: {
      a: {
        src: "tasks/**/*",
        dest: "dist/test-<%= pkg.name %>.1",
      },
      b: {
        src: "tasks/**/*",
        dest: "dist/test-<%= pkg.name %>.2",
      },
      c: {
        src: "tasks/**/*",
        dest: "dist/test-<%= pkg.name %>.3",
      },
      d: {
        src: "tasks/**/*",
        dest: "dist/test-<%= pkg.name %>.4",
      },
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['testx']);

};
