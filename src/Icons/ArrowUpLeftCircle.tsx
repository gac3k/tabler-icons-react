import * as React from 'react';

export default function ArrowUpLeftCircle({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-left-circle"
             width={width} height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor"
             fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <circle cx="12" cy="12" r="9"/>
            <line x1="9" y1="9" x2="15" y2="15"/>
            <polyline points="15 9 9 9 9 15"/>
        </svg>)
}
