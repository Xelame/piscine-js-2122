function RNA (rna) {
    for (var i = 0; i < rna.length; i++) {
        switch (rna[i]) {
            case 'A':
                rna = rna.replace('A', 'U');
            case 'C':
                rna = rna.replace('C', 'G');
            case 'G':
                rna = rna.replace('G', 'C');
            case 'U':
                rna = rna.replace('U', 'A');
        }
    }
    return rna;
}

function DNA (dna) {
    for (var i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case 'A':
                dna = dna.replace('A', 'T');
            case 'C':
                dna = dna.replace('C', 'G');
            case 'G':
                dna = dna.replace('G', 'C');
            case 'T':
                dna = dna.replace('T', 'A');
        }
    }
    return dna; 
}