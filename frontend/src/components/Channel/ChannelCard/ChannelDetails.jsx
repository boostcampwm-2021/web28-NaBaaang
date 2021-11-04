import React from 'react';
import styled from 'styled-components';
import { borderBoxMixin, flexMixin, fontMixin } from '@/styles/mixins';
import Button from '@/components/Button';
import Avatar from './Avatar';

function ChannelDetails({ channel }) {
    return (
        <StyledWrapper>
            <StyledRow>
                <Avatar imageSrc={channel.streamer.imageSrc} />
                <StyledColumn>
                    <StyledName>{channel.streamer.nickname}</StyledName>
                    <StyledTitle>{channel.title}</StyledTitle>
                    <StyledHashTag>#{channel.category}</StyledHashTag>
                </StyledColumn>
            </StyledRow>
            <StyledColumn>
                <Button
                    color="success"
                    // onClick={clickHandler}
                    text="팔로우"
                    size="medium"
                />
                <StyledViews>시청자 수 12000</StyledViews>
            </StyledColumn>
        </StyledWrapper>
    );
}
const StyledWrapper = styled.div`
    ${flexMixin('row', 'space-between')}
    padding: 1em;
`;

const StyledRow = styled.div`
    ${flexMixin('row', 'center')}
    padding:0.5em;
`;
const StyledColumn = styled.div`
    ${flexMixin('column')}
    padding:0.5em;
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
