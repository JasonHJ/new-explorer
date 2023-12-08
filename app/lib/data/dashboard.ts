import { unstable_noStore as noStore } from 'next/cache';
import { connectToDatabase } from "@/app/lib/mongodb";

export async function fetchRevenue() {
  // Add noStore() here prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();

  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)
    const { db } = await connectToDatabase();
    console.log('Data fetch completed after 3 seconds.');
    const movies = await db
                            .collection("cctx")
                            .find({})
                            .limit(20)
                            .toArray();
    console.log('fetchRevenue', movies)
    return movies;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}