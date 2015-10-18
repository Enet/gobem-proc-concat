'use strict';

module.exports = function (resultPath) {
    let result;
    return {
        before: function (next) {
            result = '';
            next();
        },

        process: function (next, input, output, config, content, path) {
            result += (content || '') + '\n';
            next();
        },

        after: function (next, input, output, config) {
            output.set('' + (resultPath || 'concat.txt'), result);
            next();
        }
    };
};
