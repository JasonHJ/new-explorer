import { unstable_noStore as noStore } from 'next/cache';
import { connectToDatabase } from "@/app/lib/mongodb";

export async function fetchLastCcTxs() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();

  try {
    const { db } = await connectToDatabase();
    const ccTxs = await db.collection("cctx")
                           .find({})
                           .sort({ timestamp: -1 })
                           .limit(10)
                           .toArray();
    console.log('fetchLastCcTxs', ccTxs)
    return ccTxs;
  } catch (error) {
    console.error('FetchLastCcTxs Error:', error);
    throw new Error('Failed to fetch last ccTxs data.');
  }
}