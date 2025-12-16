import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB || 'portfolioDB';

if (!uri) throw new Error('MONGO_URI is missing');

let cached = global._mongo;
if (!cached) cached = global._mongo = { client: null, db: null };

export async function getDb() {
  if (cached.db) return cached.db;

  const client = cached.client || new MongoClient(uri);
  if (!cached.client) cached.client = client;

  await client.connect();
  cached.db = client.db(dbName);
  return cached.db;
}
