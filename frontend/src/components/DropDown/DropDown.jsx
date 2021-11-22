import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { sizeMixin, flexMixin } from '@/styles/mixins';

import Box from '@/components/Common/Box';

export default function DropDown({
    toggleButtonChild,
    items,
    contentSize,
    contentPos,
}) {
    const [open, setOpen] = useState(false);

    const toggleDropDownContent = () => {
        setOpen(prev => !prev);
    };

    const DropDownItems = items
        ? items.map(item => {
              return (
                  <DropDownItem onClick={item.handler}>
                      {item.text}
                  </DropDownItem>
              );
          })
        : 'no items';

    return (
        <DropDownWrapper>
            <DropDownMainButton onClick={toggleDropDownContent}>
                {toggleButtonChild}
            </DropDownMainButton>
            {open ? (
                <DropDownContent size={contentSize} pos={contentPos}>
                    {DropDownItems}
                </DropDownContent>
            ) : null}
        </DropDownWrapper>
    );
}

const DropDownWrapper = styled(Box)``;

const DropDownMainButton = styled.button`
    border: none;
    outline: none;
    color: white;
    background-color: inherit;
    cursor: pointer;
`;

const DropDownContent = styled.div`
    ${({ size }) => sizeMixin(size.width, size.height)}
    position: absolute;
    ${({ pos }) =>
        css`
            top: ${pos.top};
            left: ${pos.left};
        `}
    ${flexMixin('column', 'center', 'center')}
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;

const DropDownItem = styled.div`
    display: block;
    padding: 12px 16px;
    :hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.color.gray3};
    }
`;
