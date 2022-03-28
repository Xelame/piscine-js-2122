function get(src, path){
    path.split('.').forEach(function(key){
        if (src[key] === undefined || src[key] === null) {
            return undefined;
        } else {
            src = src[key];
        }
    });
    return src;
}

const src = { nested: { key: 'peekaboo' } }
const path = 'nested.key';
console.log(get(src, path));