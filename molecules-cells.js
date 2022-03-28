function RNA (rna) {
    let dna = ''    
    for (var i = 0; i < rna.length; i++) {
        switch (rna[i]) {
            case 'A':
                dna += 'U';
            case 'C':
                dna += 'G';
            case 'G':
                dna += 'C';
            case 'U':
                dna += 'A';
        }
    }
    return rna;
}

function DNA (dna) {
    let rna = ''
    for (var i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case 'A':
                rna += 'T';
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