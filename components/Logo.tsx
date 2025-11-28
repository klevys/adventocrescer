import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'color' | 'white';
}

const Logo: React.FC<LogoProps> = ({ className = "", variant = 'color' }) => {
  const textColor = variant === 'white' ? '#FFFFFF' : '#4A4A4A';
  // Use normal blending for white variant (header/footer) to ensure colors pop against dark backgrounds
  // Use multiply for color variant on white background for the nice overlap effect
  const blendMode = variant === 'white' ? 'normal' : 'multiply';
  
  return (
    <svg 
        viewBox="0 0 500 280" 
        className={className} 
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Logo Crescer Igreja Batista"
    >
        {/* Circles Group - Positioned ABOVE the text as per the original image */}
        <g style={{ mixBlendMode: blendMode }}>
            {/* Left - Lightest (Peach) */}
            <circle cx="60" cy="95" r="45" fill="#FDDCA9" opacity="0.9" />
            
            {/* Middle - Medium (Orange) */}
            <circle cx="130" cy="85" r="55" fill="#F6921E" opacity="0.9" />
            
            {/* Right - Darkest (Burnt Orange) */}
            <circle cx="205" cy="75" r="62" fill="#DA4816" opacity="0.9" />
        </g>

        {/* Text CRESCER - Heavy/Black Font */}
        <text 
            x="10" 
            y="230" 
            fontFamily="'Lato', sans-serif" 
            fontWeight="900" 
            fontSize="100" 
            fill={textColor}
        >
            CRESCER
        </text>

        {/* Text IGREJA BATISTA - Thin, Spaced to match width visually */}
        <text 
            x="12" 
            y="270" 
            fontFamily="'Lato', sans-serif" 
            fontWeight="300" 
            fontSize="30" 
            letterSpacing="0.4em" 
            fill={textColor}
        >
            IGREJA BATISTA
        </text>
    </svg>
  );
};

export default Logo;