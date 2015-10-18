# gobem-proc-concat
This processor for [gobem](https://github.com/Enet/gobem) concatenates all files in a single one. By default the path of the output's file is `concat.txt`, but you can change it in the first argument.

### Example for **build.js**
```javascript
module.exports = function () {
    return [
        ['select', 0, /^components\/(\w+)\/\1\.js$/],
        ['gobem-proc-concat', 'bundle.js'],
        ['write', 1]
    ]; // this array will be used as build instructions
};
```
