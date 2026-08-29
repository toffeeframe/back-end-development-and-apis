function isPrime(n) {
    // Check if n is 1 or 0
    if (n <= 1)
        return false;

    // Check if n is 2 or 3
    if (n == 2 || n == 3)
        return true;

    // Check whether n is divisible by 2 or 3
    if (n % 2 == 0 || n % 3 == 0)
        return false;
    // Check numbers of the form 6k ± 1 up to √n
    for (let i = 5; i *i<=n; i = i + 6)
        if (n % i == 0 || n % (i + 2) == 0)
            return false;

    return true;
};

module.exports = { isPrime };
