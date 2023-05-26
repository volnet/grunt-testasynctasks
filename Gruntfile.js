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
    testxstyle01: {
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
    },
    testxstyle02: {
      task01: {
        "src": "src-task01/",
        "dest": "dest-task01/"
      },
      task02: {
        "src": "src-task02/",
        "dest": "dest-task02/"
      },
      task03: {
        "src": "src-task03/",
        "dest": "dest-task03/"
      },
    },
    testx:{
      "dest03": "src03",
      "dest04": "src04",
      "dest05": "src05",
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['testx']);

};
