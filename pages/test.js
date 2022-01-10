import Head from "next/head";
import clientPromise from "../lib/mongodb";

export default function test({ isConnected }) {
  let dat = getPosts();
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js with MongoDB!1</a>
        </h1>
        {dat}
        {isConnected ? (
          <h2 className="subtitle">You are connected to MongoDB</h2>
        ) : (
          <h2 className="subtitle">
            You are NOT connected to MongoDB. Check the <code>README.md</code>{" "}
            for instructions.
          </h2>
        )}
      </main>
    </div>
  );
}

/*
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
*/
async function getPosts(req, res) {
  try {
    // connect to the database
    let { db } = await clientPromise.db();
    // fetch the posts
    let posts = await db
      .collection("sample_airbnb")
      .find({})
      .sort({ published: -1 })
      .toArray();
    // return the posts
    return res.json({
      message: JSON.parse(JSON.stringify(posts)),
      success: true
    });
  } catch (error) {
    // return the error
    return res.json({
      message: new Error(error).message,
      success: false
    });
  }
}
