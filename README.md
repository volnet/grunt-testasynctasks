# grunt-testasynctasks

> Test asynchronous task not completed.

## How to run

```bash
npm install
grunt
```

## Issues: Why doesn't my asynchronous task complete?

Official FAQ: <https://gruntjs.com/frequently-asked-questions#why-doesn-t-my-asynchronous-task-complete>

```JavaScript
grunt.registerMultiTask('testasynctasks', 'Test the long-time tasks in MultiTasks', function() {
    grunt.log.writeln(this.name + ":" + this.target + ' starting');

    let self = this;
    let done = this.async();

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      grunt.log.writeln("this.files.forEach:" + self.target + ":" + f.dest + " starting");

      // https://gruntjs.com/frequently-asked-questions#why-doesn-t-my-asynchronous-task-complete
      // forget invoke `done()`.
      // done();

      grunt.log.writeln("this.files.forEach:" + self.target + ":" + f.dest + " end");
    });

    grunt.log.writeln(self.name + ":" + self.target + ' end');
  });
```

output:

```bash
PS E:\github.com\volnet\grunt-testasynctasks> grunt
Running "testasynctasks:dest01" (testasynctasks) task
testasynctasks:dest01 starting
this.files.forEach:dest01:dest01 starting
this.files.forEach:dest01:dest01 end
testasynctasks:dest01 end
PS E:\github.com\volnet\grunt-testasynctasks> 
```

output(expected):

```bash
PS E:\github.com\volnet\grunt-testasynctasks> grunt
Running "testasynctasks:dest01" (testasynctasks) task
testasynctasks:dest01 starting
this.files.forEach:dest01:dest01 starting
this.files.forEach:dest01:dest01 end
testasynctasks:dest01 end

Running "testasynctasks:dest02" (testasynctasks) task
testasynctasks:dest02 starting
this.files.forEach:dest02:dest02 starting
this.files.forEach:dest02:dest02 end
testasynctasks:dest02 end

Running "testasynctasks:dest03" (testasynctasks) task
testasynctasks:dest03 starting
this.files.forEach:dest03:dest03 starting
this.files.forEach:dest03:dest03 end
testasynctasks:dest03 end

Done.
PS E:\github.com\volnet\grunt-testasynctasks> 
```

## Solution

1. If you can control the code, you can call `done()` explicit.
2. If you can't control the code, you can try setTimeout to close the async task. [issues](https://github.com/volnet/grunt-crx/blob/master/Issues.md), [code](https://github.com/volnet/grunt-crx/blob/a26dc60d7da157b56b68b1f4402c62bd8dcf9257/tasks/crx.js#L23).
