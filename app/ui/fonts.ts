import localFont from 'next/font/local'
import { Inter, Lusitana, Montserrat } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const myFont = localFont({
  src: './fonts/PangMenZhengDaoBiaoTiTiMianFeiBan-2.ttf',
  display: 'swap',
});

export const montserrat = Montserrat({
  weight: ['700'],
  subsets: ['latin'],
});