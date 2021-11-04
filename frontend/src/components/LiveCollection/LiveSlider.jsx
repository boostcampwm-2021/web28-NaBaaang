import React from 'react';
import styled, { css } from 'styled-components';

import LiveCard from './LiveCard';

function LiveSlider({ liveList }) {
    const LiveCards = liveList.map(liveItem => <LiveCard content={liveItem} />);

    return (
        <SliderScrollBlock>
            <LeftButton>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path
                        d="M28.761 3.30405C27.9546 2.49761 26.6471 2.49761 25.8407 3.30405L11.239 17.9057C10.4326 18.7121 10.4326 20.0196 11.239 20.8261L25.8407 35.4277C26.6471 36.2342 27.9546 36.2342 28.761 35.4277C29.5674 34.6213 29.5675 33.3138 28.761 32.5074L15.6195 19.3659L28.761 6.22438C29.5675 5.41794 29.5675 4.11049 28.761 3.30405Z"
                        fill="white"
                    />
                </svg>
            </LeftButton>
            <SliderListWrapper>{LiveCards}</SliderListWrapper>
            <RightButton>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path
                        d="M10.6048 36.0619C11.4113 36.8684 12.7187 36.8684 13.5252 36.0619L28.1268 21.4602C28.9333 20.6538 28.9333 19.3463 28.1268 18.5399L13.5252 3.93824C12.7187 3.1318 11.4113 3.13181 10.6048 3.93824C9.7984 4.74467 9.79839 6.05213 10.6048 6.85857L23.7463 20.0001L10.6048 33.1416C9.79839 33.948 9.79839 35.2555 10.6048 36.0619Z"
                        fill="white"
                    />
                </svg>
            </RightButton>
        </SliderScrollBlock>
    );
}

const SliderScrollBlock = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    margin-top: 1.5em;
    z-index: 3;

    &:hover button {
        display: block;
    }

    & button {
        display: none;
    }
`;

const SliderListWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    min-height: 13em;
    overflow-x: visible;
`;

const HoverButton = css`
    position: absolute;
    top: 0;
    align-items: center;
    z-index: 3;
    width: 40px;
    height: 150px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0.25em 0px 0px 0.25em;
    border: none;
    cursor: pointer;
`;

const RightButton = styled.button`
    ${HoverButton}
    justify-content: flex-end;
    right: 0px;
`;

const LeftButton = styled.button`
    ${HoverButton}
    justify-content: flex-start;
    left: 0px;
`;

export default LiveSlider;
