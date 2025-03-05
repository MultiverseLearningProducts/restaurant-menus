const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        await sequelize.sync({ force: true });
        await Restaurant.bulkCreate(seedRestaurant)
        await Menu.bulkCreate(seedMenu)
    })

    test('can create a Restaurant', async () => {
        await Restaurant.create({
            name: 'Chik-fil-a',
            location: 'Texas',
            cuisine: 'Chicken',
        })
        const chickfila = await Restaurant.findOne({where:{name: 'Chik-fil-a'}})
        expect(chickfila.name).toEqual('Chik-fil-a')
    });

    test('can create a Menu', async () => {
        const menu = await Menu.create({
            title: "a menu"
        })
        expect(menu.title).toEqual("a menu")
    });

    test('can find Restaurants', async () => {
        const foundRestaurant = await Restaurant.findOne({
            where: {
                name: 'LittleSheep'
            }})
        expect(foundRestaurant.location).toEqual('Dallas')
    });

    test('can find Menus', async () => {
        const foundMenu = await Menu.findOne({ where: {title: 'Lunch'}})
        expect(foundMenu.title).toEqual('Lunch')
    });

    test('can update Restaurants', async () => {
        const foundRestaurant = await Restaurant.findOne({
            where: {
                name: 'AppleBees'
            }})
        expect(foundRestaurant.location).toEqual('Texas')

        await foundRestaurant.update({
            location: 'Houston'
        })
        expect(foundRestaurant.location).toEqual('Houston')


    });


    test('can update Menus', async () => {
        const foundMenu = await Menu.findOne({ where: {title: 'Breakfast'}})
        expect(foundMenu.title).toEqual('Breakfast')

        await foundMenu.update({
            title: 'Beer',
        })
        expect(foundMenu.title).toEqual('Beer')
    });

    test('can delete Restaurants', async () => {
        const foundRestaurant = await Restaurant.findOne({
            where: {
                name: 'LittleSheep'
            }})
        expect(foundRestaurant.location).toEqual('Dallas')
        await foundRestaurant.destroy();

        const notFoundRestaurant = await Restaurant.findOne({
            where: {
                name: 'LittleSheep'
            }})
        expect(notFoundRestaurant).toEqual(null)
    });

    test('can delete Menus', async () => {
        const foundMenu = await Menu.findOne({ where: {title: 'Lunch'}})
        expect(foundMenu.title).toEqual('Lunch')

        await foundMenu.destroy();
        const notFoundMenu = await Menu.findOne({ where: {title: 'Lunch'}})
        expect(notFoundMenu).toEqual(null)
    });
})