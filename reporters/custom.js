const mocha = require('mocha');
const fs = require('fs');
const path = require('path');
const { EVENT_TEST_FAIL, EVENT_RUN_END, EVENT_TEST_PASS } = mocha.Runner.constants;

class MyCustomReporter {
  constructor(runner) {
    this.failedTests = [];

    runner.on(EVENT_TEST_PASS, (test) => {
      console.log(`✅ PASS: ${test.title}`);
    });

    runner.on(EVENT_TEST_FAIL, (test, err) => {
      console.log(`❌ FAIL: ${test.title}`);
      console.error(err);
      this.failedTests.push(test);
    });

    runner.on(EVENT_RUN_END, () => {
      if (this.failedTests.length === 0) {
        console.log('\n🎥 There are all passed tests.');
      } else {
        console.log('\n🎥 Some tests failed. Keeping video for debugging:');
        this.failedTests.forEach((test) => {

          const specFile = test.file || 'unknown-spec';
          const specName = path.basename(specFile, path.extname(specFile));
          const videoPath = path.join('cypress/videos', `${specName}.mp4`);
          console.log(`🔗 Video: ${videoPath}`);
        });
      }
    });
  }
}

module.exports = MyCustomReporter;
