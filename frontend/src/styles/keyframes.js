import { keyframes } from 'styled-components';

const jumpWhen20 = keyframes`
    20% {
        transform: translateY(-50%);
    }
`;

const jumpWhen40 = keyframes`
    40% {
        transform: translateY(-50%);
    }
`;

const jumpWhen60 = keyframes`
    60% {
        transform: translateY(-50%);
    }
`;

const skeletonGradient = keyframes`
    0% {
        background-color: rgba(128, 128, 128, 0.1);
    }

    50% {
        background-color: rgba(128, 128, 128, 0.3);
    }

    100% {
        background-color: rgba(128, 128, 128, 0.1);
    }
`

export {jumpWhen20 ,jumpWhen40, jumpWhen60, skeletonGradient}