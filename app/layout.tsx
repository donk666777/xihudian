import type { Metadata } from 'next';
import { BookingProvider } from '@/components/booking-context';
import { BookingModal } from '@/components/booking-modal';
import './globals.css';

export const metadata: Metadata = {
  title: 'MOMO · 宠物洗护所',
  description: 'MOMO 宠物洗护所——给毛孩子一场温柔的焕新。专业洗护、低敏护理与安心接送服务。',
  openGraph: {
    title: 'MOMO · 宠物洗护所',
    description: '给毛孩子一场温柔的焕新。',
    type: 'website',
    locale: 'zh_CN',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body><BookingProvider>{children}<BookingModal /></BookingProvider></body></html>;
}
