function findExpression(number) {
    if (number > 0) {
        if (number/2 < 4 && (number/2) < 2 ) {
            console.log(" *2")
            return findExpression(number/2);
        } else {
            console.log(" +4");
            return findExpression(number-4);
        }
    }
}

findExpression(14);