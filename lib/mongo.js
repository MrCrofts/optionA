import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

let cachedClient = null;
let cachedDb = null;

// check the MongoDB URI
if (!uri) {
  throw new Error("Define the MONGODB_URI environmental variable");
}

export default async function connectToDatabase() {
  // check the cached.
  if (cachedClient && cachedDb) {
    // load from cache
    return {
      client: cachedClient,
      db: cachedDb
    };
  }
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
  // Connect to cluster
  let client = new MongoClient(uri, opts);
  await client.connect();
  let db = client.db("sample_airbnb");
  // set cache
  cachedClient = client;
  cachedDb = db;

  return {
    client: cachedClient,
    db: cachedDb
  };
}
