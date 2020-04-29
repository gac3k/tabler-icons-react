import * as React from 'react';

export default function Power({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-power" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M7 6a7.75 7.75 0 1 0 10 0"/>
            <line x1="12" y1="4" x2="12" y2="12"/>
        </svg>)
}
