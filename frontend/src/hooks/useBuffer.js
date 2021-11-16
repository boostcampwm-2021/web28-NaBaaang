import { useRef } from 'react';
import ArrayBuffer from '@/util/buffer';

export default function useBuffer(size) {
    const buffer = useRef(new ArrayBuffer(size));

    const fn = {
        isBufferFull: () => buffer.current.isFull(),
        flushBuffer: () => buffer.current.flush(),
        pushBuffer: data => buffer.current.push(data),
        getBufferList: () => buffer.current.get(),
        getBufferLength: () => buffer.current.length(),
    };

    return {
        buffer,
        ...fn,
    };
}
