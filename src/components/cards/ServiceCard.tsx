'use client';

import Link from 'next/link';
import { ReactNode, useState } from 'react';

export interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  className?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  href,
  className = '',
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const card = (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] 
        border transition-all duration-300 ${
          isHovered ? 'border-primary/50' : 'border-white/10'
        } backdrop-blur-sm ${className}`}
    >
      <div className="mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-white/70 leading-relaxed">{description}</p>
    </div>
  );

  return href ? (
    <Link href={href} className="block">
      {card}
    </Link>
  ) : (
    card
  );
}
