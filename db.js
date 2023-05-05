import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://Cuchugero:Suceso@test.6ub9frp.mongodb.net/test";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("austral");

export default db;
