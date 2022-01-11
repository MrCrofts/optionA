//import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  return "x";
}

//export default connectToDatabase;
/*yy*/
/*
export async function connectToDatabase() {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };

  // Connect to cluster
  let client = new MongoClient(
    "mongodb+srv://dba:Aj1Ja4K7tmli7V2i@cluster0.gtz9w.mongodb.net/sample_airbnb?retryWrites=true&w=majority",
    opts
  );
  await client.connect();
  let db = client.db("sample_airbnb");

  return { client: client, db: db };
}
*/
