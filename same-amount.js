const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw
 ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`

function sameAmount (str, regex1, regex2) {
    let result1 = str.match(regex1, 'g');
    let result2 = str.match(regex2, 'g');
    if (result1 == null || result2 == null) {
        return false;
    }
    console.log(result1.length, result2.length);
    return result1.length == result2.length;
}

sameAmount(data, /q /, /qqqqqqq/)