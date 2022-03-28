function RNA (rna) {
    let dna = '';
    for (var i = 0; i < rna.length; i++) {
        switch (rna[i]) {
            case 'A':
                dna += 'T';
            case 'C':
                dna += 'G';
            case 'G':
                dna += 'C';
            case 'U':
                dna += 'A'; 
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
            case 'C':
                rna += 'G';
            case 'G':
                rna += 'C';
            case 'T':
                rna += 'A';
        }
    }
    return rna; 
}