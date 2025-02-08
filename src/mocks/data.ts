import {Address, User} from '../app/models/user.model';

const firstNames = [
  "James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Linda", "William", "Elizabeth",
  "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica", "Thomas", "Sarah", "Charles", "Karen",
  "Christopher", "Nancy", "Daniel", "Lisa", "Matthew", "Betty", "Anthony", "Sandra", "Mark", "Ashley"
];

const lastNames = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
  "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
  "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson"
];

const streets = [
  "Main St", "Elm St", "Oak St", "Maple Ave", "Pine St", "Birch St", "Cedar St", "Walnut Ave", "Cherry Ln", "Willow Dr",
  "Broadway", "Park Ave", "5th Ave", "6th St", "7th St", "Sunset Blvd", "Ocean Dr", "Lakeview Rd", "Hilltop Ln", "Riverside Dr",
  "Meadow Ln", "Forest Rd", "Highland Ave", "Victoria St", "Church St", "Academy Rd", "Bridge St", "Harbor Blvd", "Hillside Dr", "Sycamore St",
  "Greenwood Ave", "Magnolia Dr", "Chestnut St", "Aspen Rd", "Cypress Ln", "Willow St", "Linden Ave", "Laurel Rd", "Juniper St", "Holly Ln",
  "Maplewood Dr", "Dogwood St", "Hickory Ln", "Redwood Dr", "Spruce St", "Poplar Ave", "Evergreen Rd", "Palm Dr", "Bayshore Blvd", "Seaview Rd",
  "Bayview Ave", "Overlook Dr", "Summit St", "Cliffside Dr", "Valley Rd", "Glenwood Ave", "Mountain View Dr", "Creekside Ln", "Brookside Dr", "Ridge Rd",
  "Farmhouse Ln", "Countryside Dr", "Orchard St", "Vineyard Rd", "Lakeshore Dr", "Waterfront Blvd", "Marina Dr", "Sunrise Blvd", "Sunset Rd", "Morningstar Dr",
  "Duskwood Ln", "Starlight Ave", "Moonlit Dr", "Galaxy Blvd", "Aurora Rd", "Northern Lights Dr", "Celestial Ln", "Meteor Dr", "Nebula Rd", "Comet St",
  "Shooting Star Ln", "Rainbow Blvd", "Serenity Rd", "Tranquil Ln", "Peaceful Dr", "Whispering Pines Rd", "Silent Creek Ln", "Horizon Blvd", "Skyline Dr", "Cloudview Ln"
];

const cities = [
  "Springfield", "Metropolis", "Gotham", "Star City", "Central City", "Coast City", "Smallville", "Blüdhaven",
  "National City", "Keystone City"
];

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateUsers(count: number): User[] {
  const users: User[] = [];
  const usedNames = new Set<string>();

  while (users.length < count) {
    const firstName = firstNames[getRandomInt(0, firstNames.length - 1)];
    const lastName = lastNames[getRandomInt(0, lastNames.length - 1)];
    const fullName = `${firstName} ${lastName}`;
    const address: Address = {
      street: streets[getRandomInt(0, streets.length - 1)],
      city: cities[getRandomInt(0, cities.length - 1)]
    };

    if (!usedNames.has(fullName)) {
      usedNames.add(fullName);
      users.push({
        id: users.length + 1,
        name: fullName,
        age: getRandomInt(18, 70),
        address: address
      });
    }
  }

  return users;
}

export const data = {
  users: generateUsers(100),
};
