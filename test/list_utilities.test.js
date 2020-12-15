const expect = require('expect')
const utilities = require('../utils/list_utilities')
const Item = require('../models/Item')
const {connectToDb, disconnectFromDb} = require('../test/config')

let listItemId = null;

before((done) => {
    connectToDb(done)
})

after((done) => {
    disconnectFromDb(done);
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

function tearDownData() {
    return Item.deleteMany();
}

// Delete test data after each test
afterEach((done) => {
    // Execute the deleteMany query
    tearDownData().exec(() => done());
});

describe('getAllPosts with one post', (done) => {
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
})