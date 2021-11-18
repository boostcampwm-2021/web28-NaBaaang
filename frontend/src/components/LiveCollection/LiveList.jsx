import React from 'react';
import styled from 'styled-components';
import { flexMixin } from '@/styles/mixins';

import Typography from '@/components/Common/Typography';
import LiveSlider from './LiveSlider';

function LiveList({ category, liveList }) {
    return (
        <LiveListWrapper>
            <Typography variant="h3">{category}</Typography>
            <LiveSlider liveList={liveList} />
        </LiveListWrapper>
    );
}

const LiveListWrapper = styled.div`
    position: relative;
    margin-bottom: 1.5rem;
    ${flexMixin('column', 'center', 'flex-start')}
`;

export default LiveList;
