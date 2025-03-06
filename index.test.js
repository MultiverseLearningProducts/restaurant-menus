const {sequelize} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');
const {Item} = require("./models/Item");

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

    test("Multiple menus can be added to a restaurant", async () => {
        const menu1 = await Menu.findOne({ where: {title: 'Dinner'}})
        const menu2 = await Menu.findOne({ where: {title: 'Breakfast'}})
        const restaurant = await Restaurant.findOne({
            where: {
                name: 'AppleBees'
            }})
        await restaurant.addMenus([menu1, menu2])
        expect((await restaurant.getMenus())[0].title).toBe(menu2.title)
        expect((await restaurant.getMenus())[1].title).toBe(menu1.title)
    })


    test('can create Items', async () => {
        const item = await Item.create({
            name: 'name',
            image: 'test',
            price: 999,
            vegetarian: true
        })
        expect((await Item.findOne({name: 'name'})).name).toEqual('name')
    });

    test('can update Items', async () => {
        const item = await Item.create({
            name: 'name2',
            image: 'test',
            price: 999,
            vegetarian: true
        })
        expect((await Item.findOne({name: 'name2'})).image).toEqual('test')

        item.update({
            image: 'different image'
        })

        expect((await Item.findOne({name: 'name2'})).image).toEqual('different image')
    });

    test('can delete Items', async () => {
        const item = await Item.create({
            name: 'name2',
            image: 'test',
            price: 999,
            vegetarian: true
        })
        expect((await Item.findOne({name: 'name2'})).image).toEqual('test')

        item.destroy()

        expect(await Item.findOne({name: 'name2'})).toEqual(null)
    });

    test('a menu can have multiple items', async () => {
        const item1 = await Item.create({
            name: 'name',
            image: 'test2',
            price: 1,
            vegetarian: false
        })
        const item2 = await Item.create({
            name: 'name2',
            image: 'test',
            price: 999,
            vegetarian: true
        })
        const menu = await Menu.findOne({ where: {title: 'Dinner'}})
        await menu.addItems([item1, item2])
        expect((await menu.getItems())[0].vegetarian).toEqual(false)
        expect((await menu.getItems())[1].vegetarian).toEqual(true)
    });
})