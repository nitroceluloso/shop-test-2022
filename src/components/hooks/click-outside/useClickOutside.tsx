import React, { useEffect,useRef } from 'react';

export const useClickOutside = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (event: PointerEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) callback();
        };
        document.addEventListener('click', handleClick);
        return () => {
          document.removeEventListener('click', handleClick);
        };
    }, []);

    return ref;
}