import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { flexMixin } from '@/styles/mixins';

import { Box, IconButton } from '@/components/Common';

export default function DropDown({ toggleButtonChild, items, contentPos }) {
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
            <IconButton
                type="square"
                size="large"
                onClick={toggleDropDownContent}
            >
                {toggleButtonChild}
            </IconButton>
            {open && (
                <DropDownContent pos={contentPos}>
                    {DropDownItems}
                </DropDownContent>
            )}
        </DropDownWrapper>
    );
}

const DropDownWrapper = styled(Box)``;

const DropDownContent = styled(Box)`
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
