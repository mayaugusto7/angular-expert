function returnWhatReceived<T>(arg: T): T {
    return arg;
}

console.log(returnWhatReceived("Maycon Ribeiro"));
console.log(returnWhatReceived(29));

let stringOutput = returnWhatReceived<string>("return this");
let numberOutput = returnWhatReceived<number>(101);

console.log(stringOutput);
console.log(numberOutput);