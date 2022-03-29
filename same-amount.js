const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw
ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`

function sameAmount (str, regex1, regex2) {
    let regex1g = new RegExp(regex1, 'g');
    let regex2g = new RegExp(regex2, 'g');
    let result1 = regex1g.exec(str);
    let result2 = regex2g.exec(str);
    if (result1 == null || result2 == null) {
        return false;
    }
    return result1.length === result2.length;
}

console.log(data, /q /, /qqqqqqq/)