import React from 'react';

import { OBS_DESCRIPTION_LIST } from '@/constants';

import { Slider, SliderItem, Typography, Box } from '@/components/Common';

const parseContent = contents =>
    contents.map(content => (
        <Typography key={content.id} variant="h4" marginBottom={1} align="left">
            {content.id + 1}.{content.text}
        </Typography>
    ));

const parseImages = images =>
    images.map(image => (
        <SliderItem color="success" key={image.id}>
            <img width="100%" src={image.src} alt="" />
        </SliderItem>
    ));

const paresLinks = links =>
    links.map(link => (
        <a key={link.id} href={link.url}>
            {link.text}
        </a>
    ));

export default function OBSModal() {
    const slierItemList = OBS_DESCRIPTION_LIST.map(
        ({ id, title, contents, images, links }) => (
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

                    {parseContent(contents)}
                    {paresLinks(links)}
                </Box>

                <Box flex={2}>
                    <Slider navigation>{parseImages(images)}</Slider>
                </Box>
            </SliderItem>
        ),
    );

    return (
        <Box width="60rem" height="42rem">
            <Slider navigation>{slierItemList}</Slider>
        </Box>
    );
}
