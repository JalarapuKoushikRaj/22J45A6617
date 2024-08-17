document.addEventListener('DOMContentLoaded', () => {
    const screen = document.querySelector('.screen');
    const buttons = document.querySelectorAll('#buttons button');
    let input = '';
    let numbers = [];
    const updateScreen = (value) => {
        screen.textContent = value;
    };
    const isPrime = (num) => {
        if (num <= 1) return 'Not Prime';
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return 'Not Prime';
        }
        return 'Prime';
    };
    const fibonacciSeries = (num) => {
        let fib = [0, 1];
        while (fib[fib.length - 1] < num) {
            fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
        }
        return fib.filter(n => n <= num);
    };
    const evenOrOdd = (num) => {
        return num % 2 === 0 ? 'Even' : 'Odd';
    };
    const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
    const calculateAverage = (nums) => {
        const sum = nums.reduce((a, b) => a + b, 0);
        return (sum / nums.length).toFixed(2);
    };
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const buttonId = e.target.id;
            const buttonValue = e.target.textContent;
            if (buttonId === 'p') {
                const num = parseInt(input, 10);
                if (isNaN(num)) {
                    updateScreen('Invalid Input');
                } else {
                    updateScreen(isPrime(num));
                }
                input = '';
            } else if (buttonId === 'oe') {
                const num = parseInt(input, 10);
                if (isNaN(num)) {
                    updateScreen('Invalid Input');
                } else {
                    updateScreen(evenOrOdd(num));
                }
                input = '';
            } else if (buttonId === 'f') {
                const num = parseInt(input, 10);
                if (isNaN(num)) {
                    updateScreen('Invalid Input');
                } else {
                    const series = fibonacciSeries(num);
                    updateScreen(series.join(', '));
                }
                input = '';
            } else if (buttonId === '=') {
                const randomNumber = getRandomNumber();
                numbers.push(randomNumber);
                const average = calculateAverage(numbers);
                updateScreen(`Random: ${randomNumber}, Avg: ${average}`);
                input = '';
            } else {
                input += buttonValue;
                updateScreen(input);
            }
        });
    });
});
