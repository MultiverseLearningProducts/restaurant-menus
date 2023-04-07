![logo](https://user-images.githubusercontent.com/44912347/202296600-c5f247d6-9616-49db-88f0-38433429d781.jpg)

# Restaurant Menus Database
Today, we’re building a Sequelize DB for restaurants to organize their menus. **We will be using this across the next few lessons, so make sure to save this in a useful location!**

We’ll have 2 database models:
- `Restaurant`
- `Menu`

## Part 1: Database Creation
Now that we have the starting point, let’s get to work coding it out! Use the following as a guide.

### Install Dependencies

1. Once the forked repository has been cloned, make sure to run the command below. This will install all dependencies.

```Shell
npm install
```

2. Additionally, you’ll need to create the following file in the root of the project: db.sqlite. This database file is considered sensitive in nature, so it will not be pushed up to a repository when the project is pushed.

### Running Tests
1. To run the tests, run

```shell
npm test
```

2. The test file is created, but each test is currently empty. Initially, you’ll get many errors and messages like `Test suite failed to run` since there are missing parts. Let’s get to that!

### Restaurant, Menu, and Tests
> Code in all the spots where it says TODO in the project (you can [search across files](https://code.visualstudio.com/docs/editor/codebasics#_search-across-files) to find the spots to edit!).

1. In `db.js`, create a new sequelize connection.
2. In `/models/Restaurant.js`, define a `Restaurant` model. The `Restaurant` model should have the following properties:
  - `name`: a string
  - `location`: a string
  - `cuisine`: a string
3. In `/models/Menu.js`, define a `Menu` model. The `Menu` model should have the following properties:
  - `title`: a string
4. Now that we have our models defined, it is time to create some tests in `index.test.js` to verify that our models function as intended. Create tests that do the following:
  - Can create a new `Restaurant`
  - Can create a new `Menu`
  - Can update a `Restaurant` instance
  - Can update a `Menu` instance
  - Can delete a `Restaurant` instance
  - Can delete a `Menu` instance

### Using Seed Data in Tests
Make sure to read the following tip regarding how to use the seed data.

> You’ll notice that a file called seedData.js has been imported on lines 3 to 6 at the top of index.test.js. If you look at this data you will see that it is a list of objects that can be utilized when testing your project. For example if you run the following you will get a value from the seedData.js that can be utilized in your tests.

```javascript
console.log(seedRestaurant[0]); // Returns "AppleBees"
```

## Part 2: Associations and Eager Loading
We are now going to add associations and eager loading to the database we created in part 1.

### Associations: One-to-Many
1. In `./models/index.js`, after the `require`s, but before the `module.exports`, associate the 2 models:
  - Multiple `Menu` instances can be added to a `Restaurant`.
2. In `index.test.js`, create a test to account for the association

### New Model: Item

1. Define an `Item` model! Here are the details:
  - Create a new `Item` file in the models directory
  - The `Item` model should have the following properties:
    - `name`: a string
    - `image`: a string
    - `price`: a number
    - `vegetarian`: a boolean
2. Make sure to export the model and import it anywhere you need it.
3. Create tests to verify you can perform CRUD operations using the `Item` model.

### Association: `Menu` `Items`
1. In `./models/index.js`, associate the `Menu` and `Item` models:
  - Multiple `Item` instances can be added to a `Menu`.
  - Many `Menu` instances can have an `Item`.
2. Add another test to account for the association

### Eager Loading
1. Add a test or two that eager loads the data.
  - For example, find all Menu instance, and include their `Item` model
