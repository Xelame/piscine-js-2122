function RNA (rna) {
    for (var i = 0; i < rna.length; i++) {
        switch (rna[i]) {
            case 'A':
                rna.replace('A', 'U');
            case 'C':
                rna.replace('C', 'G');
            case 'G':
                rna.replace('G', 'C');
            case 'U':
                rna.replace('U', 'A');
        }
    }
    return rna;
}

function DNA (dna) {
    for (var i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case 'A':
                dna.replace('A', 'T');
            case 'C':
                dna.replace('C', 'G');
            case 'G':
                dna.replace('G', 'C');
            case 'T':
                dna.replace('T', 'A');
        }
    }
    return dna; 
}