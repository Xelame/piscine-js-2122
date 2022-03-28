function RNA (rna) {
    let dna = '';
    for (var i = 0; i < rna.length; i++) {
        switch (rna[i]) {
            case 'A':
                dna += 'T';
                break
            case 'C':
                dna += 'G';
                break
            case 'G':
                dna += 'C';
                break
            case 'U':
                dna += 'A'; 
                break
        }
    }
    return dna;
}

function DNA (dna) {
    let rna = '';
    for (var i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case 'A':
                rna += 'U';
                break
            case 'C':
                rna += 'G';
                break
            case 'G':
                rna += 'C';
                break
            case 'T':
                rna += 'A';
                break
        }
    }
    return rna; 
}