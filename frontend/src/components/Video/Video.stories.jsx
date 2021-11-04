import Video from './Video';

export default {
    title: 'Video',
    component: Video,
};

export const Default = Video.bind();
Default.args = {
    videoSrc:
        'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4',
};
