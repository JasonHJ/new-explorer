import { fetchRevenue } from "@/app/lib/data/dashboard";


export default async function Page() {
  const revenue = await fetchRevenue();
  return <p>Dashboard</p>;
}