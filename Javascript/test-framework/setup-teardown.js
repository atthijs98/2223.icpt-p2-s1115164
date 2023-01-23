const setupTeardown = {
    beforeEachs: [],
    afterEachs: [],
    afterAlls: [],
    beforeAlls: []
};

exports.beforeEach = function (fn) {
    setupTeardown.beforeEachs.push(fn);
};

exports.afterEach = function (fn) {
    setupTeardown.afterEachs.push(fn);
};

exports.beforeAll = function (fn) {
    setupTeardown.beforeAlls.push(fn);
};

exports.afterAll = function (fn) {
    setupTeardown.afterAlls.push(fn);
};

exports.setupTeardown = setupTeardown;
