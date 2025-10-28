import React from 'react';

interface IconProps {
    className?: string;
}

export const AshokaIcon: React.FC<IconProps> = ({ className }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="2"></circle>
        <g>
            <line x1="12" y1="4" x2="12" y2="2"></line>
            <line x1="12" y1="22" x2="12" y2="20"></line>
        </g>
        <g>
            <line x1="20" y1="12" x2="22" y2="12"></line>
            <line x1="2" y1="12" x2="4" y2="12"></line>
        </g>
        <g>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        </g>
        <g>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        </g>
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(angle => (
            <line 
                key={angle}
                x1="12" 
                y1="12" 
                x2="12" 
                y2="4" 
                transform={`rotate(${angle} 12 12)`}
            ></line>
        ))}
    </svg>
);
