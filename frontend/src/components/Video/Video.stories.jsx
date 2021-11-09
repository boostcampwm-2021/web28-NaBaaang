import Video from './Video';

export default {
    title: 'Video',
    component: Video,
};

export const Default = Video.bind();
Default.args = {
    secretKey: 'output',
};
