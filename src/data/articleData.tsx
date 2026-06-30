import { ShieldCheck, Wrench, Zap } from 'lucide-react';
import type { Article } from '@/types';

export const articles: Article[] = [
  {
    id: 'prevent-car-breakdown',
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'چطور از خرابی ناگهانی ماشین جلوگیری کنیم؟',
    readTime: '۵ دقیقه',
    slug: 'prevent-car-breakdown',
  },
  {
    id: 'oil-change-guide',
    icon: <Wrench className="w-6 h-6" />,
    title: 'راهنمای کامل تعویض روغن موتور',
    readTime: '۷ دقیقه',
    slug: 'oil-change-guide',
  },
  {
    id: 'car-electrical-problems',
    icon: <Zap className="w-6 h-6" />,
    title: 'مشکلات برق خودرو و راه‌حل‌های رایج',
    readTime: '۶ دقیقه',
    slug: 'car-electrical-problems',
  },
];
