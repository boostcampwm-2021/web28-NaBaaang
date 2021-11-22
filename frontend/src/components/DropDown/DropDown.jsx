import React, { useState } from 'react';
import styled from 'styled-components';

import { flexMixin } from '@/styles/mixins';

export default function DropDown({ toggleButtonChild, items, contentSize }) {
    const [open, setOpen] = useState(false);

    const toggleDropDownContent = () => {
        setOpen(prev => !prev);
    };

    return (
        <DropDownWrapper>
            <DropDownMainButton onClick={toggleDropDownContent}>
                {toggleButtonChild}
            </DropDownMainButton>
            {open ? (
                <DropDownContent
                    width={contentSize.width}
                    height={contentSize.height}
                >
                    {items
                        ? items.map(item => {
                              return (
                                  <DropDownItem onClick={item.handler}>
                                      {item.text}
                                  </DropDownItem>
                              );
                          })
                        : 'no items'}
                </DropDownContent>
            ) : null}
        </DropDownWrapper>
    );
}

const DropDownWrapper = styled.div``;

const DropDownMainButton = styled.button`
    border: none;
    outline: none;
    color: white;
    background-color: inherit;
    cursor: pointer;
`;

const DropDownContent = styled.div`
    position: absolute;
    ${flexMixin('column', 'center', 'center')}
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
`;

const DropDownItem = styled.div``;
