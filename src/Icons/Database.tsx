import * as React from 'react';

export default function Database({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-database" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
            <path d="M4 6v6a8 3 0 0 0 16 0v-6"/>
            <path d="M4 12v6a8 3 0 0 0 16 0v-6"/>
        </svg>)
}
