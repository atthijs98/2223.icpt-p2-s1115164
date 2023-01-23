const path = require("path");

const glob = require("glob");

const { showTestResults } = require("./test");

(async function runTests() {
    // Search for files ['tests/01.test.js', 'tests/02.test.js', …]
    const testFiles = glob.sync("**/*.test.js");

    // Executes all found test files
    await Promise.all(
        Array.from(testFiles).map(async (testFile) => {
            console.log(testFile);
            require(path.join("..", testFile));
        })
    );

    showTestResults();
})();
