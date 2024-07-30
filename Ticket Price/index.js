function getTicketPrice() {
    let age = prompt("Please enter your age:");

    age = parseInt(age);

    let price;
    if (age <= 12) {
        price = 10;
    } else if (age >= 13 && age <= 17) {
        price = 15;
    } else {
        price = 20;
    }

    alert("The price of your movie ticket is $" + price + ".");
}

getTicketPrice();
