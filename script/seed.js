'use strict';
const {
  db,
  models: { User, Product },
} = require('../server/db');
/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log('db synced!');
  // Creating Users
  const users = await Promise.all([
    User.create({
      firstName: 'Jake',
      lastName: 'Jones',
      address: '123 N St.',
      password: '12345678',
      email: 'jake@abc.com',
      role: 'nonAdmin',
    }),
    User.create({
      firstName: 'Cody',
      lastName: 'McCollum',
      address: '39 Main St',
      password: '12345678',
      email: 'Jamie@abc.com',
      role: 'admin',
    }),
    User.create({
      firstName: 'Sarah',
      lastName: 'Meeks',
      address: '404 Franklin Ave.',
      password: '12345678',
      email: 'sarah@abc.com',
      role: 'nonAdmin',
    }),
    User.create({
      firstName: 'Henry',
      lastName: 'Williams',
      address: '4034 Brookly Ave',
      password: '12345678',
      email: 'HW@abc.com',
      role: 'admin',
    }),
    User.create({
      firstName: 'Jessica',
      lastName: 'Hayes',
      address: 'North Fork HWY',
      password: '12345678',
      email: 'JessicaH@abc.com',
      role: 'admin',
    }),
  ]);
  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);
  // Creating Products
  const products = await Promise.all([
    Product.create({
      name: 'Gibson 2020 Les Paul Modern Solid Body',
      type: 'Guitar',
      style: 'Electric',
      price: 2379.99,
      quantity: 3,
      description:
        'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
      imageUrl:
        'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG1.jpeg',
    }),
    Product.create({
      name: 'Gibson SG Standard Solid Body',
      type: 'Guitar',
      style: 'Electric',
      price: 1299.99,
      quantity: 2,
      description:
        "Comfortable, lightweight mahogany body. Fast mahogany rounded neck; 24.75-inch scale length. Bound rosewood fingerboard with acrylic trapezoid inlays. Plek'd fretboard for effortless playability.",
      imageUrl:
        'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG2.jpeg',
    }),
    Product.create({
      name: 'Gibson Les Paul Standard Solid Body',
      type: 'Guitar',
      style: 'Electric',
      price: 2079.99,
      quantity: 5,
      description:
        'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
      imageUrl:
        'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG3.jpeg',
    }),
    Product.create({
      name: 'Gibson Les Paul Traditional Pro V Solid Body',
      type: 'Guitar',
      style: 'Electric',
      price: 1699.99,
      quantity: 1,
      description:
        'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
      imageUrl:
        'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG4.jpeg',
    }),
    Product.create({
      name: 'Gibson Firebird Solid Body',
      type: 'Guitar',
      style: 'Electric',
      price: 1389.99,
      quantity: 6,
      description:
        'Its typical design features a solid mahogany body with a carved maple top and a single cutaway, a mahogany set-in neck with a rosewood fretboard, two pickups with independent volume and tone controls, and a stoptail bridge, although variants exist.',
      imageUrl:
        'http://yellowroomrecording.com/wp-content/uploads/2022/11/EG5.jpeg',
    }),
  ]);
  console.log(`seeded ${products.length} products`);
  console.log(`seeded successfully`);
  return {
    users: {
      Jake: users[0],
      Cody: users[1],
    },
    products: {
      'Les Paul': products[0],
    },
  };
}
/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}
/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}
// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
