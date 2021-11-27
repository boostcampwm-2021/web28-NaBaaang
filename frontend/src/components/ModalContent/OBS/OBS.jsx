import React from 'react';

import { OBS_DESCRIPTION_LIST } from '@/constants';
import { Slider, SliderItem, Typography, Box } from '@/components/Common';

export default function OBS() {
    return (
        <Box width="60rem" height="42rem">
            <Slider navigation>{renderItems}</Slider>
        </Box>
    );
}

const renderContents = contents =>
    contents.map(content => (
        <Typography key={content.id} variant="h4" marginBottom={1} align="left">
            {content.id + 1}.{content.text}
        </Typography>
    ));

const renderImages = images =>
    images.map(image => (
        <SliderItem key={image.id}>
            <img width="100%" src={image.src} alt="" />
        </SliderItem>
    ));

const renderLinks = links =>
    links.map(link => (
        <a key={link.id} href={link.url} target="_blank" rel="noreferrer">
            {link.text}
        </a>
    ));

const renderItems = OBS_DESCRIPTION_LIST.map(
    ({ id, title, contents, links, images }) => (
        <SliderItem key={id} padding={3}>
            <Box
                flex={1}
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                marginRight={1}
            >
                <Typography variant="h2" marginBottom={2} align="left">
                    {title}
                </Typography>

                {renderContents(contents)}
                {renderLinks(links)}
            </Box>

            <Box flex={2}>
                <Slider navigation>{renderImages(images)}</Slider>
            </Box>
        </SliderItem>
    ),
);
