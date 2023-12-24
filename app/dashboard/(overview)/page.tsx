// import { fetchRevenue } from "@/app/lib/data/dashboard";
import TvlChart from '@/app/ui/dashboard/tvl-chart';
import CcVolChart from '@/app/ui/dashboard/ccVol-chart';
import CctxChart from '@/app/ui/dashboard/cctx-chart';
import TokenLists from '@/app/ui/dashboard/token-lists';
import CcTxLists from '@/app/ui/dashboard/ccTx-lists';

export default async function Page() {
  // const revenue = await fetchRevenue();
  return (
    <main className="flex flex-col items-center">
      <div className="flex justify-center mb-5 w-10/12">
        <TvlChart />
      </div>
      <div className="flex justify-between mb-12 w-10/12">
        <CctxChart />
        <CcVolChart />
      </div>
      <div className="w-10/12 mb-12">
        <TokenLists />
      </div>
      <div className="w-10/12">
        <CcTxLists />
      </div>
    </main>
  );
}