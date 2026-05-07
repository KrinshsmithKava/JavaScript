// let address = createAddress('a', 'b', 'c');
let address = new Address('a', 'b', 'c');

console.log(address);

// factory Function
function createAddress(street, city, zipcode) {
    return {
        street,
        city,
        zipcode
    }
}

// Constructor Function
function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}