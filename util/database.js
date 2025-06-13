const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(
    "mongodb+srv://rdnzl:testes123@cluster0.33wzm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
    .then((result) => {
      console.log("Connected to cluster");
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;