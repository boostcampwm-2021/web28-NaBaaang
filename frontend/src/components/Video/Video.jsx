import React from 'react';
import styled from 'styled-components';
import { borderBoxMixin, sizeMixin } from '@/styles/mixins';

export default function Video({ videoSrc }) {
    return (
        <StyledVideo controls autoplay>
            <source src={videoSrc} />
        </StyledVideo>
    );
}

const StyledVideo = styled.video`
    ${sizeMixin('100%', '100%')};
    object-fit: cover;
    ${({ theme }) => borderBoxMixin('1px', '30px', theme.color.black)};
`;
