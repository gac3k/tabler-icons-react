import * as React from 'react';

export default function Dice({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dice" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <rect x="4" y="4" width="16" height="16" rx="2"/>
            <circle cx="8.5" cy="8.5" r=".5"/>
            <circle cx="15.5" cy="8.5" r=".5"/>
            <circle cx="15.5" cy="15.5" r=".5"/>
            <circle cx="8.5" cy="15.5" r=".5"/>
        </svg>)
}
