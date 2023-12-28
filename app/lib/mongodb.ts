import { MongoClient, Db } from 'mongodb';

let cachedDb: Db;
let cachedClient: MongoClient;

if (!process.env.MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

if (!process.env.MONGODB_DB) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  )
}

const options = {};
const uri = process.env.MONGODB_URI;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb }
  }

  console.log('start connect')
  const client = new MongoClient(uri);
  await client.connect()
  console.log('connected')

  const db = await client.db(process.env.MONGODB_DB, options)

  cachedClient = client
  cachedDb = db

  return { client, db }
}