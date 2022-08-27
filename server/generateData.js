const faker = require('faker');

var database = { addresses: [] };

for (var i = 1; i <= 15; i++) {
    database.addresses.push({
        id: i,
        name: faker.name.firstName() + ' ' + faker.name.lastName(),
        streetAddress: faker.address.streetAddress(),
        city:  faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        phone: faker.phone.phoneNumber(),
    })
}

console.log(JSON.stringify(database));