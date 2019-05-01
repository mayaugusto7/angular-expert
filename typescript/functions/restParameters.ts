// ... semelhante ao var args do java

function clientName(firstClient: string, ...restOfClient: string[]) {
    console.log(firstClient + " " + restOfClient.join(" "));
}
clientName ("Scott", "Steve", "Bill", "Sergey", "Larry");