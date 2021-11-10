import React from 'react';
import styled, { css } from 'styled-components';
import { borderBoxMixin, flexMixin, fontMixin } from '@/styles/mixins';
import Button from '@/components/Common/Button';
import Box from '@/components/Common/Box';
import Avatar from '@/components/Common/Avatar';

function ChannelDetails({ channelInfo }) {
    return (
        <StyledBox flex={1}>
            <StyledRow>
                <Avatar
                    src="https://static-cdn.jtvnw.net/jtv_user_pictures/89e29e2e-f165-40e6-bc0c-d42205935216-profile_image-50x50.png"
                    size="large"
                />
            </StyledRow>

            <StyledRow marginLeft="20px">
                <StyledColumn>
                    <StyledNickName>{channelInfo.streamer_id}</StyledNickName>
                    <StyledTitle>{channelInfo.title}</StyledTitle>
                    <StyledHashTag>#{channelInfo.category}</StyledHashTag>
                </StyledColumn>
            </StyledRow>
            <StyledRow marginLeft="auto" alignSelf="flex-start">
                <StyledColumn>
                    <Button color="success" text="팔로우" size="medium" />
                    <StyledViews>시청자 수 12000</StyledViews>
                </StyledColumn>
            </StyledRow>
        </StyledBox>
    );
}

const StyledBox = styled(Box)`
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.color.gray3};
`;

const StyledRow = styled.div`
    ${({ alignSelf, marginLeft }) =>
        css`
            alignself: ${alignSelf};
            margin-left: ${marginLeft};
        `}
`;
const StyledColumn = styled.div`
    ${flexMixin('column', 'flex-start', 'flex-start')}
`;
const StyledNickName = styled.h3`
    ${fontMixin('1.5em', '', 'notoSansBold')}
`;

const StyledTitle = styled.div`
    ${fontMixin('1em', '1em', 'notoSansMedium')}
`;

const StyledViews = styled.div`
    ${fontMixin('1em', '1em', 'notoSansMedium')}
`;

const StyledHashTag = styled.span`
    padding: 0.5rem;
    margin-top: 1rem;
    ${({ theme }) => borderBoxMixin('1px', '20px', theme.color.primary)};
    ${({ theme }) =>
        fontMixin('0.5em', '1em', 'notoSansBold', theme.color.white)};
    background-color: ${({ theme }) => theme.color.primary};
    text-align: center;
`;
export default ChannelDetails;
