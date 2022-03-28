function RNA (rna) {  
    for (var i = 0; i < rna.length; i++) {
        switch (rna[i]) {
            case 'A':
                rna[i] = 'U';
            case 'C':
                rna[i] = 'G';
            case 'G':
                rna[i] = 'C';
            case 'U':
                rna[i] = 'A';
        }
    }
    return rna;
}

function DNA (dna) {
    for (var i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case 'A':
                dna[i] = 'T';
            case 'C':
                dna[i] = 'G';
            case 'G':
                dna[i] = 'C';
            case 'T':
                dna[i] = 'A';
        }
    }
    return dna[i]; 
}