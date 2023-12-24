
import Image from 'next/image';
import { myFont, montserrat } from '@/app/ui/fonts';

export default function TokenLists() {
  return (
    <main className="flex flex-col justify-start">
      <div className={`${myFont.className} text-xl font-normal`}>Connected Networks</div>
      <div className="grid mt-4 grid-cols-8 gap-4">
        {/* LINE 1 */}
        <div className="rounded-xl bg-white w-32 h-12 text-center" style={{ lineHeight: "45px"}}>
          <Image src="/tokensIcon/BTC.png" width={89} height={19} className="inline-block cursor-pointer" alt="BTC" />
        </div>
        <div className="rounded-xl bg-white w-32 h-12 text-center" style={{ lineHeight: "45px"}}>
          <Image src="/tokensIcon/ETH.png" width={135} height={47} className="inline-block cursor-pointer" alt="ETH" />
        </div>
        <div className="rounded-xl bg-white w-32 h-12 text-center" style={{ lineHeight: "45px"}}>
          <Image src="/tokensIcon/MOVER.png" width={89} height={19} className="inline-block cursor-pointer" alt="MOVER" />
        </div>
        <div className="rounded-xl bg-white w-32 h-12 text-center" style={{ lineHeight: "45px"}}>
          <Image src="/tokensIcon/AVAX.png" width={89} height={19} className="inline-block cursor-pointer" alt="AVAX" />
        </div>
        <div className="rounded-xl bg-white w-32 h-12 text-center" style={{ lineHeight: "45px"}}>
          <Image src="/tokensIcon/DOT.png" width={135} height={47} className="inline-block cursor-pointer" alt="DOT" />
        </div>
        <div className="rounded-xl bg-white w-32 h-12 text-center" style={{ lineHeight: "45px"}}>
          <Image src="/tokensIcon/XRP.png" width={53} height={14} className="inline-block cursor-pointer" alt="XRP" />
        </div>
        <div className="rounded-xl bg-white w-32 h-12 text-center" style={{ lineHeight: "45px"}}>
          <Image src="/tokensIcon/BSC.png" width={135} height={47} className="inline-block cursor-pointer" alt="BSC" />
        </div>
        <div className="rounded-xl bg-white w-32 h-12 text-center" style={{ lineHeight: "45px"}}>
          <Image src="/tokensIcon/dogecoin.png" width={20} height={20} className="inline-block cursor-pointer" alt="dogecoin" />
          <span className={`${montserrat.className} relative top-0.5 left-0.5`}>DOGECOIN</span>
        </div>

        {/* LINE 2 */}
        <div className="rounded-xl bg-white w-32 h-12 text-center" style={{ lineHeight: "45px"}}>
          <Image src="/tokensIcon/EOS.png" width={72} height={23} className="inline-block cursor-pointer" alt="EOS" />
        </div>
        <div className="rounded-xl bg-white w-32 h-12 text-center" style={{ lineHeight: "45px"}}>
          <Image src="/tokensIcon/FTM.png" width={90} height={25} className="inline-block cursor-pointer" alt="FTM" />
        </div>
        <div className="rounded-xl bg-white w-32 h-12 text-center" style={{ lineHeight: "45px"}}>
          <Image src="/tokensIcon/lite.png" width={20} height={20} className="inline-block cursor-pointer" alt="lite" />
          <span className={`font-sans relative top-0.5 left-1 text-normal-111 text-lg`}>litecoin</span>
        </div>
        <div className="rounded-xl bg-white w-32 h-12 text-center" style={{ lineHeight: "45px"}}>
          <Image src="/tokensIcon/OKX.png" width={136} height={48} className="inline-block cursor-pointer" alt="OKX" />
        </div>
        <div className="rounded-xl bg-white w-32 h-12 text-center" style={{ lineHeight: "45px"}}>
          <Image src="/tokensIcon/Polygon.png" width={136} height={48} className="inline-block cursor-pointer" alt="Polygon" />
        </div>
        <div className="rounded-xl bg-white w-32 h-12 text-center" style={{ lineHeight: "45px"}}>
          <Image src="/tokensIcon/arbitrum.png" width={110} height={33} className="inline-block cursor-pointer" alt="arbitrum" />
        </div>
        <div className="rounded-xl bg-white w-32 h-12 text-center" style={{ lineHeight: "45px"}}>
          <Image src="/tokensIcon/Moonbeam.png" width={136} height={48} className="inline-block cursor-pointer" alt="Moonbeam" />
        </div>
        <div className="rounded-xl bg-white w-32 h-12 text-center" style={{ lineHeight: "45px"}}>
          <Image src="/tokensIcon/XDC.png" width={135} height={48} className="inline-block cursor-pointer" alt="XDC" />
        </div>

        {/* LINE 3 */}
        <div className="rounded-xl bg-white w-32 h-12 text-center" style={{ lineHeight: "45px"}}>
          <Image src="/tokensIcon/CLV.png" width={136} height={48} className="inline-block cursor-pointer" alt="CLV" />
        </div>
        <div className="rounded-xl bg-white w-32 h-12 text-center" style={{ lineHeight: "45px"}}>
          <Image src="/tokensIcon/Tron.png" width={136} height={48} className="inline-block cursor-pointer" alt="Tron" />
        </div>
        <div className="rounded-xl bg-white w-32 h-12 text-center" style={{ lineHeight: "45px"}}>
          <Image src="/tokensIcon/ASTAR.png" width={88} height={34} className="inline-block cursor-pointer" alt="ASTAR" />
        </div>
        <div className="rounded-xl bg-white w-32 h-12 text-center" style={{ lineHeight: "45px"}}>
          <Image src="/tokensIcon/optimism.png" width={136} height={48} className="inline-block cursor-pointer" alt="optimism" />
        </div>
        <div className="rounded-xl bg-white w-32 h-12 text-center" style={{ lineHeight: "45px"}}>
          <Image src="/tokensIcon/Telos.png" width={136} height={48} className="inline-block cursor-pointer" alt="Telos" />
        </div>
        <div className="rounded-xl bg-white w-32 h-12 text-center" style={{ lineHeight: "45px"}}>
          <Image src="/tokensIcon/WAN.png" width={136} height={48} className="inline-block cursor-pointer" alt="WAN" />
        </div>
      </div>
    </main>
  )
}