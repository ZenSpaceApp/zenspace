// components/ui/Button/Button.tsx
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  brand?: 'notes' | 'match' | 'parent';
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function Button({ 
  brand = 'parent', 
  variant = 'primary', 
  children, 
  className,
  ...props 
}: ButtonProps) {
  return (
    <button 
      className={`${styles.button} ${className || ''}`}
      data-brand={brand}
      data-variant={variant}
      {...props}
    >
      {children}
    </button>
  );
}

