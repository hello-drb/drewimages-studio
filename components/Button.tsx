import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'burgundy' | 'teal';
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, to, variant = 'primary', onClick, className = '' }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 font-serif italic text-lg tracking-wide transition-all duration-300 focus:outline-none border-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-y-[1px] hover:translate-x-[1px]";
  
  const variants = {
    primary: "bg-burgundy text-paper border-burgundy hover:bg-paper hover:text-burgundy",
    secondary: "bg-teal text-paper border-teal hover:bg-paper hover:text-teal",
    outline: "bg-transparent text-ink border-ink hover:bg-ink hover:text-paper",
    burgundy: "bg-burgundy text-paper border-white/20 hover:bg-burgundy/90",
    teal: "bg-teal text-paper border-white/20 hover:bg-teal/90"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};

export default Button;