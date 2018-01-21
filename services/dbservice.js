var MongoClient=require('mongodb').MongoClient;
exports.createConnection = function()
{
    MongoClient.connect("mongodb://madhu1998:adad123@ds111138.mlab.com:11138/projectorapp").then(function(client){
    console.log("Connected to mongodb");
    exports.database=client.db('projectorapp');
    //console.log("Connected to mongodb database");
  //  exports.database=client.db("projectorapp");
  });
}
