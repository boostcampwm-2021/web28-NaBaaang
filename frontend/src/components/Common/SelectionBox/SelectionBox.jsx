import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { borderBoxMixin, flexMixin } from '@/styles/mixins';

import { Box, Overlay, Typography } from '@/components/Common';
import { ReactComponent as DropIcon } from '@/assets/images/dropdown-icon.svg';

export default function SelectionBox({
    items,
    selectedItem,
    setSelectedItems,
    width = '100%',
}) {
    const [open, setOpen] = useState(false);

    const toggleSelectionBox = () => {
        setOpen(prev => !prev);
    };

    const closeSelection = () => {
        setOpen(false);
    };

    const getSelectedItem = items ? (
        <SelectionButton onClick={toggleSelectionBox}>
            <Typography variant="p">
                {selectedItem === -1
                    ? '선택'
                    : items.find((item, idx) => idx === selectedItem)}
            </Typography>
            <DropIcon />
        </SelectionButton>
    ) : (
        'no items'
    );

    const selectionItems = items
        ? items.map((item, idx) => {
              return (
                  <SelectionItem
                      key={item}
                      onClick={() => {
                          setSelectedItems(idx);
                          closeSelection();
                      }}
                  >
                      <Typography variant="p">{item}</Typography>
                  </SelectionItem>
              );
          })
        : 'no items';

    return (
        <>
            {open && (
                <OverlayWrapper width="100%" height="100%">
                    <Overlay
                        onClick={closeSelection}
                        backgroundColor="rgb(0, 0, 0, 0)"
                    />
                </OverlayWrapper>
            )}

            <SelectionWrapper width={width}>
                {getSelectedItem}
                {open && <SelectionContent>{selectionItems}</SelectionContent>}
            </SelectionWrapper>
        </>
    );
}

const OverlayWrapper = styled(Box)`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    z-index: 10;
`;

const SelectionWrapper = styled(Box)`
    position: relative;
    ${({ width }) =>
        css`
            width: ${width};
        `}
    z-index: 20;
    ${borderBoxMixin('1px', '10px')}
`;

const SelectionContent = styled(Box)`
    position: absolute;
    top: 3.5rem;
    overflow-y: auto;
    border: 1px solid black;
    ${flexMixin('column', 'center', 'center')}
    width: 100%;
`;

const SelectionButton = styled(Box)`
    ${flexMixin('row', 'space-between', 'center')}
    :hover {
        cursor: pointer;
    }
    width: 100%;
    padding: 0.5rem;
`;

const SelectionItem = styled('div')`
    width: 100%;
    padding: 1rem;
    background-color: white;
    :hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.color.gray3};
    }
`;
