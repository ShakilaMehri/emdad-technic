import type { BadgeProps } from '@/types/components';

export default function Badge({ 
  children, 
  variant = "default",
  className = ""
}: BadgeProps) {
  const variantStyles = {
    default: "bg-yellow-400 text-gray-900 px-4 py-1.5 text-sm",
    small: "bg-yellow-400 text-gray-900 px-3 py-1 text-xs",
    primary: "bg-yellow-400 text-gray-900 px-4 py-1.5 text-sm font-semibold",
    secondary: "bg-gray-100 text-gray-700 px-4 py-1.5 text-sm"
  };

  return (
    <span className={`inline-flex items-center gap-1.2 whitespace-nowrap rounded-full font-medium ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}
