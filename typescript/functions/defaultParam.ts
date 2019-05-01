function CustomerName(firstName: string, lastName: string, middleName: string = 'No Middle Name') {

    if (middleName) {
        return firstName + " " + middleName + " " + lastName;
    } else {
        return firstName + " " + lastName;
    }
}