import React from 'react';
import MockLiveCollection from './MockLiveCollection';

export default {
    component: MockLiveCollection,
    title: 'MockLiveCollection',
    decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
};

const Template = args => <MockLiveCollection {...args} />;

export const Default = Template.bind({});
Default.args = {
    lives: [
        [
            {
                thumbnail_url:
                    'https://static-cdn.jtvnw.net/previews-ttv/live_user_qldhkwy-440x248.jpg',
                streamer_url:
                    'https://static-cdn.jtvnw.net/jtv_user_pictures/e7c…67-42ec-a6fa-cb5ace761ba0-profile_image-50x50.png',
                viewer_cnt: '31',
                title: '시즌종료 12시간전 플래가보자',
                nickname: '상칠이 (qldhkwy)',
                category: 'Game',
            },
            {
                thumbnail_url:
                    'https://static-cdn.jtvnw.net/previews-ttv/live_user_kalmian-440x248.jpg',
                streamer_url:
                    'https://static-cdn.jtvnw.net/jtv_user_pictures/7d3…a4-4af7-b2c3-c4efaf1b433f-profile_image-50x50.png',
                viewer_cnt: '22',
                title: '토스봇 TossBot',
                nickname: '토스봇1 (kalmian)',
                category: 'Game',
            },
            {
                thumbnail_url:
                    'https://static-cdn.jtvnw.net/previews-ttv/live_user_kiparanghs-440x248.jpg',
                streamer_url:
                    'https://static-cdn.jtvnw.net/jtv_user_pictures/29f…25-4039-9058-8cbdd8046cef-profile_image-50x50.png',
                viewer_cnt: '78',
                title: '누구나 오셔서 치킨을 받아가세요 !(투기장)',
                nickname: 'Kiparanghs',
                category: 'Game',
            },
        ],
        [
            {
                thumbnail_url:
                    'https://clips-media-assets2.twitch.tv/AT-cm%7CZvSw4fl5xKuq6XYFhZVEHw-preview-480x272.jpg',
                streamer_url:
                    'https://static-cdn.jtvnw.net/jtv_user_pictures/89e…65-40e6-bc0c-d42205935216-profile_image-50x50.png',
                viewer_cnt: '3.9K',
                title: '침착맨 - 소주한잔',
                nickname: '침착맨 (zilioner)',
                category: 'Ziller',
            },
            {
                thumbnail_url:
                    'https://clips-media-assets2.twitch.tv/44242237325-offset-2706-preview-480x272.jpg',
                streamer_url:
                    'https://static-cdn.jtvnw.net/jtv_user_pictures/89e…65-40e6-bc0c-d42205935216-profile_image-50x50.png',
                viewer_cnt: '4.4K',
                title: 'ㅋㅋㅋㅋㅋㅋ',
                nickname: '침착맨 (zilioner)',
                category: 'Ziller',
            },
            {
                thumbnail_url:
                    'https://clips-media-assets2.twitch.tv/AT-cm%7CMMitnoYiv8G9HmVnn0_uLA-preview-480x272.jpg',
                streamer_url:
                    'https://static-cdn.jtvnw.net/jtv_user_pictures/89e…65-40e6-bc0c-d42205935216-profile_image-50x50.png',
                viewer_cnt: '420',
                title: '내동생 침착맨',
                nickname: '침착맨 (zilioner)',
                category: 'Ziller',
            },
        ],
    ],
};