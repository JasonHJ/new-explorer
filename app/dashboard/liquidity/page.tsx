'use client'
import { myFont } from '@/app/ui/fonts';
import LiquidityLists from '@/app/ui/liquidity/liquidity-lists';
import { Input } from 'antd';

const { Search } = Input;

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col mb-5 w-10/12">
        <div className={`${myFont.className} text-xl font-normal mb-2`}>XFlows Liquidity</div>
        <div className="flex">
          <div className="text-sm text-light-666 mr-4">XFlow liquidity refers to the maximum cross-chain transaction limit of BTC, ETH, USDT, and USDC that the target chain can currently process. This limit is dynamic and changes based on inbound and outbound cross-chain transactions involving these tokens on the same chain. These transactions can increase or decrease the liquidity of the chain in question.</div>
          <div className="flex items-center"><Search style={{ width: 280 }} placeholder="Search chain" onSearch={() => console.log('1')} /></div>
        </div>
      </div>
      <div className="flex justify-between mb-12 w-10/12">
        <LiquidityLists />
      </div>
    </main>
  )
}