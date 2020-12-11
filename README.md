# Todo List backend

This project was made to learn the MERN Stack.

You can find the frontend [here](https://github.com/gamesfreak26/todo-list-mern-client)

## Commands

Run the following commands. First run:

`npm install`

This installs the dependencies.

Then run:

`npm start`

## Database

This project uses a local instance of MongoDB.  I have included dummy data in `data/seed_example_list.json`

I used the following command:

mongoimport --db teej_mern --collection list --file data/seed_example_list.json

which creates a database called teej_mern and a collection called list and populates it with things inside seed_example_list.json
