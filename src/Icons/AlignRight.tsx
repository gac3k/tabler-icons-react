import * as React from 'react';

export default function AlignRight({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-align-right" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="4" y1="6" x2="20" y2="6"/>
            <line x1="10" y1="12" x2="20" y2="12"/>
            <line x1="6" y1="18" x2="20" y2="18"/>
        </svg>)
}
