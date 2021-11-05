import React from 'react';
import styled, { css } from 'styled-components';
import { borderBoxMixin, flexMixin, fontMixin } from '@/styles/mixins';
import Button from '@/components/Common/Button';
import Card from '@/components/Common/Card';
import Avatar from './Avatar';

function ChannelDetails({ channelInfo }) {
    return (
        <Card
            width="100%"
            height="100%"
            justify="flex-start"
            alignItems="center"
            direction="row"
        >
            <StyledRow>
                <Avatar imageSrc={channelInfo.streamer.imageSrc} />
            </StyledRow>

            <StyledRow marginLeft="20px">
                <StyledColumn>
                    <StyledName>{channelInfo.streamer.nickname}</StyledName>
                    <StyledTitle>{channelInfo.title}</StyledTitle>
                    <StyledHashTag>#{channelInfo.category}</StyledHashTag>
                </StyledColumn>
            </StyledRow>
            <StyledRow marginLeft="auto">
                <StyledColumn>
                    <Button color="success" text="팔로우" size="medium" />
                    <StyledViews>시청자 수 12000</StyledViews>
                </StyledColumn>
            </StyledRow>
        </Card>
    );
}

const StyledRow = styled.div`
    ${({ marginLeft }) =>
        css`
            margin-left: ${marginLeft};
        `}
    align-self: flex-start;
`;
const StyledColumn = styled.div`
    ${flexMixin('column', 'flex-start', 'flex-start')}
    ${({ marginLeft }) =>
        css`
            margin-left: ${marginLeft};
        `}
`;
const StyledName = styled.div`
    ${fontMixin('2em', '2em', 'notoSansBold')}
`;

const StyledTitle = styled.div`
    ${fontMixin('1em', '1em', 'notoSansMedium')}
`;

const StyledViews = styled.div`
    ${fontMixin('1em', '1em', 'notoSansMedium')}
`;

const StyledHashTag = styled.span`
    ${({ theme }) => borderBoxMixin('1px', '20px', theme.color.primary)};
    ${({ theme }) =>
        fontMixin('1em', '1em', 'notoSansBold', theme.color.white)};
    background-color: ${({ theme }) => theme.color.primary};
    text-align: center;
    width: 6em;
`;
export default ChannelDetails;
