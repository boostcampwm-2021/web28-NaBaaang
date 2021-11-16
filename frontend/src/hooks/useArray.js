import { useState } from 'react';

export default function useArray(initArray) {
    const [arr, set] = useState([...initArray]);

    const fn = {
        set,
        length: () => arr.length,
        sliceAt: idx => arr.slice(idx),
        push: data => set([...arr, data]),
    };

    return { arr, ...fn };
}
