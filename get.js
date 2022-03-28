function get(src, path){
    let isundef = false
    if (path.includes('.')){
        path.split('.').forEach(function(key){
            if (src[key] !== undefined){
                src = src[key];
            } else {
                isundef = true;
        }   });
        if (isundef){
            return undefined;
        } else {
            return src;
        }
    } else {
        if (!(src[path] === undefined)) {
            return src[path];
        } else {
            return undefined;
        }
    }
}

const src = { nested: { key: 'peekaboo' } }
const path = 'nested.key';
console.log();