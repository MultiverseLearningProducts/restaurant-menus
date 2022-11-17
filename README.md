![logo](https://user-images.githubusercontent.com/44912347/202296600-c5f247d6-9616-49db-88f0-38433429d781.jpg)

# Restaurant Menus Database
Today, we’re building a Sequelize DB for restaurants to organize their menus. **We will be using this across the next few lessons, so make sure to save this in a useful location!**

We’ll have 2 database models:
- Restaurants
- Menus

## Part 1: Database Creation
Now that we have the starting point, let’s get to work coding it out!  Use the following as a guide.

### Setup and Tests
- Download all depndencies by running `npm install`
- Run `npm test` to run all the tests.
- The test file is created, but each test is currently empty. Initially, you’ll get many errors and messages like `Test suite failed to run since there are missing parts`. Let’s get to that!

### TODOs
- Follow the TODOs in the project (you can [search across files](https://code.visualstudio.com/docs/editor/codebasics#_search-across-files) to find the spots to edit!)

### Connection
- The connection will have to be instantiated using `new Sequelize()`

### Models
- Define the models! Here are the details:
  - The `Restaurant` model should have name location and cuisine properties, all of which are strings.
  - The `Menu` model should have title which is also a string.

### Tests
- At this point, we can start writing the tests! Fill out each of the tests in the suite, following the describe statement provided.
- Make sure to read the following tip regarding how to use the seed data.
<details>

You’ll notice that a file called `seedData.js` has been imported on lines 3 to 6 at the top of `index.test.js`. If you look at this data you will see that it is a list of objects that can be utilized when testing your project. For example, if you run the following you will get a value from the `seedData.js` that can be utilized in your tests.

```js
console.log(seedRestaurant[0]); // Returns "AppleBees"
```

</details>

### Commit and Push
- `git add .`, `git commit -m “somemessage”`, and `git push` so we can see your work!

