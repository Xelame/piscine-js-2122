function RNA(rna) {
    let dna = '';
    for (var i = 0; i < rna.length; i++) {
        switch (rna[i]) {
            case 'T':
                dna += 'A';
                break
            case 'G':
                dna += 'C';
                break
            case 'C':
                dna += 'G';
                break
            case 'A':
                dna += 'U';
                break
        }
    }
    return dna;
}

function DNA(dna) {
    let rna = '';
    for (var i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case 'U':
                rna += 'A';
                break
            case 'G':
                rna += 'C';
                break
            case 'C':
                rna += 'G';
                break
            case 'A':
                rna += 'U';
                break
        }
    }
    return rna;
}

console.log(RNA('TACG'));