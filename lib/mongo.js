import { MongoClient } from "mongodb";

export default async function connectToDatabase() {
  const uri = process.env.MONGODB_URI;
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
  // Connect to cluster
  let client = new MongoClient(uri, opts);
  await client.connect();
  let db = client.db("sample_airbnb");

  return { client: db, db: db };
}
