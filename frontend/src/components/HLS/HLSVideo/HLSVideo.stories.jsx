import HLSVideo from './HLSVideo';

export default {
    title: 'HLSVideo',
    component: HLSVideo,
};

export const Default = HLSVideo.bind();
Default.args = {
    secretKey: 'output',
};
