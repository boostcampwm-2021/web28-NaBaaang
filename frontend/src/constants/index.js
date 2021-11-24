import OBS1_1 from '@/assets/images/OBS1-1.png';
import OBS2_1 from '@/assets/images/OBS2-1.png';
import OBS3_1 from '@/assets/images/OBS3-1.png';
import OBS3_2 from '@/assets/images/OBS3-2.png';
import OBS3_3 from '@/assets/images/OBS3-3.png';
import OBS4_1 from '@/assets/images/OBS4-1.png';
import OBS5_1 from '@/assets/images/OBS5-1.png';
import OBS6_1 from '@/assets/images/OBS6-1.png';

const OBS_DESCRIPTION_LIST = [
    {
        id: 0,
        title: 'Step 1',
        contents: [
            {
                id: 0,
                text: '송출 정보 확인 탭을 눌러 스트림 키랑 서버 URL을 확인하세요.',
            },
        ],
        links: [],
        images: [{ id: 0, src: OBS1_1 }],
    },
    {
        id: 1,
        title: 'Step 2',
        contents: [
            { id: 0, text: '아래 링크에서 OBS Studio를 설치해 주세요.' },
        ],
        links: [
            {
                id: 0,
                text: 'OBS 다운로드',
                url: 'https://obsproject.com/ko/download',
            },
        ],
        images: [{ id: 0, src: OBS2_1 }],
    },
    {
        id: 2,
        title: 'Step 3',
        contents: [
            { id: 0, text: 'OBS Studio를 실행 후 방송을  설정해주세요.' },
            {
                id: 1,
                text: 'Step1에서 확인한 서버 URL(media-url) 스트림 키(stream-key)를 입력해주세요.',
            },
            {
                id: 2,
                text: '영상 송출을 위해 OBS의 방송 시작 버튼을 클릭해 주세요.',
            },
        ],
        links: [],
        images: [
            { id: 0, src: OBS3_1 },
            { id: 1, src: OBS3_2 },
            { id: 2, src: OBS3_3 },
        ],
    },
    {
        id: 3,
        title: 'Step 4',
        contents: [
            {
                id: 0,
                text: '방송 공개를 위해 웹페이지의 방송 시작 버튼을 눌러주세요.',
            },
        ],
        links: [],
        images: [{ id: 0, src: OBS4_1 }],
    },
    {
        id: 4,
        title: 'Step 5',
        contents: [
            {
                id: 0,
                text: '방송 종료를 원할 경우 방송 관리 페이지의 방송 종료 버튼을 클릭해주세요.',
            },
        ],
        links: [],
        images: [{ id: 0, src: OBS5_1 }],
    },
    {
        id: 5,
        title: 'Step 6',
        contents: [
            {
                id: 0,
                text: '방송 종료를 원할 경우 방송 관리 페이지의 방송 종료 버튼을 클릭해주세요.',
            },
        ],
        links: [],
        images: [{ id: 0, src: OBS6_1 }],
    },
];

export { OBS_DESCRIPTION_LIST };
