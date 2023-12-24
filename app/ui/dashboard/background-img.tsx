import Image from 'next/image'
import BgLight from '@/public/bg-light.png'
 
export default function Background() {
  return (
    <Image
      alt="BG"
      src={BgLight}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
        zIndex: -1
      }}
    />
  )
}