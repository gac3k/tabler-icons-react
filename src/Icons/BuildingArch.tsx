import * as React from 'react';

export default function BuildingArch({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-arch" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="3" y1="21" x2="21" y2="21"/>
            <path d="M4 21v-15a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v15"/>
            <path d="M9 21v-8a3 3 0 0 1 6 0v8"/>
        </svg>)
}
