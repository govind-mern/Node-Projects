const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://govind:mongodb@mdbs1.d4xmapy.mongodb.net/?retryWrites=true&w=majority&appName=MDBS1';
const client = new MongoClient(url);

// Database Name
const dbName = 'Hello';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');
  const insertResult = await collection.insertMany([{ name: 'govind' }, { a: 2 }, { a: 3 }]);
  console.log('Inserted documents =>', insertResult);

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());