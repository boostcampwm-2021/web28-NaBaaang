import { useMemo } from 'react';
import { createPortal } from 'react-dom';

export default function Portal({ children, elementId }) {
    const rootElement = useMemo(
        () => document.getElementById(elementId),
        [elementId],
    );

    return !rootElement ? null : createPortal(children, rootElement);
}
