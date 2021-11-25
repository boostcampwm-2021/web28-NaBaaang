import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { v1 } from 'uuid';
import { flexMixin } from '@/styles/mixins';

import { Box, Overlay, Typography } from '@/components/Common';

export default function DropDown({ toggleButtonChild, items, contentPos }) {
    const [open, setOpen] = useState(false);

    const toggleDropDownContent = () => {
        setOpen(prev => !prev);
    };

    const closeDropDown = () => {
        setOpen(false);
    };

    const DropDownItems = items
        ? items.map(item => {
              return (
                  <DropDownItem
                      key={v1()}
                      onClick={() => {
                          item.handler();
                          closeDropDown();
                      }}
                  >
                      <Typography variant="p">{item.text}</Typography>
                  </DropDownItem>
              );
          })
        : 'no items';

    return (
        <DropDownContainer>
            {open && (
                <DropDownBox width="100%" height="100%">
                    <Overlay
                        onClick={closeDropDown}
                        backgroundColor="rgb(0, 0, 0, 0)"
                    />
                </DropDownBox>
            )}

            <DropDownWrapper>
                {React.cloneElement(toggleButtonChild, {
                    onClick: toggleDropDownContent,
                })}

                {open && (
                    <DropDownContent pos={contentPos}>
                        {DropDownItems}
                    </DropDownContent>
                )}
            </DropDownWrapper>
        </DropDownContainer>
    );
}

const DropDownContainer = styled(Box)`
    position: relative;
`;
const DropDownBox = styled(Box)`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
`;

const DropDownWrapper = styled(Box)`
    position: relative;
    z-index: 20;
`;

const DropDownContent = styled(Box)`
    width: max-content;
    position: absolute;
    ${({ pos: { top = 0, right = 0 } }) =>
        css`
            top: ${top};
            right: ${right};
        `}
    ${flexMixin('column', 'center', 'center')}
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;

const DropDownItem = styled(Box)`
    padding: 1rem 1rem;
    width: 100%;
    :hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.color.gray3};
    }
`;
