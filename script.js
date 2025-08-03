//your JS code here. If required.
//your JS code here. If required.
const outputDiv = document.getElementById("output");

const initialPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve([1, 2, 3, 4]);
    }, 3000);
});

initialPromise
    .then((numbers) => {
        const evenNumbers = numbers.filter((num) => num % 2 === 0);
        return new Promise((resolve) => {
            setTimeout(() => {
                outputDiv.textContent = evenNumbers.join(",");
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then((evenNumbers) => {
        const multipliedNumbers = evenNumbers.map((num) => num * 2);
        return new Promise((resolve) => {
            setTimeout(() => {
                outputDiv.textContent = multipliedNumbers.join(",");
                resolve();
            }, 2000);
        });
    });

