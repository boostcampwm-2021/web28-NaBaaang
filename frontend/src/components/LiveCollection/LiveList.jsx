import React from 'react';
import styled from 'styled-components';
import { flexMixin, fontMixin } from '@/styles/mixins';

import LiveSlider from './LiveSlider';

function LiveList({ category, liveList }) {
    return (
        <LiveListWrapper>
            <LiveListHeader>{category}</LiveListHeader>
            <LiveSlider liveList={liveList} />
        </LiveListWrapper>
    );
}

const LiveListWrapper = styled.div`
    position: relative;
    ${flexMixin('column', 'center', 'flex-start')}
    margin-bottom: 1.5rem;
`;

const LiveListHeader = styled.span`
    ${fontMixin('2em', '1em', 'notoSansBold')}
`;

export default LiveList;
