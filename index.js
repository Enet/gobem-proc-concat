'use strict';

module.exports = function () {
    let result;
    return {
        before: function (next) {
            result = '';
            next();
        },

        process: function (next, input, output, args, content, path) {
            result += (content || '') + '\n';
            next();
        },

        after: function (next, input, output, args) {
            output.set(args[1] || 'concat.txt', result);
            next();
        }
    };
};
