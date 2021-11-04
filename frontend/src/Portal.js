import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Portal({ children }) {
    const [domReady, setDomReady] = useState(false);

    const renderModalRootDom = () => {
        // 스토리북에서 modal-root가 생성되지 않는 현상을 방지하기 위해 동적으로 생성
        const newNode = document.createElement('div');
        newNode.setAttribute('id', 'modal-root');
        const rootNode = document.querySelector('#root');
        rootNode.after(newNode);
    };

    useEffect(() => {
        renderModalRootDom();
        setDomReady(true);
    }, []);

    return domReady
        ? createPortal(children, document.getElementById('modal-root'))
        : null;
}
