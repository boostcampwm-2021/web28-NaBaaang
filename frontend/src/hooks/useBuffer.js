import { useRef } from 'react';
import ArrayBuffer from '@/util/buffer';

export default function useBuffer(size) {
    const buffer = useRef(new ArrayBuffer(size));

    const isBufferFull = () => {
        return buffer.current.isFull();
    };

    const flushBuffer = () => {
        return buffer.current.flush();
    };

    const pushBuffer = data => {
        buffer.current.push(data);
    };

    const getBufferList = () => {
        return buffer.current.get();
    };

    const getBufferLength = () => {
        return buffer.current.length();
    };

    return {
        isBufferFull,
        flushBuffer,
        getBufferList,
        getBufferLength,
        pushBuffer,
    };
}
