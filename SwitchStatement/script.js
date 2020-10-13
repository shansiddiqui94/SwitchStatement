const menu = prompt("What would you like to eat")
let price;
switch (menu) {
    case ("Burger"):
        price = "$10"
        break;

    case ("Steak"):
        price = "$25"
        break;

    case ("Salmon"):
        price = "$20"
        break;

    case ("Shrimp"):
        price = "$20"
        break;

    case ("Chicken"):
        price = "$15"
        break;

    default:
        price = "Option is not available"
}
console.log(price)