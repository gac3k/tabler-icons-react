import * as React from 'react';

export default function Lock({ width = 24, height = 24, strokeWidth = 2 }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock" width={width}
             height={height} viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" fill="none"
             strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <rect x="5" y="11" width="14" height="10" rx="2"/>
            <circle cx="12" cy="16" r="1"/>
            <path d="M8 11v-4a4 4 0 0 1 8 0v4"/>
        </svg>)
}
