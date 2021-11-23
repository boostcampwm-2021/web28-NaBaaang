import React from 'react';

import { OBS_DESCRIPTION_LIST } from '@/constants';

import {
    Slider,
    SliderItem,
    Typography,
    Box,
} from '@/components/Common';

export default function OBSModal() {
    const slierItemList = OBS_DESCRIPTION_LIST.map(
        ({ id, title, subTitle }) => (
            <SliderItem key={id} padding={3}>
                <Box
                    flex={1}
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                >
                    <Typography variant="h2" marginBottom={2} align="left">
                        {title}
                    </Typography>
                    <Typography variant="h4" marginBottom={1} align="left">
                        {subTitle}
                    </Typography>
                </Box>

                <Box flex={3}>이미지</Box>
            </SliderItem>
        ),
    );

    return (
        <Box width="60rem" height="42rem">
            <Slider navigation>{slierItemList}</Slider>
        </Box>
    );
}
