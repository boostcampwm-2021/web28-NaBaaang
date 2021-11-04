import React from 'react';
import styled from 'styled-components';
import { borderBoxMixin } from '@/styles/mixins';
import tempImage from '@/assets/images/kukucorn.jpg';
import ChannelDetails from './ChannelDetails';

export default function ChannelCard() {
    const channelInfo = {
        id: 1,
        title: '크으으으롱의 리액트 후우욱스',
        views: 12000,
        streamer: {
            nickname: 'Crong',
            imageSrc: tempImage,
        },
        category: '프로그래밍',
        isFollow: false,
    };

    return (
        <StyledContainer>
            <ChannelDetails channel={channelInfo} />
        </StyledContainer>
    );
}

const StyledContainer = styled.div`
    ${({ theme }) => borderBoxMixin('1px', '30px', theme.color.black)};
    width: 100%;
    height: 100%;
`;
