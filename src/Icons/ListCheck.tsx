import * as React from 'react';

export default function ListCheck({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-list-check" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M3.5 5.5l1.5 1.5l2.5 -2.5"/>
            <path d="M3.5 11.5l1.5 1.5l2.5 -2.5"/>
            <path d="M3.5 17.5l1.5 1.5l2.5 -2.5"/>
            <line x1="11" y1="6" x2="20" y2="6"/>
            <line x1="11" y1="12" x2="20" y2="12"/>
            <line x1="11" y1="18" x2="20" y2="18"/>
        </svg>)
}
