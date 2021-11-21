import React, { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import Box from '@/components/Common/Box';
import Button from '@/components/Common/Button';

const MOVE_DIR = {
    prev: -1,
    next: 1,
};

export default function Slider({ children, navigation = false }) {
    const slideContainerRef = useRef(null);
    const slideCount = useRef(0);
    const slideIndex = useRef(0);

    const validateMoveSlide = newIndex => {
        return newIndex >= 0 && newIndex < slideCount.current;
    };

    const moveSlide = idx => {
        slideContainerRef.current.style.transform = `translateX(-${
            idx * 100
        }%)`;
    };

    const handleSliceButtonClick = dir => {
        const newIndex = slideIndex.current + MOVE_DIR[dir];
        if (validateMoveSlide(newIndex)) {
            slideIndex.current = newIndex;
            moveSlide(newIndex);
        }
    };

    const showPrevSlide = () => handleSliceButtonClick('prev');
    const showNextSlide = () => handleSliceButtonClick('next');

    useEffect(() => {
        if (children) {
            slideCount.current = children.length;
        }
    }, []);

    return (
        <SliderBox alignItems="stretch">
            {navigation && (
                <>
                    <PrevButtonWrap>
                        <Button text="prev" onClick={showPrevSlide} />
                    </PrevButtonWrap>

                    <NextButtonWrap>
                        <Button text="next" onClick={showNextSlide} />
                    </NextButtonWrap>
                </>
            )}

            <SliderContainer ref={slideContainerRef}>
                {children}
            </SliderContainer>
        </SliderBox>
    );
}

const ButtonWrapLayoutCSS = css`
    position: absolute;
    height: 100%;
    z-index: 1;
`;

const SliderBox = styled(Box)`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const SliderContainer = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform ease-in 500ms;
    justify-content: unset;
    align-items: unset;
`;

const PrevButtonWrap = styled(Box)`
    ${ButtonWrapLayoutCSS}
    top: 0;
    left: 0;
`;

const NextButtonWrap = styled(Box)`
    ${ButtonWrapLayoutCSS}
    top: 0;
    right: 0;
`;
