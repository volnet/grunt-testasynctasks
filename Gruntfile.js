/*
 * grunt-testasynctasks
 * https://github.com/volnet/grunt-testasynctasks
 *
 * Copyright (c) 2023 volnet
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    testasynctasksstyle01: {
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
    testasynctasksstyle02: {
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
    testasynctasks:{
      "dest01": "src01",
      "dest02": "src02",
      "dest03": "src03",
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['testasynctasks']);

};
