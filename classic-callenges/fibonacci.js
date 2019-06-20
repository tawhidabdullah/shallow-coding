// iterative solution
const fibonacci = (n) => {
    const fibonacciSeries = [0, 1];
    for (let i = 2; i <= n; i++) {
        const a = fibonacciSeries[i - 1];
        const b = fibonacciSeries[i - 2];
        fibonacciSeries.push(a + b);
    }

    return fibonacciSeries[n];
};


// console.log(fibonacci(8)); 

const fibonacciRecursive = () => {
    if (n < 2) {
        return n;
    };

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};

console.log(fibonacciRecursive());