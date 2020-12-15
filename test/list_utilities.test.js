const expect = require('expect')
const utilities = require('../utils/list_utilities')
const Item = require('../models/Item')
const {connectToDb, disconnectFromDb} = require('../test/config')

let listItemId = null;

before((done) => {
    connectToDb(done)
})

// Setup and tear down functions
function setupData() {
    let testItem = {};
    testItem.label = 'Test label 1';
    testItem.username = 'tester';
    testItem.completed = true;
    return Item.create(testItem);
}

beforeEach(async function () {
    // Load a test record in setupData
    // Use await so we can access the postId, which is used by some tests
    let listItem = await setupData();
    listItemId = listItem._id;
});

describe('getAllItems with one item', (done) => {
    it('should get a post if one exists', function (done) {
        expectedLength = 1;

        let req = {
            query: {}
        }
        utilities.getAllItems(req).exec((err, item) => {
            expect(Object.keys(item).length).toBe(expectedLength);
            done();
        })
    })
    // The below allows us to assert multiple things in a test
    // it('username of first post should be tester', async function () {
    //     let req = {
    //         query: {}
    //     };
    //     await utilities.getAllItems(req).exec((err, posts) => {
    //         expect(posts[0].username).toBe('tester');
    //     });

    // });
})

describe('add one item to the database', (done) =>{
    it('should add an item', function(done) {
        const req = {
            body: {
                label: 'Test label 2',
                username: 'tester2',
                completed: false
            }
        }

        utilities.addOneItem(req.body).save((err, item) => {
            // check to see if the item's label in the database is the same as the one sent.
            expect(item.label).toBe(req.body.label)
            done()
        })
    })
})

function tearDownData() {
    return Item.deleteMany();
}

// Delete test data after each test
afterEach((done) => {
    // Execute the deleteMany query
    tearDownData().exec(() => done());
});

after((done) => {
    disconnectFromDb(done);
})