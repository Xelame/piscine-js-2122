function sums(n, m) {
    if (n == m) {
        return 1 + sums(n, m - 1);
    }
    if (m == 0 || n < 0) {
        return 0;
    }
    if (n == 0 || m == 1) {
        return 1;
    }
    return sums(n, m - 1) + sums(n - m, m);

}

console.log(sums(4, 3));