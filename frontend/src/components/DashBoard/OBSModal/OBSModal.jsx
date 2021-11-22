import React from 'react';

import { Slider, SliderItem, Typography, Modal } from '@/components/Common';

export default function OBSModal({ onClose, open }) {
    return (
        <Modal
            width="600px"
            height="600px"
            open={open}
            showButton={false}
            onCancleText="닫기"
            onClose={onClose}
            justifyContent="flex-start"
        >
            <Slider flex={1} navigation>
                <SliderItem flexDirection="column">
                    <Typography variant="h1" marginBottom={2}>
                        Step 1
                    </Typography>

                    <Typography variant="h4" marginBottom={1}>
                        Media URL, 스트림 키를 확인해주세요.
                    </Typography>
                </SliderItem>
                <SliderItem flexDirection="column">
                    <Typography variant="h1" marginBottom={2}>
                        Step 2
                    </Typography>

                    <Typography variant="h4" marginBottom={1}>
                        OBS Studio를 다운받아 주세요.
                    </Typography>

                    <Typography variant="h4">
                        <a href="https://obsproject.com/ko">Link</a>
                    </Typography>
                </SliderItem>
            </Slider>
        </Modal>
    );
}
