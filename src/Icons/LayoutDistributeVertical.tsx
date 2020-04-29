import * as React from 'react';

export default function LayoutDistributeVertical({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-distribute-vertical"
             width={width} height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor"
             fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="4" y1="4" x2="4" y2="20"/>
            <line x1="20" y1="4" x2="20" y2="20"/>
            <rect x="9" y="6" width="6" height="12" rx="2"/>
        </svg>)
}
