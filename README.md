# gobem-proc-concat
This processor for [gobem](https://github.com/Enet/gobem) concatenates all files in a single one. By default the path of the output's file is `concat.txt`, but you can change it in the first argument.

### Example for **build.gb**
```javascript
select 0 ^components\/(\w+)\/\1\.js$
process gobem-proc-concat bundle.js
write 1
```
