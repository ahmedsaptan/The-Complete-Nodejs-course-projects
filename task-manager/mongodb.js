const mongodb = require("mongodb");
const {MongoClient, ObjectID} = mongodb;


const {printSuccess, printError} = require("./utils/utils");
const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";


MongoClient.connect(connectionUrl, {useUnifiedTopology: true}, (err, client) => {
    if (err) {
        return printError("Unable to connect to MongoDB");
    }

    printSuccess("Connected To MongoDB");

    const db = client.db(databaseName);


    // db.collection("tasks").updateMany({
    //    completed: false
    // }, {
    //    $set: {
    //       completed: true
    //    }
    // }).then(users => {
    //    console.log(users.modifiedCount)
    // }).catch(err => {
    //    console.log(err);
    // });

    // db.collection("users").updateOne({ _id: new ObjectID("5e0c61909effd912fbf3e9b2")}, {
    //    $inc: {
    //       age: 20000
    //    }
    // }).then((result) => {
    //    console.log(result);
    // }).catch(err => {
    //    console.log(err)
    // });

    // db.collection("users").insertOne({
    //    name: "Ahmad",
    //    age: 230,
    //    _id: id
    // }, (error, result) => {
    //    if(error) {
    //       return printError("Unable to insert user");
    //    }
    //    console.log(result.ops);
    // });

    // db.collection("users").insertMany([
    //    {
    //       name: 'ahmed',
    //       age: 23
    //    },
    //    {
    //       name: 'enas',
    //       age: 21
    //    }
    // ], (err, res) => {
    //    if(err) {
    //       return printError("Unable to insert users");
    //    }
    //
    //    console.log(res.ops);
    // })

    // db.collection("tasks").insertMany([
    //    {
    //       description: 'first task',
    //       completed: true
    //    },
    //    {
    //       description: 'second task',
    //       completed: false
    //    },
    //    {
    //       description: 'third task',
    //       completed: true
    //    }
    // ], (error, res) => {
    //    if(error) {
    //       return printError("Unable to insert tasks");
    //    }
    //
    //    console.log(res.ops);
    // })

    // db.collection("users").findOne({ _id: new ObjectID("5e0c5b11230103683250281f")}, (error, user) => {
    //    if(error) {
    //       return printError("unable to get user");
    //    } else if(!user) {
    //       return printError("Unable to get user");
    //    }
    //    console.log(user);
    // });

    // db.collection("users").find({name: 'ahmed'}).toArray((err, users) => {
    //    if(err) {
    //       return printError("unable to get users");
    //    }
    //    console.log(users);
    // });
    //
    //
    // db.collection("users").find({name: 'ahmed'}).count((err, count) => {
    //    console.log(count);
    // });

    // db.collection("tasks").find({completed: true}).toArray((error, tasks) => {
    //    if(error) {
    //       return printError('unable to fetch tasks');
    //    }
    //
    //    console.log(tasks);
    // })

    // db.collection("users").deleteOne({})

});
