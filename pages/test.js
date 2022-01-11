import Head from "next/head";
//import clientPromise from "../lib/mongodb";
//const { connectToDatabase } = require("../lib/mongo");
import connectToDatabase from "../lib/mongo";
//const ObjectId = require("mongo").ObjectId;

export default function test({ isConnected, dat }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js with MongoDB!</a>
        </h1>

        {isConnected ? (
          <h2 className="subtitle">You are connected to MongoDB</h2>
        ) : (
          <h2 className="subtitle">
            You are NOT connected to MongoDB. Check the <code>README.md</code>{" "}
            for instructions.
          </h2>
        )}
        <h2>Connected: {dat}</h2>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    let db = await connectToDatabase();
    //let x = await db.collection("listingsAndReviews").findOne({});
    let x = "Yay";
    return {
      props: { isConnected: true, dat: x }
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false, dat: e.message }
    };
  }
}
