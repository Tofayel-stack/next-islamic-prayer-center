
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://islamic-prayer-next:8QcmA6aXaMX2ruwT@cluster0.dcb0xdp.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function databaseHandler(req,res) {

    const blogCollection = client.db("islamic-prayer-nextjs").collection("blog")

  try {
    await client.connect();
    console.log("successfully connected to MongoDB!");


    if(req.method ==='GET'){
        const query = {}
        const result = await blogCollection.find(query).toArray()
        res.send(result)
    }


    if(req.method ==='POST'){
        const body = req.body;
        const result = await blogCollection.insertOne(body)
        res.send(result)
    }




  }catch (error){
        console.log(error);
  }
}

export default databaseHandler;
