import Head from "next/head";
import clientPromise from "../lib/mongodb";
var x = "Data not retrieved";

function getData() {
  return "Async function";
}

export default function test({ isConnected }) {
  try {
    x = getData();
  } catch (error) {
    x = error;
  }

  //let db = clientPromise.db("sample_airbnb");
  /*
  clientPromise
    .collection("listingsAndReviews")
    .findOne({}, function (err, result) {
      if (err) throw err;
      x = result.summary;
    });*/
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
        <h2>{x}</h2>
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
    await clientPromise;
    return {
      props: { isConnected: true }
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false }
    };
  }
}
