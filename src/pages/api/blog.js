
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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




  const searchFor = req.query.blogID

  if(req.method ==='GET'){

      if(searchFor === null || searchFor === undefined ){
          const query = {}
          const result = await blogCollection.find(query).toArray()
          res.send(
            {
              data:result,
              success:true,
              message:'successfully find data !'
            }
            ) 
      


      }else if(searchFor){
        
            const id = req.query.blogID;
            const query = {_id:new ObjectId(id)}
            const result = await blogCollection.findOne(query)
            res.send(
              {
                data:result,
                success:true,
                message:'successfully find data !'
              }
              ) 
        
      }
}

    if(req.method ==='POST'){
        const body = req.body;
        const result = await blogCollection.insertOne(body)
        res.send(result)
    }




  }catch (error){
        console.log("error from server/blog",error);
  }
}

export default databaseHandler;
