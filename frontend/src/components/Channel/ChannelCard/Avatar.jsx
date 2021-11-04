import React from 'react';
import styled from 'styled-components';

export default function Avatar({ imageSrc }) {
    return (
        <AvatarBox>
            <AvatarImg alt="empty" src={imageSrc} />
        </AvatarBox>
    );
}
const AvatarBox = styled.div`
    width: 10em;
    height: 10em;
    border-radius: 70%;
    overflow: hidden;
`;

const AvatarImg = styled.img`
    width: 100%;
    height: 100%;
`;
