function get(src, path){
    if (path.includes('.')){
        path.split('.').forEach(function(key){
            if (src[key] !== undefined){
                src = src[key];
            } else {
                return undefined;
        }   });
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